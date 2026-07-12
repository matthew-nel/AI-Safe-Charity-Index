---
title: "Retention, Security and Breaches"
description: "Prompt, output, file, log and incident controls for AI use in charities."
section: "ai-and-data-protection"
page_type: "guidance"
audience: ["staff", "managers", "data-protection-leads", "security-leads"]
charity_size: ["small", "medium", "large"]
risk_level: "high"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "high"
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags: ["retention", "security", "breaches", "incident-response"]
source_ids: ["ICO-BREACH-001", "ICO-AI-SEC-001", "NCSC-AI-001"]
claim_ids: ["LAW-06"]
feedback_enabled: true
---

# Retention, Security and Breaches

AI tools can create extra copies of information: prompts, uploaded files, outputs, embeddings, transcripts, logs, audit records, feedback data and support tickets.

## Retention Questions

For each approved use, record:

- what the charity keeps
- what the provider keeps
- how long prompts, files, recordings and outputs remain available
- whether deletion affects backups or logs
- who can delete or export data
- what happens when a user leaves
- what happens when the charity stops using the tool

## Security Questions

Check:

- MFA, SSO and role-based access
- admin visibility and audit logs
- connector permissions
- file-sharing permissions before enabling AI search
- restrictions for secrets, credentials and sensitive folders
- provider security documentation
- incident notice and escalation
- emergency disable or rollback process

## Mistaken Disclosure

If personal, confidential, safeguarding or security-sensitive information is pasted, uploaded or exposed:

1. Stop using the conversation, file or agent for that task.
2. Do not hide the mistake or destroy evidence.
3. Tell the incident contact immediately.
4. Record the exact tool, account, feature, date, prompt, upload, connector and people affected.
5. Preserve output and audit evidence according to the incident lead's instructions.
6. Follow the [AI incident route](../governance/incidents.md).

## 72-Hour Assessment

Not every AI incident is a reportable personal-data breach. Where a personal-data breach is likely to result in a risk to people's rights and freedoms, the charity should normally notify the ICO within 72 hours of becoming aware of it. Record the assessment and reasons either way.

## Sources

- [ICO: Personal data breaches](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/)
- [ICO: 72 hours - how to respond to a personal data breach](https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/)
- [ICO AI audit framework: Security and integrity](https://ico.org.uk/for-organisations/advice-and-services/audits/data-protection-audit-framework/toolkits/artificial-intelligence/information-security-and-integrity/)
- [NCSC: AI and cyber security](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know)
