---
title: "Website, Code and Analytics"
description: "Guidance for AI use in charity websites, coding, analytics, deployment and technical work."
section: "charity-workflows"
subsection: "digital"
page_type: "workflow"
audience: ["digital-leads", "developers", "communications", "managers"]
charity_size: ["small", "medium", "large"]
risk_level: "amber"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "high"
owner: "Matthew Nel"
maintainer: "Matthew Nel"
tags: ["website", "code", "analytics", "security"]
source_ids: ["NCSC-AI-001", "DSIT-AI-CYBER-001", "ICO-AI-SEC-001"]
claim_ids: []
feedback_enabled: true
---

# Website, Code and Analytics

AI can help with code, content and analytics, but generated technical work should be treated as untrusted until reviewed and tested.

## Rules

- never paste secrets, tokens, private keys or real production data into an unapproved assistant
- verify licences and provenance for generated dependencies or code
- run tests, linting, dependency checks and peer review
- treat generated commands and infrastructure changes as untrusted
- avoid destructive commands unless the scope and rollback are understood
- review analytics and personalisation for lawful basis, transparency, minimisation and PECR/cookie obligations
- isolate experiments from production
- preserve rollback and change records
- require human approval for deployments and access-control changes

## Red Uses

- sharing live credentials
- exposing private repository data in personal accounts
- letting an agent deploy or change access controls without approval
- uploading vulnerability details to an unapproved tool
- using analytics to profile people without a lawful and transparent route

## Sources

- [NCSC: AI and cyber security](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know)
- [GOV.UK: Code of Practice for the Cyber Security of AI](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai)
- [ICO AI audit framework: Information security and integrity](https://ico.org.uk/for-organisations/advice-and-services/audits/data-protection-audit-framework/toolkits/artificial-intelligence/information-security-and-integrity/)

