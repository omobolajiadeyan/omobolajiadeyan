<div align="center">

# Omobolaji Adeyan

### Security engineer building practical automation for phishing detection, vulnerability triage, CI/CD hardening, and evidence-driven AppSec reviews.

<p>
  <a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">
    <img src="https://img.shields.io/badge/Marketplace-PhishGuard%20AI-2ea44f?style=for-the-badge&logo=github" alt="PhishGuard AI on GitHub Marketplace" />
  </a>
  <a href="https://owasp.org">
    <img src="https://img.shields.io/badge/OWASP-Contributor-E0461C?style=for-the-badge" alt="OWASP Contributor" />
  </a>
  <a href="https://www.isaca.org/credentialing/cisa">
    <img src="https://img.shields.io/badge/CISA-Certified-0052CC?style=for-the-badge" alt="CISA Certified" />
  </a>
</p>

<p>
  <a href="https://omobolajiadeyan.com">Website</a> -
  <a href="https://www.linkedin.com/in/oeadeyan">LinkedIn</a> -
  <a href="https://dev.to/doidun2">Writing</a> -
  <a href="https://hackerone.com/doidun">HackerOne</a> -
  <a href="mailto:omobolaji.adeyan@gmail.com">Email</a>
</p>

</div>

---

## Profile Snapshot

I build security tools that turn noisy technical signals into findings developers can reproduce, explain, and fix. My public work is centered on practical automation: small tools with tests, release notes, security boundaries, and evidence trails that stand up to maintainer review.

| Focus | Public Signal |
|---|---|
| Phishing detection | Published [PhishGuard AI](https://github.com/marketplace/actions/phishguard-ai-phishing-detector), a reusable GitHub Action for explainable URL and email analysis |
| AppSec and DevSecOps | SARIF, Code Scanning, secure workflow defaults, CI reliability, vulnerability-reporting automation |
| Open source security | Merged or reviewed work across OWASP, Prowler, SecOps-NG, RamenDR, Dependency-Track, OpenSSF Scorecard, and CISA ScubaGear |

---

## Featured Work

### PhishGuard AI

**Explainable offline phishing detection for URLs and email.**

<p>
  <a href="https://github.com/omobolajiadeyan/phishguard-ai">
    <img src="https://img.shields.io/github/stars/omobolajiadeyan/phishguard-ai?style=flat&label=Stars" alt="PhishGuard AI stars" />
  </a>
  <a href="https://github.com/omobolajiadeyan/phishguard-ai/commits">
    <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/phishguard-ai?style=flat&label=Last%20commit" alt="PhishGuard AI last commit" />
  </a>
  <a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">
    <img src="https://img.shields.io/badge/GitHub%20Action-Marketplace-2ea44f?style=flat&logo=github" alt="PhishGuard AI Marketplace listing" />
  </a>
</p>

PhishGuard AI analyzes URLs, email content, redirects, typosquatting patterns, and authentication signals. It runs with zero runtime dependencies and produces JSON plus SARIF 2.1.0 output for GitHub Code Scanning.

```yaml
- uses: omobolajiadeyan/phishguard-ai@v0.5.1
```

Recent improvements include benchmark recall work, stable Python API examples, safe third-party adoption guidance, REST API server mode, SARIF validation, and expanded SPF/DKIM/DMARC trust-boundary testing.

---

## Project Portfolio

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/omobolajiadeyan/phishguard-ai">PhishGuard AI</a></h3>
      <p>Offline phishing analysis for URLs and email with explainable scoring, JSON/SARIF output, Code Scanning support, and GitHub Marketplace packaging.</p>
      <p><img src="https://img.shields.io/github/languages/top/omobolajiadeyan/phishguard-ai?style=flat" alt="Top language" /> <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/phishguard-ai?style=flat" alt="Last commit" /></p>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/omobolajiadeyan/secrets-scanner">Secrets Scanner</a></h3>
      <p>CI-friendly credential and API key scanner with redacted JSON/SARIF output and reusable GitHub Action support for Code Scanning workflows.</p>
      <p><img src="https://img.shields.io/github/languages/top/omobolajiadeyan/secrets-scanner?style=flat" alt="Top language" /> <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/secrets-scanner?style=flat" alt="Last commit" /></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/omobolajiadeyan/log-analyzer">Log Analyzer</a></h3>
      <p>Threat detection with MITRE ATT&amp;CK mappings, structured output, SARIF support, and automation-friendly security operations workflows.</p>
      <p><img src="https://img.shields.io/github/languages/top/omobolajiadeyan/log-analyzer?style=flat" alt="Top language" /> <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/log-analyzer?style=flat" alt="Last commit" /></p>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/omobolajiadeyan/behaviorsense">BehaviorSense</a></h3>
      <p>Behavioral anomaly detection for user and IP risk scoring, including UEBA-style patterns for insider-threat and account-risk scenarios.</p>
      <p><img src="https://img.shields.io/github/languages/top/omobolajiadeyan/behaviorsense?style=flat" alt="Top language" /> <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/behaviorsense?style=flat" alt="Last commit" /></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/omobolajiadeyan/vulngpt">VulnGPT</a></h3>
      <p>CVE analysis with NVD data and AI-assisted remediation guidance for faster vulnerability triage.</p>
      <p><img src="https://img.shields.io/github/languages/top/omobolajiadeyan/vulngpt?style=flat" alt="Top language" /> <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/vulngpt?style=flat" alt="Last commit" /></p>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/omobolajiadeyan/cve-dashboard">CVE Dashboard</a></h3>
      <p>Real-time CVE intelligence dashboard using NVD data, filtering, severity scoring, and trend tracking.</p>
      <p><img src="https://img.shields.io/github/languages/top/omobolajiadeyan/cve-dashboard?style=flat" alt="Top language" /> <img src="https://img.shields.io/github/last-commit/omobolajiadeyan/cve-dashboard?style=flat" alt="Last commit" /></p>
    </td>
  </tr>
</table>

**Private pre-launch:** AppSec Compliance Bridge converts application-security scan findings into traceable NIST SP 800-53 control mappings and POA&M evidence.

---

## Open-Source Evidence

| Area | Selected Work |
|---|---|
| OWASP | [Agent Security Regression Harness PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150), [cve-lite-cli PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) |
| Cloud and compliance security | [Prowler PR #11098](https://github.com/prowler-cloud/prowler/pull/11098), [SecOps-NG PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281), [CISA ScubaGear PR #2237](https://github.com/cisagov/ScubaGear/pull/2237) |
| Supply-chain hardening | [RamenDR ramenctl PR #466](https://github.com/RamenDR/ramenctl/pull/466), [OpenSSF Scorecard PR #5098](https://github.com/ossf/scorecard/pull/5098), [Anchore SBOM Action PR #699](https://github.com/anchore/sbom-action/pull/699) |
| API and vulnerability tooling | [Dependency-Track PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477), PhishGuard API/server and Code Scanning work |

Full dated record: [OPEN_SOURCE_LOG.md](OPEN_SOURCE_LOG.md)

---

## Technical Writing

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)
- [PhishGuard benchmark recall note](PHISHGUARD_BENCHMARK_RECALL_POST.md)

---

## GitHub Activity

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=omobolajiadeyan&show_icons=true&hide_border=true&rank_icon=github&include_all_commits=true&theme=transparent" alt="GitHub stats for Omobolaji Adeyan" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=omobolajiadeyan&layout=compact&hide_border=true&theme=transparent" alt="Top languages for Omobolaji Adeyan" />
</p>

---

## Tools And Domains

<p align="center">
  <img src="https://skillicons.dev/icons?i=python,js,ts,nodejs,react,sqlite,docker,githubactions&perline=8" alt="Python, JavaScript, TypeScript, Node.js, React, SQLite, Docker, and GitHub Actions" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SARIF-2.1.0-blueviolet?style=flat" alt="SARIF 2.1.0" />
  <img src="https://img.shields.io/badge/CodeQL-6F42C1?style=flat&logo=github" alt="CodeQL" />
  <img src="https://img.shields.io/badge/MITRE%20ATT%26CK-DA3832?style=flat" alt="MITRE ATT&CK" />
  <img src="https://img.shields.io/badge/NIST%20SP%20800--53-003087?style=flat" alt="NIST SP 800-53" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

---

## Contact

I am open to senior security engineering roles, application-security tooling collaboration, technical advisory work, and community projects around practical security automation.

<p align="center">
  <a href="https://www.linkedin.com/in/oeadeyan">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn" />
  </a>
  <a href="mailto:omobolaji.adeyan@gmail.com">
    <img src="https://img.shields.io/badge/Email-omobolaji.adeyan%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Omobolaji Adeyan" />
  </a>
</p>
