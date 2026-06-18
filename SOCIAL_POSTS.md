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

