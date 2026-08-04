<div align="center">

<img src="assets/profile-banner.svg" alt="Omobolaji Adeyan - Security Engineering, AppSec Automation, Evidence-Driven Reviews" width="100%" />

<br />

<a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">
  <img src="https://img.shields.io/badge/GitHub%20Marketplace-PhishGuard%20AI-2EA44F?style=flat-square&logo=github" alt="PhishGuard AI on GitHub Marketplace" />
</a>
<a href="https://owasp.org">
  <img src="https://img.shields.io/badge/OWASP-Contributor-E0461C?style=flat-square" alt="OWASP Contributor" />
</a>
<a href="https://www.credly.com/badges/0b64bbac-e9a0-4889-a017-8894513823dc/public_url">
  <img src="https://img.shields.io/badge/Security%2B-Verify_on_Credly-0052CC?style=flat-square" alt="CompTIA Security+ — verify on Credly" />
</a>
<a href="https://www.linkedin.com/in/oeadeyan">
  <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="Connect with Omobolaji Adeyan on LinkedIn" />
</a>

</div>

<div align="center">

**[Flagship](#flagship-project-phishguard-ai)** · **[Security Projects](#selected-security-projects)** · **[Credentials](#credentials--recognition)** · **[Open Source](#open-source-contributions)** · **[Writing](#writing)** · **[Stack](#working-stack)** · **[Contact](#contact)**

</div>

---

## I Turn Security Signals Into Evidence Teams Can Act On

I build practical security-automation tools for phishing analysis, vulnerability triage, threat detection, CI/CD hardening, and SARIF reporting. Findings should be explainable to engineers, reproducible by reviewers, and useful to security leaders.

Start with **[PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai)** for a complete product example, then review the merged open-source contributions below for evidence of the same discipline inside established projects.

<table>
  <tr>
    <td width="33%" align="center">
      <strong>Product Delivery</strong><br />
      Published on GitHub Marketplace
    </td>
    <td width="33%" align="center">
      <strong>Open-Source Trust</strong><br />
      Merged or active work across OWASP, Prowler, RamenDR, and 6 other open-source organizations
    </td>
    <td width="33%" align="center">
      <strong>Security Foundation</strong><br />
      Security+ · AWS Cloud Foundations · BS Information Technology
    </td>
  </tr>
</table>

---

## Flagship Project: [PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai)

PhishGuard AI is an explainable offline phishing detector for URLs and email. It supports local analysis, CI workflows, GitHub Code Scanning, and security education without sending sensitive inputs to a third-party service.

<p align="center">
  <strong><a href="https://omobolajiadeyan.github.io/phishguard-ai/">Try the live demo</a></strong> ·
  <strong><a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">View on Marketplace</a></strong> ·
  <strong><a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">Review the evidence</a></strong> ·
  <strong><a href="https://github.com/omobolajiadeyan/phishguard-ai">Browse the source</a></strong>
</p>

```yaml
- uses: omobolajiadeyan/phishguard-ai@v0.5.1
```

| Capability | Evidence |
|---|---|
| Explainable detection | URL, email, redirect, typosquatting, and authentication-signal analysis with readable reasons |
| Automation | JSON and SARIF 2.1.0 output, reusable GitHub Action, REST API mode, and Code Scanning integration |
| Defensive trust boundaries | SPF, DKIM, and DMARC are supporting evidence—not automatic proof that a message is safe |
| Consistent domain analysis | Public-suffix-aware scoring shared across Python, the web demo, and the browser extension |

<p align="center">
  <img src="assets/phishguard-demo.svg" alt="PhishGuard AI CLI output comparing a safe input against a phishing input" width="80%" />
</p>

<p align="center"><sub>Reproducible commands, benchmark results, and evaluator guidance are available in <a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">PROJECT_EVIDENCE.md</a>.</sub></p>

---

## Selected Security Projects

| Project | Security outcome | Core stack |
|---|---|---|
| [Secrets Scanner](https://github.com/omobolajiadeyan/secrets-scanner) | Finds exposed credentials with redacted JSON/SARIF evidence and reusable CI integration | Python, JavaScript, SARIF, GitHub Actions |
| [Log Analyzer](https://github.com/omobolajiadeyan/log-analyzer) | Maps suspicious log activity to MITRE ATT&CK and exports reviewable findings | Python, JavaScript, MITRE ATT&CK, SARIF |
| [BehaviorSense](https://github.com/omobolajiadeyan/behaviorsense) | Scores user and IP anomalies for UEBA-style insider-threat triage | Python, TypeScript, behavioral analytics |
| [CVE Dashboard](https://github.com/omobolajiadeyan/cve-dashboard) | Turns live or offline NVD data into severity summaries and exportable triage evidence | Python, JavaScript, NVD |
| [VulnGPT](https://github.com/omobolajiadeyan/vulngpt) | Turns CVE metadata into actionable triage reports with exploitation likelihood and remediation steps | Python, NVD, CVSS/CWE |

---

## Credentials & Recognition

| Recognition | What it represents |
|---|---|
| **[CompTIA Security+ Certified](https://www.credly.com/badges/0b64bbac-e9a0-4889-a017-8894513823dc/public_url)** | Validated security operations, architecture, risk, incident response, and governance fundamentals — verifiable on Credly |
| **AWS Academy Cloud Foundations** | Cloud architecture, shared responsibility, security, pricing, and operational foundations |
| **BS, Information Technology** | Broad engineering foundation spanning systems, software, data, networking, and technology operations |
| **OWASP Contributor** | Merged application-security automation work in established OWASP projects |
| **GitHub Marketplace Publisher** | Took PhishGuard AI from implementation through packaging, documentation, release, and reusable delivery |

---

## Open-Source Contributions

<p align="center">
<sub><strong>523</strong> contributions in the past year · <strong>338</strong> commits · <strong>107</strong> pull requests opened · <strong>18</strong> PR reviews · pull requests opened across <strong>13</strong> open-source organizations, <strong>9</strong> merged or currently active (below)</sub>
</p>

### Merged

| Community | Merged contribution | Security impact |
|---|---|---|
| OWASP | [Agent Security Regression Harness #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) | Added scenario-directory and glob validation for repeatable agent-security testing |
| OWASP | [cve-lite-cli #602](https://github.com/OWASP/cve-lite-cli/pull/602) | Added risk context and next-action guidance to vulnerability reports |
| Prowler | [Prowler #11098](https://github.com/prowler-cloud/prowler/pull/11098) | Added an M365 control for directory-sync object-takeover protection (co-authored, folded in from #11515) |
| SecOps-NG | [secops-ng-framework #281](https://github.com/secops-ng/secops-ng-framework/pull/281) | Extended compliance mappings for the EU Cyber Resilience Act |
| RamenDR | [ramenctl #466](https://github.com/RamenDR/ramenctl/pull/466) | Hardened the software supply chain by pinning GitHub Actions to commit SHAs |
| TruFoundation | [TruShell #55](https://github.com/TruFoundation/TruShell/pull/55) | Fixed a shell-injection vulnerability in the OS fallback path |

### Active / Under Review

| Community | Contribution | Status |
|---|---|---|
| Anchore | [sbom-action #699](https://github.com/anchore/sbom-action/pull/699) | Retries transient Syft download failures that can break SBOM generation in CI |
| CISA | [ScubaGear #2237](https://github.com/cisagov/ScubaGear/pull/2237) | Fixes DMARC policy discovery to correctly walk the DNS tree per RFC 9989 |
| OpenSSF | [Scorecard #5098](https://github.com/ossf/scorecard/pull/5098) | Extends Dangerous Workflow detection to committer-controlled Actions contexts |
| Dependency-Track | [dependency-track #6477](https://github.com/DependencyTrack/dependency-track/pull/6477) | Adds a runtime-backed OpenAPI response schema for vulnerability findings |

Full dated contribution record: **[OPEN_SOURCE_LOG.md](OPEN_SOURCE_LOG.md)**

### GitHub Activity

<sub>Live data pulled directly from the GitHub API — updates automatically, not a static snapshot.</sub>

<p align="center">
  <img height="165" src="https://github-readme-stats-git-master-rickstaa.vercel.app/api?username=omobolajiadeyan&show_icons=true&hide_border=true&hide=commits&count_private=true&title_color=0A66C2&icon_color=0A66C2&text_color=333" alt="Omobolaji Adeyan's GitHub stats" />
  <img height="165" src="https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=omobolajiadeyan&layout=compact&hide_border=true&title_color=0A66C2&text_color=333" alt="Most-used languages" />
</p>
<p align="center">
  <img src="https://streak-stats.demolab.com?user=omobolajiadeyan&hide_border=true&ring=0A66C2&fire=0A66C2&currStreakLabel=0A66C2" alt="Omobolaji Adeyan's GitHub contribution streak" />
</p>

---

## Writing

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)
- [PhishGuard benchmark recall note](PHISHGUARD_BENCHMARK_RECALL_POST.md)

---

## Working Stack

**Python · JavaScript · TypeScript · Node.js · React · SQLite · Docker · GitHub Actions · SARIF · CodeQL · MITRE ATT&CK · NIST SP 800-53**

---

## Contact

I am open to senior security-engineering roles, application-security tooling collaboration, technical advisory work, and community projects around practical security automation.

<p align="center">
  <a href="https://omobolajiadeyan.com">Website</a> ·
  <a href="https://www.linkedin.com/in/oeadeyan">LinkedIn</a> ·
  <a href="https://dev.to/doidun2">Writing</a> ·
  <a href="https://hackerone.com/doidun">HackerOne</a> ·
  <a href="mailto:omobolaji.adeyan@gmail.com">Email</a>
</p>
