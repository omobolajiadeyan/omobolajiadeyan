# Omobolaji Adeyan

**Cybersecurity Engineer · Open-Source Security Tooling · OWASP Contributor**

[![Email](https://img.shields.io/badge/Email-Contact_Me-0A66C2?style=flat-square&logo=gmail&logoColor=white)](mailto:omobolaji.adeyan@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oeadeyan)
[![OWASP Nest](https://img.shields.io/badge/OWASP_Nest-Member_Profile-000000?style=flat-square&logo=owasp&logoColor=white)](https://nest.owasp.org/members/omobolajiadeyan)
[![Portfolio](https://img.shields.io/badge/GitHub-Security_Projects-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan?tab=repositories)
[![Open to Work](https://img.shields.io/badge/Status-Open_to_Opportunities-2ea44f?style=flat-square)](mailto:omobolaji.adeyan@gmail.com)

I build open-source security tools that explain their decisions. My work sits
at the intersection of threat detection, developer tooling, and security
automation — with a consistent focus on outputs that security teams can act on
and that engineers can audit, extend, and trust.

I contribute to established projects in the OWASP ecosystem, cloud security
platforms (Prowler), SAST tooling (Bandit, Checkov), and secrets detection —
and I maintain PhishGuard AI, an offline phishing detection engine now
available as a reusable GitHub Action for any CI pipeline.

## What I Build

- Detection tools that explain why an event, URL, or identity is suspicious
- Vulnerability intelligence workflows that turn CVE data into remediation steps
- Developer security automation designed for CI/CD and structured reporting
- Lightweight Python applications with auditable, dependency-conscious designs

## Selected Engineering Work

### Flagship Community Project

[**PhishGuard AI**](https://github.com/omobolajiadeyan/phishguard-ai) —
offline, explainable phishing detection for URLs and email. I created and
maintain its detection model, contributor roadmap, governance, security
policy, release process, and technical direction. The project is available
as a
[reusable GitHub Action](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/action.yml)
so any CI pipeline can scan URLs and upload SARIF findings to GitHub Code
Scanning with a single `uses:` line.

The [v0.5.0 release](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/CHANGELOG.md)
ships four new capabilities — all zero new dependencies, pure Python
standard library: **URL redirect chain tracing** (`--follow-redirects N`)
that follows short links and URL shorteners to their real destination;
**typosquatting detection** using a pure-Python Levenshtein distance
comparison against 50 well-known brand domains; **`.eml` file analysis**
(`phishguard eml <file>`) that parses RFC 5322 email files and scans every
embedded URL; and the **reusable GitHub Action** for CI integration.
Earlier releases shipped validated SARIF 2.1.0 output, conservative IDN and
punycode detection with false-positive regressions, SPF/DKIM/DMARC
`Authentication-Results` parsing, a reproducible public-safe URL benchmark
with deterministic confusion-matrix metrics, and Windows-safe output across
Python 3.10–3.13.

The project receives external contributions:
[PR #7](https://github.com/omobolajiadeyan/phishguard-ai/pull/7), submitted
by BeauDevCode, added an ASCII-only CLI mode and was merged after maintainer
review, cross-version tests, packaging checks, and CodeQL all passed.
Contribution guidance, governance, and the public roadmap are documented in
[FIRST_CONTRIBUTION.md](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/FIRST_CONTRIBUTION.md)
and [ROADMAP.md](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/ROADMAP.md).

| Project | What it demonstrates |
| --- | --- |
| [PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai) | Community-led offline phishing detection with explainable heuristic scoring, validated SARIF 2.1.0 output, Windows compatibility, CI, governance, releases, and a public roadmap |
| [Location Authentication](https://github.com/omobolajiadeyan/Location-Authentication) | Security redesign of an earlier location-authentication demo: validated radius checks, fail-closed multi-factor decisions, privacy-conscious output, zero runtime dependencies, Python 3.10-3.13 tests, CodeQL, and pinned CI |
| [FreNiMi Checkers](https://github.com/omobolajiadeyan/frenimi-checkers) | Secure full-stack game platform with minimax AI, realtime WebSocket matchmaking, SQLite ratings, PWA support, hashed sessions, strict origin controls, dependency auditing, and CodeQL |

## Core Skills

`Python` | `Security Automation` | `Threat Detection` | `Log Analysis` |
`Behavioral Analytics` | `CVE/NVD` | `MITRE ATT&CK` | `REST APIs` |
`JSON` | `CI/CD` | `Git`

## Current Focus

- Shipping PhishGuard AI v0.5.0 — redirect tracing, typosquatting detection, `.eml` parsing, and a reusable GitHub Action for CI phishing scanning
- Growing PhishGuard AI's contributor community and real-world adoption via the GitHub Action integration
- Contributing focused, tested changes to OWASP, Bandit, Checkov, Prowler, and other established security tooling
- Building documented, reproducible evidence of secure software engineering practice

## Open Source Contributions

| Contribution | Evidence |
| --- | --- |
| PhishGuard AI v0.5.0 — redirect tracing, typosquatting, `.eml`, GitHub Action | [v0.5.0 PR](https://github.com/omobolajiadeyan/phishguard-ai/pulls) adds four zero-dependency capabilities and a reusable GitHub Action; 72 tests pass, repository security policy passes |
| PhishGuard community maintenance | [Merged external PR #7](https://github.com/omobolajiadeyan/phishguard-ai/pull/7) documents contributor coordination, requested revisions, local verification, protected CI approval, CodeQL review, and an upstream merge |
| Prowler Microsoft Entra hybrid identity security | [Pull request #11515](https://github.com/prowler-cloud/prowler/pull/11515) adds a Microsoft 365 check that detects cloud-object takeover exposure through soft and hard directory matching; 22 focused and service tests, Black, Flake8, metadata validation, and Bandit pass |
| OWASP CVE Lite actionable reporting | [Pull request #602](https://github.com/OWASP/cve-lite-cli/pull/602) adds escaped risk summaries and next-action guidance to single-project and multi-folder HTML vulnerability reports while preserving the JSON contract; 440 tests, build, self-scan, and CodeQL pass |
| OWASP agent-security regression tooling | [Pull request #147](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/147) adds recursive directory and glob validation for agent-security scenarios, per-file results, summary counts, CLI tests, and CI documentation |
| Bandit SNMP detector argument handling | [Pull request #1433](https://github.com/PyCQA/bandit/pull/1433) fixes B508/B509 false negatives and false positives by resolving pysnmp defaults, positional and keyword arguments, explicit `None`, and dynamic values, with exact functional finding assertions |
| Checkov GitHub vulnerability-alert support | [Pull request #7573](https://github.com/bridgecrewio/checkov/pull/7573) migrates `CKV_GIT_3` to a graph-aware policy for the Terraform provider's dedicated alerts resource, with parser-backed legacy and provider 6.12+ regression coverage |
| TruShell OS fallback security fix | [Merged pull request #55](https://github.com/TruFoundation/TruShell/pull/55) replaces shell-mediated execution with argument-vector execution, adds security regression coverage, moves appropriate database tests to in-memory SQLite, and restores the CLI help entry point |
| SecOps-NG Cyber Resilience Act mapping | [Merged pull request #281](https://github.com/secops-ng/secops-ng-framework/pull/281) adds the CRA Article 13(8) support-period mapping and corrects a conflicting security-update citation after primary-source review; the custodian reported 1,801 passing tests and the project [publicly recognized it](https://github.com/secops-ng/secops-ng-website/pull/57) as its first external code-level contribution |
| detect-secrets GitHub token-format review | [Security review on PR #961](https://github.com/Yelp/detect-secrets/pull/961#pullrequestreview-4449083618) reproduces truncated secret capture and identifies overbroad token matching against GitHub's new App installation-token guidance |
| detect-secrets Helm false-positive triage | [Issue investigation](https://github.com/Yelp/detect-secrets/issues/360#issuecomment-4644973135) verifies the reported behavior against current `main` and documents passing coverage |
| Sigma CLI design contribution | [Issue proposal](https://github.com/SigmaHQ/sigma-cli/issues/81#issuecomment-4645043507) outlines a backward-compatible approach for configuration and pipeline behavior |

My contribution process and current roadmap are documented in
[OPEN_SOURCE.md](OPEN_SOURCE.md).

## Engineering Principles

- Build security tools whose findings can be explained and investigated.
- Prefer focused, auditable implementations with minimal dependencies.
- Design outputs for automation, reporting, and operational use.
- Document projects so others can evaluate, run, and extend the work.

## GitHub Activity

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=omobolajiadeyan&show_icons=true&theme=dark&hide_border=true&count_private=true&include_all_commits=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=omobolajiadeyan&layout=compact&theme=dark&hide_border=true&langs_count=8)

![Contribution Streak](https://streak-stats.demolab.com?user=omobolajiadeyan&theme=dark&hide_border=true)

## Contact

I am open to cybersecurity engineering, software development, research, and
open-source collaboration opportunities.

- Email: [omobolaji.adeyan@gmail.com](mailto:omobolaji.adeyan@gmail.com)
- LinkedIn: [linkedin.com/in/oeadeyan](https://www.linkedin.com/in/oeadeyan)
- OWASP Nest: [nest.owasp.org/members/omobolajiadeyan](https://nest.owasp.org/members/omobolajiadeyan)
- GitHub: [github.com/omobolajiadeyan](https://github.com/omobolajiadeyan)
