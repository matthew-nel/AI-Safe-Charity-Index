# Gap Analysis — Repository vs Specifications

**Date:** 2026-07-12
**Repository:** https://github.com/matthew-nel/ai-safe-charities (commit `3a7508c`)
**Live site:** https://matthew-nel.github.io/ai-safe-charities/ (confirmed live, HTTP 200)
**Prepared by:** Claude Code (gap-analysis session)

---

## 1. Current repository state

The repo contains exactly seven files across three commits:

| File | State |
|---|---|
| `mkdocs.yml` | Material theme, good baseline config. Nav contains **only** `Home: index.md`. |
| `docs/index.md` | Well-written holding homepage with "site being built" warning. No YAML frontmatter. |
| `index.md` (repo root) | **Stray duplicate** of `docs/index.md` — outside `docs_dir`, never built. Technical debt. |
| `README.md` | Solid early README, aligned with spec 38 in substance. |
| `LICENSE` | Present. |
| `requirements.txt` | `mkdocs-material>=9.5,<10`. |
| `.github/workflows/deploy.yml` | Working: builds with `mkdocs build --strict`, deploys to Pages on push to main. |

Also confirmed: **no tags, no GitHub Releases, no branches other than `main`, no CHANGELOG, no validation workflows, no `BUILD_SESSION_RECORD_2026-07-12.md` anywhere** (repo or local folder — the file referenced in CLAUDE_CODE_PROJECT_CONTEXT.md does not exist yet).

**Verdict: Phase 1 of the technical roadmap (49) is complete** — static site, automated deployment, homepage. Everything else in the specifications is not yet started.

## 2. Spec corpus overview

62 files (00–61; **file 16 does not exist** — numbering skips 15→17). Classification:

- **~18 ready-to-publish page content**: 06 (Before You Paste), 26–37 (workflows, use cases, GDPR, safeguarding, trustees, maturity model, tool framework + 5 tool guides), 39–41 (why/about/creator), 45–47 (FAQ, glossary, contact), 49 (roadmap), 57 (AI principles)
- **~5 repo meta files**: 38 (README), 42 (CONTRIBUTING), 43 (CODE_OF_CONDUCT), 44 (GOVERNANCE), 48 (CHANGELOG — includes a ready `[0.1.0] — 2026-07-12` Foundation Build entry)
- **~20 process/standards docs** imposing build requirements: notably 50 (navigation), 51 (search), 52 (accessibility), 53 (metadata/frontmatter), 54 (linking), 55 (release checklist), 10 (versioning), 07/17 (page templates)
- **~11 internal research/strategy context** (not for publication): 01–03, 08, 18–25, 58–60

## 3. Gaps, in order of severity

### 3.1 Content (largest gap)
- 0 of the ~40+ specified pages exist beyond the homepage. The full IA (05/09) — Start Here, Before You Paste, AI & Data Protection, Everyday Charity Work, Governance, Tools, Templates, Learning Paths, Research & Community, Updates, plus footer pages — has no directories, no section index pages, no nav entries.
- ~18 spec files are essentially finished page content awaiting conversion into `docs/` pages with frontmatter.

### 3.2 Repository governance files
- Missing: `CHANGELOG.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `GOVERNANCE.md`, `ROADMAP.md` — all have ready content in specs 48, 42, 43, 44, 49.
- No issue templates, no PR template (spec 09 §27).

### 3.3 Release process
- No tags, no releases, no changelog. Spec 48 already defines version `0.1.0` (Foundation Build, 2026-07-12) — the repo should be tagged to match, and every future change gated by the release checklist (55) and semantic versioning (10).

### 3.4 Standards compliance
- **Metadata (53):** no page has YAML frontmatter; no validation of required fields.
- **Linking (54):** no related-guidance blocks, no feedback route on pages (only one page exists, but the pattern isn't established).
- **Navigation (50):** breadcrumbs/prev-next/related blocks not yet configured (Material supports most via features + conventions).
- **Search (51):** default Material search only; no synonym strategy (a known Material limitation — needs a documented workaround, e.g. inline synonym text or tags).
- **Accessibility (52):** no accessibility statement page; decision tree text-equivalent requirement noted for when 06 is built.
- **Privacy (09 §32):** no privacy notice page.

### 3.5 Automation / validation
- Only deploy.yml exists. Missing: link check, frontmatter validation, review-date check (09 §29, 55). `--strict` in the build is the only current quality gate.

### 3.6 Technical debt
- Stray root `index.md` duplicate — delete.
- `site_url` comment in mkdocs.yml is a leftover instruction ("username before your first deployment") — tidy.

## 4. Spec divergences to record in the decision log (58)

1. **VitePress vs MkDocs.** Specs 09, 10, 13, 48 assume VitePress. CLAUDE_CODE_PROJECT_CONTEXT.md fixes MkDocs + Material — treat MkDocs as final. Consequences: frontmatter is supported natively but validation needs a custom script; search synonyms are not natively supported; navigation lives in `mkdocs.yml` not sidebar config; local dev commands are `pip install -r requirements.txt` + `mkdocs serve`, not npm.
2. **BUILD_SESSION_RECORD convention** is referenced in the project context file but defined nowhere in the corpus. Convention created as of this session: `BUILD_SESSION_RECORD_YYYY-MM-DD.md` in this folder (and mirrored to the repo once a `records/` location is agreed), one per Claude Code session, recording repo state, work done, and next steps.
3. **Missing file 16** in the spec numbering — confirm whether deliberate.
4. **Contact routes (47, 09 §23):** spec requires a non-employer, role-based contact address — placeholder needed until one exists.

## 5. Recommended next implementation tasks (priority order)

### Session A — Repo hygiene + governance (small, do first)
1. Delete stray root `index.md`.
2. Add `CHANGELOG.md` (from 48, including the `[0.1.0]` entry and `[Unreleased]` section), `CONTRIBUTING.md` (42), `CODE_OF_CONDUCT.md` (43), `GOVERNANCE.md` (44).
3. Tag `v0.1.0` on main and create the matching GitHub Release (Foundation Build).
4. Commit `BUILD_SESSION_RECORD` convention + this gap analysis reference.

### Session B — Site skeleton (Phase 2 begins)
5. Create the full `docs/` directory skeleton per the IA (05, adapted from 09): section `index.md` stubs with frontmatter for all 9 primary sections + About/Contact/FAQ/Glossary/Accessibility/Privacy.
6. Update `mkdocs.yml` nav to the task-based structure (50), enable `navigation.sections`/`navigation.indexes`, add the `tags` plugin.
7. Define the minimum viable frontmatter set (from 53) and apply it to every page created.

### Session C — Flagship content
8. **Before You Paste (06)** — the core product. Decision tree (with plain-text equivalent per 52), Green/Amber/Red guide, do-not-paste checklist.
9. Tool guides section: evaluation framework (32) + ChatGPT (33), Claude (34), Gemini (35), Copilot (36), Notion AI (37).

### Session D — Supporting content
10. AI & Data Protection (28), Safeguarding (29), Trustees (30), Maturity model (31), Everyday Charity Work from 26/27.
11. About cluster: Why this exists (39), About (40), Creator (41), FAQ (45), Glossary (46), Contact (47), AI Principles (57), Roadmap (49).

### Session E — Quality gates + first public release
12. Validation workflows: link check + frontmatter validation script in CI.
13. Accessibility statement + privacy notice pages.
14. Run release checklist (55) end-to-end; release `v1.0.0` (or `0.x` if limitations remain), changelog entry, GitHub Release, post-deploy checks (09 §45).

### Later (Roadmap Phase 2, spec 49)
Interactive decision tree, metadata-driven filtering, review-date dashboard, downloadable packs, search improvements, evidence/claim registers as published YAML.

**Rationale for ordering:** governance files and the changelog come first because the specs prohibit silent changes once content exists; the skeleton before content so every page lands in its final URL (54 forbids URL churn); Before You Paste before everything else because it is the product's flagship and the homepage already promises it.
