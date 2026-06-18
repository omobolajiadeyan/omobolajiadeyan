# 👋 Hi, I'm Omobolaji Adeyan

**Security Engineer · Crest Hill, Illinois**

[LinkedIn](https://www.linkedin.com/in/oeadeyan) · [Email](mailto:omobolaji.adeyan@gmail.com) · [PhishGuard AI on Marketplace](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

---

## 🔐 PhishGuard AI — Available on the GitHub Marketplace

I built **[PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai)**, an explainable offline phishing detection engine for URLs and email — published as a **[reusable GitHub Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)**.

PhishGuard AI runs with zero runtime dependencies, outputs JSON and SARIF 2.1.0, and integrates directly with **GitHub Code Scanning**. It treats email authentication (SPF, DKIM, DMARC) as supporting evidence rather than binary pass/fail — reducing false positives from forwarded mail while keeping detection sensitivity.

- URL, email, redirect, typosquatting, and authentication-signal analysis
- Conservative SPF/DKIM/DMARC scoring from trusted receiver headers
- SARIF output for GitHub Code Scanning integration
- Public benchmark fixtures and documented model limitations
- Scoped good-first issues open for contributors

**Try it:** Add `omobolajiadeyan/phishguard-ai@v0.5.1` to your workflow.

[Repository](https://github.com/omobolajiadeyan/phishguard-ai) | [Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

---

## 🛡️ About Me

I'm a security engineer focused on building practical tools that turn noisy technical signals into clear, actionable findings. My work spans application security, threat detection, vulnerability management, cloud security, and developer-focused automation.

I hold a **BS in Information Technology from Arizona State University** and the **CISA** and **CompTIA Security+** certifications. I prefer focused, well-tested contributions — scoped implementations, tests that protect the behavior being changed, and documented security boundaries.

Current areas of focus:

- Explainable phishing and email-security analysis
- Security regression testing for agentic and MCP-integrated systems
- Vulnerability intelligence and CVE workflows
- Cloud and identity security posture checks
- Compliance evidence workflows for application-security findings

---

## 🏆 CISA — Certified Information Systems Auditor

Issued by ISACA. The CISA certification covers IS auditing, control, security, and assurance — providing a structured framework for evaluating security posture across people, process, and technology.

---

## 🤖 OWASP Agent Security Regression Harness Contributor

I contribute to the **[OWASP Agent Security Regression Harness](https://github.com/OWASP/Agent-Security-Regression-Harness)** — an OWASP project for executable security regression testing in agentic applications and MCP-integrated systems.

**Merged: [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150)** — Added recursive validation for scenario files, directories, and glob patterns with tests and green CI. Teams can now validate entire scenario suites in a single command instead of one file at a time.

---

## 🚀 Projects

### PhishGuard AI
[Repository](https://github.com/omobolajiadeyan/phishguard-ai) | [Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

Explainable offline phishing detection for URLs and email. Zero runtime dependencies, SARIF 2.1.0 output, GitHub Code Scanning integration, and documented model limitations. Current release: v0.5.1.

### FreNiMi Checkers
[Repository](https://github.com/omobolajiadeyan/frenimi-checkers) | [Live Demo](https://omobolajiadeyan.github.io/frenimi-checkers/)

Secure cross-platform checkers with minimax AI, real-time multiplayer, SQLite ratings, WebSocket notifications, and PWA support. Security implementation includes hashed session tokens, explicit session revocation, active-match logout protection, bounded WebSocket payloads, strict CORS, and regression tests around multiplayer state.

### BehaviorSense
[Repository](https://github.com/omobolajiadeyan/behaviorsense)

Behavioral anomaly detection engine for user and IP risk scoring. UEBA patterns for insider threat detection with MITRE ATT&CK mapping.

### AppSec Compliance Bridge *(pre-launch)*

Converts application-security scan findings into traceable draft NIST SP 800-53 control mappings and POA&M evidence. Currently private while core architecture, licensing, parser security, and delivery plans are finalized.

---

## 🌍 Open Source Contributions

I prefer focused contributions tied to real issues, tests, and maintainer feedback. Selected merged work:

- **OWASP Agent Security Regression Harness** — [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) merged recursive scenario validation for directories and globs with green CI.
- **Prowler** — [PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) Microsoft Entra directory-sync object-takeover check, credited as co-author in the merged upstream PR.
- **OWASP cve-lite-cli** — [PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) merged risk and next-action guidance for HTML vulnerability reports.
- **SecOps-NG Framework** — [PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) merged CRA Article 13(8) support-period mapping with cited sources.
- **OpenSSF Scorecard** — [PR #5098](https://github.com/ossf/scorecard/pull/5098) extends Dangerous Workflow detection to committer-controlled GitHub Actions contexts *(open for review)*.

For a full dated record, see [OPEN_SOURCE_LOG.md](OPEN_SOURCE_LOG.md).

---

## ✍️ Writing

- 📝 [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7) — How a scoped CLI contribution makes security regression testing CI-ready.

---

## 📊 GitHub Activity

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=omobolajiadeyan&show_icons=true&theme=dark&hide_border=true&count_private=true&title_color=58a6ff&icon_color=58a6ff)

---

## 💡 Recent Public Evidence

| Date | Work | Outcome |
| --- | --- | --- |
| 2026-06-18 | [OWASP Agent Security Regression Harness PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) | Merged. Recursive scenario validation with tests and green CI. |
| 2026-06-18 | [DEV.to Article: Batch Validation in OWASP Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7) | Published. First technical article. |
| 2026-06-17 | [Prowler PR #11515](https://github.com/prowler-cloud/prowler/pull/11515) + [merged PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) | Folded into upstream merged PR, credited as co-author. |
| 2026-06-12 | [PhishGuard AI v0.5.1](https://github.com/omobolajiadeyan/phishguard-ai/releases/tag/v0.5.1) | Released reusable GitHub Action and Marketplace listing. |
| 2026-06-12 | [OWASP cve-lite-cli PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) | Merged. Risk and next-action guidance added to HTML reports. |

---

## 🛠️ Technology

Python · JavaScript · TypeScript · Node.js · React · FastAPI · PHP · SQLite · PostgreSQL · Docker · GitHub Actions · SARIF · CodeQL · MITRE ATT&CK · NIST SP 800-53 · vulnerability management · cloud security tooling

---

## 🌐 Let's Connect

I'm open to senior security engineering roles, AppSec/tooling collaboration, technical advisory conversations, and community work around practical security automation.

- 💼 [LinkedIn](https://www.linkedin.com/in/oeadeyan)
- 📧 [Email](mailto:omobolaji.adeyan@gmail.com)