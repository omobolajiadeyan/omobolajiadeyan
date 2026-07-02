# Omobolaji Adeyan

**CISA-certified Security Engineer building practical security automation for
developers, security teams, and evidence-driven reviews.**

<p align="left">
  <img src="https://komarev.com/ghpvc/?username=omobolajiadeyan&label=Profile+Views&color=0e75b6&style=flat" alt="profile views" />
  <a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">
    <img src="https://img.shields.io/badge/GitHub%20Marketplace-PhishGuard%20AI-2ea44f?style=flat&logo=github" alt="marketplace" />
  </a>
  <img src="https://img.shields.io/badge/CISA-Certified-blue?style=flat" alt="CISA" />
  <img src="https://img.shields.io/badge/OWASP-Contributor-orange?style=flat" alt="OWASP" />
</p>

[LinkedIn](https://www.linkedin.com/in/oeadeyan) ·
[Email](mailto:omobolaji.adeyan@gmail.com) ·
[PhishGuard AI on Marketplace](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

---

## GitHub Stats

<p align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=omobolajiadeyan&show_icons=true&theme=default&hide_border=true&count_private=true&include_all_commits=true" />
  <img height="160" src="https://github-readme-streak-stats.herokuapp.com/?user=omobolajiadeyan&hide_border=true" />
</p>

---

## What I Build

I build security tools that turn noisy technical signals into clear,
reproducible findings. My work focuses on phishing detection, vulnerability
triage, secure CI/CD, supply-chain hardening, and evidence that can be reviewed
by maintainers, auditors, and engineering teams.

The strongest theme across my public work is practical security automation:
small, testable improvements that make risk easier to detect, explain, and act on.

---

## Strongest Public Evidence

| Evidence | Status | Link |
| --- | --- | --- |
| PhishGuard AI reusable GitHub Action | Published on GitHub Marketplace | [Marketplace](https://github.com/marketplace/actions/phishguard-ai-phishing-detector) |
| OWASP Agent Security Regression Harness | Merged upstream contribution | [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) |
| OWASP cve-lite-cli | Merged upstream contribution | [PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) |
| RamenDR ramenctl (GitHub Actions hardening) | Merged upstream contribution | [PR #466](https://github.com/RamenDR/ramenctl/pull/466) |
| Prowler cloud security platform | Credited upstream contribution | [PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) |
| SecOps-NG Framework | Merged compliance/security mapping | [PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) |
| SPF, DKIM, and DMARC in Phishing Detection | Published engineering article | [Article](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91) |
| OWASP Agent Security Batch Validation | Published engineering article | [Article](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7) |

Full records:

- [Public Evidence Portfolio](PUBLIC_EVIDENCE.md)
- [Open-Source Activity Log](OPEN_SOURCE_LOG.md)
- [Evidence Dossier](EVIDENCE_DOSSIER.md)

---

## Featured Project: PhishGuard AI

[Repository](https://github.com/omobolajiadeyan/phishguard-ai) ·
[Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

**PhishGuard AI** is an explainable offline phishing detection engine for URLs
and email. Designed for safe local analysis, CI workflows, and security
education without sending data to an external API.

Key capabilities:

- URL, email, redirect, typosquatting, and authentication-signal analysis
- Conservative SPF, DKIM, and DMARC scoring from trusted receiver headers
- JSON and SARIF 2.1.0 output for automation and GitHub Code Scanning
- Zero runtime dependencies
- Public benchmark fixtures and documented model limitations
- Good-first issues and contribution guidance for new contributors

Use it in GitHub Actions:

```yaml
- uses: omobolajiadeyan/phishguard-ai@v0.5.1
```

---

## Selected Projects

### FreNiMi Checkers

[Repository](https://github.com/omobolajiadeyan/frenimi-checkers) ·
[Live Demo](https://omobolajiadeyan.github.io/frenimi-checkers/)

Cross-platform checkers with minimax AI, real-time multiplayer, SQLite ratings,
WebSocket notifications, and PWA support. Security work includes hashed session
tokens, explicit session revocation, bounded WebSocket payloads, strict CORS,
and multiplayer regression tests.

### BehaviorSense

[Repository](https://github.com/omobolajiadeyan/behaviorsense)

Behavioral anomaly detection engine for user and IP risk scoring, including
UEBA-style detection patterns for insider-threat and account-risk scenarios.

### CVE Dashboard

[Repository](https://github.com/omobolajiadeyan/cve-dashboard)

Real-time CVE intelligence dashboard pulling live data from the NVD API,
with filtering, severity scoring, and vulnerability trend tracking.

### AppSec Compliance Bridge

Private pre-launch project for converting application-security scan findings
into traceable draft NIST SP 800-53 control mappings and POA&M evidence.

---

## Upstream Work Under Review

Active contributions pending maintainer acceptance:

- **Dependency-Track** — [PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477): runtime-backed OpenAPI Finding response schema
- **OpenSSF Scorecard** — [PR #5098](https://github.com/ossf/scorecard/pull/5098): extends Dangerous Workflow detection for committer-controlled GitHub Actions contexts
- **CISA ScubaGear** — [PR #2237](https://github.com/cisagov/ScubaGear/pull/2237): DMARC policy discovery improvements for M365 baseline assessment logic

---

## Writing

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)

---

## Technology

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)

**Frameworks & Runtimes**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)

**Data & Infrastructure**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)

**Security & Standards**

![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![SARIF](https://img.shields.io/badge/SARIF-2.1.0-blueviolet?style=flat)
![MITRE ATT&CK](https://img.shields.io/badge/MITRE%20ATT%26CK-red?style=flat)
![NIST SP 800-53](https://img.shields.io/badge/NIST%20SP%20800--53-blue?style=flat)
![CodeQL](https://img.shields.io/badge/CodeQL-purple?style=flat&logo=github)

---

## Contact

Open to senior security engineering roles, application-security tooling
collaboration, technical advisory conversations, and community work around
practical security automation.

- [LinkedIn](https://www.linkedin.com/in/oeadeyan)
- [HackerOne](https://hackerone.com/doidun)
- [CTFtime](https://ctftime.org/user/omobolaji.adeyan)
- [Email](mailto:omobolaji.adeyan@gmail.com)
