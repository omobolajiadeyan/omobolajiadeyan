# Omobolaji Adeyan

**Cybersecurity Engineer | Python Developer | Security Automation**

[![Email](https://img.shields.io/badge/Email-Contact_Me-0A66C2?style=flat-square&logo=gmail&logoColor=white)](mailto:omobolaji.adeyan@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oeadeyan)
[![Portfolio](https://img.shields.io/badge/GitHub-Security_Projects-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan?tab=repositories)
[![Open to Work](https://img.shields.io/badge/Status-Open_to_Opportunities-2ea44f?style=flat-square)](mailto:omobolaji.adeyan@gmail.com)

I am an Information Technology graduate and cybersecurity professional who
develops open-source security tools that turn complex data into clear,
actionable findings. My work focuses on explainable detection, practical
automation, and software designed for real security operations workflows.

## What I Build

- Detection tools that explain why an event, URL, or identity is suspicious
- Vulnerability intelligence workflows that turn CVE data into remediation steps
- Developer security automation designed for CI/CD and structured reporting
- Lightweight Python applications with auditable, dependency-conscious designs

## Selected Engineering Work

### Flagship Community Project

[**PhishGuard AI**](https://github.com/omobolajiadeyan/phishguard-ai) is my
community-led, open-source phishing detection project. I created and maintain
its detection model, contributor roadmap, governance, security policy, release
process, and technical direction. It welcomes contributions through scoped
[issues](https://github.com/omobolajiadeyan/phishguard-ai/issues), including
first-time contributor tasks, with a public
[community roadmap and contribution guide](https://github.com/omobolajiadeyan/phishguard-ai/discussions/11).
The current
[v0.4.0 release](https://github.com/omobolajiadeyan/phishguard-ai/releases/tag/v0.4.0)
ships validated SARIF 2.1.0 output, conservative IDN detection, a reproducible
public-safe benchmark, cross-version tests, checksums, and signed build
provenance. Its public
[detection model standard](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/DETECTION_MODEL.md)
documents feature semantics, limitations, and the evidence required for
scoring changes. Its merged
[URL regression benchmark](https://github.com/omobolajiadeyan/phishguard-ai/pull/13)
reports deterministic confusion-matrix metrics over a documented public-safe
fixture while explicitly separating regression results from real-world
accuracy claims. The detector also includes conservatively weighted
[IDN and punycode hostname signals](https://github.com/omobolajiadeyan/phishguard-ai/pull/14)
with false-positive regressions for legitimate internationalized domains.
The project is also receiving external contributions:
[PR #7](https://github.com/omobolajiadeyan/phishguard-ai/pull/7), submitted
by BeauDevCode, added an ASCII-only CLI mode and was merged after maintainer
review, cross-version tests, packaging checks, and CodeQL all passed.

| Project | What it demonstrates |
| --- | --- |
| [PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai) | Community-led offline phishing detection with explainable heuristic scoring, validated SARIF 2.1.0 output, Windows compatibility, CI, governance, releases, and a public roadmap |
| [FreNiMi Checkers](https://github.com/omobolajiadeyan/frenimi-checkers) | Secure full-stack game platform with minimax AI, realtime WebSocket matchmaking, SQLite ratings, PWA support, hashed sessions, strict origin controls, dependency auditing, and CodeQL |
| [VulnGPT](https://github.com/omobolajiadeyan/vulngpt) | CVE analysis using NVD data, AI-assisted reporting, rule-based fallback, remediation guidance, and SOC detection advice |
| [BehaviorSense](https://github.com/omobolajiadeyan/behaviorsense) | Behavioral anomaly detection for users and IP addresses using statistical baselines and weighted risk scoring |
| [Log Analyzer](https://github.com/omobolajiadeyan/log-analyzer) | Threat detection across system and application logs with MITRE ATT&CK mappings and SIEM-ready JSON output |
| [CVE Dashboard](https://github.com/omobolajiadeyan/cve-dashboard) | Real-time vulnerability intelligence from the NVD API with CVSS filtering, search, and structured export |
| [Secrets Scanner](https://github.com/omobolajiadeyan/secrets-scanner) | CI-friendly source-code scanning for exposed credentials, tokens, and other high-risk secrets |

## Core Skills

`Python` | `Security Automation` | `Threat Detection` | `Log Analysis` |
`Behavioral Analytics` | `CVE/NVD` | `MITRE ATT&CK` | `REST APIs` |
`JSON` | `CI/CD` | `Git`

## Current Focus

- Contributing to established open-source cybersecurity projects
- Improving test coverage and documentation across my security tools
- Building public evidence of secure software engineering and collaboration

## Open Source Contributions

| Contribution | Evidence |
| --- | --- |
| PhishGuard community maintenance | [Merged external PR #7](https://github.com/omobolajiadeyan/phishguard-ai/pull/7) documents contributor coordination, requested revisions, local verification, protected CI approval, CodeQL review, and an upstream merge |
| OWASP agent-security regression tooling | [Pull request #147](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/147) adds recursive directory and glob validation for agent-security scenarios, per-file results, summary counts, CLI tests, and CI documentation |
| Bandit SNMP detector argument handling | [Pull request #1433](https://github.com/PyCQA/bandit/pull/1433) fixes B508/B509 false negatives and false positives by resolving pysnmp defaults, positional and keyword arguments, explicit `None`, and dynamic values, with exact functional finding assertions |
| Checkov GitHub vulnerability-alert support | [Pull request #7573](https://github.com/bridgecrewio/checkov/pull/7573) migrates `CKV_GIT_3` to a graph-aware policy for the Terraform provider's dedicated alerts resource, with parser-backed legacy and provider 6.12+ regression coverage |
| TruShell OS fallback security fix | [Merged pull request #55](https://github.com/TruFoundation/TruShell/pull/55) replaces shell-mediated execution with argument-vector execution, adds security regression coverage, moves appropriate database tests to in-memory SQLite, and restores the CLI help entry point |
| detect-secrets GitHub token-format review | [Security review on PR #961](https://github.com/Yelp/detect-secrets/pull/961#pullrequestreview-4449083618) reproduces truncated secret capture and identifies overbroad token matching against GitHub's new App installation-token guidance |
| detect-secrets Helm false-positive triage | [Issue investigation](https://github.com/Yelp/detect-secrets/issues/360#issuecomment-4644973135) verifies the reported behavior against current `main` and documents passing coverage |
| Cyber Resilience Act mapping review | [Maintainer-accepted source review](https://github.com/secops-ng/secops-ng-framework/issues/193#issuecomment-4646290498) corrects the Article 13(8)/13(9) scope against EUR-Lex; [follow-up review](https://github.com/secops-ng/secops-ng-framework/issues/193#issuecomment-4650967584) catches a second conflicting citation before contradictory compliance data is committed |
| Sigma CLI design contribution | [Issue proposal](https://github.com/SigmaHQ/sigma-cli/issues/81#issuecomment-4645043507) outlines a backward-compatible approach for configuration and pipeline behavior |

My contribution process and current roadmap are documented in
[OPEN_SOURCE.md](OPEN_SOURCE.md).

## Engineering Principles

- Build security tools whose findings can be explained and investigated.
- Prefer focused, auditable implementations with minimal dependencies.
- Design outputs for automation, reporting, and operational use.
- Document projects so others can evaluate, run, and extend the work.

## Contact

I am open to cybersecurity engineering, software development, research, and
open-source collaboration opportunities.

- Email: [omobolaji.adeyan@gmail.com](mailto:omobolaji.adeyan@gmail.com)
- LinkedIn: [linkedin.com/in/oeadeyan](https://www.linkedin.com/in/oeadeyan)
- GitHub: [github.com/omobolajiadeyan](https://github.com/omobolajiadeyan)
- Earlier project archive: [github.com/oadeyan](https://github.com/oadeyan)
