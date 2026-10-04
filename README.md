<div align="center">

<img src="assets/profile-banner.svg?v=20261003-2" alt="Omobolaji Adeyan — cybersecurity engineer and security tool builder. Vulnerability management with signed, approved endpoint fixes, plus merged security fixes in CISA, OWASP, and Prowler projects." width="100%" />

<br />

<a href="https://frenimiguard.com">
  <img src="https://img.shields.io/badge/FreNiMiGuard-Live-1E3A8A?style=flat-square" alt="FreNiMiGuard is live at frenimiguard.com" />
</a>
<a href="https://github.com/cisagov/ScubaGear/pull/2237">
  <img src="https://img.shields.io/badge/CISA%20ScubaGear-Merged%20fix-2EA44F?style=flat-square&logo=github" alt="Merged fix in CISA ScubaGear" />
</a>
<a href="#merged-upstream-security-fixes">
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

**[FreNiMiGuard](#frenimiguard--vulnerability-management-you-can-prove)** · **[Security design](#security-design)** · **[Evidence](#evidence)** · **[Upstream fixes](#merged-upstream-security-fixes)** · **[Tools](#open-source-security-tools)** · **[Contact](#work-with-me)**

</div>

---

I'm a cybersecurity engineer who builds security products end to end: threat
model, backend, agent, UI, tests, and deployment. My main work is
**[FreNiMiGuard](https://frenimiguard.com)**, a vulnerability-management
platform I designed and built at [FreNiMi](https://frenimi.com). Outside that,
I land security fixes upstream in CISA, OWASP, and Prowler projects.

Each claim on this page links to something you can check, and I state the
limits alongside the results.

<table role="presentation">
  <tr>
    <td width="25%" align="center"><a href="https://frenimiguard.com"><strong>FreNiMiGuard</strong></a><br /><sub>Live vulnerability-management platform</sub></td>
    <td width="25%" align="center"><a href="#merged-upstream-security-fixes"><strong>7 merged PRs</strong></a><br /><sub>CISA · OWASP · Prowler · more</sub></td>
    <td width="25%" align="center"><a href="#evidence"><strong>438 tests passing</strong></a><br /><sub>FreNiMiGuard, re-run 4 Oct 2026</sub></td>
    <td width="25%" align="center"><a href="#open-source-security-tools"><strong>5 open-source tools</strong></a><br /><sub>Each tested in CI</sub></td>
  </tr>
</table>

---

## FreNiMiGuard — vulnerability management you can prove

FreNiMiGuard matches every asset's installed software against CISA's Known
Exploited Vulnerabilities catalog and NVD. It ranks what to fix first and sets
an SLA deadline and owner. It can push the fix through an endpoint agent the
customer installs, then checks that the fix actually landed. Closed findings
become NIST 800-53 and OSCAL evidence.

<p align="center">
  <strong><a href="https://frenimiguard.com">Visit the live product</a></strong> ·
  <strong><a href="reports/frenimiguard/PROJECT_EVIDENCE.md">Read the evidence record</a></strong>
</p>

<p align="center">
  <img src="assets/frenimiguard-dashboard.png?v=20261003-1" alt="FreNiMiGuard dashboard: 5 assets, 12 installed apps, 635 vulnerabilities needing attention of which 296 are known exploited, an SLA status gauge, and a deadline breakdown by severity" width="100%" />
</p>
<p align="center"><sub>The dashboard on a test instance, 3 Oct 2026: live CISA KEV and NVD feeds matched against a sample inventory of third-party apps on five machines. Not customer data.</sub></p>

<p align="center">
  <img src="assets/frenimiguard-flow.svg?v=20261003-1" alt="FreNiMiGuard pipeline: inventory, match against CISA KEV and NVD, prioritize by risk and SLA, fix through approved and signed actions, verify by rescanning, and export NIST 800-53 and OSCAL evidence. Remote actions sit behind an endpoint trust boundary." width="100%" />
</p>

**What I built:** a FastAPI backend with SQLCipher storage, a React and
TypeScript frontend, NVD and CISA KEV feed ingestion with CPE version-range
matching, Intune, Jamf, and CSV inventory import, SAML SSO, role-based access,
OSCAL SSP, SAR, and POA&M export, and Windows, Linux, and macOS endpoint agents
with signed remote actions.

### Security design

An agent that runs fixes on customer machines is a remote-code-execution
channel, so I treated it as the main attack surface:

| Threat I designed against | Control in FreNiMiGuard |
|---|---|
| A compromised server pushes scripts to every endpoint | Remote actions are off by default. Each machine must also opt in at install, and the agent enforces that locally whatever the server says |
| One stolen admin session runs code on endpoints | By default, a second administrator must approve every remote action. Each request and decision goes into the audit trail |
| An approved action is replayed or sent to another machine | The signed envelope binds the action ID, the target agent, and an expiry. The agent rejects anything unsigned, expired, meant for another agent, or already run |
| A forged action from someone who is not the server | Actions are RSA-signed (SHA-256), and the agent pins the workspace public key at enrollment |
| A leaked API key | There are no admin API keys, only auditor and analyst roles. Keys and agent tokens are stored only as SHA-256 hashes and can expire |
| A leaked JWT secret also exposes cloud credentials | Integration credentials are encrypted with a separate key, so one leaked secret does not unlock the other |
| A finding is marked "patched" but never was | Findings close automatically only when a fresh inventory shows the installed version is outside NVD's affected range. Name-only matches go to an analyst |

<p align="center">
  <img src="assets/frenimiguard-remote-actions.png?v=20261003-1" alt="FreNiMiGuard endpoint settings: Allow remote actions is off by default; Require a second administrator to approve is on; actions are signed with the workspace key, which agents pin at enrollment" width="100%" />
</p>
<p align="center"><sub>The same controls in the product's endpoint settings.</sub></p>

**Found and fixed in my own code:**
- The read-only auditor role could write to assets, incidents, alerts,
  controls, compliance answers, and integrations. Every write path now
  requires the editor role.
- `python-jose` pulled in an unpatched `ecdsa` dependency. I migrated JWT
  handling to PyJWT and kept the algorithm allow-list.
- Every known-exploited Windows CVE matched every Windows machine by name, so a
  patched Windows 11 laptop showed EternalBlue. Windows findings are now checked
  against NVD's data for the machine's own release and build. On real CISA and
  NVD data, a machine reporting its full build got a definite answer on every
  Windows CVE checked: 47 ruled out, 14 confirmed. Insider and unknown builds
  are never ruled out.
- NVD records list the platform a product runs on beside the vulnerable
  product, and the feed counted both, so a GLib bug matched every Windows
  machine. Only vulnerable products and real version bounds count now. On
  the one live workstation, open findings fell from 1,457 to 462.
- Signing in logged false "Compliance update" audit events, because loading
  the checklist also saved it. Loading no longer writes anything.
- Pages were served without CSP, HSTS, or anti-framing headers, because an
  nginx block that sets its own headers silently drops the server-wide ones.
  Every response now carries them.

### Evidence

| Check (4 Oct 2026) | Result |
|---|---|
| Live service | `GET https://frenimiguard.com/api/v1/health` → HTTP 200, API and database online |
| Live security headers | CSP, HSTS, `X-Frame-Options`, and `nosniff` on pages, scripts, and API responses (check with `curl -I https://frenimiguard.com/`) |
| Backend tests | 241 passed, 1 skipped |
| Frontend tests | 197 passed across 27 files |
| Dependency audits | `npm audit`: 0 vulnerabilities · `pip-audit`: no known vulnerabilities |

<sub>FreNiMiGuard is proprietary. The tests and audits ran locally on a
private branch, so they can't be reproduced from this repository. No
penetration test, authorization to operate, compliance certification, or
customer deployment is claimed. The
[evidence record](reports/frenimiguard/PROJECT_EVIDENCE.md) says exactly what
these results do and don't prove.</sub>

---

## Merged upstream security fixes

| Project | Merged PR | What it fixed |
|---|---|---|
| CISA | [ScubaGear #2237](https://github.com/cisagov/ScubaGear/pull/2237) | Made M365 DMARC policy discovery follow the RFC 9989 DNS tree walk. Policies on multi-label public suffixes such as `.fed.us` were being missed |
| TruFoundation | [TruShell #55](https://github.com/TruFoundation/TruShell/pull/55) | Fixed a shell-injection vulnerability in the OS fallback path |
| Prowler | [Prowler #11098](https://github.com/prowler-cloud/prowler/pull/11098) | Added an M365 check for directory-sync object-takeover protection (co-authored) |
| OWASP | [Agent Security Regression Harness #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) | Added scenario-directory and glob validation for repeatable agent-security tests |
| OWASP | [cve-lite-cli #602](https://github.com/OWASP/cve-lite-cli/pull/602) | Added risk context and next-action guidance to vulnerability reports |
| RamenDR | [ramenctl #466](https://github.com/RamenDR/ramenctl/pull/466) | Pinned GitHub Actions to commit SHAs to harden the supply chain |
| SecOps-NG | [secops-ng-framework #281](https://github.com/secops-ng/secops-ng-framework/pull/281) | Added the EU Cyber Resilience Act Article 13(8) support-period mapping |

Only merged work is listed. The [Open Source Log](OPEN_SOURCE_LOG.md) keeps
the dated record and separates merged work from PRs still under review.

---

## Open-source security tools

| Tool | What it does | Output | Tests |
|---|---|---|---|
| [Secrets Scanner](https://github.com/omobolajiadeyan/secrets-scanner) | Finds exposed credentials in CI and redacts them in findings | JSON · SARIF · GitHub Action | [![Tests](https://github.com/omobolajiadeyan/secrets-scanner/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/secrets-scanner/actions/workflows/tests.yml) |
| [Log Analyzer](https://github.com/omobolajiadeyan/log-analyzer) | Turns raw logs into MITRE ATT&CK-mapped investigation leads | SARIF · GitHub Action | [![Tests](https://github.com/omobolajiadeyan/log-analyzer/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/log-analyzer/actions/workflows/tests.yml) |
| [BehaviorSense](https://github.com/omobolajiadeyan/behaviorsense) | Scores user and IP activity for explainable anomaly triage | Python · TypeScript | [![Tests](https://github.com/omobolajiadeyan/behaviorsense/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/behaviorsense/actions/workflows/tests.yml) |
| [VulnGPT](https://github.com/omobolajiadeyan/vulngpt) | Turns NVD CVE data into prioritized remediation guidance | NVD · CVSS · CWE | [![Tests](https://github.com/omobolajiadeyan/vulngpt/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/vulngpt/actions/workflows/tests.yml) |
| [PhishGuard](https://github.com/omobolajiadeyan/phishguard-ai) | Scores URLs and email for phishing offline and explains each score | SARIF · [Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector) | [![Tests](https://github.com/omobolajiadeyan/phishguard-ai/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/phishguard-ai/actions/workflows/tests.yml) |

---

<details>
<summary><strong>Credentials</strong></summary>

<br />

| Credential | |
|---|---|
| **[CompTIA Security+](https://www.credly.com/badges/0b64bbac-e9a0-4889-a017-8894513823dc/public_url)** | Verify on Credly |
| **AWS Academy Cloud Foundations** | Cloud architecture, shared responsibility, and security fundamentals |
| **BS, Information Technology** | Systems, software, networking, and data |
| **GitHub Marketplace publisher** | Published and maintain a reusable security GitHub Action |

</details>

<details>
<summary><strong>Writing</strong></summary>

<br />

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)

</details>

---

## Work with me

If you work on application security, vulnerability management, or detection
engineering, I'd like to compare notes or build something useful together.

<p align="center">
  <a href="https://frenimiguard.com">FreNiMiGuard</a> ·
  <a href="https://omobolajiadeyan.com">Website</a> ·
  <a href="https://www.linkedin.com/in/oeadeyan">LinkedIn</a> ·
  <a href="https://dev.to/doidun2">Writing</a> ·
  <a href="https://hackerone.com/doidun">HackerOne</a> ·
  <a href="mailto:omobolaji.adeyan@gmail.com">Email</a>
</p>
