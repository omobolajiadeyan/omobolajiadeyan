# Open-Source Activity Log

This log records recent, evidence-backed open-source work. Entries focus on
reviewed code, maintainer feedback, tests, and outcomes.

## 2026-06-28

### GitHub Profile And Evidence Cleanup

- Contribution: Reworked the profile README into a reviewer-first evidence
  page with a sharper security-engineering headline, strongest public proof
  points, featured project summary, and separate section for upstream work still
  under review.
- Reason: A strong public profile should distinguish merged or published
  evidence from active PRs so reviewers can verify claims quickly.
- Status: Published to the profile repository after local review.

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
