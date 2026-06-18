# Public Post Drafts

## LinkedIn: OWASP Merge

I recently had a contribution merged into the OWASP Agent Security Regression
Harness.

The change adds recursive validation for security regression scenarios, so the
CLI can validate individual scenario files, directories, and glob patterns while
reporting each file clearly and returning a non-zero exit when any scenario is
invalid.

Why this matters:

- security regression suites grow beyond single files quickly;
- agentic and MCP-integrated systems need repeatable test harnesses;
- validation tooling should fail clearly before unsafe or broken scenarios are
  trusted in a pipeline.

The maintainer review confirmed the scope: multi-path input, recursive `.yaml`
and `.yml` discovery, deduplication through resolved paths, per-file validation
lines, a summary, and green CI.

PR: https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150

I am continuing to focus my open-source work on practical security tooling:
clear evidence, scoped changes, regression tests, and maintainable automation.

#OWASP #ApplicationSecurity #SecurityAutomation #OpenSource #DevSecOps

## LinkedIn: PhishGuard AI

PhishGuard AI is now available as a reusable GitHub Action on GitHub
Marketplace.

It is an explainable offline phishing detector for URLs and email. It produces
JSON and SARIF 2.1.0 output, runs with zero runtime dependencies, and can be
used inside CI without sending data to an external service.

Current work includes:

- URL and email feature extraction;
- redirect and typosquatting signals;
- conservative SPF, DKIM, and DMARC evidence handling;
- GitHub Code Scanning support through SARIF;
- public-safe benchmark fixtures and documented limitations.

Marketplace listing:
https://github.com/marketplace/actions/phishguard-ai-phishing-detector

Repository:
https://github.com/omobolajiadeyan/phishguard-ai

I welcome focused testing, documentation improvements, and scoped
contributions.

#Cybersecurity #EmailSecurity #Python #GitHubActions #OpenSource

## LinkedIn: Secure Session Revocation

A recent review on FreNiMi Checkers caught a useful browser-security lesson:
cleanup order matters.

The project supports player data export/import. Session tokens are intentionally
excluded from exported data, and online sessions can be revoked. During review,
we found that imported runtime data could restore stale online match context if
cleanup happened before runtime restoration.

The fix was simple but important:

- close the existing online socket;
- restore only the allowed runtime snapshot;
- then clear active online match context, token state, and connected state.

That prevents imported data from silently putting a player back into stale
online session state.

This is the kind of issue I like in security engineering: small, reviewable,
easy to test, and directly tied to user safety.

PR:
https://github.com/omobolajiadeyan/frenimi-checkers/pull/8

#ApplicationSecurity #JavaScript #WebSockets #SecureCoding #OpenSource

## LinkedIn: Contributor Invitation

I opened a few focused good-first issues across my security tooling projects.

PhishGuard AI needs documentation and adoption help around:

- copy-ready GitHub Action workflow examples;
- SARIF code-scanning visual examples;
- Windows install verification;
- public-safe benchmark case guidance.

FreNiMi Checkers needs help around:

- secure session revocation demo scripting;
- WebSocket abuse-case test coverage;
- multiplayer deployment smoke-test documentation.

Each issue is intentionally scoped so a contributor can make a useful,
reviewable improvement without needing to understand the whole codebase first.

PhishGuard AI:
https://github.com/omobolajiadeyan/phishguard-ai/issues

FreNiMi Checkers:
https://github.com/omobolajiadeyan/frenimi-checkers/issues

I welcome focused pull requests, testing feedback, and documentation
improvements.

#OpenSource #Cybersecurity #GoodFirstIssue #DevSecOps #GitHub
