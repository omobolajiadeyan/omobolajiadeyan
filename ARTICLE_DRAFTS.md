# Technical Article Drafts

## Article 1: What I Learned Contributing to OWASP Security Regression Tooling

**Status:** Published on
[DEV Community](https://dev.to/doidun2/from-single-files-to-scenario-suites-batch-validation-in-the-owasp-agent-security-regression-4hn7).

### Working Title

From Single Files to Scenario Suites: Improving Validation in an OWASP Security
Regression Harness

### Summary

Security regression testing becomes more useful when teams can validate whole
scenario directories, not just one file at a time. My merged OWASP contribution
added recursive validation for files, directories, and glob patterns in the
Agent Security Regression Harness.

### Outline

1. The problem: scenario suites grow beyond single files.
2. The risk: invalid scenarios can weaken confidence in automated testing.
3. The implementation: multi-path input, recursive `.yaml` and `.yml`
   discovery, deduplication, per-file validation lines, summary output, and
   non-zero exit on invalid scenarios.
4. The review: maintainer feedback, green CI, and scope discipline.
5. The lesson: a small validation improvement can strengthen a security
   workflow when it is tested and easy to review.

### Evidence Link

https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150

## Article 2: Why Email Authentication Failures Are Evidence, Not Proof

### Working Title

SPF, DKIM, and DMARC in Phishing Detection: Useful Signals, Not Magic Answers

### Summary

Email authentication results are valuable, but they need careful treatment.
PhishGuard AI treats SPF, DKIM, and DMARC failures as supporting evidence
rather than absolute proof, and it does not reduce risk just because a message
passes authentication.

### Outline

1. What SPF, DKIM, and DMARC prove.
2. What they do not prove.
3. Why forwarding can cause false positives.
4. Why authenticated infrastructure can still send malicious content.
5. How conservative scoring and regression tests reduce harm.

### Evidence Link

https://github.com/omobolajiadeyan/phishguard-ai

## Article 3: Avoiding Stale Session State in Browser Imports

### Working Title

Importing User Data Without Reconnecting Old Sessions

### Summary

FreNiMi Checkers uses export/import for player data, but runtime session state
must not be restored blindly. A review caught a subtle ordering issue where
cleanup happened before runtime restore; the fix clears online match state after
restore so stale imported state cannot reconnect the user to an old session.

### Outline

1. Why data export/import is useful.
2. Why runtime state is different from user profile state.
3. The risk: stale match/session context after import.
4. The fix: close sockets, restore safe runtime state, then clear online match
   and token state.
5. The lesson: review ordering matters in browser security.

### Evidence Link

https://github.com/omobolajiadeyan/frenimi-checkers/pull/8
