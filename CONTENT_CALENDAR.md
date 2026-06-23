# Public Visibility Calendar

This calendar keeps public engagement focused on useful evidence rather than
activity for its own sake.

## Weekly Routine

| Day | Action | Output |
| --- | --- | --- |
| Monday | Publish one short technical post | LinkedIn post or article |
| Tuesday | Respond to GitHub issues, PRs, and reviews | Clear maintainer replies |
| Wednesday | Contribute or review one focused issue | PR, review, or reproduction |
| Thursday | Improve one demo, README, or evidence page | Better onboarding asset |
| Friday | Update evidence log and share progress | Public evidence update |

## Current Content Priorities

1. **PUBLISHED 2026-06-18** — OWASP merge post: [From Single Files to Scenario Suites](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7) — live on DEV.to.
2. **PUBLISHED 2026-06-22** - PhishGuard post: [SPF, DKIM, and DMARC in Phishing Detection](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91). Feedback issue: https://github.com/omobolajiadeyan/phishguard-ai/issues/45.
3. FreNiMi Checkers post: safe session revocation and WebSocket cleanup. Draft in ARTICLE_DRAFTS.md Article 3.
4. AppSec Bridge post: mapping scan findings to traceable compliance evidence.

## Publishing Targets

- DEV.to (dev.to) for technical articles — good indexing, developer audience
- LinkedIn for shorter posts and reach
- Tag OWASP and relevant maintainers when referencing merged upstream work

## Outreach Targets

Use focused, respectful outreach:

- Ask maintainers for one scoped validation, test, or documentation gap.
- Invite contributors to specific good-first issues, not broad project requests.
- Ask users to test a demo and leave one concrete issue comment.
- Share implementation notes only when they teach something reproducible.

## Public Issue Links

### PhishGuard AI

- https://github.com/omobolajiadeyan/phishguard-ai/issues/38
- https://github.com/omobolajiadeyan/phishguard-ai/issues/39
- https://github.com/omobolajiadeyan/phishguard-ai/issues/40
- https://github.com/omobolajiadeyan/phishguard-ai/issues/41

### FreNiMi Checkers

- https://github.com/omobolajiadeyan/frenimi-checkers/issues/10
- https://github.com/omobolajiadeyan/frenimi-checkers/issues/11
- https://github.com/omobolajiadeyan/frenimi-checkers/issues/12

### OWASP Agent Security Regression Harness (good-first targets)

- Issue #82: Add SARIF output for code scanning integrations
- Issue #85: Add suite-level runner for scenario and trace directories
- Issue #96: Extend MCP host adapter (HTTP transport, OAuth, full lifecycle)

## Quality Bar

Every public update should answer:

- What changed?
- Why does it matter?
- How can someone verify it?
- What is the next useful contribution?

## Maintainer Follow-Up Schedule

Follow up only when the PR is still open, CI is green, no newer maintainer
message exists, and at least seven quiet days have passed.

| Earliest date | Pull request | Current position |
| --- | --- | --- |
| 2026-06-24 | [OpenSSF Scorecard #5098](https://github.com/ossf/scorecard/pull/5098) | DCO and Kusari pass; waiting for review. |
| 2026-06-26 | [OWASP Agent Security Regression Harness #153](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/153) | Lint, tests, and security scenarios pass. |
| 2026-06-27 | [CISA ScubaGear #2237](https://github.com/cisagov/ScubaGear/pull/2237) | Focused DMARC tests pass locally; waiting for review. |
| 2026-06-29 | [Dependency-Track #6477](https://github.com/DependencyTrack/dependency-track/pull/6477) | Review changes addressed; DCO, Codacy, and Snyk pass. |
| 2026-06-29 | [RamenDR ramenctl #466](https://github.com/RamenDR/ramenctl/pull/466) | Rebased and newly added workflow action pinned as requested. |
