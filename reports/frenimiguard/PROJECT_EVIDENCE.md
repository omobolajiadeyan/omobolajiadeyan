# FreNiMiGuard — security engineering evidence

FreNiMiGuard is a proprietary vulnerability-management and compliance-evidence
platform that I designed and built at FreNiMi. This record keeps the live
service check apart from the local engineering validation. Neither is a
certification or an independent security assessment.

Last checked: **3 October 2026**.

## Live service

`GET https://frenimiguard.com/api/v1/health` returned HTTP 200, with the API
and database online and service version `1.0.0`. That shows the health route
responded at that time and nothing more. The endpoint doesn't report a
deployment commit, so it can't show which source revision production runs.

## Local engineering validation

The checks below ran on the private `feature/endpoint-agent` branch at commit
`1537c09`, with a clean working tree apart from an untracked archive folder.
That commit isn't on the release branch yet, so production may be running an
earlier revision. The source isn't public, so you can't reproduce these
results from this repository.

| Check | Result |
|---|---|
| Backend tests (`pytest`) | 222 passed, 1 skipped |
| Frontend tests (`vitest run`) | 196 passed across 27 files |
| Frontend dependencies (`npm audit`) | 0 known vulnerabilities |
| Backend dependencies (`pip-audit -r requirements.txt -r requirements-dev.txt`) | No known vulnerabilities in the Windows-installable dependency set |

`sqlcipher3-binary` is marked as non-Windows because it has no Windows
distribution, so the Windows audit doesn't cover it. That runtime dependency
needs a Linux CI audit before release.

## Security design of the endpoint agent

The agent can run updates on customer machines, which makes it a
remote-code-execution channel. It is built around these controls:

- **Off by default, twice.** A workspace administrator has to enable remote
  actions, and each machine has to be installed with actions allowed. The
  agent enforces that second setting locally, whatever the server says.
- **Two-person approval.** By default, every action except an inventory
  refresh needs approval from an administrator other than the requester.
  Every request and decision is written to the audit trail.
- **Signed, bound envelopes.** Actions travel as a text envelope with the
  action ID, target agent, shell, timeout, expiry, and script, signed with the
  workspace's RSA key (PKCS#1 v1.5, SHA-256). The agent pins the public key
  at enrollment and rejects anything unsigned, expired, meant for another
  agent, or already run.
- **Secrets stored as hashes.** Enrollment keys, agent tokens, and API keys
  are random secrets stored only as SHA-256 hashes.
- **No admin API keys.** API credentials can only be auditor (read-only) or
  analyst keys. A leaked key can't manage users, SSO, enrollment keys, or
  remote-action settings, and can't approve an action.
- **Key separation.** Stored integration credentials are encrypted with a
  Fernet key separate from the JWT signing secret.
- **Verified closure.** After a fix, the agent sends a fresh inventory. A
  finding closes automatically only when the installed version falls outside
  NVD's affected range. Findings matched by product name alone are marked
  "fix applied, confirm" for an analyst.

## Security defects found and fixed

- **Broken access control (fixed in `a21ccd3`).** The read-only auditor role
  could write to assets, incidents, alerts, controls, compliance answers,
  integrations, and the threat-feed refresh. Every write path now requires the
  editor role.
- **Vulnerable transitive dependency (fixed in `1537c09`).** `python-jose`
  depended on an unpatched `ecdsa` package. JWT handling moved to PyJWT, and
  validation still uses the configured algorithm allow-list (HS256 by
  default). Axios, React Router, Vitest, cryptography, and the AWS SDK were
  updated in the same change.

## Known limitation

Matching on product name alone over-reports on fully patched Windows hosts,
because CISA KEV entries for Windows carry no version data. Third-party
software is confirmed or ruled out by NVD version ranges. Windows findings
still need an analyst until build-number matching is in place.

## What this does not prove

- The health check isn't evidence of customer use, production feature parity,
  or a penetration test.
- Passing tests and dependency audits don't mean the product itself meets
  NIST, HIPAA, CMMC, FISMA, or FedRAMP requirements.
- No independent penetration test, authorization to operate, or agency
  deployment is claimed.
- A NIST control dashboard isn't a certification or an authorization decision.

Product overview: [frenimiguard.com](https://frenimiguard.com). This profile
links the record as security-engineering evidence. It doesn't present
private source as open source.
