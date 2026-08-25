<div align="center">

<img src="assets/profile-banner.svg" alt="Omobolaji Adeyan - Founder, FreNiMi. Security Engineering, AppSec Automation, Evidence-Driven Reviews" width="100%" />

<br />

<a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">
  <img src="https://img.shields.io/badge/GitHub%20Marketplace-PhishGuard%20Security-2EA44F?style=flat-square&logo=github" alt="PhishGuard on GitHub Marketplace" />
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

**[Flagship](#flagship-project-phishguard)** · **[Security Projects](#selected-security-projects)** · **[Credentials](#credentials--recognition)** · **[Open Source](#open-source-contributions)** · **[Writing](#writing)** · **[Stack](#core-stack)** · **[Contact](#contact)**

</div>

---

## Security Engineering That Produces Reviewable Evidence

I build security tooling that turns noisy signals into findings engineers can
reproduce, review, and act on. My work spans phishing analysis, vulnerability
triage, threat detection, CI/CD hardening, SARIF reporting, and NIST
800-53/OSCAL compliance automation.

I am the founder of **[FreNiMi](https://frenimi.com)**, a security-first product
studio, and the builder of **[FreNiMiGuard](https://frenimiguard.com)**. Start
with **[PhishGuard](https://github.com/omobolajiadeyan/phishguard-ai)** for a
complete product example, then review the linked contributions for the same
discipline applied inside established open-source projects.

<table>
  <tr>
    <td width="33%" align="center">
      <strong>Product Delivery</strong><br />
      Marketplace action · CLI · API · browser
    </td>
    <td width="33%" align="center">
      <strong>Open-Source Trust</strong><br />
      Merged security work across 5 communities
    </td>
    <td width="33%" align="center">
      <strong>Security Foundation</strong><br />
      Security+ · AWS foundations · BS IT
    </td>
  </tr>
</table>

---

## Flagship Project: [PhishGuard](https://github.com/omobolajiadeyan/phishguard-ai)

PhishGuard is an explainable phishing detector for URLs and email. Default scoring runs locally with no API key; opt-in RDAP domain-age checks are the documented exception. Use it from the CLI, Python API, browser, REST server, GitHub Actions, or Code Scanning.

<p align="center">
  <strong><a href="https://omobolajiadeyan.github.io/phishguard-ai/">Try the live demo</a></strong> ·
  <strong><a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">View on Marketplace</a></strong> ·
  <strong><a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">Review the evidence</a></strong> ·
  <strong><a href="https://github.com/omobolajiadeyan/phishguard-ai">Browse the source</a></strong>
</p>

```yaml
- uses: omobolajiadeyan/phishguard-ai@v0.5.1
```

| Capability | Current proof |
|---|---|
| Explainable detection | URL, email, redirect, typosquatting, and authentication-signal analysis with readable reasons |
| Tested behavior | 199-test validation run; 2 skips and 1 tracked expected failure are disclosed |
| Automation | JSON and SARIF 2.1.0, reusable GitHub Action, REST API, and Code Scanning integration |
| Trust boundaries | Local by default; authentication failures are supporting evidence, not automatic proof of phishing |

<p align="center">
  <img src="assets/phishguard-demo.svg?v=20260824-2" alt="Current PhishGuard AI CLI validation: 25.3 percent SAFE and 98.8 percent PHISHING, with 199 tests completed" width="80%" />
</p>

<p align="center"><sub>Current CLI output is shown above. The full suite was verified separately: 199 tests completed, 2 skipped, and 1 expected failure. Reproduction commands, benchmark results, and limitations are in <a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">PROJECT_EVIDENCE.md</a>.</sub></p>

### Next Engineering Focus

| Priority | Why it matters |
|---|---|
| Offline domain-reputation context | Reduce known false positives on legitimate branded subdomains and security-heavy paths |
| Unicode confusable matching | Detect brand impersonation beyond the current punycode and hostname signals |
| Broader benchmark provenance | Measure changes against larger, dated, reproducible public samples without overstating accuracy |

These are evidence-driven priorities, not shipped claims. The current model's
limitations remain documented in the
[detection model](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/DETECTION_MODEL.md#known-limitations).

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
| **GitHub Marketplace Publisher** | Took PhishGuard from implementation through packaging, documentation, release, and reusable delivery |

---

## Open-Source Contributions

### Merged

| Community | Merged contribution | Security impact |
|---|---|---|
| OWASP | [Agent Security Regression Harness #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) | Added scenario-directory and glob validation for repeatable agent-security testing |
| OWASP | [cve-lite-cli #602](https://github.com/OWASP/cve-lite-cli/pull/602) | Added risk context and next-action guidance to vulnerability reports |
| Prowler | [Prowler #11098](https://github.com/prowler-cloud/prowler/pull/11098) | Added an M365 control for directory-sync object-takeover protection (co-authored, folded in from #11515) |
| SecOps-NG | [secops-ng-framework #281](https://github.com/secops-ng/secops-ng-framework/pull/281) | Extended compliance mappings for the EU Cyber Resilience Act |
| RamenDR | [ramenctl #466](https://github.com/RamenDR/ramenctl/pull/466) | Hardened the software supply chain by pinning GitHub Actions to commit SHAs |
| TruFoundation | [TruShell #55](https://github.com/TruFoundation/TruShell/pull/55) | Fixed a shell-injection vulnerability in the OS fallback path |

Only merged work is presented as completed. The
**[Open Source Log](OPEN_SOURCE_LOG.md)** keeps the fuller dated record and
clearly separates landed contributions from work awaiting maintainer review.

---

## Writing

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)
- [PhishGuard benchmark recall note](PHISHGUARD_BENCHMARK_RECALL_POST.md)

---

## Core Stack

**Python · JavaScript · TypeScript · Node.js · React · SQLite · Docker · GitHub Actions · SARIF · CodeQL · MITRE ATT&CK · NIST SP 800-53**

---

## Contact

Building FreNiMi's security-automation product line and open-sourcing the
reusable parts. Open to application-security tooling collaboration, technical
advisory work, and senior security-engineering opportunities centered on
measurable product outcomes.

<p align="center">
  <a href="https://omobolajiadeyan.com">Website</a> ·
  <a href="https://www.linkedin.com/in/oeadeyan">LinkedIn</a> ·
  <a href="https://dev.to/doidun2">Writing</a> ·
  <a href="https://hackerone.com/doidun">HackerOne</a> ·
  <a href="mailto:omobolaji.adeyan@gmail.com">Email</a>
</p>
