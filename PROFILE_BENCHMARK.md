# GitHub Profile Benchmark

This benchmark reviews advanced security/open-source profiles and translates the
pattern into practical improvements for my own GitHub presence. It is not for
copying another profile. It is a quality bar for evidence, clarity, and public
trust.

## Benchmark Profiles Reviewed

### Jonathan Leitschuh

Profile: https://github.com/JLLeitschuh

Public GitHub ReadME Project story:
https://github.com/readme/stories/jonathan-leitschuh

Why this is a useful benchmark:

- Clear identity: software engineer and security researcher.
- Strong recognition: GitHub Star and Dan Kaminsky Fellowship.
- Public security impact: vulnerability research, ecosystem-scale fixes, talks,
  and open-source security work.
- Strong narrative: not just repositories, but a mission to make open-source
  software safer.
- Large public footprint: many repositories, followers, writing, talks, and
  externally visible recognition.

### Kevin Backhouse

Profile: https://github.com/kevinbackhouse

GitHub Security Lab author profile:
https://github.blog/security/community-powered-security-with-ai-an-open-source-framework-for-security-research/

Why this is a useful benchmark:

- Clear institutional signal through GitHub Security Lab.
- Security research framing is precise: finding vulnerabilities and working
  with maintainers to get them fixed.
- Public writing is connected to tools, methodology, and community value.
- The profile benefits from association with reputable security research and
  shared open-source tooling.

## Benchmark Pattern

Top security profiles usually combine five signals:

1. **External recognition**
   GitHub Star, fellowship, employer/research lab, conference talk, project
   maintainer role, advisory credit, or public program participation.

2. **Maintainer-reviewed impact**
   Merged or credited contributions in respected projects. The best evidence
   shows maintainer review, tests, and a practical security outcome.

3. **Owned project with real users**
   A tool that other people can install, run, cite, or depend on. Marketplace
   listing is a start; public usage evidence is stronger.

4. **Technical writing**
   Posts that explain the problem, design tradeoffs, tests, limitations, and
   real-world value. Good writing turns code into recognized expertise.

5. **Simple profile narrative**
   The first screen should answer: who is this person, what security area do
   they work in, what have they shipped, what proof exists, and how do I contact
   them?

## Current Position Against Benchmark

| Benchmark Signal | Current Status | Gap |
| --- | --- | --- |
| External recognition | CISA, Security+, ASU degree, OWASP/SecOps-NG/Prowler merged work | Need more public third-party recognition: talks, references, maintainer role, advisory credit, or formal program participation. |
| Maintainer-reviewed impact | Merged PRs in OWASP, OWASP cve-lite-cli, Prowler, SecOps-NG | Need more merged PRs in high-reputation projects and fewer pending PRs. |
| Owned project | PhishGuard AI is on GitHub Marketplace with releases, tests, CodeQL, SARIF, docs | Need public user adoption, stars, usage examples, testimonials, or downstream workflows. |
| Technical writing | One DEV.to article tied to merged OWASP work | Need a regular writing cadence and benchmark/result articles. |
| Profile narrative | Evidence-first README and evidence dossier now in place | Need pinned repositories and a stronger visible top row on the GitHub profile. |

## Improvements To Apply

### Profile

- Keep the README focused on evidence, not decoration.
- Keep the first screen clear: title, Marketplace project, merged security
  contributions, public evidence links, contact.
- Pin the strongest repositories manually:
  `phishguard-ai`, `frenimi-checkers`, `Agent-Security-Regression-Harness`,
  `cve-lite-cli`, `dependency-track`, and `scorecard`.

### PhishGuard AI

- Add one measurable improvement per release.
- Publish a short article after each meaningful release.
- Create one public issue that asks users to test the GitHub Action in their
  workflow and report feedback.
- Seek one legitimate external project using the Action in CI.

### Upstream Contributions

- Prioritize fewer, deeper PRs in reputable security projects.
- Prefer issues with clear maintainer interest.
- Respond to review carefully and avoid over-commenting.
- Record test evidence and maintainer feedback in the activity log.

### Recognition

- Turn merged work into short write-ups and talks.
- Apply for relevant programs only when evidence is ready.
- Build references from maintainers, users, or collaborators.
- Track measurable adoption honestly: stars, forks, downloads, citations,
  external workflows, issue feedback, and merged upstream work.

## 30-Day Benchmark Plan

1. Get at least two open reviewed PRs merged or closed with clear maintainer
   outcome.
2. Publish one PhishGuard benchmark article with reproducible commands and
   limitations.
3. Improve PhishGuard public-slice recall with tests while preserving false
   positive discipline.
4. Ask three real developers/security practitioners to try PhishGuard and leave
   public feedback through GitHub issues or discussions.
5. Pin the six strongest repositories and keep weak/inactive work away from the
   profile front page.
