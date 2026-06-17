# Open-Source Engagement Kit

This document defines how I build a credible public contribution record:
useful work, reproducible evidence, and respectful maintainer collaboration.

## Contribution Standard

Every contribution should meet at least one of these tests:

- Fix a reproducible bug or security weakness.
- Add regression coverage for documented behavior.
- Improve technical documentation after verifying the implementation.
- Triage an issue with a clear reproduction, source citation, or test result.
- Review a pull request with specific, technically grounded feedback.

I do not use empty forks, cosmetic commit spam, copied profile content, or
artificial activity to inflate contribution counts.

## Current Public Work

| Project | Contribution | Status |
| --- | --- | --- |
| [PhishGuard AI](https://github.com/omobolajiadeyan/phishguard-ai) | [v0.4.0](https://github.com/omobolajiadeyan/phishguard-ai/releases/tag/v0.4.0) provides verified packages, SARIF 2.1.0 output, a public-safe benchmark, and signed provenance; [PR #21](https://github.com/omobolajiadeyan/phishguard-ai/pull/21) adds conservative SPF, DKIM, and DMARC signals; [external PR #7](https://github.com/omobolajiadeyan/phishguard-ai/pull/7) was merged after requested revisions, local verification, protected CI, and CodeQL | Maintained project with external contributors |
| [Location Authentication](https://github.com/omobolajiadeyan/Location-Authentication) | [PR #1](https://github.com/omobolajiadeyan/Location-Authentication/pull/1) replaces hardcoded success and default biometric capture with validated radius checks, independent identity evidence, fail-closed exits, privacy-conscious output, tests, packaging, CodeQL, and repository content controls | Security redesign merged to maintained fork |
| [Prowler](https://github.com/prowler-cloud/prowler) | [PR #11515](https://github.com/prowler-cloud/prowler/pull/11515) contributed Microsoft Entra directory-sync object-takeover improvements; maintainer consolidated the work into [merged PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) and credited me as co-author | Credited in merged upstream PR |
| [OWASP Agent Security Regression Harness](https://github.com/OWASP/Agent-Security-Regression-Harness) | [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) adds recursive scenario validation for files, directories, and globs with CLI tests and CI documentation; local validation passed 333 tests, Ruff, mypy, and scenario smoke testing | Open for review |
| [OpenSSF Scorecard](https://github.com/ossf/scorecard) | [PR #5098](https://github.com/ossf/scorecard/pull/5098) extends the Dangerous Workflow check to detect committer name/email contexts as untrusted GitHub Actions script-injection inputs | Open for review |
| [Bandit](https://github.com/PyCQA/bandit) | [PR #1433](https://github.com/PyCQA/bandit/pull/1433) corrects B508/B509 SNMP argument and default handling with exact functional regression assertions | Open for review |
| [Checkov](https://github.com/bridgecrewio/checkov) | [PR #7573](https://github.com/bridgecrewio/checkov/pull/7573) adds graph-aware support for GitHub's dedicated Terraform vulnerability-alert resource while preserving legacy behavior | Open for review |
| [TruShell](https://github.com/TruFoundation/TruShell) | [Merged PR #55](https://github.com/TruFoundation/TruShell/pull/55) removes shell-mediated fallback execution, adds security regression tests, improves database test isolation, and fixes the CLI help entry point | Merged upstream |
| [detect-secrets](https://github.com/Yelp/detect-secrets) | [Review on PR #961](https://github.com/Yelp/detect-secrets/pull/961#pullrequestreview-4449083618) demonstrates truncated secret capture and scopes the new GitHub token format to `ghs_` without imposing a new fixed maximum | Changes requested |
| [SecOps-NG](https://github.com/secops-ng/secops-ng-framework) | [Merged PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) adds the CRA Article 13(8) support-period mapping, corrects the security-update dissemination citation against EUR-Lex, and updates OSCAL parity; [field note #46](https://github.com/secops-ng/secops-ng-website/pull/57) independently recognizes it as the framework's first external code-level contribution | Merged upstream and publicly recognized |

## Weekly Cadence

| Activity | Weekly target |
| --- | --- |
| Issue triage | 2 verified reproductions or source reviews |
| Code contribution | 1 focused pull request with tests |
| Review | 1 thoughtful review on a project I understand |
| Documentation | 1 improvement tied to actual project behavior |
| Portfolio maintenance | Update evidence links after reviews or merges |

## Target Areas

- Python security tooling
- Secrets detection and secure development
- Vulnerability intelligence and CVE workflows
- Threat detection and log analysis
- Security compliance automation
- Developer-focused command-line tools

## Issue Comment Template

```text
I reproduced this on <version/commit> using <environment>.

Observed:
<concise result>

Expected:
<concise expected behavior>

I can submit a focused change with regression coverage if this approach
matches the maintainers' intent.
```

## Pull Request Template

```text
## Summary
- <behavior changed>
- <test or documentation added>

## Why
Closes #<issue>. <one-sentence technical reason>

## Verification
- `<targeted test command>` - passed
- `<lint/type command>` - passed

## Scope
No unrelated refactors or dependency changes.
```

## Review Checklist

- The issue is current and not already covered by an open pull request.
- The change follows the repository's contribution and security policies.
- Tests demonstrate the failure before the fix and the expected behavior after.
- Commit and pull-request descriptions explain behavior, not personal promotion.
- Any failing checks are disclosed with enough detail for a maintainer to assess.
