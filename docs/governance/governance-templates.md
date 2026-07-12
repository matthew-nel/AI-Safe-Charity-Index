---
title: "AI Governance Templates"
description: "Reusable AI governance templates for charity approvals, registers, incidents, suppliers and trustee oversight."
section: "templates"
page_type: "template-pack"
audience: ["staff", "managers", "trustees", "data-protection-leads", "safeguarding-leads"]
charity_size: ["small", "medium", "large"]
risk_level: "amber"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-13"
next_review: "2026-10-13"
evidence_level: "practice-template"
owner: "Matthew Nel"
maintainer: "Matthew Nel"
tags: ["templates", "governance", "register", "approval", "incident"]
source_ids: ["ICO-AI-001", "FR-AI-001", "CC-AI-001"]
claim_ids: []
feedback_enabled: true
---

# AI Governance Templates

These templates are starting points. Adapt them to your charity's size, risk, governance structure and existing policies.

## AI Use Register

Use this whenever a new AI use is proposed, approved, changed or retired.

```markdown
| ID | Date added | Team | Use case name | Tool and plan | Purpose | Data types | Personal data? | Special-category data? | Children/adults at risk involved? | Internal connectors | Lawful basis if personal data | DPIA screening needed? | Approved by | Go-live date | Review date | Status | Notes |
|----|------------|------|---------------|---------------|---------|------------|----------------|------------------------|-----------------------------------|--------------------|--------------------------------|------------------------|-------------|--------------|-------------|--------|-------|
```

## AI Tool Approval Form

```markdown
# AI Tool Approval Form

**Tool name and vendor:**
**Plan/tier:**
**Sponsor:**
**Teams using the tool:**
**Purpose of use:**

## Data and Connectors

- Data types processed:
- Systems connected:
- Lawful basis for personal data, if applicable:

## Risks and Controls

- Privacy risks:
- Safeguarding risks:
- Accuracy and misinformation risks:
- Bias and discrimination risks:
- Security and connector risks:

## Supplier Assurance

- DPA checked? Yes/No
- Customer data used for training? Yes/No/Not confirmed
- Retention and deletion documented? Yes/No
- Admin controls available? Yes/No
- Audit logs available? Yes/No

## Decision

- Approved, rejected or conditional:
- Conditions:
- Approver:
- Review date:
```

## DPIA Screening Form

```markdown
# AI DPIA Screening Form

**Use case:**
**Owner:**
**Tool and plan:**

## Description

- What will the AI do?
- Who is affected?
- What data is processed?

## Risk Triggers

- Personal data:
- Special-category data:
- Children or adults at risk:
- Profiling or automated decision support:
- Internal connectors:
- Public or beneficiary-facing output:
- Large-scale processing:

## Screening Outcome

- No DPIA needed:
- Full DPIA needed:
- Specialist review needed:
- Reason:
- Reviewer and date:
```

## Meeting Transcription Checklist

```markdown
# Meeting Transcription Checklist

**Meeting:**
**Owner:**
**Tool:**

## Content and Participants

- Purpose of transcription:
- Likely sensitive topics:
- Participants and power imbalance:
- Children or adults at risk involved:

## Tool and Settings

- Tool and plan approved:
- Recording, transcript and summary storage:
- Retention period:
- Access controls:
- Training on content disabled or not applicable:

## Transparency and Choice

- Participants informed:
- Objection route offered:
- Alternative note-taking route:

## Decision

- Approved, rejected or conditions:
- Accuracy owner:
- Deletion date:
```

## AI Incident and Near-Miss Log

```markdown
| ID | Date | System/tool | Incident or near miss? | Description | People affected | Category | Root cause | Immediate actions | Follow-up actions | Serious-incident report considered? | Owner | Status |
|----|------|-------------|------------------------|-------------|-----------------|----------|------------|-------------------|------------------|------------------------------------|-------|--------|
```

## Trustee AI Assurance Dashboard

```markdown
# Trustee AI Assurance Dashboard

## Overview

- AI policy: [Yes/No; date approved]
- AI use register: [Yes/No; last updated]
- High-risk AI uses identified: [Number]
- DPIAs completed for AI: [Number]

## Training

- Staff trained on AI policy: [Percentage]
- Trustees trained on AI risks: [Yes/No; date]

## Incidents

- AI incidents in last 12 months: [Number]
- Near misses logged: [Number]
- Serious incidents reported: [Number]

## Key Risks

- Shadow AI:
- Beneficiary-facing AI:
- Connectors to internal data:
- Donor or supporter profiling:
- Recruitment or HR use:

## Actions and Owner

- Priority actions for next quarter:
- Named owner:
```

## AI Supplier Questionnaire

```markdown
# AI Supplier Questionnaire

**Vendor:**
**Product and plan:**

## Data Protection

- Do you provide a GDPR-compliant DPA?
- Is customer data used to train models?
- What are default retention periods?
- Can retention be configured?
- How is deletion handled?

## Security and Access

- Where is data stored?
- What encryption is used?
- Are SSO and SCIM available?
- Are audit logs available?

## Connectors and Permissions

- Which systems can the product connect to?
- How are source permissions inherited?
- How do you prevent oversharing?

## Compliance and Incidents

- What certifications do you hold?
- What subprocessors are used?
- What incident notice periods apply?
```

## AI Use-Case Risk Assessment

```markdown
# AI Use-Case Risk Assessment

**Use case:**
**Team:**
**Tool:**

## Objective

- What problem is this solving?
- What would happen if the charity did not use AI?

## People and Data

- Who is affected?
- What data is processed?
- Are children, adults at risk, donors, staff or volunteers affected?

## Risk Analysis

- Privacy:
- Safeguarding:
- Accuracy and misinformation:
- Bias and discrimination:
- Security and connectors:
- Public trust:

## Controls

- Human review:
- Data minimisation:
- Transparency:
- DPIA or specialist review:
- Monitoring and incident route:

## Decision

- Green, Amber or Red:
- Conditions:
- Owner:
- Review date:
```

## Sources

- [ICO: Guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/)
- [Fundraising Regulator: Guidance for using artificial intelligence in fundraising](https://www.fundraisingregulator.org.uk/about-fundraising/resources/guidance-using-artificial-intelligence-fundraising)
- [Charity Commission: Charities and artificial intelligence](https://charitycommission.blog.gov.uk/2024/04/02/charities-and-artificial-intelligence/)
