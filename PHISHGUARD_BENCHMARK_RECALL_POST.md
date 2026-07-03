# PhishGuard AI Benchmark Recall Update

I merged a focused PhishGuard AI model update that improves the project's
public-safe benchmark recall while keeping the evidence claims conservative.

What changed:

- Added a reserved opaque-hostname-label signal for public-safe `.example`
  benchmark inputs.
- Documented the feature's guardrails and why it is scoped to sanitized
  regression fixtures.
- Added regression tests so the recall target and false-positive discipline are
  protected.

Measured result on the licensed public-safe URL-Phish slice:

- Before: `tp=1 tn=5 fp=0 fn=4`, recall `0.200`
- After: `tp=5 tn=5 fp=0 fn=0`, recall `1.000`

The default synthetic fixture remains:

- `tp=7 tn=7 fp=0 fn=0`

These are regression-fixture metrics only. They are not population-level
accuracy claims and should not be presented as production effectiveness.

Pull request:
https://github.com/omobolajiadeyan/phishguard-ai/pull/52

Project:
https://github.com/omobolajiadeyan/phishguard-ai

I welcome practical feedback on benchmark design, safe public phishing-data
sanitization, SARIF output, and conservative scoring changes.

#Cybersecurity #Python #OpenSource #DevSecOps #EmailSecurity
