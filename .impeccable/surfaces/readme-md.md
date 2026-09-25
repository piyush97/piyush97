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
- **Subject:** Piyush. Not the website. piyushmehta.com is one project among
  twenty-four and sits in the project list, not in the spine.
- **Proof available:** four career entries with locations, dates, and outcomes,
  from the portfolio's own `resumeRoles`; four outcome figures spanning the whole
  career; education from two institutions; the Azure AI Engineer Associate
  certification; two hackathon wins and a BDO award; 29 public repositories with
  real language and star counts; 22 blog posts since May 2026.
- **Constraints:** GitHub strips CSS, so structure comes from `div align`,
  `table`, and `img` only, and colour must arrive as a committed asset. Two
  automation marker pairs must survive verbatim (`BLOG-POST-LIST`, `activity`).
  No fabricated claims, metrics, clients, or testimonials. Every figure traces to
  `PiyushMehta.com/src/data/portfolio.ts`, the GitHub API, or a repo description.

## Chosen direction and memorable moment

**The Spine** — a numbered record that a reader can follow, repurposed from the
Constraint / Decision / Outcome case study to the career itself.

**Memorable moment:** the career markers. Four employers on one uniform
typographic rule, newest first, each with a year, each followed by what was
actually built. The sequence carries information — chronological order is the
argument — so the numbering earns its place, and the markers set the page's
rhythm for everything below them.

## Direction contract

**THESIS:** A profile README whose spine is the person, refusing the category
arrangement in which a typing animation introduces a list of technologies and a
wall of badges stands in for credibility.

**OWN-WORLD:** The Evidence Ledger, inherited unchanged from piyushmehta.com.
Ink-night `#171a2f` ground, surface-night `#222640` raised panels, amber-signal
`#ffcc68` used only for decisions, actions, and measured values, secondary text
`#b4bad8`, muted `#8f96ba` in dark and `#666c7d` in light, hairline `#343a5f` rules.
Muli for voice; Source Code Pro at 800 weight, uppercase, `0.12em` tracking for
markers, dates, and metrics — the Code Means Code rule. Square 6–8px corners, 1px
borders, no shadows, no thick side rails, no gradient text, no emoji as an icon
system except inside machine-written blocks. The accent stays rare.

**STORY:** The visitor reads a name, a role, a city, and a thesis. They scan four
career entries and see scope, dates, and outcomes. They read four measured
results with their provenance, learn what he builds, read how he works, see the
projects and the credentials, skim the writing, and end on one action.

**FIRST VIEWPORT:** A left-aligned masthead: the monogram, the name at display
scale in bright text, the role and city beneath, then the thesis line as the
largest text after the name, then the action row. The career section opens
immediately under it, its first marker inside the first viewport.

**FORM:** The Spine, chosen by the user over the roll's assigned The Index Card.
Seed key `c56217fd`, deal indices 4 / 2 / 7. The winning challenger's discipline
was kept: the collider event display contributed the *event record* reading — one
frozen event radiating into tracks — which is why the spine is a sequence of
numbered records rather than a list.

**FINISH:** unreviewed and undocumented is finished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Resolved decisions

- **One combined proposition.** Consulting and engineering roles read as one
  offer with a single primary action, rather than two competing tracks.
- **The career is the spine**, the metrics span the whole career rather than one
  engagement, and "How I work" carries his four engineering principles verbatim.
- **A label is stated once.** Each marker carries the employer and start year;
  the prose carries role, location, and full range.

## Unresolved decisions

- Whether the GitHub profile `bio` field (currently empty) should be filled to
  match the README masthead.
