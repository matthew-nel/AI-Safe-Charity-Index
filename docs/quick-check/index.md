---
title: "Quick Check"
description: "A practical five-question AI risk check for charity staff, volunteers, managers and trustees."
section: "quick-check"
page_type: "interactive-check"
audience: ["staff", "managers", "trustees", "volunteers"]
charity_size: ["small", "medium", "large"]
risk_level: "general"
status: "draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "foundation"
owner: "Matthew Nel"
maintainer: "Matthew Nel"
tags: ["quick-check", "traffic-light", "ai-risk"]
source_ids: ["ICO-AI-001", "CC-AI-001", "NCSC-AI-001"]
claim_ids: ["CLM-001", "CLM-007", "CLM-015"]
---

<section class="asc-intro" markdown="1">

<p class="asc-kicker">Five questions before using AI</p>

# Quick Check

<p class="asc-lede">Answer these questions to get a practical Green, Amber or Red route. This is a triage aid, not a substitute for your charity's policy, DPIA, safeguarding or legal process.</p>

</section>

<form class="asc-quick-check" data-quick-check data-link-prefix="../">

<div class="asc-check-layout">

<div class="asc-check-questions">

<fieldset>
<legend>1. Is this exact tool, account and feature approved for charity work?</legend>
<div class="asc-choice-grid">
<label class="asc-choice"><input type="radio" name="tool" value="yes"> Yes, for this task</label>
<label class="asc-choice"><input type="radio" name="tool" value="not-sure"> Not sure</label>
<label class="asc-choice"><input type="radio" name="tool" value="no"> No</label>
</div>
</fieldset>

<fieldset>
<legend>2. What will you enter, upload, record or connect?</legend>
<div class="asc-choice-grid">
<label class="asc-choice"><input type="radio" name="data" value="public"> Public, fictional or synthetic information</label>
<label class="asc-choice"><input type="radio" name="data" value="internal"> Internal but not personal information</label>
<label class="asc-choice"><input type="radio" name="data" value="personal"> Personal data about donors, staff, volunteers or service users</label>
<label class="asc-choice"><input type="radio" name="data" value="sensitive"> Health, disability, HR, criminal-offence or other sensitive data</label>
<label class="asc-choice"><input type="radio" name="data" value="safeguarding"> Safeguarding, casework, children or adults at risk</label>
<label class="asc-choice"><input type="radio" name="data" value="security"> Passwords, API keys or security-sensitive information</label>
</div>
</fieldset>

<fieldset>
<legend>3. What will the AI do?</legend>
<div class="asc-choice-grid">
<label class="asc-choice"><input type="radio" name="action" value="draft"> Draft, rewrite or summarise</label>
<label class="asc-choice"><input type="radio" name="action" value="connect"> Search connected files, email, CRM or case systems</label>
<label class="asc-choice"><input type="radio" name="action" value="people"> Score, rank, profile or recommend something about people</label>
<label class="asc-choice"><input type="radio" name="action" value="act"> Send, publish, delete, spend money or change records</label>
</div>
</fieldset>

<fieldset>
<legend>4. Could the output affect services, money, jobs, safeguarding or a public claim?</legend>
<div class="asc-choice-grid">
<label class="asc-choice"><input type="radio" name="impact" value="no"> No</label>
<label class="asc-choice"><input type="radio" name="impact" value="maybe"> Maybe</label>
<label class="asc-choice"><input type="radio" name="impact" value="yes"> Yes</label>
</div>
</fieldset>

<fieldset>
<legend>5. Will a named person check the output before it is used?</legend>
<div class="asc-choice-grid">
<label class="asc-choice"><input type="radio" name="human" value="yes"> Yes</label>
<label class="asc-choice"><input type="radio" name="human" value="not-sure"> Not sure</label>
<label class="asc-choice"><input type="radio" name="human" value="no"> No</label>
</div>
</fieldset>

<button type="reset" class="md-button">Clear answers</button>

</div>

<div class="asc-check-result asc-check-neutral" data-check-result aria-live="polite" aria-atomic="true">
<p class="asc-check-result-label" data-check-label>Not enough information yet</p>
<h2 data-check-title>Answer each question to get a route</h2>
<p data-check-body>The check will show a Green, Amber or Red route and link to the next page.</p>
<ul class="asc-check-links" data-check-links></ul>
</div>

</div>

</form>

## If You Are Already Worried

If you have already pasted, uploaded, connected, recorded or published something risky, stop using the tool for that task and follow the [AI incident route](../governance/incidents.md).
