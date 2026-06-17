<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1f6feb,100:0d1117&height=200&section=header&text=Omobolaji%20Adeyan&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Security%20Engineer%20%E2%80%A2%20Threat%20Detection%20%E2%80%A2%20AppSec%20%E2%80%A2%20Open-Source%20Security%20Tooling&descAlignY=58&descSize=16&descColor=8b949e" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=58A6FF&center=true&vCenter=true&width=700&lines=Security+Engineer+%7C+AppSec+%7C+Threat+Detection;PhishGuard+AI+Maintainer+%7C+OWASP+Contributor;Prowler+%7C+OWASP+%7C+Bandit+Contributor;CISA+%7C+CompTIA+Security%2B+%7C+20%2B+Years+in+Security" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/oeadeyan">
    <img src="https://img.shields.io/badge/LinkedIn-Omobolaji_Adeyan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://nest.owasp.org/members/omobolajiadeyan">
    <img src="https://img.shields.io/badge/OWASP-Member-000000?style=for-the-badge&logo=owasp&logoColor=white"/>
  </a>
  <a href="mailto:omobolaji.adeyan@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <img src="https://komarev.com/ghpvc/?username=omobolajiadeyan&style=for-the-badge&color=1f6feb&label=PROFILE+VIEWS"/>
</p>

---

## About Me

I'm a security engineer with 20+ years of experience — starting from designing and hardening enterprise networks (firewalls, IDS/IPS, VPNs) through to application security, penetration testing, vulnerability research, and building open-source security tooling. I write code that defends, detects, and explains.

My open-source work focuses on tools that work silently inside developer workflows: a phishing detection engine that runs offline with zero dependencies, a UEBA behavioural anomaly detector for insider threat, a CI secret scanner, MITRE ATT&CK-mapped log analysis, and real-time CVE intelligence. I also contribute targeted security fixes to major projects in the Python, cloud security, and OWASP ecosystems, including Prowler, Bandit, pip-audit, cve-lite-cli, and agent security regression tooling.

I hold a **BS in Information Technology (Arizona State University)** and carry the **CISA** and **CompTIA Security+** certifications.

---

## 🔐 Open-Source Security Tools

I build security tools with a consistent design principle: output that security teams can act on, not just verdicts. Every tool runs offline, ships zero runtime dependencies, and integrates into existing developer workflows without friction.

---

### PhishGuard AI — Explainable Phishing Detection

**PhishGuard AI** is an offline phishing detection engine I created and maintain — pure Python standard library, zero external dependencies. It analyses URLs and email files and explains *why* each URL was flagged, giving analysts the evidence chain rather than just a label.

**What it detects:**

- **Typosquatting** — pure-Python Levenshtein distance against 50 brand domains, catching `paypa1.com`, `g00gle.com`, `githab.com` without any external API
- **Redirect chain abuse** — follows shortened and redirect URLs N hops deep using only the stdlib socket layer, exposing the real destination
- **Email-embedded phishing** — parses RFC 5322 `.eml` files, extracts URLs from both plain-text and HTML parts (including `href` attributes), and scans the full set
- **SARIF 2.1.0 output** — findings upload natively to GitHub Code Scanning; CI pipelines get annotated security alerts on pull requests

It ships as both a CLI tool and a **reusable GitHub Action** — any pipeline can adopt it with a single `uses: omobolajiadeyan/phishguard-ai@v0.5.1` line.

[![GitHub](https://img.shields.io/badge/View_Repo-phishguard--ai-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/phishguard-ai)
[![Stars](https://img.shields.io/github/stars/omobolajiadeyan/phishguard-ai?style=flat-square&color=58a6ff)](https://github.com/omobolajiadeyan/phishguard-ai/stargazers)
[![Issues](https://img.shields.io/github/issues/omobolajiadeyan/phishguard-ai?style=flat-square&color=f85149)](https://github.com/omobolajiadeyan/phishguard-ai/issues)

---

### BehaviorSense — UEBA & Insider Threat Detection

**BehaviorSense** is a User and Entity Behaviour Analytics (UEBA) engine for detecting anomalous behaviour patterns that signal insider threats, compromised accounts, or privilege abuse — without requiring a commercial SIEM.

It scores users and IPs against statistical baselines and flags deviations: impossible travel, off-hours access spikes, lateral movement precursors, and privilege escalation sequences. Every alert ships an attached evidence chain — the raw events that drove the score — so analysts can triage in seconds rather than hours.

[![GitHub](https://img.shields.io/badge/View_Repo-behaviorsense-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/behaviorsense)

---

### Log Analyzer — MITRE ATT&CK Threat Detection

**Log Analyzer** parses log sources and maps detected activity to **MITRE ATT&CK** tactics and techniques — giving security operations teams structured, triage-ready findings rather than raw log lines. Each detection result references the ATT&CK technique ID, the matched pattern, and the source event, so analysts skip the correlation step and go straight to response.

[![GitHub](https://img.shields.io/badge/View_Repo-log--analyzer-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/log-analyzer)

---

### Secrets Scanner — CI Pre-Commit Secret Detection

**Secrets Scanner** catches exposed credentials and API keys before they reach production. It runs as a pre-commit hook or CI step, scanning staged changes against 40+ provider signature patterns (AWS, GCP, GitHub, Stripe, Twilio, and more) alongside high-entropy string detection.

The design goal: zero false-negative tolerance on high-confidence patterns, with tunable entropy thresholds so teams can calibrate precision without drowning in noise.

[![GitHub](https://img.shields.io/badge/View_Repo-secrets--scanner-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/secrets-scanner)

---

### CVE Dashboard & VulnGPT — Vulnerability Intelligence

**CVE Dashboard** pulls live vulnerability data from the NVD API and surfaces it as an actionable intelligence dashboard — filterable by CVSS severity, vendor, and affected product — so security teams can track emerging threats relevant to their stack in real time rather than sifting raw NVD feeds.

**VulnGPT** pairs each CVE with AI-assisted remediation guidance: contextual next steps, patch availability signals, and workaround options — converting a CVE description into something an engineer can act on today.

[![CVE Dashboard](https://img.shields.io/badge/View_Repo-cve--dashboard-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/cve-dashboard)
[![VulnGPT](https://img.shields.io/badge/View_Repo-vulngpt-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/vulngpt)

---

## 🌍 Upstream Contributions

I contribute focused, tested security fixes to established open-source tools. The pattern is consistent: identify a real defect that weakens the tool's security posture, fix it precisely, cover it with tests, and pass existing linting and CI.

For dated contribution evidence, see my [open-source activity log](OPEN_SOURCE_LOG.md) and [engagement kit](OPEN_SOURCE.md).

---

### Prowler — Cloud Security Platform

**[PR #11515](https://github.com/prowler-cloud/prowler/pull/11515) / [merged PR #11098](https://github.com/prowler-cloud/prowler/pull/11098)** — Contributed improvements to a new Microsoft Entra ID security check detecting cloud-object takeover risk in hybrid directory synchronisation. My work improved permission-error handling, cloud-only tenant classification, metadata cleanup, changelog coverage, and regression tests. The maintainer consolidated the work into the earlier PR #11098, credited me as co-author, and merged the final check upstream.

---

### OWASP Agent Security Regression Harness

**[PR #150](https://github.com/OWASP/Agent-Security-Regression-Harness/pull/150)** — Added recursive validation support for scenario files, directories, and glob patterns in an OWASP harness for executable security regression testing of agentic applications and MCP-integrated systems. The change prints one validation line per scenario, summarizes valid and invalid counts, exits non-zero on invalid scenarios, and includes CLI tests plus CI documentation. Local validation: 333 tests passed, Ruff passed, mypy passed, and all bundled scenarios validated successfully.

---

### Bandit — Python SAST

**[PR #1433](https://github.com/PyCQA/bandit/pull/1433)** — Fixed false negatives and false positives in the B508/B509 SNMP security detector. The existing checks missed insecure SNMP v1/v2c configurations in certain call patterns while flagging benign SNMPv3 usage — meaning real vulnerabilities went unreported and clean code was flagged. Fixed the detection logic with targeted tests to prevent regression.

---

### pip-audit — PyPA Dependency Vulnerability Auditing

**[PR #1060](https://github.com/pypa/pip-audit/pull/1060)** — Added `PIP_AUDIT_IGNORE_VULN` environment variable support to complement the existing `--ignore-vuln` CLI flag. CI pipelines commonly need to suppress known false-positive vulnerability IDs without modifying baked-in workflow commands. The env var enables this cleanly, merges with any CLI flags passed simultaneously, and is covered by three new test cases.

---

### OWASP cve-lite-cli

**[PR #602](https://github.com/OWASP/cve-lite-cli/pull/602)** — Added risk summary and next-action text to the HTML vulnerability report's expanded finding detail. The functions `summarizeRisk()` and `summarizeNextAction()` already existed for terminal output but were not wired into the HTML report path — leaving HTML report users without the triage guidance that terminal users received. Fix reuses the existing functions, escapes output through the reporter's HTML path, and adds direct, transitive, and malicious-package test coverage. 440 tests pass.

---

### TruShell

**[PR #55](https://github.com/TruFoundation/TruShell/pull/55)** — Replaced shell-mediated command execution with direct argument-vector execution in the command dispatcher, eliminating a shell injection attack surface. Added security regression test coverage to prevent reintroduction.

---

## 🖥️ Full-Stack Engineering

Security engineering grounded in 20+ years of building and shipping real software — from network infrastructure to full-stack web applications with security baked in at every layer.

---

### 2to1 — Social Matching Platform

A full-stack social matching application built from the ground up with a production-grade architecture: **React + Vite** frontend, **Express + Prisma** API backend, a dedicated background worker service, **PostgreSQL + Redis**, and Docker Compose for the full local stack. Features mutual match persistence, real-time conversations, message safety enforcement (blocks, archived threads, unavailable accounts), member moderation audit logging, and auth built on httpOnly refresh token cookies with rate limiting and trusted-origin enforcement. End-to-end tested with **Playwright** across web and mobile viewports.

---

### Jamnaija — Photography Booking Platform

Full-stack booking and gallery management platform for a photography studio: **Node.js** backend with **SQLite** persistence, online booking, client account and session management, private client galleries, and an admin dashboard. Public portfolio images are served as permanently watermarked WebP derivatives with server-side protection for originals. Ships with a **Dockerfile** for any Docker host and a **Render Blueprint** for one-click cloud deployment.

---

### Right Health — Mental Health Practice Platform

Production-deployed mental health practice website covering psychiatric evaluation, medication management, therapy, and intake scheduling. Built with a **PHP API** backend serving a multi-page HTML/CSS/JS frontend, client login portal, admin dashboard, and appointment management. Deployed with SSH, structured deployment runbooks, SHA256 site integrity manifests, and a full client handover package.

---

### FreNiMi — Health & Fitness Platform

Health and fitness platform with **Node.js / Express** backend, **Prisma ORM**, **Stripe** payment processing, and a **Python AI** layer for personalised recommendations — covering user onboarding, subscription billing, and AI-driven content delivery.

---

### GovWatch — Government Security Posture Dashboard

Security posture dashboard for government entities: **Vite + React + TypeScript** frontend, **FastAPI** Python backend — surfacing public compliance and security data in a structured, queryable format for security teams.

---

### RCCG Potters Place — Church Management Platform

Full church management system: **PHP** backend, **Twilio** SMS integration, **PayPal** payment processing, custom admin dashboard — built and deployed end-to-end with secure credential handling and role-based access control.

---

### FreNiMi Checkers — Multiplayer Game Platform

[![GitHub](https://img.shields.io/badge/View_Repo-frenimi--checkers-181717?style=flat-square&logo=github)](https://github.com/omobolajiadeyan/frenimi-checkers)

Cross-platform checkers platform with minimax AI, real-time **WebSocket** multiplayer, SQLite ratings persistence, and PWA support. Automated security testing, strict CSP headers, and input validation throughout the full stack.

---

## 🛠 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"/>
  <img src="https://img.shields.io/badge/SARIF-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/MITRE_ATT%26CK-C41230?style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prowler-FF6B35?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bandit-306998?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/>
</p>

---

## 🏆 Certifications

| Credential | Issuer | Year |
|---|---|---|
| Certified Information Systems Auditor (CISA) | ISACA | 2024 |
| CompTIA Security+ (ce) | CompTIA | 2024 — valid to 2027 |
| AWS Academy Cloud Foundations | Amazon Web Services | 2024 |
| BS Information Technology | Arizona State University | 2025 |

---

## 📊 GitHub Stats

<p align="center">
  <img height="170" src="https://github-readme-stats.vercel.app/api?username=omobolajiadeyan&show_icons=true&theme=github_dark&hide_border=true&count_private=true&include_all_commits=true&rank_icon=github"/>
  <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=omobolajiadeyan&layout=compact&theme=github_dark&hide_border=true&langs_count=6"/>
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=omobolajiadeyan&theme=github-dark-blue&hide_border=true&date_format=j%20M%5B%20Y%5D"/>
</p>

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=omobolajiadeyan&theme=darkhub&no-frame=true&no-bg=true&margin-w=8&column=7"/>
</p>

---

## Contribution Activity

<p align="center">
  <img src="https://raw.githubusercontent.com/omobolajiadeyan/omobolajiadeyan/output/github-contribution-grid-snake-dark.svg" alt="Contribution snake"/>
</p>

---

## 🤝 Let's Connect

Open to senior security engineering roles, open-source collaboration, and advisory conversations — particularly in application security, threat detection tooling, and developer-focused security automation.

<p align="center">
  <a href="https://www.linkedin.com/in/oeadeyan">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:omobolaji.adeyan@gmail.com">
    <img src="https://img.shields.io/badge/Email-omobolaji.adeyan%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1f6feb,100:0d1117&height=100&section=footer"/>
</p>
