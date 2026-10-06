# FreNiMiGuard — security engineering evidence

FreNiMiGuard is a proprietary vulnerability-management and compliance-evidence
platform that I designed and built at FreNiMi. This record keeps the live
service check apart from the local engineering validation. Neither is a
certification or an independent security assessment.

Last checked: **4 October 2026**.

## Live service

`GET https://frenimiguard.com/api/v1/health` returned HTTP 200, with the API
and database online and service version `1.0.0`. That shows the health route
responded at that time and nothing more. The endpoint doesn't report a
deployment commit, so it can't show from outside which source revision
production runs.

Anyone can check that every response, including the HTML pages, script
bundles, and API, carries `Content-Security-Policy`, `Strict-Transport-Security`,
`X-Frame-Options: DENY`, and `X-Content-Type-Options: nosniff`:

```bash
curl -sI https://frenimiguard.com/ | grep -iE 'content-security|strict-transport|x-frame|x-content-type'
```

## Local engineering validation

The checks below ran at commit `994e099` on the private release branch, with a
clean working tree apart from an untracked archive folder. That commit was
deployed to production on 4 October 2026 (UTC). Before the deploy, the
checksums of the live backend's source files matched the previous release. The
source isn't public, so you can't reproduce these results from this repository.

| Check | Result |
|---|---|
| Backend tests (`pytest`) | 241 passed, 1 skipped |
| Frontend tests (`vitest run`) | 197 passed across 27 files |
| Frontend dependencies (`npm audit`) | 0 known vulnerabilities |
| Backend dependencies (`pip-audit -r requirements.txt -r requirements-dev.txt`) | No known vulnerabilities in the Windows-installable dependency set |

`sqlcipher3-binary` is marked as non-Windows because it has no Windows
distribution, so the Windows audit doesn't cover it. That runtime dependency
needs a Linux CI audit before release.

## Follow-up test run

On 6 October 2026, after additional billing and lifecycle-email work, the
private source checkout's full backend suite reported **340 passed and 11
skipped**; the frontend suite reported **220 passed across 31 files**. The
source snapshot was subsequently published to the private repository as commit
`34f3520`. These results are local test evidence, not a deployment check. The
dependency audits above are from the earlier 4 October snapshot and were not
rerun as part of this follow-up.

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
- **Missing security headers on pages (fixed in `7ee5ede`).** nginx drops
  server-level `add_header` directives in any `location` that sets its own.
  The page and bundle locations set `Cache-Control`, so HTML went out with no
  CSP, HSTS, or anti-framing headers. The headers now live in one snippet
  included in each such location. All 17 signed-in app pages and the public
  pages were then exercised in a browser under the exact policy, with no
  violations or page errors.
- **False matches on Windows (fixed in `2ca177a`, `31244e7`).** CISA KEV
  entries for Windows carry no version data, so every Windows CVE on the list
  matched every Windows machine by name. A patched Windows 11 24H2 laptop
  showed EternalBlue among about 265 findings. NVD lists Windows as one product
  per release, bounded by full build. The matcher now:
  - applies only the ranges for the machine's own release;
  - rules a CVE out when NVD lists other releases but not this one;
  - compares the full build for the rest.

  The agent (1.0.1) now reports the build with its update revision. Run against
  live CISA and NVD data, a machine reporting its full build got a definite
  verdict on all 61 Windows CVEs that had NVD data: 47 ruled out, 14 confirmed.
  Two were spot-checked by hand. Insider and unknown builds are never ruled out
  by NVD's silence.
- **CVEs matched to the platform they run on (fixed in `43fa5e2`, `994e099`).**
  NVD records list platforms (`"vulnerable": false`) beside the vulnerable
  product, and the feed counted both, so a GLib bug that shows on Windows
  matched every Windows machine. Programs named "Microsoft Windows ..." also
  matched Windows CVEs, and entries with no version data (`-`, as NVD lists
  most Microsoft products) were read as "every version affected". Only
  vulnerable entries and real version bounds count now, and feed entries
  stored the old way are re-read from NVD. On the one live workstation this
  took open findings from 1,457 to 462. The 11 still confirmed are outdated
  ASP.NET Core and FFmpeg installs.
- **Audit events written by a read (fixed in `daec7f2`).** Loading the
  compliance checklist also saved it when none existed yet. On a new
  workspace, each sign-in logged four false "Compliance update" events, and a
  read-only auditor's load failed on the refused write.

## Known limitations

- Windows findings get a definite verdict only once the CVE's NVD record has
  been fetched. That happens hourly, starting with CVEs that match an asset.
  It also needs the machine's full build: imported inventories that give only a
  release name ("Windows 11 23H2") can rule out releases but leave the rest for
  an analyst. Agents installed before 1.0.1 need reinstalling to report full
  builds.
- New Windows feature updates must be added to the release table before
  machines on them can be ruled out.

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
