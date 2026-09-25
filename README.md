<div align="left">

<img src="https://raw.githubusercontent.com/piyush97/piyush97/master/assets/mark.svg" width="52" height="52" alt="Piyush Mehta monogram" />

# Piyush Mehta

**Senior Software Engineer · Canada**

I build durable product systems at the seam between ambitious ideas and operational reality — with judgment that can be inspected, challenged, and trusted.

<a href="https://calendly.com/piyushmehta"><img src="https://img.shields.io/badge/Book%20a%20call-ffcc68?style=for-the-badge&logo=google-calendar&logoColor=171a2f" alt="Book a call" /></a> <a href="mailto:me@piyushmehta.com"><img src="https://img.shields.io/badge/Email-171a2f?style=for-the-badge&logo=gmail&logoColor=ffcc68" alt="Email" /></a> <a href="https://www.linkedin.com/in/piyush24/"><img src="https://img.shields.io/badge/LinkedIn-171a2f?style=for-the-badge&logo=linkedin&logoColor=ffcc68" alt="LinkedIn" /></a> <a href="https://piyushmehta.com"><img src="https://img.shields.io/badge/Portfolio-171a2f?style=for-the-badge&logo=google-chrome&logoColor=ffcc68" alt="Portfolio" /></a>
</div>

---

## The thesis, and the proof

I moved [this site](https://piyushmehta.com) off Vercel and onto Cloudflare Workers, then wrote up what broke. It is the clearest example I have of the kind of work I am asking to be hired for.

<img src="https://raw.githubusercontent.com/piyush97/piyush97/master/assets/record-01.svg" alt="01 constraint" />

Vercel's edge model was reaching its ceiling on cost, and a native binary dependency could not run inside a Worker at all.

<img src="https://raw.githubusercontent.com/piyush97/piyush97/master/assets/record-02.svg" alt="02 decision" />

Swap `@astrojs/vercel` for `@astrojs/cloudflare` and keep `output: 'server'`, but prerender every public page so only the two API routes execute Worker code.

<img src="https://raw.githubusercontent.com/piyush97/piyush97/master/assets/record-03.svg" alt="03 outcome" />

Shipped on the Workers Free plan. Along the way: a native-module failure, an Upstash client rewrite, and a blank-social-card regression that reached production social unfurls. The write-up covers all three.

[Read the migration write-up](https://piyushmehta.com/blog/vercel-to-cloudflare-migration)

<picture>
  <source media="(max-width: 560px)" srcset="https://raw.githubusercontent.com/piyush97/piyush97/master/assets/metrics-compact.svg">
  <img src="https://raw.githubusercontent.com/piyush97/piyush97/master/assets/metrics.svg" width="880" height="104" alt="Outcomes: 5+ years building production software; 30% workflow efficiency gain; 35% vulnerability reduction; 1,500+ developers mentored" />
</picture>

*Published outcomes, sourced from the portfolio: enterprise AI workflow delivery, secure-coding and review loops, and Google Developer Student Clubs and workshop leadership.*

---

## What I build

**AI that survives production.** Agent and MCP systems, retrieval pipelines, and LLM integrations built past the prototype stage, with evaluation and guardrails. See [FocusTube](https://github.com/piyush97/focus-tube) and the [MCP server starter](https://github.com/piyush97/mcp-server-typescript-starter).

**Content platforms as engineering proof.** This site is a real deployment: Astro 7, React islands, MDX, Tailwind v4, Pagefind search, build-time social cards, and release gates that fail the build when an artifact is broken.

**Infrastructure in public.** A homelab run with GitOps, real disaster recovery after a 12TB drive failed, and [OmaSwitch](https://github.com/piyush97/omaswitch), an Alt-Tab overlay for [Omarchy](https://omarchy.org).

**Developer education.** 1,500+ developers mentored through Google Developer Student Clubs, workshops, and long-form technical writing.

---

## Selected work

**[PiyushMehta.com](https://github.com/piyush97/PiyushMehta.com)**: portfolio and technical blog on Cloudflare Workers.
32 stars · 223 prerendered pages · 2 runtime routes · [v5.0.0](https://github.com/piyush97/PiyushMehta.com/releases)

**[awesome-portfolio](https://github.com/piyush97/awesome-portfolio)**: a deploy-ready portfolio template in TypeScript.
23 stars

**[OmaSwitch](https://github.com/piyush97/omaswitch)**: Alt-Tab overlay for Omarchy with MRU ordering.
8 stars · QML · ships as a tagged release

**[Homelab](https://github.com/piyush97/Homelab)** and **[GitOps](https://github.com/piyush97/homelab-gitops)**: self-hosted infrastructure, documented in public.
5 stars · Shell and HCL · survived a real disk failure

**[GitCompete](https://github.com/piyush97/GitCompete)**: compares two public GitHub profiles.
10 stars · JavaScript

**[interview-prep-portal](https://github.com/piyush97/interview-prep-portal)**: application tracker and interview preparation.
4 stars · TypeScript

**Stack.** Across the 24 repositories that carry a language: **TypeScript** in 8, JavaScript in 4, Shell in 3, HTML in 2, Python in 2, and one each of C, Jupyter Notebook, HCL, Dart, and QML. Day to day: Astro, React, TypeScript, MDX, Tailwind CSS, Cloudflare Workers, Node.js, PostgreSQL, Azure, OpenAI, LangChain, Docker, Proxmox, QML.

---

## Writing

Twenty-two posts since May, including the migration above. The list below updates itself from the site feed.

<!-- BLOG-POST-LIST:START -->
- [Building FocusTube with TypeSafe Jev](https://piyushmehta.com/blog/building-focustube-typesafe-jev)
- [Testing AI Agent Actions: A Runnable Approval and Retry Harness](https://piyushmehta.com/blog/testing-ai-agent-actions)
- [RAG vs Long Context: When Do You Actually Need Retrieval?](https://piyushmehta.com/blog/rag-vs-long-context)
- [I Moved This Site From Vercel to Cloudflare. Here Is What Broke.](https://piyushmehta.com/blog/vercel-to-cloudflare-migration)
- [Herdr Is the Runtime Your Coding Agents Live On](https://piyushmehta.com/blog/herdr-terminal-multiplexer-coding-agents)
- [My 12TB Drive Failed. ZFS Saved 3.4TB of Data](https://piyushmehta.com/blog/zfs-saved-my-data-seagate-warranty)
- [OmaSwitch: The Alt+Tab Omarchy Has Been Missing](https://piyushmehta.com/blog/omaswitch-alt-tab-omarchy)
- [From Cron to Event-Driven: A Migration Playbook](https://piyushmehta.com/blog/cron-to-event-driven)
- [AGENTS.md Is Becoming the Most Important File in Your Repository](https://piyushmehta.com/blog/agents-md-repository-context)
- [Running a Coding Agent on DeepSeek V4 Flash: The 1M-Context Cheap Workhorse](https://piyushmehta.com/blog/deepseek-v4-flash-0731)
<!-- BLOG-POST-LIST:END -->

[Read all posts on piyushmehta.com](https://piyushmehta.com)

---

## Contribution graph

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/piyush97/piyush97/master/charts/github-snake-dark.svg">
  <img alt="GitHub contribution graph rendered as a snake" src="https://raw.githubusercontent.com/piyush97/piyush97/master/charts/github-snake.svg" width="100%">
</picture>

---

## Recent activity

<!--START_SECTION:activity-->

1. 🗣 Commented on [#21701](https://github.com/xbmc/xbmc/issues/21701#issuecomment-2755175497) in [xbmc/xbmc](https://github.com/xbmc/xbmc)
2. 💪 Opened PR [#20](https://github.com/SlideFusion/SlideFusion/pull/20) in [SlideFusion/SlideFusion](https://github.com/SlideFusion/SlideFusion)
3. 🗣 Commented on [#5466](https://github.com/microsoft/vscode-copilot-release/issues/5466#issuecomment-2735012152) in [microsoft/vscode-copilot-release](https://github.com/microsoft/vscode-copilot-release)
4. 🗣 Commented on [#5466](https://github.com/microsoft/vscode-copilot-release/issues/5466#issuecomment-2734984237) in [microsoft/vscode-copilot-release](https://github.com/microsoft/vscode-copilot-release)
5. 🗣 Commented on [#16525](https://github.com/immich-app/immich/issues/16525#issuecomment-2703049721) in [immich-app/immich](https://github.com/immich-app/immich)
<!--END_SECTION:activity-->

---

## Let's talk

Open to senior software engineering and technical leadership roles, and to consulting engagements on AI workflows, platform reliability, and architecture review.

<a href="https://calendly.com/piyushmehta"><img src="https://img.shields.io/badge/Book%20a%20call-ffcc68?style=for-the-badge&logo=google-calendar&logoColor=171a2f" alt="Book a call" /></a> <a href="mailto:me@piyushmehta.com?subject=Let's%20collaborate"><img src="https://img.shields.io/badge/Email-171a2f?style=for-the-badge&logo=gmail&logoColor=ffcc68" alt="Email" /></a> <a href="https://www.linkedin.com/in/piyush24/"><img src="https://img.shields.io/badge/LinkedIn-171a2f?style=for-the-badge&logo=linkedin&logoColor=ffcc68" alt="LinkedIn" /></a> <a href="https://x.com/PiyushMehtas"><img src="https://img.shields.io/badge/X-171a2f?style=for-the-badge&logo=x&logoColor=ffcc68" alt="X" /></a>

**Piyush Mehta** · Senior Software Engineer · [piyushmehta.com](https://piyushmehta.com)
