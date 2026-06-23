# PhishGuard Article Comment Outreach

Use this after the DEV.to article is published. The goal is real technical
feedback, not artificial engagement.

## Public Comment Prompt

Post this as the first comment under the DEV.to article:

> I would value technical feedback from people who work with email security,
> phishing triage, SOC workflows, or CI security automation.
>
> Three questions:
>
> 1. Should SPF/DKIM/DMARC failures influence risk differently for forwarded
>    mail, mailing lists, and direct sender-to-recipient messages?
> 2. What safe regression examples would make this scoring easier to trust?
> 3. Would SARIF output from a phishing detector be useful in your workflow, or
>    is JSON/CLI output more practical?

## LinkedIn Follow-Up Post

I published a technical article on how PhishGuard AI treats SPF, DKIM, and DMARC
as useful phishing-detection evidence without turning them into automatic
verdicts.

I am looking for technical feedback, especially from people who work with email
security, SOC workflows, phishing triage, or CI security automation.

The question I am most interested in:

Would SARIF output from a phishing detector be useful in your workflow, or is
JSON/CLI output more practical?

Article:
https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91

Project:
https://github.com/omobolajiadeyan/phishguard-ai

#Cybersecurity #EmailSecurity #OpenSource #Python #DevSecOps

## Direct Message To Security Contacts

Hi [Name], I published a short technical article about how PhishGuard AI handles
SPF, DKIM, and DMARC as phishing-detection evidence without treating failures as
automatic proof of phishing.

If you have a few minutes, I would value one technical comment on the article,
especially around false positives, forwarding, SARIF output, or what examples
would make the scoring easier to trust.

Article:
https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91

No pressure if now is not a good time. I am trying to improve the project based
on real practitioner feedback.

## GitHub Discussion Prompt

Title:

Feedback wanted: SPF/DKIM/DMARC scoring and SARIF output

Body:

I published a technical article explaining how PhishGuard AI treats SPF, DKIM,
and DMARC authentication results as supporting evidence rather than automatic
phishing verdicts.

I would value feedback on:

- Whether the scoring boundary is conservative enough.
- Additional safe regression examples to add.
- Whether SARIF output is useful for CI/security review workflows.
- Any documentation gaps around `Authentication-Results` trust boundaries.

Article:
https://dev.to/doidun2/spf-dkim-and-dmarc-in-phishing-detection-useful-signals-not-magic-answers-4g91

Related implementation:
https://github.com/omobolajiadeyan/phishguard-ai/pull/21

Feedback issue:
https://github.com/omobolajiadeyan/phishguard-ai/issues/45
