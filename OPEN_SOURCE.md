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
