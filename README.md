# Omobolaji Adeyan

Security engineer building practical AppSec, threat-detection, and security
automation tools.

[LinkedIn](https://www.linkedin.com/in/oeadeyan) |
[Email](mailto:omobolaji.adeyan@gmail.com) |
[GitHub Marketplace: PhishGuard AI](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

---

## Professional Focus

I build security software that turns noisy technical signals into clear,
actionable findings. My work combines application security, vulnerability
management, threat detection, secure automation, and developer-focused tooling.

Current areas of focus:

- Explainable phishing and email-security analysis
- Security regression testing for agentic and MCP-integrated systems
- Vulnerability intelligence and CVE workflows
- Cloud and identity security checks
- Secure multiplayer and session-management patterns
- Compliance evidence workflows for application-security findings

I hold a BS in Information Technology from Arizona State University and the
CISA and CompTIA Security+ certifications.

---

## Recent Public Evidence

| Date | Evidence | Outcome |
| --- | --- | --- |
| 2026-06-18 | [OWASP Agent Security Regression Harness PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) | Merged. Added recursive validation for scenario files, directories, and globs with tests and green CI. |
| 2026-06-17 | [Prowler PR #11515](https://github.com/prowler-cloud/prowler/pull/11515) and [merged PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) | Improvements were folded into an earlier upstream PR and credited as co-authored work. |
| 2026-06-12 | [PhishGuard AI v0.5.1](https://github.com/omobolajiadeyan/phishguard-ai/releases/tag/v0.5.1) | Released reusable GitHub Action and Marketplace-ready phishing detector. |
| 2026-06-12 | [OWASP cve-lite-cli PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) | Merged. Added risk and next-action guidance to HTML vulnerability reports. |
| 2026-06-10 | [SecOps-NG Framework PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) | Merged. Added CRA Article 13(8) support-period mapping with cited source updates. |

For a dated record, see [OPEN_SOURCE_LOG.md](OPEN_SOURCE_LOG.md).

---

## Flagship Projects

### PhishGuard AI

[Repository](https://github.com/omobolajiadeyan/phishguard-ai) |
[Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

Explainable offline phishing detection for URLs and email. PhishGuard AI runs
with zero runtime dependencies, provides JSON and SARIF 2.1.0 output, and can be
used as a reusable GitHub Action in CI.

Notable engineering points:

- URL, email, redirect, typosquatting, and authentication-signal analysis
- Conservative SPF, DKIM, and DMARC handling from trusted receiver headers
- Public-safe benchmark fixtures and documented model limitations
- GitHub Code Scanning integration through SARIF output
- Contributor documentation and scoped good-first issues

### FreNiMi Checkers

[Repository](https://github.com/omobolajiadeyan/frenimi-checkers) |
[Public Demo](https://omobolajiadeyan.github.io/frenimi-checkers/)

Secure cross-platform checkers with minimax AI, real-time multiplayer, SQLite
ratings, WebSocket notifications, PWA support, and automated security testing.

Security-focused work includes hashed session tokens, explicit session
revocation, active-match logout protection, bounded WebSocket payloads, strict
CORS, security headers, and regression tests around multiplayer behavior.

### AppSec Compliance Bridge

Pre-launch product work for converting application-security scan findings into
traceable draft NIST SP 800-53 control mappings and POA&M evidence. The project
is currently private while core architecture, licensing, mappings, parser
security, and delivery plans are developed.

---

## Upstream Contributions

I prefer focused contributions tied to real issues, tests, and maintainer
feedback. Selected work:

- **OWASP Agent Security Regression Harness**:
  [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150)
  merged scenario directory and glob validation for security regression suites.
- **Prowler**:
  [PR #11515](https://github.com/prowler-cloud/prowler/pull/11515) contributed
  Microsoft Entra object-takeover check improvements that were folded into
  merged upstream work.
- **OWASP cve-lite-cli**:
  [PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) merged risk and
  next-action guidance for HTML reports.
- **SecOps-NG Framework**:
  [PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) merged a
  cited CRA support-period mapping.
- **OpenSSF Scorecard**:
  [PR #5098](https://github.com/ossf/scorecard/pull/5098) is open for review,
  extending Dangerous Workflow detection for committer-controlled GitHub Actions
  contexts.

---

## Engineering Standards

I aim for work that is useful after the pull request is merged:

- Clear problem statement and scoped implementation
- Tests that protect the behavior being changed
- No unrelated refactors or artificial activity
- Security boundaries documented where trust matters
- Reproducible verification steps in the PR body
- Respectful maintainer follow-up and fast review response

---

## Technology

Python, JavaScript, TypeScript, Node.js, React, FastAPI, PHP, SQLite,
PostgreSQL, Docker, GitHub Actions, SARIF, CodeQL, security regression testing,
MITRE ATT&CK, vulnerability management, and cloud-security tooling.

---

## Contact

I am open to senior security engineering roles, AppSec/tooling collaboration,
technical advisory conversations, and community work around practical security
automation.

- LinkedIn: https://www.linkedin.com/in/oeadeyan
- Email: omobolaji.adeyan@gmail.com
