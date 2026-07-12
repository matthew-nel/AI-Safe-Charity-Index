---
title: "Agents and Connectors"
description: "Governance checks for AI tools that access internal systems, retrieve files or take actions."
section: "governance"
page_type: "guidance"
audience: ["managers", "digital-leads", "trustees", "security-leads"]
charity_size: ["small", "medium", "large"]
risk_level: "red"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "high"
owner: "Matthew Nel"
maintainer: "Matthew Nel"
tags: ["agents", "connectors", "permissions", "prompt-injection", "security"]
source_ids: ["NCSC-AGENT-001", "NCSC-AI-001", "DSIT-AI-CYBER-001"]
claim_ids: ["CLM-007"]
feedback_enabled: true
---

# Agents and Connectors

Some AI tools do more than answer questions. They can search files, read email, query databases, write to systems, publish content or trigger workflows.

Treat these tools as higher risk than a standalone drafting assistant.

## Why Risk Increases

Risk increases when AI can:

- access internal files or email
- search CRM, HR, finance or case-management systems
- retrieve confidential information the user did not intend to use
- follow malicious instructions hidden in documents or webpages
- send messages, edit records, publish pages or trigger payments
- expose broadly shared files through normal user permissions

## Minimum Controls

- start read-only where possible
- use least privilege
- restrict connectors to the task
- audit file and folder permissions before enabling AI search
- require approval before external actions
- block access to secrets, credentials and sensitive folders
- log activity
- test with failure cases
- create a kill switch or rollback process
- review incidents and near misses

## Map the Chain

Before enabling a connector or agent, map:

| Layer | Question |
| --- | --- |
| Identity | Which user, service account or workspace identity acts? |
| Data source | Which folders, mailboxes, databases or systems can it read? |
| Model | Which model or provider processes the data? |
| Action | Can it write, send, publish, delete, pay or change records? |
| External recipient | Could data or output leave the charity? |
| Logs | Where are prompts, outputs, actions and errors recorded? |

Approve read and write scopes separately.

## Prompt Injection and Poisoned Content

An agent may follow instructions hidden inside emails, webpages, PDFs or shared documents. Treat untrusted content as potentially hostile.

Test whether the agent can be tricked into:

- revealing confidential information
- ignoring system or policy instructions
- sending data to an external address
- taking an action without approval
- using a document as an instruction rather than as evidence

## Pre-Launch Test

Before launch:

- test in a sandbox or low-risk workspace
- use dummy data
- run adversarial prompts and poisoned-document tests
- confirm logs show what happened
- rehearse emergency disable
- confirm rollback for any write action
- set transaction, sending or publishing limits

<div class="risk-card risk-red" markdown="1">

## Red Uses

Do not allow an agent to:

- send external messages without approval
- publish content without review
- delete or change important records without approval
- access safeguarding, HR or case records without specialist assessment
- handle money or procurement decisions without controls
- act on hidden instructions from untrusted content

</div>

## Sources

- [NCSC: Thinking carefully before adopting agentic AI](https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai)
- [NCSC: AI and cyber security](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know)
- [GOV.UK: Code of Practice for the Cyber Security of AI](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai)
