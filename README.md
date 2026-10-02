<div align="center">

<img src="assets/profile-banner.svg?v=20261001-1" alt="Omobolaji Adeyan — cybersecurity engineer and security tool builder. Security tools built around proof, not promises." width="100%" />

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

**[PhishGuard](#phishguard--explainable-phishing-detection)** · **[Security tools](#selected-security-systems)** · **[Merged contributions](#open-source-impact)** · **[Evidence](#proof-over-promises)** · **[Contact](#build-with-me)**

</div>

---

## Cybersecurity engineering with reviewable evidence

I am a cybersecurity engineer and security tool builder. I work across
application security, detection engineering, vulnerability triage, and
security automation, and I ship the tools I build: CLIs, GitHub Actions,
APIs, and SARIF output that drops into Code Scanning. Every tool comes with
reproducible tests, explainable findings, and documented limits. I build
under **[FreNiMi](https://frenimi.com)** and contribute upstream to
CISA, OWASP, and Prowler. Start with
**[PhishGuard](https://github.com/omobolajiadeyan/phishguard-ai)**, then review
the merged upstream contributions and project evidence below.

For compliance engineering and security-platform work, see the
[FreNiMiGuard case study and validation record](reports/frenimiguard/PROJECT_EVIDENCE.md).

<table role="presentation">
  <tr>
    <td width="33%" align="center">
      <strong>Security engineering</strong><br />
      AppSec · detection · vulnerability triage
    </td>
    <td width="33%" align="center">
      <strong>Security tool building</strong><br />
      CLI · GitHub Actions · SARIF · APIs
    </td>
    <td width="33%" align="center">
      <strong>Merged upstream</strong><br />
      CISA · OWASP · Prowler · more
    </td>
  </tr>
</table>

---

## PhishGuard — explainable phishing detection

Most phishing tools return a label. **PhishGuard returns a reviewable case.** It
scores URLs and email locally, identifies the contributing signals, and exports
the result wherever engineers already work—from a terminal to GitHub Code
Scanning. Opt-in RDAP domain-age checks are the documented network exception.

<p align="center">
  <strong><a href="https://omobolajiadeyan.github.io/phishguard-ai/">Try the live demo</a></strong> ·
  <strong><a href="https://github.com/marketplace/actions/phishguard-ai-phishing-detector">View on Marketplace</a></strong> ·
  <strong><a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">Review the evidence</a></strong> ·
  <strong><a href="https://github.com/omobolajiadeyan/phishguard-ai">Browse the source</a></strong>
</p>

```yaml
- uses: omobolajiadeyan/phishguard-ai@v0.5.1
```

| The engineering question | PhishGuard's answer |
|---|---|
| Why was this flagged? | Feature-level reasons across URL structure, typosquatting, redirects, email content, and supplied authentication results |
| Can I reproduce it? | All 199 tests re-run on 1 Oct 2026, including Python↔browser parity checks; 1 tracked expected failure marks a named, still-open gap |
| Can it join my workflow? | CLI, Python, REST, browser, JSON, SARIF 2.1.0, reusable Action, and Code Scanning |
| What should I not assume? | Heuristic supporting signal—not a guarantee, reputation feed, or replacement for layered controls |

<p align="center">
  <img src="assets/phishguard-demo.svg?v=20260824-2" alt="Current PhishGuard AI CLI validation: 25.3 percent SAFE and 98.8 percent PHISHING, with 199 tests completed" width="80%" />
</p>

<p align="center"><sub>CLI output above re-checked against <code>main</code> on 1 Oct 2026; scores match. Full suite: 199 tests, 1 tracked expected failure. The 2 JS-parity tests skip only when Node.js is absent. Reproduction commands, benchmark results, and limitations are in <a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">PROJECT_EVIDENCE.md</a>.</sub></p>

### From input to actionable evidence

```text
URL / email  →  local feature extraction  →  explainable risk score
                                                   ↓
                     CLI · JSON · SARIF · API · browser · GitHub Actions
```

The same scoring contract is shared across Python and the browser port, with
parity tests protecting against drift. That makes the demo useful as a real
product interface—not a disconnected mockup.

### What I am improving next

| Priority | Why it matters |
|---|---|
| Offline domain-reputation context | Reduce known false positives on legitimate branded subdomains and security-heavy paths |
| Unicode confusable matching | Detect brand impersonation beyond the current punycode and hostname signals |
| Broader benchmark provenance | Measure changes against larger, dated, reproducible public samples without overstating accuracy |

These are evidence-driven priorities, not shipped claims. The current model's
limitations remain documented in the
[detection model](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/DETECTION_MODEL.md#known-limitations).

---

## Proof over promises

I separate shipped behavior, measured behavior, and planned work. Every metric
links to a reproducible method; known false positives remain visible; and
security boundaries are documented beside the feature they constrain.

| Proof layer | Where to inspect it |
|---|---|
| Runtime behavior | [Dated project evidence](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md) and public-safe commands |
| Detection quality | [Regression and benchmark methodology](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/BENCHMARK.md) |
| Model boundaries | [Weights, assumptions, and known limitations](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/DETECTION_MODEL.md) |
| Delivery quality | Automated tests, repository policy, CodeQL, release artifacts, and Marketplace packaging |

---

## Selected security systems

| System | Problem → outcome | Evidence surface | Tests |
|---|---|---|---|
| [Secrets Scanner](https://github.com/omobolajiadeyan/secrets-scanner) | Exposed credentials → redacted, CI-ready findings | JSON · SARIF · reusable Action | [![Tests](https://github.com/omobolajiadeyan/secrets-scanner/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/secrets-scanner/actions/workflows/tests.yml) |
| [Log Analyzer](https://github.com/omobolajiadeyan/log-analyzer) | Raw event noise → ATT&CK-mapped investigation leads | MITRE ATT&CK · SARIF · reusable Action | [![Tests](https://github.com/omobolajiadeyan/log-analyzer/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/log-analyzer/actions/workflows/tests.yml) |
| [BehaviorSense](https://github.com/omobolajiadeyan/behaviorsense) | User/IP activity → explainable anomaly triage | Python · TypeScript · UEBA | [![Tests](https://github.com/omobolajiadeyan/behaviorsense/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/behaviorsense/actions/workflows/tests.yml) |
| [VulnGPT](https://github.com/omobolajiadeyan/vulngpt) | CVE metadata → prioritized remediation context | NVD · CVSS · CWE | [![Tests](https://github.com/omobolajiadeyan/vulngpt/actions/workflows/tests.yml/badge.svg)](https://github.com/omobolajiadeyan/vulngpt/actions/workflows/tests.yml) |
| [FreNiMiGuard](reports/frenimiguard/PROJECT_EVIDENCE.md) | Fragmented posture data → vulnerability and compliance tracking | Private source · dated validation record | 222 backend · 196 frontend (local) |

Test badges are live from each repository's CI. FreNiMiGuard is proprietary,
so its counts come from a local run on a private branch and can't be
reproduced from here; the linked record states what that does and doesn't prove.

---

<details>
<summary><strong>Credentials and recognition</strong></summary>

<br />

| Recognition | What it represents |
|---|---|
| **[CompTIA Security+ Certified](https://www.credly.com/badges/0b64bbac-e9a0-4889-a017-8894513823dc/public_url)** | Validated security operations, architecture, risk, incident response, and governance fundamentals — verifiable on Credly |
| **AWS Academy Cloud Foundations** | Cloud architecture, shared responsibility, security, pricing, and operational foundations |
| **BS, Information Technology** | Broad engineering foundation spanning systems, software, data, networking, and technology operations |
| **OWASP Contributor** | Merged application-security automation work in established OWASP projects |
| **GitHub Marketplace Publisher** | Took PhishGuard from implementation through packaging, documentation, release, and reusable delivery |

</details>

---

## Open-source impact

| Community | Merged contribution | Security impact |
|---|---|---|
| CISA | [ScubaGear #2237](https://github.com/cisagov/ScubaGear/pull/2237) | Made M365 DMARC policy discovery follow the RFC 9989 DNS tree walk, fixing misses on multi-label public suffixes such as `.fed.us` |
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

<details>
<summary><strong>Writing and technical notes</strong></summary>

<br />

- [SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91)
- [From Single Files to Scenario Suites: Batch Validation in the OWASP Agent Security Regression Harness](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7)
- [PhishGuard benchmark recall note](PHISHGUARD_BENCHMARK_RECALL_POST.md)

</details>

---

## Build with me

I am building FreNiMi's security-automation product line and open-sourcing the
reusable parts. If you are working on application-security tooling, detection
engineering, or evidence-driven security automation, let’s compare notes—or
build something useful together.

<p align="center">
  <a href="https://omobolajiadeyan.com">Website</a> ·
  <a href="https://www.linkedin.com/in/oeadeyan">LinkedIn</a> ·
  <a href="https://dev.to/doidun2">Writing</a> ·
  <a href="https://hackerone.com/doidun">HackerOne</a> ·
  <a href="mailto:omobolaji.adeyan@gmail.com">Email</a>
</p>
