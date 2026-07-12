# AI Safe Use Knowledge Base for UK Charities
# 55_RELEASE_CHECKLIST.md

**Version:** 1.0.0  
**Status:** Publishing Standard  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

---

# Purpose

This document defines the complete release checklist for the AI Safe Use Knowledge Base for UK Charities.

The checklist is the final quality gate before content is published.

It exists to confirm that every release is:

- accurate
- evidence-led
- accessible
- safe
- versioned
- traceable
- reversible
- technically valid
- ready for public use

A release should not be published simply because the content appears complete.

It should be published only when the evidence, editorial, technical and governance checks have passed.

---

# Core Principle

> **No release is complete until the guidance, evidence, code, metadata, accessibility and public record all agree.**

---

# Release Types

Use one of the following release types.

## Patch Release

Use for:

- corrections
- broken links
- metadata fixes
- wording clarification
- minor accessibility fixes
- current-source updates that do not materially change user action

Example:

```text
1.2.1
```

## Minor Release

Use for:

- new guidance
- new templates
- new workflows
- new tool pages
- material research updates
- meaningful changes to recommendations

Example:

```text
1.3.0
```

## Major Release

Use for:

- major framework changes
- large navigation changes
- significant URL changes
- new governance model
- material change to core user actions
- broad legal or regulatory change

Example:

```text
2.0.0
```

## Emergency Release

Use when:

- unsafe guidance is live
- a significant legal or regulatory error exists
- safeguarding guidance is wrong
- private or confidential information has been published
- a critical security issue exists
- a core service is unavailable

Emergency releases should be documented even when the normal release sequence is shortened.

---

# Release Roles

## Original Creator and Primary Maintainer

**Matthew James Nel**

Responsible for:

- final editorial approval
- release decision
- version approval
- changelog approval
- public publication
- urgent rollback

## Specialist Reviewer

May review:

- data protection
- safeguarding
- accessibility
- legal interpretation
- security
- technical changes
- research methodology

## Technical Reviewer

May review:

- build
- deployment
- scripts
- dependencies
- redirects
- search
- metadata validation
- accessibility implementation

A single person may hold more than one role during early development.

---

# Release Inputs

Before beginning the release review, gather:

- changed Markdown files
- changed templates
- changed configuration
- changed scripts
- Source Register updates
- Claim Register updates
- Regulatory Watchlist changes
- research findings
- user feedback
- GitHub issues
- pull requests
- validation reports
- accessibility reports
- release notes draft
- changelog draft
- known limitations
- current live-site version

---

# Release Preparation

- [ ] Release scope is defined.
- [ ] Release type is selected.
- [ ] Proposed version is recorded.
- [ ] Release date is agreed.
- [ ] Changed files are listed.
- [ ] Affected public pages are listed.
- [ ] High-risk changes are identified.
- [ ] Specialist reviewers are identified.
- [ ] Current live version is confirmed.
- [ ] Rollback point is identified.

---

# Evidence Review

- [ ] Every material factual claim has a source.
- [ ] Source IDs exist in the Source Register.
- [ ] Claim IDs exist in the Claim Register.
- [ ] Primary sources are used where available.
- [ ] Provider marketing is not treated as independent evidence.
- [ ] Jurisdiction is clear.
- [ ] Publication and update dates are recorded.
- [ ] Fast-changing sources were checked recently.
- [ ] Conflicting evidence is documented.
- [ ] Limitations are visible.
- [ ] Superseded sources are marked.
- [ ] Unsupported claims are removed, rewritten or flagged.
- [ ] Recommendations are not presented as law.

---

# Regulatory Review

Review where relevant:

- [ ] ICO guidance
- [ ] Charity Commission guidance
- [ ] UK Government guidance
- [ ] current legislation
- [ ] safeguarding guidance
- [ ] employment guidance
- [ ] fundraising regulation
- [ ] accessibility standards
- [ ] NCSC guidance

For each material update:

- [ ] affected claims are identified
- [ ] affected pages are identified
- [ ] user action is clear
- [ ] specialist review is complete where needed

---

# AI Provider Review

For each affected provider:

- [ ] exact product is identified
- [ ] plan is identified
- [ ] account type is identified
- [ ] region is recorded where relevant
- [ ] official documentation is reviewed
- [ ] privacy statements are current
- [ ] retention information is current
- [ ] training-data statements are current
- [ ] admin controls are current
- [ ] product differences are explained
- [ ] unsupported safety claims are avoided
- [ ] next review date is set

---

# GDPR and Data Protection Review

For affected pages:

- [ ] personal data is described accurately
- [ ] special category data is described accurately
- [ ] criminal-offence data is considered where relevant
- [ ] lawful basis is not oversimplified
- [ ] anonymisation is not confused with pseudonymisation
- [ ] data minimisation is clear
- [ ] controller and processor roles are not misstated
- [ ] DPIA guidance is proportionate
- [ ] automated decision-making guidance is accurate
- [ ] international-transfer issues are flagged where relevant
- [ ] transparency requirements are considered
- [ ] high-risk guidance has suitable review

---

# Safeguarding Review

For affected pages:

- [ ] safeguarding is treated separately from GDPR
- [ ] real safeguarding case information is excluded
- [ ] AI is not positioned as a safeguarding decision-maker
- [ ] escalation routes are clear
- [ ] vulnerable people are treated respectfully
- [ ] fictional or anonymised examples are used
- [ ] human oversight is meaningful
- [ ] specialist review is complete where needed
- [ ] no active safeguarding advice is implied
- [ ] the project is not presented as an emergency route

---

# Editorial Review

- [ ] The practical answer appears early.
- [ ] The audience is clear.
- [ ] The task is clear.
- [ ] Plain English is used.
- [ ] Acronyms are explained.
- [ ] Technical terms are defined.
- [ ] Law, guidance and recommendation are separated.
- [ ] Uncertainty is visible.
- [ ] Charity-specific examples are used.
- [ ] Small and medium-sized charities are prioritised.
- [ ] Larger-charity considerations are separated.
- [ ] Tone is calm and practical.
- [ ] AI hype is avoided.
- [ ] Fear-based language is avoided.
- [ ] Human responsibility is clear.
- [ ] The page includes a next step.

---

# Green, Amber and Red Review

- [ ] The classification applies to the use case, not only the provider.
- [ ] Green still includes normal checks.
- [ ] Amber includes a clear reason to pause.
- [ ] Amber includes the checks required.
- [ ] Red includes a clear stop action.
- [ ] Red scenarios are not softened without evidence.
- [ ] Colour is not the only indicator.
- [ ] Text labels and actions are present.
- [ ] Similar scenarios receive consistent ratings.

---

# Metadata Review

For every changed substantive page:

- [ ] title exists
- [ ] description exists
- [ ] section is valid
- [ ] page type is valid
- [ ] audience is valid
- [ ] charity size is valid
- [ ] risk level is valid
- [ ] status is valid
- [ ] version is updated
- [ ] last-reviewed date is updated
- [ ] next-review date is set
- [ ] evidence level is valid
- [ ] owner is recorded
- [ ] maintainer is recorded
- [ ] tags are valid
- [ ] Source IDs exist
- [ ] Claim IDs exist
- [ ] related pages are valid
- [ ] deprecated pages identify replacements
- [ ] duplicate titles do not exist

---

# Navigation Review

- [ ] New pages appear in the correct section.
- [ ] Sidebar navigation is updated.
- [ ] Primary navigation remains clear.
- [ ] Breadcrumbs are correct.
- [ ] Previous and next links are correct where used.
- [ ] Role-based pathways are updated.
- [ ] Charity-size pathways are updated.
- [ ] Advanced guidance does not overwhelm the primary audience.
- [ ] No orphaned pages exist.
- [ ] No dead-end pages exist.
- [ ] Mobile navigation is checked.
- [ ] Navigation labels use plain English.

---

# Search Review

- [ ] New pages are indexed.
- [ ] Titles support natural-language search.
- [ ] Descriptions are useful.
- [ ] Tags are relevant.
- [ ] Synonyms are updated where needed.
- [ ] Tool names are indexed.
- [ ] Workflow terms are indexed.
- [ ] Failed-search patterns were considered.
- [ ] Draft or private content is excluded.
- [ ] Search results prioritise relevant safety guidance.

---

# Link Review

- [ ] Internal links work.
- [ ] External links work.
- [ ] Anchor links work.
- [ ] Redirects are in place.
- [ ] Canonical sources are used.
- [ ] Link text is descriptive.
- [ ] Downloads work.
- [ ] Download filenames are meaningful.
- [ ] Feedback links work.
- [ ] Contact links work.
- [ ] Research links work.
- [ ] No unnecessary tracking parameters remain.
- [ ] Commercial links are disclosed.
- [ ] Important claims link to evidence.

---

# Accessibility Review

- [ ] Heading order is logical.
- [ ] One main heading exists.
- [ ] Link text is descriptive.
- [ ] Images have appropriate alt text.
- [ ] Decorative images are handled correctly.
- [ ] Colour is not the only indicator.
- [ ] Contrast meets the target.
- [ ] Keyboard navigation works.
- [ ] Focus is visible.
- [ ] No keyboard trap exists.
- [ ] Forms have labels.
- [ ] Error messages are clear.
- [ ] Tables use correct headers.
- [ ] Decision trees have text alternatives.
- [ ] Video has captions.
- [ ] Audio has transcripts.
- [ ] Downloads are accessible or have alternatives.
- [ ] Mobile layout works.
- [ ] Zoom and reflow work.
- [ ] Reduced-motion preferences are respected.
- [ ] Known accessibility issues are documented.

---

# Privacy Review

- [ ] No personal data is committed accidentally.
- [ ] No raw survey responses are public.
- [ ] No identifiable interview data is public.
- [ ] No safeguarding case details are public.
- [ ] No confidential organisational information is public.
- [ ] Contact forms collect only necessary data.
- [ ] Feedback forms explain data use.
- [ ] Research consent is clear.
- [ ] Marketing consent is separate.
- [ ] Analytics remain proportionate.
- [ ] Privacy notice reflects current tools.
- [ ] Retention rules are current.

---

# Security Review

- [ ] No passwords are committed.
- [ ] No API keys are committed.
- [ ] No access tokens are committed.
- [ ] No private keys are committed.
- [ ] No live credentials are present.
- [ ] Secret scanning passes.
- [ ] Dependencies are reviewed.
- [ ] Security alerts are addressed.
- [ ] Branch protection is active.
- [ ] Required reviews are active.
- [ ] Deployment permissions are proportionate.
- [ ] Private reporting route exists or is documented.
- [ ] No sensitive exploit details are published unnecessarily.

---

# Research Review

For research-related releases:

- [ ] research question is clear
- [ ] method is described
- [ ] sample is described
- [ ] recruitment method is described
- [ ] limitations are visible
- [ ] consent was appropriate
- [ ] privacy was protected
- [ ] findings are aggregated or anonymised
- [ ] small samples are not overstated
- [ ] recommendations are separated from findings
- [ ] conflicts of interest are disclosed
- [ ] affected guidance is identified

---

# Template Review

For new or updated templates:

- [ ] instructions are included
- [ ] required and optional fields are clear
- [ ] wording is proportionate
- [ ] template does not imply legal compliance
- [ ] version is visible
- [ ] review date is visible
- [ ] related guidance is linked
- [ ] accessibility is checked
- [ ] downloadable formats work
- [ ] editable fields are usable
- [ ] creator attribution is preserved
- [ ] licensing is clear

---

# Code and Build Review

- [ ] site builds locally
- [ ] production build passes
- [ ] preview deployment works
- [ ] no console errors affect core use
- [ ] validation scripts pass
- [ ] frontmatter validation passes
- [ ] Source ID validation passes
- [ ] Claim ID validation passes
- [ ] broken-link checks pass
- [ ] duplicate-title checks pass
- [ ] stale-review checks pass
- [ ] search index builds
- [ ] sitemap builds
- [ ] robots file is correct
- [ ] redirects build correctly
- [ ] dependency lockfile is updated where required

---

# GitHub Review

- [ ] branch name is clear
- [ ] commit messages are clear
- [ ] pull request explains the change
- [ ] files changed are listed
- [ ] evidence reviewed is listed
- [ ] screenshots exist for visual changes
- [ ] validation results are included
- [ ] known limitations are included
- [ ] specialist reviewers are assigned
- [ ] comments are resolved
- [ ] approval is recorded
- [ ] merge method is appropriate
- [ ] release tag is prepared

---

# Attribution and Licensing Review

- [ ] Original Creator attribution is present where required.
- [ ] Maintainer attribution is present where required.
- [ ] Contributor acknowledgements are accurate.
- [ ] Research participants are not identified without permission.
- [ ] Copyrighted material is not reproduced unlawfully.
- [ ] Reuse rights are clear.
- [ ] Project licence is applied.
- [ ] Commercial or affiliate interests are disclosed.
- [ ] Vendor involvement is disclosed where relevant.

---

# Changelog Review

- [ ] version matches the release
- [ ] release date is correct
- [ ] summary is clear
- [ ] added content is listed
- [ ] changed content is listed
- [ ] corrections are visible
- [ ] deprecated content is listed
- [ ] removed content is listed
- [ ] accessibility changes are listed
- [ ] evidence changes are listed
- [ ] research changes are listed
- [ ] technical changes are listed
- [ ] user action is clear
- [ ] known limitations are included
- [ ] contributors are acknowledged
- [ ] references work

---

# Release Notes Review

Release notes should include:

- [ ] release version
- [ ] release date
- [ ] plain-English summary
- [ ] important changes
- [ ] what charities should do
- [ ] pages added
- [ ] pages updated
- [ ] pages corrected
- [ ] pages deprecated
- [ ] evidence reviewed
- [ ] What Charities Told Us
- [ ] accessibility changes
- [ ] known limitations
- [ ] next review
- [ ] contact and feedback routes

---

# Final Approval

Before merge:

- [ ] Editorial approval is complete.
- [ ] Evidence approval is complete.
- [ ] Specialist review is complete where required.
- [ ] Accessibility review is complete.
- [ ] Technical review is complete.
- [ ] Privacy review is complete.
- [ ] Security review is complete.
- [ ] Version is approved.
- [ ] Rollback point is confirmed.
- [ ] Public release timing is confirmed.

Final approval:

```text
Approved by:
Role:
Date:
Version:
Notes:
```

---

# Deployment Checklist

- [ ] pull request is merged
- [ ] main branch is current
- [ ] production workflow starts
- [ ] build passes
- [ ] deployment completes
- [ ] release tag is created
- [ ] release page is published
- [ ] changelog is updated
- [ ] current-version configuration is updated
- [ ] sitemap is refreshed
- [ ] search index is refreshed
- [ ] cache behaviour is checked where relevant

---

# Post-Deployment Checks

Immediately after deployment:

- [ ] homepage loads
- [ ] primary navigation works
- [ ] search works
- [ ] changed pages load
- [ ] core guidance loads
- [ ] Before You Paste works
- [ ] feedback links work
- [ ] contact links work
- [ ] research links work
- [ ] downloads work
- [ ] source links work
- [ ] mobile layout works
- [ ] keyboard navigation works
- [ ] release version displays correctly
- [ ] release notes appear
- [ ] analytics receives expected events
- [ ] no obvious visual regression exists
- [ ] no privacy-sensitive information is visible

---

# Post-Release Communication

Prepare:

- [ ] website update
- [ ] LinkedIn post
- [ ] newsletter or Substack draft
- [ ] GitHub release
- [ ] contributor acknowledgement
- [ ] research invitation where relevant
- [ ] action summary for charities

Communication should explain:

- what changed
- why it changed
- what charities should do
- where to report a problem

---

# Monitoring Period

For material releases, monitor:

## First 24 Hours

- build failures
- broken links
- critical feedback
- accessibility blockers
- privacy issues
- search problems

## First 7 Days

- user feedback
- failed searches
- high-exit pages
- template downloads
- reported confusion
- tool-guide corrections

## First 30 Days

- adoption
- research participation
- repeat questions
- content gaps
- roadmap implications

---

# Rollback Checklist

Rollback when:

- unsafe guidance is live
- sensitive information is exposed
- core pages are unavailable
- a major factual error exists
- accessibility regression blocks core use
- deployment corruption occurs

Steps:

- [ ] pause communication
- [ ] identify stable release
- [ ] revert affected change
- [ ] redeploy stable version
- [ ] verify live site
- [ ] publish correction notice
- [ ] update changelog
- [ ] record incident
- [ ] investigate cause
- [ ] improve validation

---

# Emergency Release Checklist

Use a reduced but controlled process.

- [ ] issue is documented
- [ ] risk is classified
- [ ] affected pages are identified
- [ ] correction is drafted
- [ ] minimum evidence is reviewed
- [ ] human approval is recorded
- [ ] patch version is assigned
- [ ] rollback is ready
- [ ] deployment is verified
- [ ] correction notice is published
- [ ] full retrospective is scheduled

---

# Release Handoff Template

```md
# Release Handoff

## Version

## Release Type

## Release Date

## Summary

## Files Added

## Files Updated

## Files Deprecated

## Files Removed

## Source Register Changes

## Claim Register Changes

## Specialist Review

## Accessibility Review

## Technical Validation

## Privacy and Security Review

## Known Limitations

## Rollback Point

## Suggested Tag

## Suggested Commit Message

## Suggested Pull Request Title

## Post-Release Communication

## Next Review
```

---

# Definition of Done

A release is complete only when:

- evidence is reviewed
- changed pages are approved
- metadata is valid
- accessibility checks pass
- privacy and safeguarding checks pass
- links work
- the site builds
- GitHub records the change
- deployment succeeds
- release notes are public
- changelog is updated
- live-site checks pass
- limitations are recorded
- next review is scheduled

---

# Claude Prompt

Use:

```text
Run the release-readiness review for the AI Safe Use Knowledge Base for UK Charities.

Review:

- changed content
- evidence
- Source Register
- Claim Register
- metadata
- navigation
- search
- links
- accessibility
- privacy
- safeguarding
- security
- research
- templates
- GitHub changes
- release notes
- changelog
- known limitations

Produce:

1. Passed checks.
2. Failed checks.
3. Critical blockers.
4. High-priority blockers.
5. Medium-priority issues.
6. Low-priority issues.
7. Required specialist review.
8. Exact corrections.
9. Recommended release type.
10. Recommended version.
11. Rollback requirements.
12. Final release recommendation.

Do not recommend publication when critical checks fail.
Do not treat automated validation as a substitute for human review.
```

---

# Success Criteria

The release checklist succeeds when:

- unsafe guidance does not reach the public site
- important claims remain traceable
- accessibility is reviewed before publication
- metadata and links remain consistent
- privacy and safeguarding are protected
- every release can be explained and reversed
- public updates are predictable
- the project earns trust through disciplined publishing
