---
version: 1
slug: "readme-md"
primary_target: "README.md"
related_targets: []
---

# Surface brief — GitHub profile README

**Artifact:** `README.md` at the repository root of `piyush97/piyush97`
**Mode:** Persuade
**Seed key:** `c56217fd` (concept-seed, scope surface, mode persuade)

## Scope and visitor mode

A stranger opens the GitHub profile from a job application, a referral, or a cold
message and decides in under a minute whether to keep reading. Persuade: the page
must make what Piyush does legible, prove it with real work, and leave one obvious
next step. It is read on GitHub, inside Slack and email unfurls, at desktop and
mobile widths, in light and dark theme.

## Audience, job, proof, constraints

- **Audience:** hiring managers and prospective clients. Peers are secondary.
- **Job:** decide whether to look at the portfolio, book a call, or keep reading.
- **Proof available:** the Vercel→Cloudflare migration write-up; four published
  portfolio metrics with provenance; 29 public repositories; 22 blog posts since
  May 2026; the flagship repo at 32 stars.
- **Constraints:** GitHub strips CSS, so structure comes from `div align`,
  `table`, and `img` only. Three automation marker pairs must survive verbatim
  (`BLOG-POST-LIST`, `waka`, `activity`). No fabricated claims, metrics, clients,
  or testimonials.

## Chosen direction and memorable moment

**The Spine** — prove the thesis instead of stating it, using the homepage's own
Constraint / Decision / Outcome record as the first viewport.

**Memorable moment:** the migration record. A reader meets the thesis
("Software that holds up after the demo") and is immediately shown a real
instance of it — the site he ships was moved off Vercel, the native binary that
could not run in a Worker, and the blank social cards it caused. The thesis is
demonstrated before it is trusted.

## Direction contract

**THESIS:** A profile README that opens by proving its own claim, refusing the
category arrangement in which a typing animation introduces a list of
technologies and a wall of badges stands in for credibility.

**OWN-WORLD:** The Evidence Ledger, inherited unchanged from piyushmehta.com.
Ink-night `#171a2f` ground, surface-night `#222640` raised panels, amber-signal
`#ffcc68` used only for decisions, actions, and measured values, secondary text
`#b4bad8`, muted `#8f96ba`, hairline `#343a5f` rules. Muli for voice;
Source Code Pro at 800 weight, uppercase, `0.12em` tracking for eyebrows, dates,
and metrics — the Code Means Code rule. Square 6–8px corners, 1px borders, no
shadows, no thick side rails, no gradient text, no emoji as icon system. The
accent stays rare; its scarcity is what makes it legible.

**STORY:** The visitor reads a name and a thesis, meets a real migration broken
into constraint, decision, and outcome, sees four measured results with their
provenance, scans what he is building and what he has shipped, reads the latest
writing, and ends on one action. At every step the visitor understands, believes,
and can act.

**FIRST VIEWPORT:** A left-aligned masthead: the name at display scale in bright
text with a role line beneath in secondary. Directly under it the thesis line,
set large, the largest text on the page after the name. Then the record: a
two-column open composition, `01 CONSTRAINT` and `02 DECISION` above a
full-width `03 OUTCOME` band, separated by hairline rules rather than nested
cards, with an amber marker on the outcome value. Below the record, a
three-value outcome rail in amber. The primary action — book a call — sits in
the masthead, above the fold, not at the page foot.

**FORM:** The Spine. Second on the grounded candidate list, chosen by the user
over the roll's assigned The Index Card. Seed key `c56217fd`, deal indices
4 / 2 / 7. The winning challenger's discipline was kept: the collider event
display contributed the *event record* reading — one frozen event radiating
into tracks — which is why the hero is a single record rather than a list.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

- Whether consulting and engineering roles read as one combined proposition or
  two distinct tracks. Currently one combined proposition with a single primary
  action.
- Whether the GitHub profile `bio` field (currently empty) should be filled to
  match the README masthead.
