# Hi, I'm Omobolaji Adeyan

**Security Engineer | CISA | OWASP Contributor | Crest Hill, Illinois**

[LinkedIn](https://www.linkedin.com/in/oeadeyan) | [Email](mailto:omobolaji.adeyan@gmail.com) | [PhishGuard AI on GitHub Marketplace](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

---

## Evidence Snapshot

My public work focuses on practical security automation: tools that make risk
easier to detect, explain, reproduce, and act on.

Current evidence signals:

- Built and published **PhishGuard AI**, a reusable GitHub Marketplace Action
  for explainable offline phishing detection.
- Contributed merged work to recognized security projects including **OWASP**,
  **OWASP cve-lite-cli**, **Prowler**, and **SecOps-NG Framework**.
- Maintain public engineering records with tests, release notes, security
  boundaries, and dated contribution evidence.
- Hold the **CISA** and **CompTIA Security+** certifications, with a BS in
  Information Technology from Arizona State University.

See the full evidence record:

- [Public Evidence Portfolio](PUBLIC_EVIDENCE.md)
- [Open-Source Activity Log](OPEN_SOURCE_LOG.md)
- [Evidence Dossier](EVIDENCE_DOSSIER.md)

---

## PhishGuard AI

[Repository](https://github.com/omobolajiadeyan/phishguard-ai) |
[Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)

I built **PhishGuard AI**, an explainable offline phishing detection engine for
URLs and email, published as a reusable GitHub Action.

PhishGuard AI runs with zero runtime dependencies, outputs JSON and SARIF 2.1.0,
and integrates with GitHub Code Scanning. It treats email authentication signals
such as SPF, DKIM, and DMARC as supporting evidence rather than binary proof,
including regression coverage for legitimate forwarding failures.

Key capabilities:

- URL, email, redirect, typosquatting, and authentication-signal analysis
- Conservative SPF, DKIM, and DMARC scoring from trusted receiver headers
- SARIF output for GitHub Code Scanning integration
- Public benchmark fixtures and documented model limitations
- Good-first issues and contribution documentation for new contributors

Try it in a workflow:

```yaml
- uses: omobolajiadeyan/phishguard-ai@v0.5.1
```

---

## Selected Projects

### PhishGuard AI

Explainable offline phishing detection for URLs and email. Zero runtime
dependencies, SARIF 2.1.0 output, GitHub Code Scanning integration, benchmark
fixtures, and documented model limitations.

### FreNiMi Checkers

[Repository](https://github.com/omobolajiadeyan/frenimi-checkers) |
[Live Demo](https://omobolajiadeyan.github.io/frenimi-checkers/)

Secure cross-platform checkers with minimax AI, real-time multiplayer, SQLite
ratings, WebSocket notifications, and PWA support. Security work includes
hashed session tokens, explicit session revocation, active-match logout
protection, bounded WebSocket payloads, strict CORS, and multiplayer regression
tests.

### AppSec Compliance Bridge

Private pre-launch project for converting application-security scan findings
into traceable draft NIST SP 800-53 control mappings and POA&M evidence. The
project is currently private while parser security, architecture, licensing, and
delivery plans are finalized.

### BehaviorSense

[Repository](https://github.com/omobolajiadeyan/behaviorsense)

Behavioral anomaly detection engine for user and IP risk scoring, including UEBA
patterns for insider-threat detection and MITRE ATT&CK-style mapping.

---

## Open-Source Contributions

Selected merged work and active reviewed PRs:

- **OWASP Agent Security Regression Harness**:
  [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150)
  merged recursive scenario validation for directories and globs with green CI.
- **Prowler**:
  [PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) includes
  Microsoft Entra directory-sync object-takeover work credited as co-author.
- **OWASP cve-lite-cli**:
  [PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) merged risk and
  next-action guidance for HTML vulnerability reports.
- **SecOps-NG Framework**:
  [PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) merged
  CRA Article 13(8) support-period mapping with cited sources.
- **Dependency-Track**:
  [PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477)
  proposes a runtime-backed OpenAPI Finding response schema. Maintainer feedback
  has been addressed; DCO, Codacy, and Snyk checks pass.
- **RamenDR ramenctl**:
  [PR #466](https://github.com/RamenDR/ramenctl/pull/466) pins GitHub Actions
  to commit SHAs, disables persisted checkout credentials, and documents
  tag-to-SHA verification for supply-chain hardening.
- **OpenSSF Scorecard**:
  [PR #5098](https://github.com/ossf/scorecard/pull/5098) proposes extending
  Dangerous Workflow detection to committer-controlled GitHub Actions contexts.
- **CISA ScubaGear**:
  [PR #2237](https://github.com/cisagov/ScubaGear/pull/2237) proposes a DMARC
  policy discovery tree-walk fix for Microsoft 365 baseline assessment logic.

For the full dated record, see [OPEN_SOURCE_LOG.md](OPEN_SOURCE_LOG.md).

---

## Writing

- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)

---

## GitHub Activity

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=omobolajiadeyan&show_icons=true&theme=dark&hide_border=true&count_private=true&title_color=58a6ff&icon_color=58a6ff)

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
