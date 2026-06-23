# LinkedIn Companion Post

I wrote a technical walkthrough of how PhishGuard AI handles SPF, DKIM, and
DMARC in phishing detection.

The main point:

Email authentication is useful evidence, but it is not a verdict.

An SPF, DKIM, or DMARC failure can support a phishing finding, especially when
combined with suspicious content. But legitimate forwarding and mailing-list
behavior can also break authentication checks, so a failure should not
automatically mean "phishing."

PhishGuard AI treats authentication failures as explainable supporting evidence,
does not reduce risk just because authentication passes, and exports the
decision path through JSON and SARIF 2.1.0.

The article covers:

- What SPF, DKIM, and DMARC prove
- What they do not prove
- Why forwarding false positives matter
- How PhishGuard scores authentication results conservatively
- Why SARIF output helps security automation
- The tests and regression examples behind the implementation

Project:
https://github.com/omobolajiadeyan/phishguard-ai

Marketplace Action:
https://github.com/marketplace/actions/phishguard-ai-phishing-detector

I would especially value comments from people who work with email security,
SOC workflows, CI security checks, or phishing triage:

Would SARIF output from a phishing detector be useful in your workflow, or is
JSON/CLI output more practical?

#Cybersecurity #EmailSecurity #Python #OpenSource #DevSecOps
