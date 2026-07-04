# Public Evidence Portfolio

This file tracks public, independently visible evidence that supports my work
as a security engineer and open-source contributor.

## Strongest Current Signals

| Evidence | Link | Why it matters |
| --- | --- | --- |
| OWASP merged contribution | https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150 | Reviewed and merged contribution to a recognized security project. |
| Prowler credited contribution | https://github.com/prowler-cloud/prowler/pull/11515 | Maintainer folded improvements into earlier merged work and credited contribution. |
| PhishGuard AI Marketplace Action | https://github.com/marketplace/actions/phishguard-ai-phishing-detector | Public reusable security tool available through GitHub Marketplace. |
| PhishGuard benchmark improvement | https://github.com/omobolajiadeyan/phishguard-ai/pull/52 | Dated before/after regression evidence: public-safe recall improved while preserving zero false positives on checked-in legitimate samples. |
| PhishGuard Python API guide | https://github.com/omobolajiadeyan/phishguard-ai/pull/53 | Maintained-project evidence: documented import surface, executable examples, and cross-version CI. |
| PhishGuard adoption path | https://github.com/omobolajiadeyan/phishguard-ai/pull/54 | Clear process for safe third-party workflow examples, showcase reports, and conservative adoption claims. |
| PhishGuard email-auth parser matrix | https://github.com/omobolajiadeyan/phishguard-ai/pull/55 | Trust-boundary evidence: SPF/DKIM/DMARC parser behavior expanded for `none`, whitespace, ordering, unrelated methods, and unsupported values without changing scoring behavior. |
| FreNiMi Checkers secure session lifecycle | https://github.com/omobolajiadeyan/frenimi-checkers/pull/8 | Owned full-stack security evidence: session revocation, WebSocket cleanup, active-match protection, token-export hardening, and tests. |
| FreNiMi Checkers deployment readiness | https://github.com/omobolajiadeyan/frenimi-checkers/pull/16 | Demo script, deployment smoke-test checklist, and local test isolation fix for reliable verification. |
| FreNiMi Checkers playtest path | https://github.com/omobolajiadeyan/frenimi-checkers/pull/17 | Public feedback guide and issue template for real browser, accessibility, offline, rules, and deployment testing. |
| OWASP cve-lite-cli merged contribution | https://github.com/OWASP/cve-lite-cli/pull/602 | Merged vulnerability-reporting improvement in OWASP tooling. |
| SecOps-NG merged contribution | https://github.com/secops-ng/secops-ng-framework/pull/281 | Merged compliance/security-framework mapping contribution with source citations. |
| Dependency-Track reviewed work | https://github.com/DependencyTrack/dependency-track/pull/6477 | Maintainer-requested runtime/schema alignment addressed with DCO, Codacy, and Snyk passing. |
| RamenDR supply-chain hardening | https://github.com/RamenDR/ramenctl/pull/466 | GitHub Actions SHA pinning, checkout credential hardening, and tag-to-SHA verification evidence. |
| PhishGuard technical article | https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91 | Published article explaining email-authentication scoring, SARIF output, and model boundaries. |

## Evidence Narrative

My public work is centered on practical security automation: tools and
contributions that help developers and analysts detect risk, explain findings,
and preserve evidence. The strongest pattern is not volume of activity; it is
reviewed work in reputable projects, reproducible tests, and clear maintainer
feedback.

## Evidence Strength Assessment

| Level | Current Evidence | Assessment |
| --- | --- | --- |
| Strong | Merged OWASP, OWASP cve-lite-cli, Prowler, and SecOps-NG work | Good independent evidence because maintainers outside my repositories accepted or credited the work. |
| Strong | PhishGuard AI Marketplace Action | Strong owned-project signal because it is released, packaged, documented, and reusable. |
| Strong | PhishGuard benchmark/API/adoption/parser coverage and FreNiMi session/deployment/playtest work | Strong owned-project evidence because the changes are merged, tested, documented, and tied to reproducible security behavior. |
| Moderate | Dependency-Track, RamenDR, CISA ScubaGear, and OpenSSF Scorecard open PRs | Valuable, but strongest only after maintainer approval or merge. |
| Early | PhishGuard forks, traffic, downloads, Marketplace indexing | Useful discovery signals, but not adoption proof yet. |

## Next Evidence Priorities

1. Convert the strongest open reviewed PRs into merged PRs by responding
   carefully to maintainer feedback.
2. Secure one public third-party PhishGuard AI usage example or workflow through the adoption report path.
3. Publish one benchmark-focused article with reproducible PhishGuard results
   and clear model limitations.
4. Collect one public FreNiMi playtest report with browser/device details.
5. Pin the strongest repositories on the GitHub profile so reviewers see the
   best evidence immediately.
6. Keep evidence claims conservative: merged, reviewed, published, indexed, or
   adopted should each mean exactly what the word says.

## Monthly Maintenance Checklist

- Add newly merged upstream PRs with dates and links.
- Add release notes for maintained projects.
- Record contributor engagement on my repositories.
- Remove stale or weak evidence that no longer supports the narrative.
- Publish one technical write-up tied to a real implementation or review.
