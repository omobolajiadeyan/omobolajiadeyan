# Domain Architecture And Project Link Tree

This document is the working map for how the personal brand, FreNiMi company
brand, and individual projects should connect. The goal is to avoid buying too
many disconnected domains while still protecting the names that matter.

## Core Principle

Use two main hubs:

- `omobolajiadeyan.com` for the personal/professional evidence profile.
- `frenimi.com` for the company/product umbrella.

Individual projects can either use subdomains under these hubs or dedicated
domains only when the project needs its own public identity.

## Recommended Tree

```text
omobolajiadeyan.com
|-- /                         Personal profile and credibility hub
|-- /evidence                 Global talent evidence portfolio
|-- /open-source              Open-source contribution record
|-- /articles                 Technical writing
|-- /projects                 Project index
|-- phishguard.omobolajiadeyan.com
|   `-- Redirect to GitHub Marketplace or PhishGuard project page
|-- security.omobolajiadeyan.com
|   `-- Security engineering services, advisory, and case studies
`-- contact.omobolajiadeyan.com
    `-- Contact form, LinkedIn, GitHub, email

frenimi.com
|-- /                         FreNiMi company homepage
|-- /products                 Product portfolio
|-- /security                 Security tooling and responsible disclosure
|-- /contact                  Business contact
|-- phishguard.frenimi.com
|   `-- PhishGuard AI product page
|-- checkers.frenimi.com
|   `-- FreNiMi Checkers landing/playtest page
|-- appsecbridge.frenimi.com
|   `-- AppSec Compliance Bridge private alpha page
`-- labs.frenimi.com
    `-- Experiments, demos, and research notes

archivedblueprint.com
|-- /                         Public media/storytelling site
|-- /founder                  Founder story
|-- /blueprint-library        Archive/library
|-- /episodes                 Interviews or features
|-- /articles                 Written stories
|-- /guest-application        Guest application form
|-- /partner                  Partnerships
`-- /media-kit                Press and collaboration material
```

## Buy First

These are the domains worth prioritizing because they define the main identity
and reduce confusion.

| Priority | Domain | Purpose | Current DNS Check |
| --- | --- | --- | --- |
| 1 | `omobolajiadeyan.com` | Personal evidence, portfolio, open-source credibility, contact | No A record found in local DNS check |
| 1 | `frenimi.com` | Company/product umbrella | No A record found in local DNS check |
| 1 | `archivedblueprint.com` | Storytelling/media project | Resolves to `74.208.236.173` |
| 2 | `appsecbridge.com` | Dedicated AppSec Compliance Bridge domain if the product becomes public | No A record found in local DNS check |

## Do Not Rush To Buy

Use subdomains first unless there is a clear product launch or brand risk.

| Candidate | Recommendation | Reason |
| --- | --- | --- |
| `phishguard.ai` | Do not rely on it unless confirmed available or purchasable | It already resolves to third-party IPs in local DNS check. |
| `phishguardai.com` | Do not rely on it unless confirmed available or purchasable | It already resolves to third-party IPs in local DNS check. |
| `mytestimony.app` | Do not rely on it unless confirmed available or purchasable | It already resolves to third-party IPs in local DNS check. |
| `testimonyarchive.com` | Optional only after the Testimony project is validated | A subdomain under `frenimi.com` is enough for early testing. |

## Project Routing

| Project | Best Public URL | Backup URL | Notes |
| --- | --- | --- | --- |
| Personal profile | `https://omobolajiadeyan.com` | GitHub profile README | Main home for talent-visa evidence and contact. |
| FreNiMi company | `https://frenimi.com` | GitHub organization/profile links | Company umbrella for product credibility. |
| PhishGuard AI | `https://phishguard.frenimi.com` | `https://github.com/omobolajiadeyan/phishguard-ai` | Keep GitHub Marketplace as the canonical install path. |
| FreNiMi Checkers | `https://checkers.frenimi.com` | `https://github.com/omobolajiadeyan/frenimi-checkers` | Use for public playtests and screenshots. |
| AppSec Compliance Bridge | `https://appsecbridge.frenimi.com` | private GitHub/project board | Keep private until ready for public alpha. |
| Archived Blueprint | `https://archivedblueprint.com` | `https://archive.frenimi.com` | Dedicated domain makes sense because it is a public media/story project. |
| Testimony platform | `https://testimony.frenimi.com` | `https://faith.frenimi.com` | Validate content supply before buying a dedicated domain. |

## Brand Boundaries

`omobolajiadeyan.com` should answer:

- Who is Omobolaji Adeyan?
- What has he built?
- What evidence proves the work?
- How can people contact him?

`frenimi.com` should answer:

- What is FreNiMi?
- What products does it build?
- What projects are active?
- How can customers, users, contributors, or partners engage?

Project domains should answer:

- What is this product?
- Who is it for?
- How do I try it?
- How do I trust it?
- How do I contact the owner?

## DNS Strategy

Recommended setup:

- Keep each purchased domain in one registrar account where possible.
- Use one DNS provider per domain to avoid confusion.
- Use subdomains for projects until they prove traction.
- Add SSL immediately for every public domain and subdomain.
- Use permanent redirects from alternate domains to the canonical home.
- Keep email on the main brand domains only:
  - `contact@omobolajiadeyan.com`
  - `hello@frenimi.com`
  - `admin@archivedblueprint.com`

## Purchase Checklist

Before buying any domain:

1. Confirm exact spelling.
2. Search trademark and existing company/product use.
3. Check `.com` first.
4. Buy only if the domain has a clear role in the tree.
5. Avoid buying many defensive variants too early.
6. Record registrar, DNS provider, renewal date, and project owner.
7. Add SSL and a basic landing page immediately.
8. Add the domain to this document.

## Immediate Next Step

If available and affordable, prioritize:

1. `omobolajiadeyan.com`
2. `frenimi.com`

Then connect:

- `omobolajiadeyan.com` to the professional evidence/profile site.
- `frenimi.com` to a simple company/product umbrella.
- `phishguard.frenimi.com` to PhishGuard AI.
- `checkers.frenimi.com` to FreNiMi Checkers.
- `appsecbridge.frenimi.com` to the private AppSec Compliance Bridge project
  when it is ready for controlled preview.
