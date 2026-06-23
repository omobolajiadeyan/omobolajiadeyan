---
title: SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers
published: true
description: How PhishGuard AI treats email authentication failures as explainable evidence without turning them into automatic phishing verdicts.
tags: cybersecurity, emailsecurity, python, opensource
---

Email authentication is valuable evidence, but it is not a verdict.

SPF, DKIM, and DMARC can help a receiving system decide whether a message came
through authorized infrastructure and whether authenticated identities align
with the visible sender. But in phishing detection, treating those checks as
magic answers can create the wrong kind of confidence.

That distinction shaped the email-authentication support I added to
[PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai), my
open-source Python phishing-detection project.

PhishGuard parses a trusted receiver's `Authentication-Results` header and
treats authentication failures as supporting evidence. It does not independently
query DNS, evaluate SPF policy, verify DKIM signatures, or perform DMARC
alignment. That means the caller must provide authentication results produced by
a receiver they trust.

This is deliberate. The goal is explainable phishing detection, not hidden
security theater.

## What SPF, DKIM, and DMARC Prove

SPF can show whether a sending IP was authorized by the domain's SPF policy.

DKIM can show whether a message has a valid cryptographic signature from a
domain and whether signed content remained intact.

DMARC can show whether SPF or DKIM passed in a way that aligns with the visible
sender domain, according to the domain owner's policy.

Together, these checks are powerful. They make spoofing harder, support domain
protection, and give defenders useful evidence when investigating suspicious
email.

But they do not answer every question.

## What They Do Not Prove

An SPF, DKIM, or DMARC pass does not prove that a message is safe.

Attackers can send malicious content from infrastructure they control. A
compromised mailbox, abused email service, or maliciously registered domain may
still pass authentication checks.

An authentication failure also does not automatically prove phishing.

Forwarding, mailing lists, and message transformations can break SPF or DKIM in
ways that are not malicious. If a detector treats every authentication failure
as a phishing verdict, it can punish legitimate mail and create avoidable false
positives.

This is why PhishGuard treats authentication results as evidence, not proof.

## The Scoring Boundary

The implementation is intentionally conservative:

- Authentication failures can increase risk when combined with suspicious
  content.
- Authentication passes do not reduce risk, because authenticated
  infrastructure can still send malicious messages.
- Missing, malformed, and unsupported authentication values remain `unknown`.
- A single SPF failure is not treated as proof of phishing.

That last point matters. Security tools should preserve uncertainty when the
input signal is incomplete.

## Regression Examples

Two regression cases demonstrate the boundary.

A legitimate forwarded message with SPF failure remained `SAFE`, moving from:

```text
0.3149 -> 0.3595
```

A synthetic credential lure with SPF, DKIM, and DMARC failures moved from:

```text
0.6525 SUSPICIOUS -> 0.8220 PHISHING
```

The difference is context. Authentication failure is more meaningful when other
features also look suspicious.

## Explainable JSON Output

PhishGuard can export the feature set as JSON so the decision is inspectable:

```json
{
  "verdict": "PHISHING",
  "probability": 0.8134,
  "features": {
    "spf_result": "fail",
    "dkim_result": "fail",
    "dmarc_result": "fail",
    "spf_auth_risk": 1.0,
    "dkim_auth_risk": 1.0,
    "dmarc_auth_risk": 1.0
  }
}
```

The same analysis can be exported as SARIF 2.1.0 for GitHub Code Scanning and
security automation workflows.

That is important because security findings should be reviewable by people and
usable by machines.

## Why SARIF Matters

SARIF gives security tools a standard way to describe findings, rules,
locations, severity, fingerprints, and properties.

For PhishGuard, SARIF output means a phishing finding can carry the same
explainable feature evidence into CI and code-scanning workflows. A reviewer can
see not only that something was flagged, but why it was flagged.

This fits the larger design goal: make detection understandable enough that a
human can challenge it.

## Tests and Safety Checks

The email-authentication work is covered by:

- Case-insensitive parser tests
- Forwarding false-positive regression coverage
- CLI support
- JSON and SARIF output examples
- Repository policy checks
- CodeQL
- Packaging verification
- Tests across Python 3.10 through 3.13

The project also documents what the current metrics do and do not establish.
Small fixtures and synthetic examples are useful regression evidence, but they
are not the same thing as population-level accuracy or production adoption.

## Engineering Evidence

- Project:
  [github.com/omobolajiadeyan/phishguard-ai](https://github.com/omobolajiadeyan/phishguard-ai)
- GitHub Marketplace Action:
  [PhishGuard AI Phishing Detector](https://github.com/marketplace/actions/phishguard-ai-phishing-detector)
- Authentication implementation:
  [PR #21](https://github.com/omobolajiadeyan/phishguard-ai/pull/21)
- JSON and SARIF examples:
  [EMAIL_OUTPUT_EXAMPLES.md](https://github.com/omobolajiadeyan/phishguard-ai/blob/main/docs/EMAIL_OUTPUT_EXAMPLES.md)
- Current release:
  [v0.5.1](https://github.com/omobolajiadeyan/phishguard-ai/releases/tag/v0.5.1)

## The Lesson

Explainable security software should preserve uncertainty.

SPF, DKIM, and DMARC are useful signals. They can strengthen a phishing
assessment, especially when combined with suspicious content, URL structure, and
other behavioral features.

But they should not become shortcuts for thinking.

The more important engineering principle is this: a security tool should show
its work. It should make the signal, trust boundary, limitation, and scoring
impact visible enough for another person to test, question, and improve.

That is the direction I am building with PhishGuard AI.

## Feedback I Would Value

If you work with email security, SOC workflows, GitHub Actions, or phishing
analysis, I would welcome technical feedback on three questions:

1. Should authentication failures influence risk differently for forwarded
   messages, mailing lists, and direct sender-to-recipient mail?
2. What additional safe regression examples would make this kind of scoring
   easier to trust?
3. Would SARIF output from a phishing detector be useful in your CI or security
   review workflow, or would another format be more practical?

Comments, issues, and small test cases are welcome. The most useful feedback is
specific: a false-positive case, a scoring concern, a documentation gap, or a
workflow where this output would or would not help.
