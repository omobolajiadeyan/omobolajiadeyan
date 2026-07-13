# Open-Source Activity Log

This log records recent open-source contributions in detail — what changed,
why, and how it was verified.

## 2026-07-13

### Prowler AWS Amplify Secret Detection Prototype

- Contribution: Built a focused Prowler prototype for
  `amplify_app_no_secrets_in_environment`, adding a new AWS Amplify service and
  a check for app-level and branch-level environment variables that may contain
  secrets.
- Evidence:
  [issue comment](https://github.com/prowler-cloud/prowler/issues/11817#issuecomment-4959091139)
  and
  [branch](https://github.com/omobolajiadeyan/prowler/tree/issue-11817-amplify-secrets).
- Verification: Focused pytest run passed with 6 tests in a temporary Python
  3.12 environment; direct metadata load for the new check succeeded.
- Status: Branch prepared and pushed to the fork; upstream issue is already
  assigned, so the next step is maintainer guidance before opening a PR.

### GitHub Profile Consistency And PhishGuard CI Maintenance

- Contribution: Updated the GitHub profile bio to remove ambiguous
  `CISA-certified` wording and align the public description with the accurate
  role: Security Engineer, OWASP contributor, and PhishGuard AI maintainer.
- Contribution: Replaced two split Dependabot CodeQL updates with a single
  combined workflow update so `github/codeql-action/init` and
  `github/codeql-action/analyze` are pinned to the same v4.37.0 commit.
- Evidence:
  [PR #67](https://github.com/omobolajiadeyan/phishguard-ai/pull/67).
- Verification: `python -m unittest discover -s tests -v` passed with 113
  tests; `python tools/repository_policy.py` passed; PR checks for Tests,
  PhishGuard Self-Scan, Marketplace action, Repository policy, package, and
  CodeQL passed.
- Status: Merged.

## 2026-07-12

### GitHub Profile And PhishGuard Maintenance

- Contribution: Refreshed the public profile evidence table to include the
  July PhishGuard maintenance set, covering CodeQL workflow updates, article
  links, product attribution, and documentation cleanup.
- Evidence:
  [PR #60](https://github.com/omobolajiadeyan/phishguard-ai/pull/60),
  [PR #61](https://github.com/omobolajiadeyan/phishguard-ai/pull/61),
  [PR #62](https://github.com/omobolajiadeyan/phishguard-ai/pull/62),
  [PR #63](https://github.com/omobolajiadeyan/phishguard-ai/pull/63), and
  [PR #64](https://github.com/omobolajiadeyan/phishguard-ai/pull/64).
- Verification: The latest `fix/redirect-etld1-domain-comparison` branch runs
  for Tests, PhishGuard Self-Scan, and CodeQL were green on 2026-07-08.
- Notification triage: Old PhishGuard CI failure notifications were superseded
  by successful runs; Checkov PR #7573 is closed upstream, so its old security
  workflow notification is no longer actionable.
- Status: Profile evidence updated.

## 2026-07-03

### PhishGuard AI

- Contribution: Expanded the `Authentication-Results` parser matrix for
  `none`, mixed whitespace, method ordering, unrelated authentication methods,
  unsupported values, and partial unsupported values without changing runtime
  scoring behavior.
- Evidence: [PR #55](https://github.com/omobolajiadeyan/phishguard-ai/pull/55).
- Verification: `python -m unittest discover -s tests -v` passed with 92
  tests; `python -m py_compile email_auth.py features.py model.py phishguard.py
  reporting.py` passed; repository policy passed; PR CI, CodeQL, self-scan,
  packaging, and CodeRabbit checks passed.
- Status: Merged.

- Contribution: Added a safe adoption and showcase path with a third-party
  workflow trial, evidence-quality guidance, and structured adoption report
  issue template.
- Evidence: [PR #54](https://github.com/omobolajiadeyan/phishguard-ai/pull/54).
- Verification: `python -m unittest discover -s tests -v` passed with 91
  tests; repository policy passed; PR CI, CodeQL, self-scan, packaging, and
  CodeRabbit checks passed.
- Status: Merged.

- Contribution: Added a stable Python API guide documenting `score_url`,
  `score_email`, and `classify`, with executable documentation examples.
- Evidence: [PR #53](https://github.com/omobolajiadeyan/phishguard-ai/pull/53).
- Verification: `python -m unittest discover -s tests -v` passed with 91
  tests; repository policy passed; PR CI, CodeQL, self-scan, packaging, and
  CodeRabbit checks passed.
- Status: Merged.

- Contribution: Merged a public-safe benchmark recall improvement using a
  reserved opaque-hostname-label signal with documented guardrails.
- Evidence: [PR #52](https://github.com/omobolajiadeyan/phishguard-ai/pull/52).
- Verification: `python -m pytest` passed with 88 tests; repository policy
  passed; the default fixture remained `tp=7 tn=7 fp=0 fn=0`; the public-safe
  URL-Phish slice improved from `tp=1 fn=4` to `tp=5 fn=0` with zero false
  positives.
- Status: Merged.

- Contribution: Merged first-impression, use-case, public evidence, Windows
  install, Code Scanning, roadmap, benchmark contribution, and PyPI trusted
  publishing documentation improvements.
- Evidence:
  [PR #37](https://github.com/omobolajiadeyan/phishguard-ai/pull/37),
  [PR #42](https://github.com/omobolajiadeyan/phishguard-ai/pull/42),
  [PR #43](https://github.com/omobolajiadeyan/phishguard-ai/pull/43),
  [PR #47](https://github.com/omobolajiadeyan/phishguard-ai/pull/47),
  [PR #48](https://github.com/omobolajiadeyan/phishguard-ai/pull/48), and
  [PR #49](https://github.com/omobolajiadeyan/phishguard-ai/pull/49).
- Status: Merged after required checks passed.

- Maintenance: Closed completed Windows install verification issue after
  confirming the guide was merged and linked from the README.
- Evidence: [Issue #40](https://github.com/omobolajiadeyan/phishguard-ai/issues/40).
- Status: Closed as completed.

### FreNiMi Checkers

- Contribution: Added a public playtest guide and structured issue template so
  browser, accessibility, offline, rules, and deployment feedback can become
  useful public evidence.
- Evidence: [PR #17](https://github.com/omobolajiadeyan/frenimi-checkers/pull/17).
- Verification: `npm run check`, `npm run policy`, `npm test`, and
  `npm run audit` passed locally; PR CI, CodeQL, deployment-image, and
  CodeRabbit checks passed.
- Status: Merged.

- Contribution: Added a public session-revocation demo script, multiplayer
  deployment smoke-test checklist, README links, and a test isolation fix so
  local matchmaking tests use the intended in-memory database.
- Evidence: [PR #16](https://github.com/omobolajiadeyan/frenimi-checkers/pull/16).
- Verification: `npm run check`, `npm run policy`, `npm test`, and
  `npm run audit` passed locally; PR CI, CodeQL, deployment-image, and
  CodeRabbit checks passed.
- Status: Merged.

- Contribution: Merged revocable online sessions with server-side active-match
  protection, WebSocket cleanup, bearer-token export hardening, security docs,
  and regression tests.
- Evidence: [PR #8](https://github.com/omobolajiadeyan/frenimi-checkers/pull/8).
- Verification: `npm run check`, `npm test`, `npm run policy`, and
  `npm run audit` passed locally; GitHub CI and CodeQL passed before merge.
- Status: Merged.

### Dependency-Track

- Contribution: Posted a concise re-review request after maintainer-requested
  runtime/schema fixes and green DCO, Codacy, and Snyk checks.
- Evidence: [PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477#issuecomment-4871283267).
- Status: Waiting for maintainer re-review.

## 2026-06-28

### PyPA pip-audit

- Contribution: Proposed respecting `PIPAPI_PYTHON_LOCATION` when
  `pip-audit --fix` installs remediation packages.
- Evidence: [PR #1067](https://github.com/pypa/pip-audit/pull/1067).
- Verification: Added focused unit coverage and ran
  `python -m pytest test/dependency_source/test_pip.py -q`, with 9 tests
  passing locally.
- Status: Closed without merge and without maintainer review comments. This is
  retained as a dated activity record, not as strong evidence.

### RamenDR ramenctl

- Contribution: Addressed maintainer follow-up on
  [PR #466](https://github.com/RamenDR/ramenctl/pull/466) by rebasing on
  current `main`, squashing the workflow hardening work into one Signed-off-by
  commit, updating action comments to full version tags, and refreshing stale
  pinned action hashes.
- Verification: `git diff --check` passed; all workflow action references are
  full commit SHAs; checkout steps use `persist-credentials: false`.
- Review engagement: Reviewed
  [PR #472](https://github.com/RamenDR/ramenctl/pull/472), the maintainer's
  guide for GitHub Actions pin verification, and confirmed that it matches the
  full-version and peeled-hash approach used in PR #466.
- Status: Open for maintainer re-review.

### PhishGuard AI

- Contribution: Improved the public first impression and adoption path through
  documentation updates covering use cases, public-safe benchmark guidance, and
  PyPI publishing preparation.
- Evidence:
  [PR #48](https://github.com/omobolajiadeyan/phishguard-ai/pull/48) and
  [PR #49](https://github.com/omobolajiadeyan/phishguard-ai/pull/49).
- Verification: Repository policy and CI checks are passing; PRs are blocked
  only by required review.
- Status: Open for review before merge.

## 2026-06-22

### RamenDR ramenctl

- Contribution: GitHub Actions supply-chain hardening by pinning workflow
  actions to commit SHAs and disabling persisted checkout credentials.
- Evidence: [PR #466](https://github.com/RamenDR/ramenctl/pull/466).
- Review response: Rebased on current `main`, pinned the newly added `mdformat`
  checkout action, added `persist-credentials: false`, and replied to all
  maintainer review threads.
- Verification: Checked each pinned action against upstream tag refs with
  `git ls-remote`. Found and corrected a stale `golangci/golangci-lint-action`
  `v9` pin, then re-ran the floating action reference search.
- Status: Open for maintainer review; CodeRabbit passing after the final update.

### Dependency-Track

- Contribution: Runtime-backed OpenAPI response schema for vulnerability
  findings.
- Evidence: [PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477).
- Review response: Converted both JSON finding endpoints to return the typed
  response model and removed the schema-only test after maintainer feedback.
- Verification: Full 66-module compile reactor and Checkstyle passed locally;
  DCO, Codacy, and both upstream Snyk checks passed.
- Status: Open for maintainer re-review.

### PhishGuard AI Visibility Snapshot

- Public repository count: 5 forks on the repository summary.
- Published technical article:
  [SPF, DKIM, and DMARC in Phishing Detection](https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91).
- Feedback issue opened:
  [phishguard-ai #45](https://github.com/omobolajiadeyan/phishguard-ai/issues/45).
- Benchmark improvement issue opened:
  [phishguard-ai #46](https://github.com/omobolajiadeyan/phishguard-ai/issues/46).
- Independent discoverability: the public
  [GitHub Actions Marketplace News index](https://github.com/devops-actions/github-actions-marketplace-news/blob/890c224e65fb616db0f8fc8e074d31874d9f871f/content/posts/2026/06/12-22-omobolajiadeyan-phishguard-ai.md)
  recorded the v0.5.1 Marketplace update.
- GitHub owner-traffic window: 200 views from 21 unique visitors and 1,479
  clones from 292 unique cloners.
- v0.5.1 release assets: 4 combined downloads across the wheel, source archive,
  and checksum file.
- Boundary: Traffic and download counts are early discovery signals. They do
  not establish production use or organizational adoption.

## 2026-06-18

### OWASP Agent Security Regression Harness

- Contribution: Recursive scenario validation for files, directories, and glob
  patterns.
- Evidence: [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150).
- Outcome: Merged by the maintainer with green lint, test, and security
  regression scenario checks.
- Maintainer summary: accepted one-or-more files, directories, and globs via
  `nargs="+"`; recursive `.yaml` and `.yml` discovery; deduplication through
  resolved paths; per-file validation lines; summary output; and non-zero exit
  on invalid scenarios.
- Signal: Merged upstream contribution in an OWASP project focused on security
  regression testing for agentic applications.

## 2026-06-17

### Prowler

- Contribution: Microsoft Entra directory-sync object-takeover check.
- Evidence: [PR #11515](https://github.com/prowler-cloud/prowler/pull/11515)
  and consolidated [merged PR #11098](https://github.com/prowler-cloud/prowler/pull/11098).
- Outcome: Maintainer closed #11515 in favor of the earlier PR #11098, folded in
  the permission-handling, metadata, changelog, and regression improvements, and
  credited me as co-author.
- Signal: Accepted upstream contribution in a widely used cloud security
  platform.

### OWASP Agent Security Regression Harness

- Contribution: Recursive scenario validation for files, directories, and glob
  patterns.
- Evidence: [PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150).
- Verification: `python -m pytest`, `python -m ruff check src tests`,
  `python -m mypy`, and `python -m agent_harness.cli validate scenarios`.
- Result: 333 tests passed, 1 skipped; all bundled scenarios validated
  successfully.
- Status: Merged on 2026-06-18.

### FreNiMi Checkers

- Contribution: Revocable online sessions, WebSocket disconnect handling, active
  match protection, and safer enterprise export/import behavior.
- Evidence: [PR #8](https://github.com/omobolajiadeyan/frenimi-checkers/pull/8).
- Verification: Node test matrix, CodeQL, deployment image build, CodeRabbit, and
  local security checks passed.
- Status: Open and waiting for required review.

### OpenSSF Scorecard

- Contribution: Dangerous Workflow detection for committer-controlled GitHub
  Actions contexts.
- Evidence: [PR #5098](https://github.com/ossf/scorecard/pull/5098).
- Scope: Added `head_commit.committer.name/email` and
  `commits[*].committer.name/email` to the untrusted context detector with table
  tests and a workflow fixture.
- Local limitation: Go, gofmt, and Docker were not available on the local
  Windows environment, so validation is delegated to upstream CI.
- Status: Open for maintainer review; DCO passed.
