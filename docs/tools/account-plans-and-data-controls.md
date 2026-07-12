---
title: "Account Plans and Data Controls"
description: "Why charities should distinguish personal, team, business and enterprise AI accounts before approving tool use."
section: "tools"
page_type: "guidance"
audience: ["staff", "managers", "trustees", "digital-leads"]
charity_size: ["small", "medium", "large"]
risk_level: "amber"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "high"
owner: "Matthew Nel"
maintainer: "Matthew Nel"
tags: ["account-plans", "data-controls", "tools"]
source_ids: ["OAI-ENT-001", "ANT-TRAIN-001", "GOOG-WORK-001", "MS-COP-PRIV-001"]
claim_ids: ["CLM-015"]
feedback_enabled: true
---

# Account Plans and Data Controls

The tool brand alone does not tell you whether a charity use is appropriate.

Different account types can have different:

- contracts
- Data Processing Agreements
- model-training settings
- retention settings
- admin controls
- audit logs
- connectors
- deletion processes
- support arrangements

## Personal Accounts

Use personal accounts only for public, non-confidential Green tasks unless the charity has explicitly assessed and approved the use.

## Organisational Accounts

Business, team, education, charity or enterprise plans may provide stronger controls, but they still need a use-case assessment.

Check:

- current official documentation
- contract and DPA
- admin settings
- training and feedback settings
- retention and deletion
- connectors and third-party apps
- audit access
- who owns the workspace

## Do Not Assume

- paid means approved
- no training means no retention
- enterprise means every use is safe
- user deletion means immediate back-end deletion
- citations mean a source has been checked
- connectors are safe because the user already had access

## "Not Used for Training" Is Not Enough

A no-training commitment is useful, but it answers only one question. You still need to check:

- retention
- human access by the provider
- subprocessors and model providers
- security controls
- transfers
- deletion and backups
- connectors
- output risk
- lawful purpose
- charity-controlled settings

## July 2026 Tool-Control Findings

The latest tool-control matrix found a consistent pattern across major workplace AI products:

- business and enterprise plans usually have stronger controls than consumer accounts
- consumer accounts remain unsuitable for charity work involving personal, confidential, safeguarding, HR, donor or case information
- retention, deletion, audit logs, SSO, SCIM, DPA terms and subprocessors vary by vendor and plan
- connector safety depends heavily on the underlying permissions in SharePoint, OneDrive, Google Drive, Slack, Notion, email and CRM systems
- charity discounts or nonprofit access may exist, but discounted access does not remove the need for risk assessment

Treat official vendor documentation as necessary evidence for features and terms, not as independent proof that a tool is safe for a particular charity use.

## Minimum Account Evidence

Keep a dated record of:

- official provider documentation checked
- account plan and workspace name
- contract or DPA location
- admin settings screenshots or exports
- allowed data categories
- disabled features or connectors
- user groups allowed
- review date and change triggers

## Practical Approval Rule

Write approvals like this:

> Tool: ChatGPT Business. Use case: drafting public campaign copy from public information. Data: no personal or confidential data. Reviewer: Communications Manager. Review date: October 2026.

Avoid approvals like this:

> ChatGPT is approved.
