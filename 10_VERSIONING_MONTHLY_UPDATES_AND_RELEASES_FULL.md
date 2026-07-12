# AI Safe Use Knowledge Base for UK Charities
# 10_VERSIONING_MONTHLY_UPDATES_AND_RELEASES.md

**Version:** 2.0.0  
**Status:** Foundation Operations  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel

---

# 1. Purpose

This document defines how the AI Safe Use Knowledge Base is versioned, reviewed, updated and released.

The goal is to ensure the knowledge base remains:

- accurate
- evidence-led
- transparent
- easy to maintain
- safe to update
- predictable for users

The project is designed as a living knowledge base, not a one-off publication.

---

# 2. Core Principles

Every update should be:

- supported by evidence
- proportionate
- traceable
- reversible
- documented
- reviewed by a human before publication

Human judgement always overrides AI-generated recommendations.

---

# 3. Release Cadence

## Monthly

Every month:

- review new AI provider documentation
- review regulator updates
- review charity-sector guidance
- review community feedback
- review GitHub issues
- update affected pages
- publish a monthly release

## Quarterly

Every quarter:

- full editorial audit
- accessibility review
- broken-link check
- Source Register review
- Claim Register review
- navigation review
- governance review
- roadmap review

## Annually

Once a year:

- strategic review
- archive outdated guidance
- review project structure
- review contributor guidance
- review licences
- review branding and editorial standards

---

# 4. Semantic Versioning

Use semantic versioning:

```text
MAJOR.MINOR.PATCH
```

Examples:

- 1.0.0 — first public release
- 1.1.0 — new guidance added
- 1.1.3 — typo or factual correction
- 2.0.0 — major structural change

## Major

Increment when:

- navigation changes
- architecture changes
- major framework changes
- breaking URL changes

## Minor

Increment when:

- new guidance
- new templates
- new tool reviews
- new learning paths

## Patch

Increment when:

- typo fixes
- wording improvements
- broken links
- metadata corrections
- small factual updates

---

# 5. Monthly Update Workflow

```text
New evidence
      ↓
Research in Claude Projects
      ↓
Compare with live repository
      ↓
Identify affected pages
      ↓
Update Markdown
      ↓
Update Source Register
      ↓
Update Claim Register
      ↓
Human review
      ↓
Pull Request
      ↓
Release
```

---

# 6. Monthly Review Checklist

Review:

- ChatGPT
- Claude
- Gemini
- Microsoft Copilot
- Notion AI
- ICO guidance
- Charity Commission guidance
- UK Government guidance
- Anthropic documentation
- OpenAI documentation
- Google documentation
- Microsoft documentation
- community feedback
- research findings

---

# 7. Release Notes

Every release should include:

- version
- release date
- summary
- pages added
- pages updated
- pages removed
- evidence reviewed
- contributor acknowledgements
- known limitations
- next review date

---

# 8. Changelog

Maintain a permanent changelog.

Each entry records:

- date
- version
- summary
- author
- related pull request
- affected pages

---

# 9. Source Register

Whenever guidance changes:

- add new sources
- retire obsolete sources
- update review dates
- document evidence quality

---

# 10. Claim Register

Every changed claim should:

- reference supporting evidence
- identify affected pages
- record review status
- retain a unique claim ID

---

# 11. Community Feedback

Monthly triage:

- GitHub Issues
- Typeform responses
- LinkedIn messages
- email enquiries
- accessibility reports

Classify feedback as:

- correction
- enhancement
- new topic
- research insight
- bug
- accessibility issue

---

# 12. Quality Assurance

Before publishing confirm:

- Markdown validates
- links work
- metadata is complete
- accessibility checks pass
- evidence is cited
- review dates updated
- navigation updated where needed

---

# 13. Emergency Releases

Publish an immediate patch release when:

- significant factual error
- incorrect safety guidance
- broken critical links
- important regulator change
- serious security issue

Document why the emergency release occurred.

---

# 14. Deprecation Policy

When guidance becomes outdated:

- mark as deprecated
- link to replacement
- retain archive where appropriate
- record the change in the changelog

---

# 15. Release Calendar

Suggested cadence:

- Week 1 — collect evidence
- Week 2 — research and drafting
- Week 3 — editorial review
- Week 4 — publish release

Quarterly assurance replaces the normal monthly release where necessary.

---

# 16. Success Metrics

Track:

- pages reviewed
- pages updated
- average review age
- unresolved issues
- feedback received
- broken links
- search success
- contributor activity

---

# 17. Monthly Claude Prompt

```text
Review the AI Safe Use Knowledge Base.

Compare new evidence against the current repository.

Identify:

- outdated guidance
- affected claims
- affected pages
- new risks
- new opportunities
- regulator updates
- provider documentation changes

Produce:

1. Updated Markdown.
2. Version recommendations.
3. Changelog entry.
4. Release notes.
5. Source Register updates.
6. Claim Register updates.
7. Outstanding editorial questions.

Do not update unaffected pages.
Do not publish without human review.
```

---

# 18. Definition of a Successful Release

A release is complete only when:

- evidence has been reviewed
- pages are updated
- metadata is correct
- Source Register is current
- Claim Register is current
- QA checks pass
- release notes are published
- changelog is updated
- the public website is successfully deployed

The release process should be predictable, transparent and repeatable for many years.
