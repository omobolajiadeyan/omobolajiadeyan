<div align="center">

<img src="assets/profile-banner.svg" alt="Omobolaji Adeyan - Security Engineering, AppSec Automation, Evidence-Driven Reviews" width="100%" />

<br />

<a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">
  <img src="https://img.shields.io/badge/GitHub%20Marketplace-PhishGuard%20AI-2EA44F?style=flat-square&logo=github" alt="PhishGuard AI on GitHub Marketplace" />
</a>
<a href="https://owasp.org">
  <img src="https://img.shields.io/badge/OWASP-Contributor-E0461C?style=flat-square" alt="OWASP Contributor" />
</a>
<a href="https://www.comptia.org/certifications/security">
  <img src="https://img.shields.io/badge/Security%2B-Certified-0052CC?style=flat-square" alt="CompTIA Security+ Certified" />
</a>

</div>

---

## Security Engineering That Produces Evidence

I build practical security-automation tools for phishing analysis, vulnerability triage, threat detection, CI/CD hardening, and SARIF reporting. My focus is straightforward: findings should be explainable to engineers, reproducible by reviewers, and useful to security leaders.

Start with **[PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai)** for a complete product example, then review the merged open-source contributions below for evidence of the same discipline inside established projects.

---

## Flagship Project: [PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai)

PhishGuard AI is an explainable offline phishing detector for URLs and email. It supports local analysis, CI workflows, GitHub Code Scanning, and security education without sending sensitive inputs to a third-party service.

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

---

## Merged Open-Source Contributions

| Area | Selected evidence |
|---|---|
| Application-security automation | [OWASP Agent Security Regression Harness #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150), [OWASP cve-lite-cli #602](https://github.com/OWASP/cve-lite-cli/pull/602) |
| Cloud and compliance security | [Prowler #11098](https://github.com/prowler-cloud/prowler/pull/11098), [SecOps-NG #281](https://github.com/secops-ng/secops-ng-framework/pull/281) |
| Supply-chain hardening | [RamenDR ramenctl #466](https://github.com/RamenDR/ramenctl/pull/466) |

Full dated contribution record: **[OPEN_SOURCE_LOG.md](OPEN_SOURCE_LOG.md)**

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
