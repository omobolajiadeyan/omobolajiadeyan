<div align="center">

<img src="assets/profile-banner.svg?v=20260824-3" alt="Omobolaji Adeyan - security products built around reviewable evidence" width="100%" />

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

**[PhishGuard](#phishguard--explainable-phishing-detection)** · **[Proof](#proof-over-promises)** · **[Projects](#selected-security-systems)** · **[Open Source](#open-source-impact)** · **[Contact](#build-with-me)**

</div>

---

## Security tooling engineers can inspect, reproduce, and trust

I turn noisy security signals into clear decisions: what happened, why it was
flagged, and what an engineer should do next. My work spans phishing analysis,
vulnerability triage, CI/CD hardening, SARIF reporting, and compliance
automation—with the evidence and limitations kept visible.

I am the founder of **[FreNiMi](https://frenimi.com)**, a security-first product
studio, and the builder of **[FreNiMiGuard](https://frenimiguard.com)**. Start
with **[PhishGuard](https://github.com/omobolajiadeyan/phishguard-ai)** for a
complete product example, then review the linked contributions for the same
discipline applied inside established open-source projects.

<table role="presentation">
  <tr>
    <td width="33%" align="center">
      <strong>Ship the system</strong><br />
      CLI · API · browser · Marketplace
    </td>
    <td width="33%" align="center">
      <strong>Show the proof</strong><br />
      Tests · benchmarks · SARIF · docs
    </td>
    <td width="33%" align="center">
      <strong>Improve in public</strong><br />
      Merged work across security communities
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
| Can I reproduce it? | 199-test validation run with 2 skips and 1 tracked expected failure disclosed |
| Can it join my workflow? | CLI, Python, REST, browser, JSON, SARIF 2.1.0, reusable Action, and Code Scanning |
| What should I not assume? | Heuristic supporting signal—not a guarantee, reputation feed, or replacement for layered controls |

<p align="center">
  <img src="assets/phishguard-demo.svg?v=20260824-2" alt="Current PhishGuard AI CLI validation: 25.3 percent SAFE and 98.8 percent PHISHING, with 199 tests completed" width="80%" />
</p>

<p align="center"><sub>Current CLI output is shown above. The full suite was verified separately: 199 tests completed, 2 skipped, and 1 expected failure. Reproduction commands, benchmark results, and limitations are in <a href="https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/PROJECT_EVIDENCE.md">PROJECT_EVIDENCE.md</a>.</sub></p>

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

| System | Problem → outcome | Evidence surface |
|---|---|---|
| [Secrets Scanner](https://github.com/omobolajiadeyan/secrets-scanner) | Exposed credentials → redacted, CI-ready findings | JSON · SARIF · reusable Action |
| [Log Analyzer](https://github.com/omobolajiadeyan/log-analyzer) | Raw event noise → ATT&CK-mapped investigation leads | MITRE ATT&CK · SARIF |
| [BehaviorSense](https://github.com/omobolajiadeyan/behaviorsense) | User/IP activity → explainable anomaly triage | Python · TypeScript · UEBA |
| [VulnGPT](https://github.com/omobolajiadeyan/vulngpt) | CVE metadata → prioritized remediation context | NVD · CVSS · CWE |

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
