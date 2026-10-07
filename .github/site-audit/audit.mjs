import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import { mkdirSync, readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '../..');
const reportDir = resolve(root, 'reports/site-audit');
const artifacts = resolve(root, '.site-audit-artifacts');
mkdirSync(reportDir, {recursive:true}); mkdirSync(artifacts, {recursive:true});
const report = {checkedAt:new Date().toISOString(), runUrl:process.env.GITHUB_RUN_ID ? `https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null, method:'Three sequential mobile Lighthouse runs per homepage; median performance, other categories from the median-performance run.', sites:[]};
const median = values => [...values].sort((a,b)=>a-b)[Math.floor(values.length/2)];
async function get(url) {
  const response = await fetch(url, {signal:AbortSignal.timeout(25000)});
  return {url, status:response.status, finalUrl:response.url, text:await response.text()};
}
for (const domain of ['frenimi.com','omobolajiadeyan.com']) {
  const site = {domain, failures:[], http:[], interactions:[], lighthouse:[]}; report.sites.push(site);
  try {
    const sitemap = await get(`https://${domain}/sitemap.xml`);
    assert.equal(sitemap.status,200,'Sitemap unavailable');
    const urls = [...sitemap.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
    assert(urls.length>0,'Empty sitemap');
    assert(urls.every(u=>new URL(u).origin===`https://${domain}`),'Unexpected sitemap origin');
    urls.push(`https://${domain}/robots.txt`,`https://${domain}/sitemap.xml`);
    for(let i=0;i<urls.length;i+=4) for(const result of await Promise.all(urls.slice(i,i+4).map(async url=>{
      try { const {text,...result}=await get(url); return result; } catch(e) { return {url,error:e.message}; }
    }))) { site.http.push(result); if(result.status!==200)site.failures.push(`${result.url}: ${result.error||result.status}`); }
  } catch(e) { site.failures.push(e.message); }

  const browser=await chromium.launch();
  try {
    for(const width of [390,1440]) {
      const page=await browser.newPage({viewport:{width,height:900}});const errors=[];
      page.on('pageerror',error=>errors.push(error.message));
      try {
        await page.goto(`https://${domain}/`,{waitUntil:'networkidle',timeout:45000});
        assert.equal(await page.locator('main h1').count(),1);
        assert(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth<=1),'Horizontal overflow');
        await page.screenshot({path:resolve(artifacts,`${domain}-${width}.png`)});
        if(domain==='frenimi.com') {
          await page.locator('#open-phishguard').click();await page.locator('#fn-url').fill('https://example.com/');
          await page.locator('#fn-analysis-form button[type=submit]').click();await page.locator('.fn-score-heading').waitFor();
          assert.match(await page.locator('#fn-analysis-result').innerText(),/Model score/);
          await page.locator('.calm-demo-close').click();
          const engineeringDetails=page.locator('details.fn-engineering-details');
          if(await engineeringDetails.count())await engineeringDetails.evaluate(details=>{details.open=true;});
          const proofButton=page.locator('#run-proof-checks');
          await proofButton.evaluate(button=>button.scrollIntoView({block:'center',behavior:'instant'}));
          await proofButton.click();
          await page.waitForFunction(()=>!document.querySelector('#run-proof-checks').disabled);
          assert.match(await page.locator('#proof-check-status').innerText(),/4\/4 checks passed/);
          await page.locator('#project-tab-1').click();assert.match(await page.locator('#project-panel').innerText(),/First Zion/);
          await page.locator('[data-demo-role=analyst]').click();assert(await page.locator('dialog[open]').count());await page.keyboard.press('Escape');
          if(width===390){await page.locator('.nav-toggle').click();assert.equal(await page.locator('.nav-toggle').getAttribute('aria-expanded'),'true');}
        } else {
          await page.keyboard.press('Control+k');assert(await page.locator('dialog[open], [role=dialog]:visible').count());await page.keyboard.press('Escape');
          if(width===390){await page.getByRole('button',{name:'Open menu'}).click();assert((await page.locator('#mobileNav').getAttribute('class')).includes('open'));}
          for(const path of ['about.html','projects.html','services.html','writing.html','contact.html','resume.html']) {
            const response=await page.goto(`https://${domain}/${path}`,{waitUntil:'networkidle',timeout:45000});assert.equal(response.status(),200);
            assert.equal(await page.locator('main h1').count(),1);assert(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth<=1),`${path}: horizontal overflow`);
          }
        }
        assert.deepEqual(errors,[]);site.interactions.push({width,passed:true});
      } catch(e) {site.interactions.push({width,passed:false,error:e.message});site.failures.push(`Browser ${width}px: ${e.message}`);}
      finally {await page.close();}
    }
  } finally {await browser.close();}

  for(let run=1;run<=3;run++) {
    const port=9400+run;const browser=await chromium.launch({args:[`--remote-debugging-port=${port}`]});
    try {
      const result=await lighthouse(`https://${domain}/`,{port,output:['json','html'],onlyCategories:['performance','accessibility','best-practices','seo'],logLevel:'error'});
      if(result.lhr.runtimeError)throw Error(result.lhr.runtimeError.message);
      for(const [i,ext] of ['json','html'].entries())writeFileSync(resolve(artifacts,`${domain}-${run}.${ext}`),result.report[i]);
      site.lighthouse.push({run,scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)])),lcpMs:result.lhr.audits['largest-contentful-paint'].numericValue,tbtMs:result.lhr.audits['total-blocking-time'].numericValue,cls:result.lhr.audits['cumulative-layout-shift'].numericValue});
    } catch(e) {site.failures.push(`Lighthouse run ${run}: ${e.message}`);}
    finally {await browser.close();}
  }
  if(site.lighthouse.length===3) {
    const performance=median(site.lighthouse.map(r=>r.scores.performance));
    site.summary=site.lighthouse.find(r=>r.scores.performance===performance).scores;
    site.performanceRange=[Math.min(...site.lighthouse.map(r=>r.scores.performance)),Math.max(...site.lighthouse.map(r=>r.scores.performance))];
  }
}
writeFileSync(resolve(reportDir,'latest.json'),JSON.stringify(report,null,2)+'\n');
const historyPath=resolve(reportDir,'history.json');
const history=existsSync(historyPath)?JSON.parse(readFileSync(historyPath,'utf8')):[];
history.push({checkedAt:report.checkedAt,runUrl:report.runUrl,sites:report.sites.map(({domain,summary,performanceRange,failures})=>({domain,summary,performanceRange,failures}))});
writeFileSync(historyPath,JSON.stringify(history.slice(-90),null,2)+'\n');
const lines=['### Daily live-site checks','',`Last checked: **${report.checkedAt.replace('T',' ').replace(/\.\d+Z$/,' UTC')}**. Scheduled daily at 12:17 UTC.`, '', '| Live site | HTTP checks | Browser checks | Performance¹ | Accessibility | Best practices | SEO |','|---|---:|---|---:|---:|---:|---:|'];
for(const s of report.sites) {const v=s.summary||{};lines.push(`| [${s.domain}](https://${s.domain}/) | ${s.http.filter(r=>r.status===200).length}/${s.http.length} | ${s.interactions.length===2&&s.interactions.every(r=>r.passed)?'Passed':'FAILED / incomplete'} | ${v.performance??'Unavailable'} | ${v.accessibility??'—'} | ${v['best-practices']??'—'} | ${v.seo??'—'} |`);}
lines.push('', '¹ Median of three mobile Lighthouse runs. Lab scores vary; these are not search rankings, real-user Core Web Vitals, or a full accessibility/security audit.');
if(report.sites.some(s=>s.failures.length))lines.push('','**This run found failures or incomplete checks. See the report before relying on these results.**');
lines.push('',`[Latest data](reports/site-audit/latest.json) · [90-run history](reports/site-audit/history.json) · [Workflow and detailed artifacts](${report.runUrl||'https://github.com/omobolajiadeyan/omobolajiadeyan/actions/workflows/daily-site-audit.yml'})`);
const block=lines.join('\n');writeFileSync(resolve(reportDir,'latest.md'),block+'\n');
const readmePath=resolve(root,'README.md');const readme=readFileSync(readmePath,'utf8');
const begin='<!-- LIVE-SITE-AUDIT:START -->',end='<!-- LIVE-SITE-AUDIT:END -->';
if(readme.includes(begin)&&readme.includes(end))writeFileSync(readmePath,readme.replace(new RegExp(`${begin}[\\s\\S]*?${end}`),`${begin}\n${block}\n${end}`));
if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,block+'\n');
console.log(JSON.stringify(report.sites.map(({domain,summary,failures})=>({domain,summary,failures})),null,2));
if(report.sites.some(s=>s.failures.length))process.exitCode=1;
