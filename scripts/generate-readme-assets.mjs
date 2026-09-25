#!/usr/bin/env node
/**
 * Generates the structural SVG assets for the profile README.
 *
 * GitHub strips CSS from README markdown and blocks data: URIs in images, so
 * colour and rules cannot come from markup. These files are committed and
 * referenced through raw.githubusercontent.com instead, which is the pattern the
 * existing charts/ assets already use.
 *
 * Every asset carries an internal prefers-color-scheme block so it holds the
 * Evidence Ledger's Two-Ink Rule: dark and light each pick their own ink,
 * surface, border, and signal values. An asset baked to one theme reads as
 * broken in the other.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'assets');
mkdirSync(OUT, { recursive: true });

/** Evidence Ledger tokens, from piyushmehta.com DESIGN.md. */
const INK = {
  night: '#171a2f',
  surface: '#222640',
  bright: '#f6f7ff',
  secondary: '#b4bad8',
  muted: '#8f96ba',
  border: '#343a5f',
  amber: '#ffcc68',
  paper: '#f6f3ea',
  paperSurface: '#fffaf0',
  inkText: '#121827',
  paperBorder: '#ddd3c2',
  rust: '#8d3d1f',
};

const MONO =
  "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace";
const SANS =
  "'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/** Shared Two-Ink custom properties. Every asset emits these. */
const TOKENS = `
  :root{
    --ink:${INK.night};
    --surface:${INK.surface};
    --text:${INK.bright};
    --secondary:${INK.secondary};
    --muted:${INK.muted};
    --rule:${INK.border};
    --signal:${INK.amber};
    --paper:${INK.paper};
    --paper-surface:${INK.paperSurface};
    --ink-text:${INK.inkText};
    --paper-rule:${INK.paperBorder};
    --paper-signal:${INK.rust};
  }
  @media (prefers-color-scheme: light){
    :root{
      --ink:${INK.paper};
      --surface:${INK.paperSurface};
      --text:${INK.inkText};
      --secondary:#5a5f70;
      --muted:#7c8093;
      --rule:${INK.paperBorder};
      --signal:${INK.rust};
    }
  }`;

const write = (name, svg) => {
  writeFileSync(join(OUT, name), svg.trim() + '\n');
  console.log(`  assets/${name}`);
};

// ── 1. PM monogram ──────────────────────────────────────────────────────────
// The brand mark used on the site, redrawn as a self-contained tile. A square
// mark rather than a pill, per the world's shape language.
const mark = `
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="Piyush Mehta monogram">
  <style>${TOKENS}</style>
  <rect x="1" y="1" width="62" height="62" rx="8" fill="var(--surface)" stroke="var(--rule)" stroke-width="1"/>
  <text x="32" y="33" text-anchor="middle" dominant-baseline="central"
        font-family="${SANS}" font-size="24" font-weight="800" letter-spacing="0.02em"
        fill="var(--signal)">PM</text>
</svg>`;
write('mark.svg', mark);

// ── 2. Outcome rail ─────────────────────────────────────────────────────────
// The measured-results band. Rendered as one asset so the values can carry the
// signal colour and the labels can carry the mono label treatment at the exact
// size the world specifies, instead of being flattened into badge chrome.
//
// Values and labels are the four published portfolio metrics. Each carries its
// provenance in the README body; nothing here is invented.
const METRICS = [
  { value: '5+', label: 'years building', sub: 'production software' },
  { value: '30%', label: 'workflow', sub: 'efficiency gain' },
  { value: '35%', label: 'vulnerability', sub: 'reduction' },
  { value: '1,500+', label: 'developers', sub: 'mentored' },
];

const COL_W = 220;
const railW = COL_W * METRICS.length;
const rail = `
<svg xmlns="http://www.w3.org/2000/svg" width="${railW}" height="104" viewBox="0 0 ${railW} 104" role="img" aria-label="Outcomes: ${METRICS.map((m) => `${m.value} ${m.label} ${m.sub}`).join('; ')}">
  <style>${TOKENS}
    .v{font-family:${SANS};font-size:34px;font-weight:800;fill:var(--signal)}
    .l{font-family:${MONO};font-size:11px;font-weight:700;letter-spacing:0.12em;fill:var(--text)}
    .s{font-family:${MONO};font-size:11px;font-weight:400;letter-spacing:0.02em;fill:var(--muted)}
    .r{stroke:var(--rule);stroke-width:1}
  </style>
  <line class="r" x1="0" y1="0.5" x2="${railW}" y2="0.5"/>
  ${METRICS.map((m, i) => {
    const x = i * COL_W;
    const sep = i === 0 ? '' : `<line class="r" x1="${x}" y1="18" x2="${x}" y2="88"/>`;
    return `${sep}
  <text class="v" x="${x + (i === 0 ? 0 : 24)}" y="46">${m.value}</text>
  <text class="l" x="${x + (i === 0 ? 0 : 24)}" y="70">${m.label.toUpperCase()}</text>
  <text class="s" x="${x + (i === 0 ? 0 : 24)}" y="86">${m.sub}</text>`;
  }).join('\n  ')}
  <line class="r" x1="0" y1="103.5" x2="${railW}" y2="103.5"/>
</svg>`;
write('metrics.svg', rail);

// ── 3. Outcome rail, compact ────────────────────────────────────────────────
// GitHub does not reflow a wide asset on a phone: at 390px the four-up rail
// scales to roughly 0.44, dropping the 11px mono labels under 5px and making
// them unreadable. This 2x2 variant has a much smaller intrinsic width, so it
// loses far less when it scales, and the README swaps it in with a picture
// media query.
const CCOL_W = 230;
const compactRows = [METRICS.slice(0, 2), METRICS.slice(2)];
const compactH = 2 * 104;
const compact = `
<svg xmlns="http://www.w3.org/2000/svg" width="${CCOL_W * 2}" height="${compactH}" viewBox="0 0 ${CCOL_W * 2} ${compactH}" role="img" aria-label="Outcomes: ${METRICS.map((m) => `${m.value} ${m.label} ${m.sub}`).join('; ')}">
  <style>${TOKENS}
    .v{font-family:${SANS};font-size:32px;font-weight:800;fill:var(--signal)}
    .l{font-family:${MONO};font-size:11px;font-weight:700;letter-spacing:0.12em;fill:var(--text)}
    .s{font-family:${MONO};font-size:11px;font-weight:400;letter-spacing:0.02em;fill:var(--muted)}
    .r{stroke:var(--rule);stroke-width:1}
  </style>
  <line class="r" x1="0" y1="0.5" x2="${CCOL_W * 2}" y2="0.5"/>
  ${compactRows
    .map((pair, r) =>
      pair
        .map((m, c) => {
          const x = c * CCOL_W;
          const y = r * 104;
          const sep =
            c === 1 ? `<line class="r" x1="${x}" y1="${y + 18}" x2="${x}" y2="${y + 88}"/>` : '';
          return `${sep}
  <text class="v" x="${x + (c === 0 ? 0 : 24)}" y="${y + 46}">${m.value}</text>
  <text class="l" x="${x + (c === 0 ? 0 : 24)}" y="${y + 70}">${m.label.toUpperCase()}</text>
  <text class="s" x="${x + (c === 0 ? 0 : 24)}" y="${y + 86}">${m.sub}</text>`;
        })
        .join('\n  '),
    )
    .join('\n  ')}
  <line class="r" x1="0" y1="${compactH - 0.5}" x2="${CCOL_W * 2}" y2="${compactH - 0.5}"/>
</svg>`;
write('metrics-compact.svg', compact);

// ── 4. Record markers ───────────────────────────────────────────────────────
// The hero record's `01 CONSTRAINT` / `02 DECISION` / `03 OUTCOME` labels.
//
// These are assets rather than markdown because GitHub renders code spans and
// bold text in its own colours: a backticked `01` comes out as a dark chip and
// a bold label comes out in body colour, so neither can carry the amber signal
// or hold the mono label treatment. An asset guarantees both, and carries the
// light-scheme ink swap with everything else.
//
// Transparent ground so the marker sits on whatever surface GitHub renders.
const RECORDS = [
  { n: '01', label: 'CONSTRAINT' },
  { n: '02', label: 'DECISION' },
  { n: '03', label: 'OUTCOME' },
];

for (const { n, label } of RECORDS) {
  const w = 34 + label.length * 11 + 46;
  const marker = `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="20" viewBox="0 0 ${w} 20" role="img" aria-label="${n} ${label.toLowerCase()}">
  <style>${TOKENS}
    .n{font-family:${MONO};font-size:13px;font-weight:700;fill:var(--signal)}
    .l{font-family:${MONO};font-size:13px;font-weight:700;letter-spacing:0.12em;fill:var(--text)}
  </style>
  <text class="n" x="0" y="14">${n}</text>
  <line x1="26" y1="4" x2="26" y2="16" stroke="var(--rule)" stroke-width="1"/>
  <text class="l" x="36" y="14">${label}</text>
</svg>`;
  write(`record-${n}.svg`, marker);
}

console.log('done');
