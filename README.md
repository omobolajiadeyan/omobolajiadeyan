# Omobolaji Adeyan

**CISA-certified Security Engineer building practical security automation for
developers, security teams, and evidence-driven reviews.**

[LinkedIn](https://www.linkedin.com/in/oeadeyan) |
[Email](mailto:omobolaji.adeyan@gmail.com) |
[PhishGuard AI Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

---

## What I Build

I build security tools that turn noisy technical signals into clear,
reproducible findings. My work focuses on phishing detection, vulnerability
triage, secure CI/CD, supply-chain hardening, and evidence that can be reviewed
by maintainers, auditors, and engineering teams.

The strongest theme across my public work is practical security automation:
small, testable improvements that make risk easier to detect, explain, and act
on.

---

## Strongest Public Evidence

| Evidence | Status | Link |
| --- | --- | --- |
| PhishGuard AI reusable GitHub Action | Published on GitHub Marketplace | [Marketplace](https://github.com/marketplace/actions/phishguard-ai-phishing-detector) |
| OWASP Agent Security Regression Harness | Merged upstream contribution | [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) |
| OWASP cve-lite-cli | Merged upstream contribution | [PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) |
| Prowler cloud security platform | Credited upstream contribution | [PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) |
| SecOps-NG Framework | Merged compliance/security mapping | [PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) |
| PhishGuard technical writing | Published engineering article | [Article](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91) |

Full records:

- [Public Evidence Portfolio](PUBLIC_EVIDENCE.md)
- [Open-Source Activity Log](OPEN_SOURCE_LOG.md)
- [Evidence Dossier](EVIDENCE_DOSSIER.md)

---

## Featured Project: PhishGuard AI

[Repository](https://github.com/omobolajiadeyan/phishguard-ai) |
[Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

**PhishGuard AI** is an explainable offline phishing detection engine for URLs
and email. It is designed for safe local analysis, CI workflows, and security
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

### PhishGuard AI

Explainable offline phishing detection for URLs and email with SARIF 2.1.0
output, GitHub Code Scanning support, benchmark fixtures, and conservative
email-authentication scoring.

### FreNiMi Checkers

[Repository](https://github.com/omobolajiadeyan/frenimi-checkers) |
[Live Demo](https://omobolajiadeyan.github.io/frenimi-checkers/)

Cross-platform checkers with minimax AI, real-time multiplayer, SQLite ratings,
WebSocket notifications, and PWA support. Security work includes hashed session
tokens, explicit session revocation, bounded WebSocket payloads, strict CORS,
and multiplayer regression tests.

### AppSec Compliance Bridge

Private pre-launch project for converting application-security scan findings
into traceable draft NIST SP 800-53 control mappings and POA&M evidence. The
project is private while parser safety, architecture, licensing, and delivery
plans are finalized.

### BehaviorSense

[Repository](https://github.com/omobolajiadeyan/behaviorsense)

Behavioral anomaly detection engine for user and IP risk scoring, including
UEBA-style detection patterns for insider-threat and account-risk scenarios.

---

## Upstream Work Under Review

These are active contributions that are useful evidence of engagement, but I
keep them separate from merged work until maintainers accept them.

- **Dependency-Track**:
  [PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477)
  proposes a runtime-backed OpenAPI Finding response schema.
- **RamenDR ramenctl**:
  [PR #466](https://github.com/RamenDR/ramenctl/pull/466) hardens GitHub
  Actions workflows with SHA pinning and checkout credential controls.
- **OpenSSF Scorecard**:
  [PR #5098](https://github.com/ossf/scorecard/pull/5098) extends Dangerous
  Workflow detection for committer-controlled GitHub Actions contexts.
- **CISA ScubaGear**:
  [PR #2237](https://github.com/cisagov/ScubaGear/pull/2237) proposes DMARC
  policy discovery improvements for Microsoft 365 baseline assessment logic.

---

## Writing

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)

---

## Technology

Python | JavaScript | TypeScript | Node.js | React | FastAPI | PHP | SQLite |
PostgreSQL | Docker | GitHub Actions | SARIF | CodeQL | MITRE ATT&CK |
NIST SP 800-53 | vulnerability management | cloud security tooling

---

## Contact

I am open to senior security engineering roles, application-security tooling
collaboration, technical advisory conversations, and community work around
practical security automation.

- [LinkedIn](https://www.linkedin.com/in/oeadeyan)
- [HackerOne](https://hackerone.com/doidun)
- [CTFtime](https://ctftime.org/user/omobolaji.adeyan)
- [Email](mailto:omobolaji.adeyan@gmail.com)
