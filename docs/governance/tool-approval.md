---
title: "Tool Approval"
description: "A practical workflow for approving AI tools, accounts and use cases in charities."
section: "governance"
page_type: "guidance"
audience: ["managers", "trustees", "digital-leads", "data-protection-leads"]
charity_size: ["small", "medium", "large"]
risk_level: "amber"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "high"
owner: "Matthew Nel"
maintainer: "Matthew Nel"
tags: ["tool-approval", "procurement", "dpa", "ai-register"]
source_ids: ["ICO-AI-001", "DSIT-AI-CYBER-001", "NCSC-AI-001"]
claim_ids: ["CLM-015"]
feedback_enabled: true
---

# Tool Approval

Approve the **tool, account plan and use case**, not just the brand.

For example, a personal paid AI account is not the same as an organisational workspace with a contract, admin controls, retention settings and audit logs.

## Minimum Approval Questions

Ask:

- What problem are we solving?
- Which tool, plan and account type will be used?
- Which model, feature, connector or agent is being approved?
- What data will be entered or connected?
- Will the provider use inputs or outputs for model training?
- What retention and deletion controls exist?
- Is there a Data Processing Agreement or suitable contract?
- Where may data be processed or transferred?
- What admin, SSO, MFA, audit and access controls exist?
- Can the tool connect to email, files, CRM, HR or case systems?
- Can the tool send, publish, delete, spend, update records or trigger workflows?
- Who owns the use case?
- Who reviews outputs?
- What training is required before use?
- What happens if the tool gives harmful or wrong output?
- What evidence proves the settings match the approval?
- When will the approval be reviewed?

## Minimum AI-Use Register Fields

| Field | Why it matters |
| --- | --- |
| Use ID | Gives the use a stable reference |
| Tool and plan | Distinguishes brand from account controls |
| Owner | Creates accountability |
| Purpose | Reduces function creep |
| People affected | Identifies consultation and risk needs |
| Data categories | Screens personal and special category data |
| Connectors/actions | Shows expanded access |
| Human review | Names the reviewer and authority |
| Risk rating | Green, Amber or Red |
| DPIA status | Shows data-protection governance |
| Safeguarding/equality/security screens | Captures specialist review needs |
| Training required | Prevents access before users understand limits |
| Incident contact | Gives users a route when something goes wrong |
| Approval and review date | Supports lifecycle control |
| Change triggers | Defines when approval expires |

## Approval Outcomes

- **Approved:** use may proceed within the agreed scope.
- **Approved with limits:** use may proceed only with specific controls.
- **Needs specialist review:** data protection, safeguarding, legal, HR or procurement review is needed.
- **Not approved:** do not use for charity work.
- **Retired:** use has ended; users, connectors and stored data have been reviewed.

## Example Approval Wording

Good approval:

> Tool: ChatGPT Business workspace. Feature: drafting only, no connectors. Purpose: first-draft public campaign copy from public information. Data: no personal or confidential data. Users: communications team after training. Reviewer: Communications Manager. Review date: October 2026.

Bad approval:

> ChatGPT is approved.

## Common Change Triggers

Reapprove when there is:

- a new model
- a new connector
- a new data category
- a new purpose
- a new affected group
- a new external action
- a new supplier term, retention setting or subprocessor
- an incident, complaint or near miss
