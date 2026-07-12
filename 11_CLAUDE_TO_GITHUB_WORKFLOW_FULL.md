# AI Safe Use Knowledge Base for UK Charities
# 11_CLAUDE_TO_GITHUB_WORKFLOW.md

**Version:** 2.0.0
**Status:** Operating Manual
**Original Creator:** Matthew James Nel
**Maintained and edited by:** Matthew James Nel
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel

---

# 1. Purpose

This document defines the complete operational workflow for maintaining the AI Safe Use Knowledge Base.

It explains how new evidence moves from research into published guidance.

The workflow is designed to be repeatable, transparent and scalable.

Core principle:

> **Research in Claude. Publish from GitHub. Review everything.**

---

# 2. System Roles

## Claude Projects

Used for:

- long-term knowledge
- uploaded books
- charity guidance
- regulator documentation
- AI provider documentation
- editorial rules
- drafting
- comparison
- identifying outdated guidance

Claude Projects is the research and editorial environment.

## GitHub

GitHub is the permanent source of truth.

It stores:

- Markdown
- releases
- changelog
- evidence
- navigation
- templates
- workflows

## Documentation Website

Automatically built from GitHub.

Never edit the live website directly.

---

# 3. Monthly Workflow

```text
Collect Sources
      ↓
Upload to Claude Project
      ↓
Analyse Changes
      ↓
Compare Against Repository
      ↓
Identify Affected Pages
      ↓
Draft Updated Markdown
      ↓
Update Source Register
      ↓
Update Claim Register
      ↓
Human Review
      ↓
GitHub Pull Request
      ↓
Merge
      ↓
Automatic Deployment
```

---

# 4. Monthly Research Sources

Each month review:

- OpenAI
- Anthropic
- Google
- Microsoft
- ICO
- Charity Commission
- UK Government
- NCVO
- Charity Digital
- CAST
- DataKind UK
- relevant academic papers
- charity feedback
- GitHub Issues
- LinkedIn discussions

---

# 5. Adding New Knowledge

When adding a new source:

1. Read the source.
2. Decide if it is authoritative.
3. Upload it to Claude Projects.
4. Ask Claude to compare it with the live knowledge base.
5. Identify affected claims.
6. Update only affected pages.

Avoid unnecessary rewrites.

---

# 6. Claude Project Structure

Suggested folders:

- Foundation Documents
- Editorial Standards
- Charity Knowledge
- UK Regulation
- AI Providers
- Research Papers
- Books
- Monthly Updates
- Source Library
- Draft Releases

---

# 7. Standard Claude Prompt

Use a repeatable prompt:

```text
Use the Project Instructions.

Review the newly uploaded sources.

Compare them with the GitHub repository.

Identify:

- outdated guidance
- affected pages
- affected claims
- new risks
- new opportunities

Produce:

- updated Markdown
- version recommendations
- release notes
- changelog
- Source Register updates
- Claim Register updates

Do not rewrite unaffected pages.
```

---

# 8. Source Register Workflow

For every new source:

- assign Source ID
- record organisation
- record publication date
- record review date
- record confidence
- link affected claims

---

# 9. Claim Register Workflow

Each factual claim should:

- have one unique Claim ID
- link to supporting sources
- identify affected pages
- record review status

---

# 10. Human Review

Always verify:

- factual accuracy
- evidence
- legal wording
- accessibility
- links
- metadata
- page versions
- contributor notes

Claude prepares drafts.

Humans approve publication.

---

# 11. GitHub Workflow

Recommended sequence:

```text
Feature Branch
      ↓
Markdown Updates
      ↓
Validation
      ↓
Pull Request
      ↓
Review
      ↓
Merge
      ↓
Automatic Build
      ↓
Live Website
```

---

# 12. Validation Checklist

Before merging:

- Markdown valid
- Links valid
- Metadata complete
- Review dates updated
- Source IDs valid
- Claim IDs valid
- Navigation updated
- Accessibility checked

---

# 13. Release Package

Each release should contain:

- updated Markdown
- release notes
- changelog
- updated Source Register
- updated Claim Register
- version number

---

# 14. Feedback Loop

Collect feedback from:

- GitHub Issues
- Typeform
- LinkedIn
- email
- charities
- trustees
- volunteers

Use feedback to improve future releases.

---

# 15. Automation Roadmap

Future automation may include:

- automatic document comparison
- stale page detection
- review reminders
- broken-link reports
- metadata validation
- pull-request generation

Automation should never replace editorial judgement.

---

# 16. Claude Code

Claude Code is optional.

When introduced it may:

- edit multiple Markdown files
- update navigation
- generate pull requests
- run validation
- prepare releases

The publishing principles remain unchanged.

---

# 17. Success

The workflow succeeds when:

- new evidence becomes published guidance quickly
- only affected pages change
- every claim remains traceable
- every release is documented
- the repository remains organised
- the public website is always generated from GitHub
- the process is sustainable for many years

The objective is a living knowledge base that continuously improves while remaining trustworthy, transparent and easy to maintain.
