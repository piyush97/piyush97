# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

The deliverable is a GitHub profile README: Markdown with inline HTML, rendered by GitHub's own Markdown pipeline inside a fixed-width content column on github.com. No build step, no framework, no client JavaScript. The profile repository is `piyush97/piyush97` on branch `master`.

## Users

**Primary: hiring managers and prospective clients.** A staff/lead-level engineer or a founder opens the GitHub profile from a link in a job application, a referral, or a cold outreach. They spend under a minute deciding whether to keep reading, and they are looking for evidence of engineering judgment and shipped outcomes rather than a list of technologies.

**Secondary: peers and open-source contributors.** Arrive from the blog, from a repo, or from search, and want depth — architecture write-ups, working tools, and a sense of how he thinks.

## Product Purpose

The profile README is the top of a credibility funnel. GitHub is often the first place a stranger evaluates Piyush, and this file is the only page that can turn that visit into a click to the portfolio, the blog, or a booking link.

Success means a visitor understands within one viewport who Piyush is and what he is good at, sees credible evidence that he has shipped and can be trusted with hard problems, and is given one obvious next step. It is not a place to display every tool he has ever touched.

## Positioning

**"Software that holds up after the demo."** The profile inherits the thesis of piyushmehta.com rather than inventing a separate one: durable systems over impressive prototypes, judgment that can be inspected and challenged. The same voice carries across both surfaces, so a visitor moving from the site to GitHub recognises one person rather than two.

**The subject is Piyush, not the website.** An earlier revision told one story, the Vercel-to-Cloudflare migration of piyushmehta.com, with that site's outcome metrics beneath it. That was a case study wearing a profile README's clothes, and it was wrong: the site is one project among twenty-four. The spine is the career, and the portfolio is one entry in a list.

## Operating Context

- The README is **partly machine-written**. Two GitHub Actions inject content into it on a schedule, each bounded by HTML comment markers that must survive any edit:
  - `<!-- BLOG-POST-LIST:START -->` / `<!-- BLOG-POST-LIST:END -->` — `gautamkrishnar/blog-post-workflow`, pulls 10 posts from the site RSS nightly.
  - `<!--START_SECTION:activity-->` / `<!--END_SECTION:activity-->` — `jamesgeorge007/github-activity-readme`, every 30 minutes.
  - A third, `Platane/snk`, writes `charts/github-snake.svg` and `charts/github-snake-dark.svg` nightly. It touches files only, never the README.
- A third workflow, `anmol098/waka-readme-stats`, used to write a `<!--START_SECTION:waka-->` block into the middle of the document. It was removed along with the block, because a 60-line auto-generated section of ASCII bar charts was the least credible thing on the page and it had already begun reporting "No Activity Tracked This Week". Nothing regenerates it.
- Neither remaining workflow triggers on push. A change that empties those regions ships visibly empty sections until the next scheduled run, so populated contents are ported across by hand rather than replaced with placeholders.
- The profile's own commit history shows a bot identity (`bot@piyushmehta.com`) pushing automated updates, so the README changes on its own and must stay conflict-free.
- The portfolio project's own `src/data/portfolio.ts` is the authoritative source for what Piyush actually works on. The README must not drift from it.

## Capabilities and Constraints

**Hard constraints**

- GitHub's Markdown renderer supports a restricted subset of HTML. Arbitrary CSS in `<style>` blocks is stripped. Layout must be built from `<div align>`, `<table>`, and `<img>` only.
- GitHub proxies all images through `camo`, so third-party image hosts must be reachable and reasonably fast or the README renders with holes.
- The profile README is the single most-shared public artifact on the account. It is read on GitHub, in email clients, and in Slack/Discord unfurls, at desktop and mobile widths, in light and dark mode.
- Read-only, no JavaScript. Motion is only possible through hosted animated assets.

**Undecided / open**

- Whether consulting and engineering roles should be presented as one combined proposition or two distinct tracks.

## Brand Commitments

- **Voice:** direct, specific, evidence-led. States what was built, what it does, and what the constraint was. Avoids superlatives and growth-marketing register.
- **Consistency with piyushmehta.com:** the profile is the same product surface as the site, not a separate brand. Where the site has a house framing, the profile should not contradict it.
- **Privacy:** the contact email is published in the README for collaborator enquiries. Keep it published; do not add new personal contact details without explicit approval.
- **Existing assets:** `code.gif`, `_resume_.gif`, `assets/banner.jpg`, `assets/bar_graph.png`, `charts/github-snake*.svg` are committed in the repository and may be used.

## Evidence on Hand

Verified from the GitHub API on 2026-09-25:

- **396 followers, 29 public repositories, location Canada, account created 2016-04-02.**
- **Profile `bio` field is empty** and `company` is unset — unused inventory on the profile header itself.
- **Flagship repository `PiyushMehta.com` — 32 stars, the most-starred repo on the account**, described as "Portfolio and technical blog — Astro 7, React 19, Tailwind CSS v4, MDX".
- Other notable repos: `awesome-portfolio` (23★), `piyush97` (10★), `GitCompete` (10★), `Slika-API` (10★), `omaswitch` (8★, QML), `saas-startup` (7★), `khel-ke-baat-karen` (6★, Dart), `Homelab` (5★), `interview-prep-portal` (4★), `DotFiles` (3★).
- **Actual language distribution across the 24 repos carrying a language:** TypeScript 7, JavaScript 4, Shell 3, Python 2, HTML 2, C 1, QML 1, HCL 1, Dart 1, Jupyter 1.
- **No repository uses Next.js or NestJS.**

Authoritative project and service detail lives in `PiyushMehta.com/src/data/portfolio.ts`: FocusTube, Enterprise AI Workflows, Scalable Product Platform, PiyushMehta.com, Homelab and GitOps, Interview Prep Portal, Developer Education and Talks. Services offered include Senior Software Engineer, Senior Software Consultant, and Full Stack Developer roles.

**Absences future work must not fabricate:** no customer testimonials, no named clients, no revenue or user numbers beyond what the portfolio site already publishes, no benchmark claims, no awards.

## Product Principles

1. **One audience, one thesis.** The page argues to hiring managers and clients. Peer credibility is earned through evidence and depth, not by adding a second, competing pitch.
2. **Evidence over inventory.** A reader should be able to name a specific thing Piyush built and what it proved. A list of thirty technologies proves nothing and is actively harmful to credibility.
3. **Only claims that survive checking.** Every technology, project, and number on the page must be verifiable from the GitHub API or the portfolio site. Vanity metrics that count generated or vendored code are excluded on principle.
4. **One obvious next step.** The page ends by making the highest-value action unambiguous rather than offering four equally weighted calls to action.
5. **The machine-written parts are structural, not optional.** Automated regions get a deliberately designed frame so the injected content looks intentional instead of appended.

## Accessibility & Inclusion

Every image and link carries descriptive `alt` text — decorative-only alt text is not acceptable here, because the images carry real content (project cards, language charts, contribution graph). The profile must remain comprehensible in GitHub's dark theme, which inverts the page background; nothing may rely on light-only contrast. No motion may be the sole carrier of information.
