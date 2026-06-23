# Evidence Dossier

This dossier organizes public evidence for my security engineering and
open-source work. It is written to be verifiable, conservative, and useful for
reviewers who need to understand the significance of the work quickly.

## Evidence Standard

Strong evidence has at least one of these qualities:

- It is public and independently visible.
- It was reviewed or merged by maintainers outside my own repositories.
- It includes tests, CI, documentation, or release artifacts.
- It shows a practical security outcome, not only activity volume.
- It can be linked directly from GitHub, a publication, or another public site.

Weak evidence is kept out of the headline narrative unless it matures. Examples
include inactive forks, unreviewed experiments, cosmetic changes, or traffic
numbers without adoption context.

## Benchmark Standard

The profile is being developed against advanced security/open-source profile
patterns: externally visible recognition, maintainer-reviewed impact, an owned
tool with real usage, technical writing, and a clear public narrative.

Benchmark notes are tracked in [PROFILE_BENCHMARK.md](PROFILE_BENCHMARK.md).

## Strongest Evidence

| Area | Evidence | Status | Why It Matters |
| --- | --- | --- | --- |
| Security product | [PhishGuard AI Marketplace Action](https://github.com/marketplace/actions/phishguard-ai-phishing-detector) | Published | Public reusable security tool with releases, tests, CodeQL, SARIF output, and documented limits. |
| OWASP contribution | [Agent Security Regression Harness PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150) | Merged | Reviewed contribution to an OWASP project used for security regression testing of agentic applications. |
| OWASP vulnerability tooling | [cve-lite-cli PR #602](https://github.com/OWASP/cve-lite-cli/pull/602) | Merged | Improved vulnerability report guidance in OWASP developer tooling. |
| Cloud security tooling | [Prowler PR #11098](https://github.com/prowler-cloud/prowler/pull/11098) | Merged with co-author credit | Accepted work in a widely recognized cloud security project. |
| Compliance/security framework | [SecOps-NG Framework PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281) | Merged | Cited compliance mapping contribution in a public security framework. |
| Technical writing | [DEV.to OWASP Harness article](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7) | Published | Explains implementation decisions and practical value of a merged security contribution. |

## Active Reviewed Work

| Project | Pull Request | Current State | Evidence Value |
| --- | --- | --- | --- |
| Dependency-Track | [PR #6477](https://github.com/DependencyTrack/dependency-track/pull/6477) | Maintainer feedback addressed; DCO, Codacy, and Snyk pass | Shows ability to respond to review in a mature software supply-chain project. |
| RamenDR ramenctl | [PR #466](https://github.com/RamenDR/ramenctl/pull/466) | Review comments addressed; CodeRabbit passes | Supply-chain hardening work for GitHub Actions SHA pinning and checkout credential handling. |
| CISA ScubaGear | [PR #2237](https://github.com/cisagov/ScubaGear/pull/2237) | Open for review | Contribution attempt in a reputable government-backed security assessment project. |
| OpenSSF Scorecard | [PR #5098](https://github.com/ossf/scorecard/pull/5098) | Open for review | Security detection work in a major open-source security-health project. |
| OWASP Agent Security Regression Harness | [PR #153](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/153) | Checks passing, awaiting review | Extends SARIF 2.1.0 output for code scanning integrations. |

## Maintained Projects

### PhishGuard AI

PhishGuard AI is the strongest owned-project signal. It is a security tool with:

- GitHub Marketplace listing
- Versioned releases
- GitHub Action metadata
- SARIF 2.1.0 output
- CodeQL and test workflows
- Public benchmark fixtures
- Security policy and contribution guide
- Conservative documentation of limitations

Current limitation: public adoption evidence is still early. Marketplace
availability, forks, traffic, and downloads are discovery signals, not proof of
production use.

### FreNiMi Checkers

FreNiMi Checkers demonstrates secure application development beyond pure
security tooling. It includes multiplayer state, sessions, WebSockets, PWA
support, deployment automation, and security tests.

Current limitation: it is useful as portfolio evidence, but it is secondary to
security-tooling and upstream security contributions for a global-talent case.

## Current Gaps

The profile is now strong enough to look professional, but the next level
requires more independent proof:

- More merged upstream PRs in recognized security projects.
- At least one external user or project adopting PhishGuard AI in a workflow.
- More technical writing tied to real implementation results.
- Public talks, demos, references, or community recognition.
- GitHub pinned repositories so the strongest work is visible immediately.

## Next Evidence Targets

1. Get the current reviewed PRs over the line without over-commenting.
2. Publish a PhishGuard benchmark/improvement article with reproducible numbers.
3. Open a focused PhishGuard issue for public-slice recall improvement and solve
   it test-first.
4. Ask one trusted developer or project maintainer to try the Marketplace Action
   and give public feedback through an issue.
5. Pin the strongest repositories on the GitHub profile manually:
   `phishguard-ai`, `frenimi-checkers`, `Agent-Security-Regression-Harness`,
   `cve-lite-cli`, `dependency-track`, and `scorecard`.
