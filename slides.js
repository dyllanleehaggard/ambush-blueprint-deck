/* ==========================================================
   ELEVATING THE ST. LOUIS AMBUSH — SLIDE CONTENT
   Each slide is { cls, title, render(n, total) }
   ========================================================== */

// Chart init registry
window.__chartInit = {};

// Reusable template helpers
const chrome = (n, total, section = 'ELEVATING THE AMBUSH') => `
  <div class="chrome-top">
    <div class="brand">ST. LOUIS AMBUSH</div>
    <div class="section">${section}</div>
  </div>
  <div class="chrome-bottom">
    <div class="signature">STRATEGIC BLUEPRINT &middot; DYLLAN HAGGARD</div>
    <div class="counter">${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
  </div>
`;

const watermark = (n) => `<div class="slide-watermark reveal reveal-1">${String(n).padStart(2, '0')}</div>`;

// ==========================================================
const SLIDES = [];
// Also expose on window for cross-script safety (GitHub Pages, etc)
window.SLIDES = SLIDES;

// ---------- SLIDE 1: COVER ----------
SLIDES.push({
  cls: 'slide-cover',
  title: 'Cover',
  render: (n, total) => `
    <div class="cover-accent"></div>
    <div class="chrome-top">
      <div class="brand">ST. LOUIS AMBUSH &middot; STRATEGIC BLUEPRINT 2026</div>
      <div class="section"></div>
    </div>
    <div class="slide-inner centered" style="padding-left: 1.5rem;">
      <div class="reveal reveal-1" style="margin-bottom: 2rem;">
        <span style="font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.3em; color: var(--mute);">A DOCUMENT IN TWO STATES &middot; <span style="color: var(--teal);">CURRENT</span> &amp; <span style="color: var(--pink);">FUTURE</span></span>
      </div>
      <h1 class="cover-title reveal reveal-2">
        <span class="line">ELEVATING</span>
        <span class="line">THE ST. LOUIS</span>
        <span class="line"><span class="underlined">AMBUSH</span></span>
      </h1>
      <div class="reveal reveal-4" style="margin-top: 3rem; max-width: 640px;">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem;">
          <div style="width: 48px; height: 3px; background: var(--teal);" class="reveal-line"></div>
          <span style="font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.25em; color: var(--teal); font-weight: 500;">A STRATEGIC BLUEPRINT</span>
        </div>
        <p class="subtitle" style="margin-top: 0.8rem;">A comprehensive roadmap for competitive excellence, organizational growth, and long-term sustainability.</p>
      </div>
    </div>
    <div class="chrome-bottom">
      <div style="display: flex; flex-direction: column; gap: 0.3rem;">
        <div style="font-size: 10px; letter-spacing: 0.2em; color: var(--mute-dark);">PREPARED BY</div>
        <div style="font-family: var(--f-body); font-weight: 700; font-size: 12px; color: var(--ink); letter-spacing: 0.15em;">DYLLAN HAGGARD &nbsp;&middot;&nbsp; <span style="color: var(--mute); font-weight: 400;">DATA &amp; VIDEO ANALYST</span></div>
      </div>
      <div class="counter">${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
    </div>
  `
});

// ---------- SLIDE 2: DECK PURPOSE ----------
SLIDES.push({
  title: 'Purpose',
  render: (n, total) => `
    ${chrome(n, total, 'INTRODUCTION')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>PURPOSE</div>
      <h2 class="reveal reveal-2">A full-organization audit.</h2>
      <p class="subtitle reveal reveal-3">Where we are, where we have the opportunity to go, and how we get there.</p>
      <div style="display: grid; grid-template-columns: 3fr 2fr; gap: 3rem; margin-top: 3rem; align-items: start;">
        <div>
          <p class="body-text reveal reveal-4" style="margin-bottom: 1.5rem;">This deck presents a comprehensive audit of the St. Louis Ambush — a clear-eyed look at the current state of the club, the specific opportunity in front of us, and the investments, systems, and decisions that will define the next three years.</p>
          <p class="body-text reveal reveal-5" style="color: var(--mute); font-style: italic;">It is offered not as a critique, but as a commitment: a detailed vision for what this club can become in one of the most important windows in American soccer history.</p>
        </div>
        <div class="img-placeholder reveal reveal-6" style="height: 280px;">AMBUSH ACTION</div>
      </div>
    </div>
  `
});

// ---------- SLIDE 3: READER'S GUIDE ----------
SLIDES.push({
  title: "Reader's Guide",
  render: (n, total) => `
    ${chrome(n, total, 'INTRODUCTION')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>READER'S GUIDE</div>
      <h2 class="reveal reveal-2">How to read this deck.</h2>
      <p class="subtitle reveal reveal-3">A consistent visual language runs throughout.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 3rem;">
        <div style="display: flex; border: 2px solid var(--teal); background: var(--bg-card); min-height: 200px;">
          <div style="background: var(--teal); color: var(--bg); padding: 1.5rem 1rem; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 0.8rem; min-width: 120px;">
            <span style="font-family: var(--f-display); font-size: 2rem; letter-spacing: 0.08em;">TEAL</span>
            <span style="font-family: var(--f-display); font-size: 1.6rem; letter-spacing: 0.08em;">NOW</span>
          </div>
          <div style="padding: 1.5rem; flex: 1;">
            <div style="font-family: var(--f-display); font-size: 2rem; color: var(--teal); letter-spacing: 0.05em; margin-bottom: 0.8rem;">CURRENT</div>
            <p style="color: var(--ink); margin-bottom: 0.8rem;">Honest assessment of where we are today.</p>
            <p style="color: var(--mute); font-style: italic; font-size: 0.95rem;">Real numbers. Real gaps. No spin.</p>
          </div>
        </div>
        <div style="display: flex; border: 2px solid var(--pink); background: var(--bg-card); min-height: 200px;">
          <div style="background: var(--pink); color: var(--bg); padding: 1.5rem 1rem; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 0.8rem; min-width: 120px;">
            <span style="font-family: var(--f-display); font-size: 2rem; letter-spacing: 0.08em;">PINK</span>
            <span style="font-family: var(--f-display); font-size: 1.6rem; letter-spacing: 0.08em;">NEXT</span>
          </div>
          <div style="padding: 1.5rem; flex: 1;">
            <div style="font-family: var(--f-display); font-size: 2rem; color: var(--pink); letter-spacing: 0.05em; margin-bottom: 0.8rem;">FUTURE</div>
            <p style="color: var(--ink); margin-bottom: 0.8rem;">Concrete vision of where we go next.</p>
            <p style="color: var(--mute); font-style: italic; font-size: 0.95rem;">Specific moves. Tied to metrics. Built to ship.</p>
          </div>
        </div>
      </div>
      <p class="body-text reveal reveal-6" style="color: var(--mute); font-style: italic; text-align: center; margin-top: 2.5rem; max-width: 100%;">Every recommendation ties to a metric. Every gap ties to a solution. Assumptions have been made for areas where my role does not directly overlap.</p>
    </div>
  `
});

// ---------- SLIDE 4: TABLE OF CONTENTS ----------
SLIDES.push({
  title: 'Contents',
  render: (n, total) => `
    ${chrome(n, total, 'CONTENTS')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>AGENDA</div>
      <h2 class="reveal reveal-2">Table of contents.</h2>
      <p class="subtitle reveal reveal-3">Seven parts. One blueprint.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['01', 'EXECUTIVE OVERVIEW',        'The big picture and the moment we are in.'],
          ['02', 'SPORTING ANALYSIS & STRATEGY', 'Performance, roster, training, pathway.'],
          ['03', 'GAME DAY & OPERATIONS',      'Matchday experience, travel, compliance.'],
          ['04', 'MARKETING & COMMERCIAL',     'Fans, ticketing, sponsors, brand.'],
          ['05', 'COMMUNITY',                  'Programs, presence, pipeline.'],
          ['06', 'FINANCE & SUSTAINABILITY',   'Revenue, cost structure, growth model.'],
          ['07', 'IMPLEMENTATION ROADMAP',     'Roles, sprint plan, three-year vision.'],
        ].map(([num, title, desc], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 80px 1fr 1fr; gap: 2rem; align-items: center; padding: 1rem 0; border-bottom: 1px solid var(--divider);">
            <div style="font-family: var(--f-display); font-size: 2.2rem; color: var(--teal); letter-spacing: 0.05em;">${num}</div>
            <div style="font-family: var(--f-display); font-size: 1.5rem; color: var(--ink); letter-spacing: 0.03em;">${title}</div>
            <div style="font-family: var(--f-body); font-size: 0.95rem; color: var(--mute); font-style: italic;">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 5: PART I DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part I',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART I')}
    <div class="part-num reveal reveal-1">I</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART I</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">EXECUTIVE</span>
        <span class="line">OVERVIEW</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 6: MISSION ----------
SLIDES.push({
  title: 'Mission',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>MISSION</div>
      <h2 class="reveal reveal-2">We are not just an indoor soccer club.</h2>
      <p class="subtitle reveal reveal-3">We are St. Louis Soccer.</p>
      <div style="margin-top: 3rem;">
        <div class="kicker reveal reveal-4" style="margin-bottom: 1.2rem;">SUCCESS LOOKS LIKE</div>
        <ul class="bullets reveal reveal-5" style="columns: 2; column-gap: 3rem;">
          <li>Players developed from youth to professional via a unified pipeline</li>
          <li>A game-day experience fans drive across the metro to attend</li>
          <li>Sponsors who renew because ROI is measurable</li>
          <li>A coaching staff that is properly resourced</li>
          <li>A brand known beyond St. Charles and respected across MASL and USL</li>
          <li>A financial model that is sustainable and scalable</li>
        </ul>
      </div>
      <div class="pullquote pink reveal reveal-7" style="margin-top: 2.5rem;">
        <strong style="font-style: normal; font-weight: 700;">The gap between where we are and where we could be is not a problem. It is an opportunity.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 7: WHAT'S WORKING ----------
SLIDES.push({
  title: "What's Working",
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">What's working.</h2>
      <p class="subtitle reveal reveal-3">Real strengths to build on, not romanticize.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2.5rem;">
        <div class="stat"><div class="value">13-5-6</div><div class="label">Season record &mdash; playoff bound</div></div>
        <div class="stat"><div class="value">30+ YRS</div><div class="label">Oldest pro soccer club in St. Louis</div></div>
        <div class="stat"><div class="value">ACTIVE</div><div class="label">Multi-platform social presence</div></div>
      </div>
      <div class="grid grid-2 reveal reveal-5" style="margin-top: 1rem;">
        <div class="stat"><div class="value">USL 2</div><div class="label">Established affiliate pathway program</div></div>
        <div class="stat"><div class="value">ROOTED</div><div class="label">Key sponsorships and community partnerships</div></div>
      </div>
      <p class="body-text reveal reveal-7" style="margin-top: 2rem; color: var(--mute); font-style: italic; text-align: center; max-width: 100%;">These are real assets. The blueprint that follows is built on top of them &mdash; not in spite of them.</p>
    </div>
  `
});

// ---------- SLIDE 8: THE GAPS ----------
SLIDES.push({
  title: 'The Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">The gaps.</h2>
      <p class="subtitle reveal reveal-3">Named precisely so they can be solved precisely.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['PERSONNEL', 'Each role currently absorbs two to three professional functions.'],
          ['DATA & TOOLS', 'Decisions made without supporting infrastructure or measurement.'],
          ['NO CRM', 'Fan database is a list &mdash; no segmentation, no lifecycle marketing.'],
          ['NO WORLD CUP PLAN', 'The biggest organic marketing window has no formal activation strategy.'],
          ['TRANSACTIONAL SPONSORS', 'Logo placements without measured ROI or strategic activation.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 16px 240px 1fr; gap: 1.5rem; align-items: center; padding: 0.9rem 0;">
            <div style="width: 14px; height: 14px; border-radius: 50%; background: var(--pink);"></div>
            <div style="font-family: var(--f-display); font-size: 1.4rem; color: var(--pink); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 1rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 9: OPERATING RISK ----------
SLIDES.push({
  title: 'Operating Risk',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>RISK</div>
      <h2 class="reveal reveal-2">Operating risk snapshot.</h2>
      <p class="subtitle reveal reveal-3">What keeps this club vulnerable.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['01', 'DISJOINTED PATHWAYS', 'Youth, USL2, and MASL operate as adjacent &mdash; not connected &mdash; entities.'],
          ['02', 'UNDERDEVELOPED INFRASTRUCTURE', 'Analytics, technology stack, and data tooling lag professional standards.'],
          ['03', 'PROFESSIONAL ALIGNMENT GAP', 'Roles, responsibilities, and decision rights are informal.'],
          ['04', 'VENUE DEPENDENCY', 'Concessions, parking, and pricing controlled by a third party.'],
          ['05', 'FAN MARKET BURNOUT', 'Concentrated audience without systematized acquisition pipeline.'],
        ].map(([num, t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 70px 260px 1fr; gap: 1.5rem; align-items: center; padding: 0.7rem 0; border-bottom: 1px solid var(--divider);">
            <div style="font-family: var(--f-display); font-size: 2rem; color: var(--teal); letter-spacing: 0.05em;">${num}</div>
            <div style="font-family: var(--f-display); font-size: 1.1rem; color: var(--ink); letter-spacing: 0.08em;">${t}</div>
            <div style="font-size: 0.95rem; color: var(--mute);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 10: THE MOMENT ----------
SLIDES.push({
  title: 'The Moment',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>TIMING</div>
      <h2 class="reveal reveal-2">The moment we are in.</h2>
      <p class="subtitle reveal reveal-3">American soccer is having its generational window. Are we ready?</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 3rem;">
        ${[
          ['2026', 'FIFA MEN\'S WORLD CUP'],
          ['2028', 'OLYMPIC GAMES'],
          ['2031', 'WOMEN\'S WORLD CUP'],
        ].map(([y, t]) => `
          <div style="background: var(--bg-card); border-top: 4px solid var(--pink); padding: 2.5rem 1.5rem; text-align: center;">
            <div style="font-family: var(--f-display); font-size: 4.5rem; line-height: 1; color: var(--ink); letter-spacing: 0.02em;" data-count="${y}" data-decimals="0">${y}</div>
            <div style="font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.2em; color: var(--pink); margin-top: 1rem; font-weight: 700;">${t}</div>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 2.5rem; border-left-color: var(--amber);">
        <div>
          <strong style="font-style: normal; font-family: var(--f-display); font-size: 1.5rem; letter-spacing: 0.02em; color: var(--ink);">Every U.S. World Cup team in history has had a St. Louis player.</strong>
          <div style="margin-top: 0.5rem; color: var(--mute); font-size: 0.95rem;">This community does not need to be convinced soccer matters. It needs a professional product worthy of the passion.</div>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 11: STRATEGIC THEMES ----------
SLIDES.push({
  title: 'Strategic Themes',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>FRAMEWORK</div>
      <h2 class="reveal reveal-2">Strategic themes.</h2>
      <p class="subtitle reveal reveal-3">Five pillars. One club.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['01', 'SPORTING EXCELLENCE', 'Performance environment, staffing, identity, data'],
          ['02', 'PLAYER PATHWAY', 'Youth &rarr; USL2 &rarr; MASL &mdash; a connected, marketed ladder'],
          ['03', 'GAME DAY & OPERATIONS', 'Matchday experience, logistics, compliance'],
          ['04', 'COMMERCIAL & MARKETING', 'Ticketing, sponsorship, fan lifecycle, brand'],
          ['05', 'COMMUNITY & BRAND', 'Civic presence, programs, pipeline, media'],
        ].map(([num, t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 60px 280px 1fr; gap: 1.5rem; align-items: center; padding: 0.6rem 0;">
            <div style="background: var(--teal); color: var(--bg); font-family: var(--f-display); font-size: 1.2rem; padding: 0.5rem 0.6rem; text-align: center; letter-spacing: 0.05em;">${num}</div>
            <div style="font-family: var(--f-display); font-size: 1.2rem; color: var(--ink); letter-spacing: 0.08em;">${t}</div>
            <div style="font-size: 0.95rem; color: var(--mute);">${d}</div>
          </div>
        `).join('')}
      </div>
      <p class="body-text reveal reveal-8" style="color: var(--teal); font-style: italic; font-weight: 700; text-align: center; margin-top: 2rem; max-width: 100%;">Every recommendation in this deck maps to one of these five.</p>
    </div>
  `
});

// ---------- SLIDE 12: CURRENT VS FUTURE TABLE ----------
SLIDES.push({
  title: 'Current vs Future',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>AT A GLANCE</div>
      <h2 class="reveal reveal-2">Current vs future.</h2>
      <p class="subtitle reveal reveal-3">The five pillars, in two columns.</p>
      <table class="table reveal reveal-4" style="margin-top: 2rem;">
        <thead>
          <tr>
            <th style="width: 18%;">PILLAR</th>
            <th class="teal" style="width: 38%;">CURRENT</th>
            <th class="pink" style="width: 44%;">FUTURE</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="title-cell">SPORTING</td><td>Overlapping roles, Hudl only, lacking personnel</td><td>GPS, performance science, resourced coaching decisions</td></tr>
          <tr><td class="title-cell">PATHWAY</td><td>Loose connection between levels</td><td>Unified DNA, shared metrics, clear ladder</td></tr>
          <tr><td class="title-cell">GAME DAY</td><td>Competent but reactive</td><td>Systemized playbook, elevated experience</td></tr>
          <tr><td class="title-cell">COMMERCIAL</td><td>Email list, transactional sponsors, portfolio gaps</td><td>CRM, tiered activation, dynamic ticketing</td></tr>
          <tr><td class="title-cell">COMMUNITY</td><td>Inconsistent, unpublicized</td><td>Scheduled, measured, amplified</td></tr>
        </tbody>
      </table>
    </div>
  `
});

// ---------- SLIDE 13: FUTURE VISION ----------
SLIDES.push({
  title: 'Future Vision',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE</div>
      <h2 class="reveal reveal-2">Three years from now.</h2>
      <p class="subtitle reveal reveal-3">The Ambush is the flagship professional sports experience in the St. Louis metro.</p>
      <ul class="bullets pink reveal reveal-4" style="margin-top: 2.5rem; font-size: 1.1rem;">
        <li>Players know exactly how to earn a first-team callup and progress up the ladder</li>
        <li>Sponsors renew because data proves their ROI</li>
        <li>Fans drive in from South City, Illinois, and North County &mdash; not just St. Charles</li>
        <li>A documented economic impact report supports the venue conversation</li>
        <li>Multiple routes to audience &mdash; podcast, YouTube, in-person, social, mobile</li>
        <li>The World Cup wave has been captured and converted</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 14: LEAGUE BENCHMARKS ----------
SLIDES.push({
  title: 'League Benchmarks',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>BENCHMARKS</div>
      <h2 class="reveal reveal-2">Where we sit in the league.</h2>
      <p class="subtitle reveal reveal-3">An honest comparison against the clubs we share the league with.</p>
      <div class="grid grid-2 reveal reveal-4" style="margin-top: 2.5rem; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <div>
          <div class="chart-wrap" style="height: 260px;" data-chart="benchmark-attendance"></div>
        </div>
        <div>
          <table class="table" style="font-size: 0.88rem;">
            <thead>
              <tr>
                <th style="width: 40%;">METRIC</th>
                <th style="color: var(--red);">AMBUSH</th>
                <th>COMETS</th>
                <th>WAVE</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="mono">AVG ATTENDANCE</td><td style="color: var(--red); font-weight: 700;">1.8-2.8K</td><td>~4,500</td><td>3,000+</td></tr>
              <tr><td class="mono">LEAGUE TITLES</td><td style="color: var(--red); font-weight: 700;">1</td><td>1</td><td>7</td></tr>
              <tr><td class="mono">BROADCAST</td><td style="color: var(--red); font-weight: 700;">Limited</td><td>Local TV</td><td>Local + natl</td></tr>
              <tr><td class="mono">BRAND IP</td><td style="color: var(--red); font-weight: 700;">Limited</td><td>I-70 rivalry</td><td>Black turf</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">The I-70 series proves the demand exists.</strong> The rest of the calendar isn't yet capturing it.
      </div>
    </div>
  `
});

// Chart: league benchmark attendance
window.__chartInit['benchmark-attendance'] = (el) => {
  const canvas = document.createElement('canvas');
  el.appendChild(canvas);
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Ambush', 'Milwaukee Wave', 'KC Comets'],
      datasets: [{
        label: 'Avg attendance',
        data: [2300, 3000, 4500],
        backgroundColor: ['#E11D2C', '#9AA5B1', '#F2A93B'],
        borderRadius: 0,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'MASL AVG ATTENDANCE 2025-26',
          color: '#9AA5B1',
          font: { family: "'JetBrains Mono', monospace", size: 10, weight: '500' },
          align: 'start',
        },
        tooltip: { callbacks: { label: (ctx) => ctx.parsed.y.toLocaleString() } }
      },
      scales: {
        x: { ticks: { color: '#9AA5B1', font: { family: "'DM Sans', sans-serif" } }, grid: { display: false } },
        y: { ticks: { color: '#9AA5B1', font: { family: "'JetBrains Mono', monospace", size: 10 } }, grid: { color: '#2A3440', drawBorder: false } }
      }
    }
  });
};

// ---------- SLIDE 15: CITY SC POSITIONING ----------
SLIDES.push({
  title: 'Ambush vs CITY SC',
  render: (n, total) => `
    ${chrome(n, total, 'PART I &middot; EXECUTIVE OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>POSITIONING</div>
      <h2 class="reveal reveal-2">Ambush vs. CITY SC.</h2>
      <p class="subtitle reveal reveal-3">Different product, different season, different fan. Not in conflict.</p>
      <div class="grid grid-2 reveal reveal-4" style="margin-top: 2.5rem;">
        <div style="border: 1px solid var(--divider); background: var(--bg-card);">
          <div style="background: var(--mute-dark); color: var(--bg); padding: 0.8rem 1rem; font-family: var(--f-display); font-size: 1.1rem; letter-spacing: 0.1em; text-align: center;">ST. LOUIS CITY SC</div>
          <div style="padding: 1.5rem;">
            ${[
              ['SEASON', 'Spring-Fall (outdoor)'],
              ['VENUE', 'Downtown (Energizer Park)'],
              ['TICKET FLOOR', '$40-60+'],
              ['AUDIENCE', 'Destination event'],
              ['GAME PACE', 'Traditional 90 min'],
              ['PLAYER ACCESS', 'Distant'],
            ].map(([k, v]) => `
              <div style="display: grid; grid-template-columns: 140px 1fr; padding: 0.55rem 0; border-bottom: 1px solid var(--divider);">
                <div class="mono" style="font-size: 10px; letter-spacing: 0.15em; color: var(--mute); text-transform: uppercase;">${k}</div>
                <div style="font-size: 0.95rem; color: var(--ink);">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="border: 2px solid var(--red); background: var(--bg-card);">
          <div style="background: var(--red); color: var(--bg); padding: 0.8rem 1rem; font-family: var(--f-display); font-size: 1.1rem; letter-spacing: 0.1em; text-align: center;">ST. LOUIS AMBUSH</div>
          <div style="padding: 1.5rem;">
            ${[
              ['SEASON', 'Late Fall-Spring (indoor)'],
              ['VENUE', 'St. Charles (Family Arena)'],
              ['TICKET FLOOR', '$15-25'],
              ['AUDIENCE', 'Regular family habit'],
              ['GAME PACE', 'Fast, high-scoring 60 min'],
              ['PLAYER ACCESS', 'Up close'],
            ].map(([k, v]) => `
              <div style="display: grid; grid-template-columns: 140px 1fr; padding: 0.55rem 0; border-bottom: 1px solid var(--divider);">
                <div class="mono" style="font-size: 10px; letter-spacing: 0.15em; color: var(--teal); text-transform: uppercase; font-weight: 700;">${k}</div>
                <div style="font-size: 0.95rem; color: var(--ink); font-weight: 500;">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--pink);">
        <strong style="font-style: normal;">CITY SC grows the soccer audience.</strong> Ambush converts that audience into a year-round, high-frequency, high-touch product they can afford and reach.
      </div>
    </div>
  `
});

// ---------- SLIDES 16+: Will be appended from additional files ----------

// ==========================================================
// PART II - SPORTING ANALYSIS & STRATEGY (slides 16-34)
// ==========================================================

// ---------- SLIDE 16: PART II DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part II',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART II')}
    <div class="part-num reveal reveal-1">II</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART II</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">SPORTING</span>
        <span class="line">ANALYSIS &amp;</span>
        <span class="line">STRATEGY</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 17: SPORTING STAFF ----------
SLIDES.push({
  title: 'Sporting Staff',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>STAFF</div>
      <h2 class="reveal reveal-2">Sporting department.</h2>
      <p class="subtitle reveal reveal-3">Every person on this staff carries two to three roles.</p>
      <div class="grid grid-5 reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['JEFF LOCKER', 'Owner | Head Coach'],
          ['DONNIE ALBERTY', 'GM | Asst. Coach | Dir. of Scouting'],
          ['JAMIE SWANNER', 'GK Coach | Asst. Coach'],
          ['CODY ELMENDORF', 'Athletic Trainer'],
          ['BRIAN WAGNER', 'Equipment Manager'],
        ].map(([n, r]) => `
          <div style="background: var(--bg-card); border: 1px solid var(--divider); padding: 1.2rem 1rem; text-align: center;">
            <div style="width: 70px; height: 70px; border: 1.5px dashed var(--teal); border-radius: 50%; margin: 0 auto 1rem;"></div>
            <div style="font-family: var(--f-display); font-size: 1rem; color: var(--ink); letter-spacing: 0.05em; margin-bottom: 0.4rem;">${n}</div>
            <div style="font-size: 0.8rem; color: var(--mute);">${r}</div>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 2.5rem; border-left-color: var(--amber);">
        <div>
          <strong style="font-style: normal;">This is not a failure &mdash; it is a structural reality that limits what each role can deliver.</strong>
          <div style="margin-top: 0.4rem; color: var(--mute); font-size: 0.95rem;">The path forward is not criticism. It is clarity.</div>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 18: SPORTING GAP ANALYSIS ----------
SLIDES.push({
  title: 'Sporting Gap Analysis',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Sporting gap analysis.</h2>
      <p class="subtitle reveal reveal-3">The opportunity is in the infrastructure, not the talent.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['SCOUTING', 'Relationship-driven; needs database enhancements and an evaluation framework.'],
          ['PERFORMANCE MONITORING', 'No GPS, no force plates, no readiness tracking.'],
          ['FILM ENGAGEMENT', 'Hudl is active; voluntary player usage is near zero.'],
          ['TACTICAL IDENTITY', 'Style is recognizable, but not yet documented.'],
          ['WELLNESS', 'Self-reported verbally; no structured daily or weekly input.'],
          ['MENTAL PERFORMANCE', 'No resource currently in place.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 14px 240px 1fr; gap: 1.2rem; align-items: center; padding: 0.7rem 0; border-bottom: 1px solid var(--divider);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal);"></div>
            <div style="font-family: var(--f-display); font-size: 1.2rem; color: var(--teal); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 0.95rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 19: SPORTING FUTURE VISION ----------
SLIDES.push({
  title: 'Sporting Future',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE</div>
      <h2 class="reveal reveal-2">A professional performance environment.</h2>
      <p class="subtitle reveal reveal-3">Built for this level. Designed for the next.</p>
      <ul class="bullets pink reveal reveal-4" style="margin-top: 2.5rem; font-size: 1.05rem;">
        <li>Defined roles and enhanced position descriptions across the staff</li>
        <li>Dedicated S&amp;C coach with individualized conditioning programs per player</li>
        <li>GPS load monitoring for every session &mdash; peaking fitness across the calendar</li>
        <li>30-second daily wellness survey, color-coded, feeding a weekly availability report</li>
        <li>Tactical identity documented and distributed like a playbook</li>
        <li>Player leaderboard in the locker room: film engagement, training output, community attendance</li>
        <li>Dedicated nutritionist supported by a meal-prep sponsorship</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 20: ROSTER COMPOSITION ----------
SLIDES.push({
  title: 'Roster Composition',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>ROSTER</div>
      <h2 class="reveal reveal-2">Roster composition.</h2>
      <p class="subtitle reveal reveal-3">Where the strengths sit &mdash; and where the gaps live.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2.5rem;">
        <div>
          <div class="two-col-head teal">STRENGTHS</div>
          <p style="color: var(--ink); font-style: italic; margin-bottom: 1.5rem;">Anchor performers carrying tactical identity.</p>
          <div class="todo" style="margin-bottom: 0.8rem;">Add ESKAY profile + WHY anchor</div><br/>
          <div class="todo">Add PAULO profile + WHY anchor</div>
        </div>
        <div>
          <div class="two-col-head pink">OPPORTUNITIES</div>
          <ul class="bullets pink">
            <li>Older players in specific positions incompatible with our identity</li>
            <li>Need for a tactical fit matrix &mdash; score every roster slot against the playbook</li>
            <li>Roster turnover plan tied to advancement criteria from USL2</li>
          </ul>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 21: RECRUITMENT ANALYSIS ----------
SLIDES.push({
  title: 'Recruitment',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Recruitment analysis.</h2>
      <p class="subtitle reveal reveal-3">Good relationships. No system behind them.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">CURRENT SOURCES</div>
          <ul class="bullets">
            <li>Coaching network</li>
            <li>MASL Combine</li>
            <li>Open Google Form</li>
            <li>Mitre and Holiday Classic observations</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">WHAT'S MISSING</div>
          <ul class="bullets pink">
            <li>Searchable player evaluation database</li>
            <li>Defined position profile aligned to tactical identity</li>
            <li>Video-based remote scouting protocol</li>
            <li>University pipeline for post-eligibility players</li>
            <li>Formal presence at Mitre / Holiday Classic as structured recruitment events</li>
          </ul>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 22: VETTA PARTNERSHIP ----------
SLIDES.push({
  title: 'Vetta Partnership',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; PARTNERSHIP</div>
      <h2 class="reveal reveal-2">The Vetta partnership.</h2>
      <p class="subtitle reveal reveal-3">Turn every local tournament into a scouting, recruitment, and engagement engine.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2.5rem;">
        ${[
          ['FAN EXPERIENCE', 'Real-time scores, leaderboards, top performers across every tournament court.'],
          ['RECRUITMENT PIPELINE', 'Notable performers flagged automatically into the scouting database.'],
          ['BRAND PRESENCE', 'Ambush embedded in the tournament before a fan ever sets foot in the arena.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3>${t}</h3>
            <p>${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        <div>
          <div style="font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.2em; color: var(--amber); font-weight: 700; margin-bottom: 0.5rem;">INVESTMENT REQUIRED</div>
          Interns as statisticians and tabling personnel. One web app. One Vetta partnership conversation.
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 23: PLAYER PROFILE TOOLS ----------
SLIDES.push({
  title: 'Player Profile Tools',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; PLAYER DASHBOARD</div>
      <h2 class="reveal reveal-2">Every player. Every metric. One place.</h2>
      <p class="subtitle reveal reveal-3">The future player dashboard, combining what's currently scattered.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
        <ul class="bullets pink reveal reveal-4">
          <li>Daily wellness score</li>
          <li>GPS training load &mdash; distance, sprint count, intensity over time</li>
          <li>In-match stats &mdash; goals, assists, plus/minus, situational data</li>
          <li>Film engagement &mdash; hours watched, playlists completed</li>
          <li>Recruitment profile &mdash; tactical fit matrix score, scouting notes</li>
        </ul>
        <div class="img-placeholder reveal reveal-5" style="height: 280px;">DASHBOARD MOCKUP</div>
      </div>
      <div style="margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;" class="reveal reveal-7">
        <div style="font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--amber); font-weight: 700;">TOOLS NEEDED</div>
        <div style="color: var(--ink); font-size: 0.95rem;">Catapult GPS vests, wellness forms, centralized film location, coded reports.</div>
      </div>
    </div>
  `
});

// ---------- SLIDE 24: TRAINING & PERFORMANCE ----------
SLIDES.push({
  title: 'Training Schedule',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; TRAINING</div>
      <h2 class="reveal reveal-2">Training &amp; performance.</h2>
      <p class="subtitle reveal reveal-3">The framework exists. The data to optimize it does not.</p>
      <div class="grid reveal reveal-4" style="grid-template-columns: repeat(6, 1fr); gap: 0.5rem; margin-top: 2rem;">
        ${[
          ['MON', 'Recovery + Film Review'],
          ['TUE', 'Technical Training'],
          ['WED', 'Tactical Block (peak intensity)'],
          ['THU', 'Activation & Sharpness'],
          ['FRI', 'Pre-match Preparation'],
          ['WKD', 'Matchday & Rest'],
        ].map(([d, a]) => `
          <div style="background: var(--bg-card); border: 1px solid var(--divider); text-align: center; display: flex; flex-direction: column;">
            <div style="background: var(--teal); color: var(--bg); padding: 0.5rem; font-family: var(--f-display); font-size: 1.1rem; letter-spacing: 0.15em;">${d}</div>
            <div style="padding: 1rem 0.5rem; font-size: 0.85rem; color: var(--ink); flex: 1;">${a}</div>
          </div>
        `).join('')}
      </div>
      <div class="card pink reveal reveal-7" style="margin-top: 2rem;">
        <div class="accent-bar"></div>
        <div style="font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--pink); font-weight: 700; margin-bottom: 0.5rem;">THE PROBLEM</div>
        <h3 style="font-size: 1.3rem; color: var(--ink);">Without load data, training volume cannot be periodized.</h3>
        <p style="color: var(--mute); font-style: italic; margin-top: 0.5rem;">Three consecutive late-season 5-4 losses suggest accumulated fatigue &mdash; the kind GPS tracking flags weeks in advance.</p>
        <div class="todo" style="margin-top: 0.8rem;">Insert Catapult visual / load chart</div>
      </div>
    </div>
  `
});

// ---------- SLIDE 25: SCIENCE-BACKED TRAINING ----------
SLIDES.push({
  title: 'Science-Backed Training',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE</div>
      <h2 class="reveal reveal-2">Science-backed training.</h2>
      <p class="subtitle reveal reveal-3">From intuition to information &mdash; what the data actually proves.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2.5rem;">
        ${[
          ['INJURY PREVENTION', 'GPS load thresholds flag overtraining 2-3 weeks before a soft-tissue event.'],
          ['PEAKING FITNESS', 'Periodized volume curves players to peak output at playoff matches.'],
          ['INDIVIDUAL PROGRAMS', 'Position-specific load profiles replace one-size-fits-all training.'],
          ['OBJECTIVE READINESS', 'Daily wellness data triangulates with GPS to drive starting lineup decisions.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3>${t}</h3>
            <p>${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="todo reveal reveal-7" style="margin-top: 2rem;">Pull and embed Catapult research summary</div>
    </div>
  `
});

// ---------- SLIDE 26: PERFORMANCE FEEDBACK LOOP ----------
SLIDES.push({
  title: 'Feedback Loop',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; FEEDBACK LOOP</div>
      <h2 class="reveal reveal-2">From intuition to information.</h2>
      <p class="subtitle reveal reveal-3">A five-step loop that closes the gap.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['01', 'WELLNESS SURVEY', 'Five-question phone check-in before each training week.'],
          ['02', 'GPS LOAD CAPTURE', 'Every session tracked; injury risk flagged automatically.'],
          ['03', 'IN-MATCH TAGGING', 'Hudl Assist data feeds objective performance metrics.'],
          ['04', 'WEEKLY REPORT CARD', 'Stats, load, wellness trend, one coaching note per player.'],
          ['05', 'LOCKER ROOM LEADERBOARD', 'Plus/minus, film engagement, community attendance &mdash; visible.'],
        ].map(([num, t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 60px 280px 1fr; gap: 1.5rem; align-items: center; padding: 0.6rem 0;">
            <div style="font-family: var(--f-display); font-size: 2rem; color: var(--pink); letter-spacing: 0.05em;">${num}</div>
            <div style="font-family: var(--f-display); font-size: 1.1rem; color: var(--ink); letter-spacing: 0.08em;">${t}</div>
            <div style="font-size: 0.9rem; color: var(--mute);">${d}</div>
          </div>
        `).join('')}
      </div>
      <p style="color: var(--pink); font-weight: 700; font-style: italic; text-align: center; margin-top: 2rem;">Consistent feedback develops players faster. Objective data complements and enhances every decision.</p>
    </div>
  `
});

// ---------- SLIDE 27: FITNESS & SPORT SCIENCE ----------
SLIDES.push({
  title: 'Sport Science',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>SPORT SCIENCE</div>
      <h2 class="reveal reveal-2">Fitness &amp; sport science.</h2>
      <p class="subtitle reveal reveal-3">Physical demands are professional. The support infrastructure is not.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">CURRENT</div>
          <ul class="bullets">
            <li>S&amp;C: Vacant</li>
            <li>Recovery: NormaTec only &mdash; no cold-water immersion, no protocol</li>
            <li>Mental performance: No resource</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">ACHIEVABLE</div>
          <ul class="bullets pink">
            <li>Portable recovery station with cold-water immersion</li>
            <li>Contracted sports psychology consultant &mdash; local university graduate</li>
            <li>HotWorx or local yoga studio sponsorship for active recovery &mdash; Sunday slot</li>
            <li>Dedicated S&amp;C coach with player-individualized programs</li>
          </ul>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 28: TACTICAL IDENTITY ----------
SLIDES.push({
  title: 'Tactical Identity',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>IDENTITY</div>
      <h2 class="reveal reveal-2">We play fast.</h2>
      <p class="subtitle reveal reveal-3">But does everyone know what that means?</p>
      <p class="body-text reveal reveal-4" style="margin-top: 1.5rem;">The Ambush's high-intensity, fast-transition style is recognizable. It is not yet documented in specifics.</p>
      <div class="kicker pink reveal reveal-5" style="margin-top: 2rem; margin-bottom: 1rem;"><span class="dot"></span>WHY DOCUMENTATION MATTERS</div>
      <div class="grid grid-2 gap-lg reveal reveal-6">
        ${[
          ['ONBOARDING', 'New signings learn the system faster &mdash; and aren\'t reliant on tribal knowledge.'],
          ['USL ALIGNMENT', 'Promoted players arrive already speaking the vocabulary.'],
          ['OPPOSITION PREP', 'Scouting becomes surgical when you know exactly what you run.'],
          ['LEGACY', 'Personnel leave. The system doesn\'t.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1.1rem;">${t}</h3>
            <p style="font-size: 0.9rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 29: USL2 PATHWAY ----------
SLIDES.push({
  title: 'USL 2 Pathway',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>PATHWAY</div>
      <h2 class="reveal reveal-2">USL 2.</h2>
      <p class="subtitle reveal reveal-3">The pathway exists in theory. In practice, it is undefined.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">WHAT EXISTS</div>
          <ul class="bullets">
            <li>USL 2 team competing in the summer outdoor season</li>
            <li>Shared coaching staff across levels</li>
            <li>Hudl camera for training, broadcast crew for games</li>
            <li>Theoretical promotion pathway to MASL</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">WHAT'S MISSING</div>
          <ul class="bullets pink">
            <li>Formal advancement criteria</li>
            <li>Shared tactical playbook</li>
            <li>Standardized onboarding for promoted players</li>
            <li>Marketing and storytelling around the pathway</li>
          </ul>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">500 youth members. A USL2 squad. A first team in MASL. One pipeline.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 30: FUTURE PIPELINE ----------
SLIDES.push({
  title: 'Future Pipeline',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; PATHWAY</div>
      <h2 class="reveal reveal-2">Future pipeline.</h2>
      <p class="subtitle reveal reveal-3">A defined ladder from grassroots to first team.</p>
      <div class="grid reveal reveal-4" style="grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
        <div class="img-placeholder" style="height: 280px;">PIPELINE PYRAMID DIAGRAM</div>
        <div>
          <ul class="bullets pink">
            <li>Youth FC Ambush &mdash; entry tier with shared philosophy</li>
            <li>USL 2 &mdash; proving ground with formal advancement criteria</li>
            <li>MASL First Team &mdash; destination with structured onboarding</li>
            <li>Documented "what's next" markers at every level</li>
          </ul>
          <div class="kicker pink" style="margin-top: 1.5rem;"><span class="dot"></span>WHAT IT TAKES TO GET TO FIRST TEAM</div>
          <p style="color: var(--ink); font-style: italic; margin-top: 0.5rem;">A scoring rubric, a film standard, a fitness baseline. Not a vibe.</p>
        </div>
      </div>
      <div class="todo reveal reveal-7" style="margin-top: 1.5rem;">Insert pyramid I built</div>
    </div>
  `
});

// ---------- SLIDE 31: USL2 & ACADEMY GAP ----------
SLIDES.push({
  title: 'Academy Gap',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>GAPS</div>
      <h2 class="reveal reveal-2">USL2 &amp; academy gap.</h2>
      <p class="subtitle reveal reveal-3">Same name. Different worlds. Fixable.</p>
      <ul class="bullets reveal reveal-4" style="margin-top: 2rem; font-size: 1.05rem;">
        <li>Style misalignment &mdash; USL and MASL players arrive needing tactical acclimation</li>
        <li>Invisible advancement ladder and inconsistent support across levels</li>
        <li>Youth disconnection &mdash; no clear link from families to the professional product</li>
      </ul>
      <div class="card pink reveal reveal-6" style="margin-top: 2rem;">
        <div class="accent-bar"></div>
        <div style="font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--pink); font-weight: 700; margin-bottom: 0.5rem;">THE FIX IS STRUCTURAL, NOT FINANCIAL</div>
        <p style="color: var(--ink); font-size: 1.05rem;">A shared curriculum document, a written advancement criteria sheet, and structured support at every step before promotion.</p>
      </div>
    </div>
  `
});

// ---------- SLIDE 32: UNIFIED DNA ----------
SLIDES.push({
  title: 'Unified DNA',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE</div>
      <h2 class="reveal reveal-2">Unified DNA.</h2>
      <p class="subtitle reveal reveal-3">One club. One identity. One ladder.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2.5rem;">
        ${[
          ['YOUTH (U-12 to U-18)', 'Age-appropriate modules built from first-team philosophy. First-team players appear as mentors.'],
          ['USL 2', 'Same tactical system, same guidelines. Mid-season and end-of-season formal evaluations.'],
          ['MASL FIRST TEAM', 'Structured onboarding: physical, tactical document, Hudl walkthrough, social announcement &mdash; standardized.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1.1rem;">${t}</h3>
            <p style="font-size: 0.9rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="todo reveal reveal-7" style="margin-top: 2rem;">Insert progression map / pyramid visual</div>
    </div>
  `
});

// ---------- SLIDE 33: DYLLAN CURRENT ROLE ----------
SLIDES.push({
  title: 'Dyllan — Current',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; ANALYTICS FUNCTION</div>
      <h2 class="reveal reveal-2">Dyllan Haggard &mdash; current role.</h2>
      <p class="subtitle reveal reveal-3">Part-time hours. Full-time output.</p>
      <ul class="bullets reveal reveal-4" style="margin-top: 2rem; font-size: 1.02rem;">
        <li>Live season analytics dashboard</li>
        <li>Real-time analytics and in-game support (iPad)</li>
        <li>Opposition scouting reports and pre-match game sheets</li>
        <li>Scenario-based Hudl playlists</li>
        <li>Player exit survey</li>
        <li>Managed player food orders</li>
        <li>And more across operations and game-day execution</li>
      </ul>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">Every deliverable above: built remotely, part-time, with no dedicated budget.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 34: DYLLAN FUTURE ROLE ----------
SLIDES.push({
  title: 'Dyllan — Future',
  render: (n, total) => `
    ${chrome(n, total, 'PART II &middot; SPORTING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; EMBEDDED INTELLIGENCE</div>
      <h2 class="reveal reveal-2">Dyllan Haggard &mdash; future role.</h2>
      <p class="subtitle reveal reveal-3">Remote analyst &rarr; embedded intelligence.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['DATA INTEGRATION', 'Dashboards surface at meetings &mdash; ticket sales, player performance, sponsorship &mdash; at a glance.'],
          ['PROACTIVE', 'Opposition reports built a week out; wellness dashboards live before training; databases ready by Monday.'],
          ['AUTOMATED', 'AI distributes match reports, logs budget receipts, triggers ticket pricing alerts &mdash; without manual intervention.'],
          ['COMPOUNDING', 'Every question is met with data that supports decision-making the next time.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3>${t}</h3>
            <p>${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="reveal reveal-7" style="margin-top: 2rem; background: var(--pink); color: var(--bg); padding: 1.5rem; text-align: center;">
        <div style="font-family: var(--f-display); font-size: clamp(1.5rem, 3vw, 2.2rem); letter-spacing: 0.1em; font-weight: 400;">
          1 DEDICATED ANALYST &nbsp;=&nbsp; ~3 TO 5 WINS ADDED PER SEASON
        </div>
      </div>
    </div>
  `
});


// ==========================================================
// PART III - GAME DAY & OPERATIONS (slides 35-42)
// ==========================================================

// ---------- SLIDE 35: PART III DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part III',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART III')}
    <div class="part-num reveal reveal-1">III</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART III</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">GAME DAY &amp;</span>
        <span class="line">OPERATIONS</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 36: GAME DAY OVERVIEW ----------
SLIDES.push({
  title: 'Game Day Overview',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>OVERVIEW</div>
      <h2 class="reveal reveal-2">Game day is the product.</h2>
      <p class="subtitle reveal reveal-3">Every detail is the pitch.</p>
      <ul class="bullets reveal reveal-4" style="margin-top: 2rem; font-size: 1.05rem;">
        <li>Media assets &mdash; Greenfly and Canva</li>
        <li>Ticket promotion and email coordination</li>
        <li>Locker room setup</li>
        <li>In-match iPad analytics</li>
        <li>Halftime programming, jumbotron, national anthem</li>
      </ul>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        The staff running this is small and genuinely capable. The gap is not the people &mdash; it is the absence of a written playbook and the capacity to expand.
      </div>
    </div>
  `
});

// ---------- SLIDE 37: GAME DAY GAP ANALYSIS ----------
SLIDES.push({
  title: 'Game Day Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Game day gap analysis.</h2>
      <p class="subtitle reveal reveal-3">Five opportunities in plain sight.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['WRITTEN PLAYBOOK', 'Operations runs on memory currently. Key-person risk.'],
          ['LOCKER ROOM', 'Updated features needed: leaderboard wall art, rolling TV with Hudl film.'],
          ['BOOT & EQUIPMENT', 'No labeled storage, no ventilation, no per-player boot/kit cart.'],
          ['CONCESSIONS', 'Venue-controlled; fan feedback is consistently negative.'],
          ['MERCHANDISE', 'Undersupplied &mdash; fans turned away by empty shelves.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 14px 240px 1fr; gap: 1.2rem; align-items: center; padding: 0.7rem 0; border-bottom: 1px solid var(--divider);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal);"></div>
            <div style="font-family: var(--f-display); font-size: 1.2rem; color: var(--teal); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 0.95rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
      <p style="color: var(--pink); font-weight: 700; font-style: italic; text-align: center; margin-top: 1.5rem;">Low-cost responses available for all of these.</p>
    </div>
  `
});

// ---------- SLIDE 38: MATCHDAY PLAYBOOK ----------
SLIDES.push({
  title: 'Matchday Playbook',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; MATCHDAY PLAYBOOK</div>
      <h2 class="reveal reveal-2">The matchday playbook.</h2>
      <p class="subtitle reveal reveal-3">Every detail. Every time.</p>
      <div style="margin-top: 2.5rem;">
        ${[
          ['T&minus;72 HRS', 'Scouting report finalized; ticket email sent; Greenfly assets distributed; meals ordered.'],
          ['T&minus;24 HRS', 'Newsletter live; game sheet loaded; locker room set; interns briefed.'],
          ['PRE-DOORS', 'Venue walkthrough; merch stand stocked; promo setup complete; technology tested.'],
          ['IN-MATCH', 'Live analytic updates; jumbotron coordination; halftime programming executed.'],
          ['POST-MATCH', 'Kit collection; report initiated; injury log updated; lineup filed; video on Hudl.'],
        ].map(([phase, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 180px 1fr; gap: 1.5rem; align-items: center; padding: 0.5rem 0;">
            <div style="background: var(--pink); color: var(--bg); font-family: var(--f-display); font-size: 1.1rem; padding: 0.6rem; text-align: center; letter-spacing: 0.1em;">${phase}</div>
            <div style="font-size: 0.95rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 39: PLAYER EXPERIENCE ----------
SLIDES.push({
  title: 'Player Experience',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>ENVIRONMENT</div>
      <h2 class="reveal reveal-2">Player experience logistics.</h2>
      <p class="subtitle reveal reveal-3">The environment before the game shapes the performance during it.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">STRENGTHS</div>
          <ul class="bullets">
            <li>Jerseys hung before players arrive</li>
            <li>Structured warm-up protocols</li>
            <li>Food preference form in place</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">OPPORTUNITIES</div>
          <ul class="bullets pink">
            <li>Pre-game meals aligned to performance nutrition timing</li>
            <li>Formalized post-match recovery (currently informal)</li>
            <li>Quiet space / prayer room / mental prep zone</li>
            <li>Centralized supply station &mdash; "player cafe lounge" or coffee bar</li>
          </ul>
        </div>
      </div>
      <div class="card amber reveal reveal-7" style="margin-top: 1.5rem;">
        <div class="accent-bar"></div>
        <div class="kicker amber" style="margin-bottom: 0.5rem;">FUTURE STATE</div>
        <p style="font-style: italic;">Players arrive to a prepared environment &mdash; IT, nutrition, tactical board, leaderboard, opponent reports &mdash; all in one place before boots hit the floor.</p>
      </div>
    </div>
  `
});

// ---------- SLIDE 40: IN-MATCH ANALYTICS ----------
SLIDES.push({
  title: 'In-Match Analytics',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>ANALYTICS</div>
      <h2 class="reveal reveal-2">In-match &amp; post-match support.</h2>
      <p class="subtitle reveal reveal-3">Live intelligence. Faster decisions. Better outcomes.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">CURRENT iPAD DELIVERY</div>
          <ul class="bullets">
            <li>Shot charts by location</li>
            <li>Plus/minus by player</li>
            <li>Transition rates, foul tracking, goal recaps</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">FUTURE ENHANCEMENTS</div>
          <ul class="bullets pink">
            <li>Shot zones with quality scoring</li>
            <li>Player tendencies and live scouting overlay</li>
            <li>Pressure-area heat maps</li>
            <li>Auto-generated halftime summary</li>
            <li>GPS / injury metrics from Catapult feed</li>
          </ul>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--pink);">
        Post-match: individual performance summary delivered to any player who wants it.
      </div>
    </div>
  `
});

// ---------- SLIDE 41: TRAVEL & COMPLIANCE ----------
SLIDES.push({
  title: 'Travel & Compliance',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>LOGISTICS</div>
      <h2 class="reveal reveal-2">Travel, risk, &amp; compliance.</h2>
      <p class="subtitle reveal reveal-3">Tightening the operational backbone.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">CURRENT STANDARD</div>
          <ul class="bullets">
            <li>Flights booked 2 days out; itinerary sent night before</li>
            <li>Food ordered day before &mdash; JJ's or Panera</li>
            <li>Decaled bus for regional travel; snack packs prepared</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">OPPORTUNITIES</div>
          <ul class="bullets pink">
            <li>Food vendors researched at season start; locked mid-week for weekend games</li>
            <li>Itinerary distributed 72 hours out</li>
            <li>Road meals upgraded via Pure Plates STL (potential partnership)</li>
          </ul>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 42: INTERNS PROGRAM ----------
SLIDES.push({
  title: 'Intern Program',
  render: (n, total) => `
    ${chrome(n, total, 'PART III &middot; GAME DAY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; INTERN PIPELINE</div>
      <h2 class="reveal reveal-2">Interns &mdash; data, video &amp; ops.</h2>
      <p class="subtitle reveal reveal-3">Build the pipeline. Multiply the capacity.</p>
      <div class="kicker pink reveal reveal-4" style="margin-top: 1.5rem;">TARGET UNIVERSITY PROGRAMS</div>
      <div class="grid grid-3 gap-sm reveal reveal-5" style="margin-top: 0.8rem; font-size: 0.9rem; color: var(--ink);">
        <div>&bull; Lindenwood &mdash; Sports Mgmt, Exercise Science</div>
        <div>&bull; SLU &mdash; Kinesiology, Sports Business</div>
        <div>&bull; Logan &mdash; Sports Science, Chiropractic</div>
        <div>&bull; UMSL &mdash; Sports Mgmt, Data Science</div>
        <div>&bull; Maryville &mdash; Sports Mgmt, Data Science</div>
        <div>&bull; Webster &mdash; Sports Mgmt, Data Science</div>
      </div>
      <div class="kicker pink reveal reveal-6" style="margin-top: 2rem;">THREE INTERN TRACKS</div>
      <div class="grid grid-3 gap-lg reveal reveal-7" style="margin-top: 0.8rem;">
        ${[
          ['DATA & VIDEO', 'Hudl clipping, opposition research, dashboard support, advanced modeling. Multiply current output by 10&times;.'],
          ['GAME DAY OPS', 'Matchday execution, activation, social, merch, and broader event support.'],
          ['SPORTS SCIENCE', 'Wellness collection, recovery station, rehab support, VALD/Catapult, warm-up assistance.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1rem;">${t}</h3>
            <p style="font-size: 0.85rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <p style="color: var(--amber); font-weight: 700; font-style: italic; text-align: center; margin-top: 1.2rem; font-size: 0.95rem;">Academic credit. No payroll cost. A built-in talent pipeline for future hires.</p>
    </div>
  `
});

// ==========================================================
// PART IV - MARKETING & COMMERCIAL (slides 43-60)
// ==========================================================

// ---------- SLIDE 43: PART IV DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part IV',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART IV')}
    <div class="part-num reveal reveal-1">IV</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART IV</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">MARKETING &amp;</span>
        <span class="line">COMMERCIAL</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 44: CURRENT MARKETING ----------
SLIDES.push({
  title: 'Current Marketing',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Current marketing picture.</h2>
      <p class="subtitle reveal reveal-3">The ceiling is visible. The path to it is not yet systematized.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        <div class="stat"><div class="value">1.8K-2.8K</div><div class="label">Avg attendance (36-56% capacity)</div></div>
        <div class="stat"><div class="value">ACTIVE</div><div class="label">Multi-platform social posting</div></div>
        <div class="stat"><div class="value">ST. CHARLES</div><div class="label">Core fan base geography</div></div>
      </div>
      <div class="kicker pink reveal reveal-6" style="margin-top: 2rem;">WHO ISN'T IN THE SEATS YET</div>
      <ul class="bullets pink reveal reveal-7" style="margin-top: 0.8rem;">
        <li>Families across the river &mdash; Fenton, Kirkwood, South City, downtown STL</li>
        <li>College students &mdash; high-energy, high-sharing, currently underserved</li>
        <li>Corporate groups</li>
        <li>Bosnian heritage community</li>
        <li>New soccer fans the 2026 World Cup will activate</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 45: MARKETING GAP ANALYSIS ----------
SLIDES.push({
  title: 'Marketing Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Marketing gap analysis.</h2>
      <p class="subtitle reveal reveal-3">The content is there. The strategy behind it isn't yet built.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['NO CRM', 'Email list only &mdash; no behavioral segmentation, no lifecycle marketing.'],
          ['NO COLLEGE PROGRAM', 'No .edu-verified student tier; an obvious acquisition lever.'],
          ['PODCAST CONSISTENCY', 'YouTube-only, AI thumbnails, passive engagement &mdash; only 2 episodes shipped.'],
          ['GAME-DAY HEAVY, STORY LIGHT', 'Match updates dominate; player stories largely don\'t exist.'],
          ['NO WORLD CUP PLAN', 'The biggest organic marketing window has no activation strategy.'],
          ['MERCHANDISE UNDERSUPPLIED', 'Empty stock; no themed drops; one-time releases only.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 14px 280px 1fr; gap: 1.2rem; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid var(--divider);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal);"></div>
            <div style="font-family: var(--f-display); font-size: 1.1rem; color: var(--teal); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 0.9rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 46: MARKETING FUTURE ----------
SLIDES.push({
  title: 'Marketing Future',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE</div>
      <h2 class="reveal reveal-2">From broadcast to relationship.</h2>
      <p class="subtitle reveal reveal-3">Building a fan engine, not a megaphone.</p>
      <ul class="bullets pink reveal reveal-4" style="margin-top: 2rem; font-size: 1.02rem;">
        <li>CRM implemented &mdash; lifecycle stages defined; first-time attendees get a different message than five-year season ticket holders</li>
        <li>Content rebuilt &mdash; short-form player stories, behind-the-scenes, reels and interviews</li>
        <li>College student program live &mdash; $12/game with .edu verification, launched at Lindenwood first</li>
        <li>World Cup activation executed &mdash; watch parties, landing page, email capture, fan conversion</li>
        <li>Mobile app &mdash; fantasy, engagement, push notifications, loyalty</li>
      </ul>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">People fall in love with people. Show them who the players are.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 47: CRM / CDP ARCHITECTURE ----------
SLIDES.push({
  title: 'CRM & CDP',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; FAN DATA INFRASTRUCTURE</div>
      <h2 class="reveal reveal-2">CRM &amp; customer data platform.</h2>
      <p class="subtitle reveal reveal-3">From a single email list to a unified fan profile that drives every revenue conversation.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="kicker pink" style="margin-bottom: 0.8rem;">DATA SOURCES &rarr; UNIFIED PROFILE</div>
          <ul class="bullets pink" style="font-size: 0.95rem;">
            <li>Ticketing platform &mdash; purchase history, seat preference</li>
            <li>Mobile app &mdash; engagement, push response, loyalty</li>
            <li>Merchandise &mdash; purchase patterns, sizing</li>
            <li>Email &mdash; opens, clicks, lifecycle stage</li>
            <li>Social &mdash; followers, engagement, sentiment</li>
            <li>Game-day Wi-Fi &mdash; in-venue movement</li>
          </ul>
        </div>
        <div>
          <div class="kicker pink" style="margin-bottom: 0.8rem;">FIVE LAUNCH CAMPAIGNS</div>
          ${[
            ['WELCOME SERIES', 'First-game attendees &rarr; 5-touch lifecycle'],
            ['WIN-BACK', 'Lapsed STH &rarr; personalized return offer'],
            ['PRE-GAME LIFT', 'Auto-segmented by attendance pattern'],
            ['BIRTHDAY', 'Personal jumbotron + ticket offer trigger'],
            ['POST-GAME RECAP', 'Highlights + next-game promo, segmented'],
          ].map(([t, d]) => `
            <div style="display: grid; grid-template-columns: 180px 1fr; padding: 0.5rem 0.8rem; border-left: 3px solid var(--pink); margin-bottom: 0.3rem; background: var(--bg-alt);">
              <div style="font-family: var(--f-display); font-size: 0.95rem; color: var(--pink); letter-spacing: 0.05em;">${t}</div>
              <div style="font-size: 0.85rem; color: var(--ink);">${d}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        <div>
          <div class="kicker amber">STARTING STACK</div>
          <div style="color: var(--ink); font-style: normal; margin-top: 0.3rem;">HubSpot or Klaviyo (CRM) + Segment (CDP) + Zapier &mdash; ~$300/mo at our scale.</div>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 48: TAILGATE & CONCESSIONS ----------
SLIDES.push({
  title: 'Tailgate',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; FAN EXPERIENCE</div>
      <h2 class="reveal reveal-2">Tailgate &amp; concessions.</h2>
      <p class="subtitle reveal reveal-3">Start the experience before they walk through the door.</p>
      <p style="color: var(--amber); font-weight: 700; font-style: italic; margin-top: 1.5rem;" class="reveal reveal-4">THE BATTLEHAWKS PROVED IT &mdash; pregame activation drives in-venue spend, earlier arrival, and higher return rates.</p>
      <div class="kicker pink reveal reveal-5" style="margin-top: 1.5rem;">THE AMBUSH TAILGATE CONCEPT</div>
      <ul class="bullets pink reveal reveal-6" style="margin-top: 0.5rem;">
        <li>Grilled food and beverages sold pre-game in the lot</li>
        <li>Player and alumni booths &mdash; 30-minute rotations before lockdown</li>
        <li>Kids games, prize wheel, cornhole &mdash; family demographic targeting</li>
        <li>Live music or pep band &mdash; draws passersby through the gates early</li>
        <li>Branded photo moment &mdash; fans generate organic social before kickoff</li>
      </ul>
      <div class="card amber reveal reveal-7" style="margin-top: 1.5rem;">
        <div class="accent-bar"></div>
        <div class="kicker amber">CONCESSION PLAY &middot; MILWAUKEE WAVE MODEL</div>
        <p style="margin-top: 0.4rem;">Game-day-specific menu (Haus Pizza, Tucanos) creates a second commercial venue per game with an Ambush item for sale.</p>
      </div>
    </div>
  `
});

// ---------- SLIDE 49: MOBILE APP ----------
SLIDES.push({
  title: 'Mobile App',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; PRODUCT</div>
      <h2 class="reveal reveal-2">The mobile app.</h2>
      <p class="subtitle reveal reveal-3">Put the Ambush in every fan's pocket.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['PHASE 1', ['Ticket purchases and group sales', 'Schedule, results, standings, news feed', 'Push notifications 90 minutes before kick', 'Enter-to-win competitions with email capture']],
          ['PHASE 2', ['Fan profile and loyalty points', 'Score prediction &mdash; weekly engagement', 'Ambush Kids Club section', 'Achievement milestones and games']],
          ['PHASE 3', ['AI-driven personalization per fan', 'Mobile food ordering (if venue allows)', 'Full season ticket and membership management', 'Fan history-based journey customization']],
        ].map(([phase, items]) => `
          <div style="background: var(--bg-card); border: 1px solid var(--divider); display: flex; flex-direction: column;">
            <div style="background: var(--pink); color: var(--bg); padding: 0.8rem; text-align: center; font-family: var(--f-display); font-size: 1.1rem; letter-spacing: 0.15em;">${phase}</div>
            <ul class="bullets pink" style="padding: 1rem; font-size: 0.85rem;">
              ${items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 50: TICKETING CURRENT ----------
SLIDES.push({
  title: 'Ticketing — Current',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; TICKETING</div>
      <h2 class="reveal reveal-2">Ticketing strategy &mdash; current.</h2>
      <p class="subtitle reveal reveal-3">Inherited platform. Constrained levers.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head teal">PLATFORM TODAY</div>
          <ul class="bullets">
            <li>Ticketmaster &mdash; 15-25% service fees per ticket</li>
            <li>No dynamic pricing capability</li>
            <li>No fan behavioral data from transactions</li>
            <li>No loyalty integration</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head teal">PRICING ISSUES</div>
          <ul class="bullets">
            <li>GA priced ~$25 with "sale" promotions at the same price</li>
            <li>No college student tier</li>
            <li>No opponent or day-of-week pricing adjustment</li>
            <li>Premium inventory (suites) controlled by venue</li>
          </ul>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        Currently controlled by Family Arena and not open for renegotiation this cycle.
      </div>
    </div>
  `
});

// ---------- SLIDE 51: TICKETING GAPS ----------
SLIDES.push({
  title: 'Ticketing Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; TICKETING GAP</div>
      <h2 class="reveal reveal-2">Five levers that can't be pulled.</h2>
      <p class="subtitle reveal reveal-3">Each is a real revenue line being left on the table.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['DYNAMIC PRICING', 'Playoff games and rivalry nights priced the same as midweek games in February.'],
          ['PLATFORM FEE DRAIN', '$100K-$170K / season leaving the facility and club via Ticketmaster fees.'],
          ['NO STUDENT PROGRAM', 'A $12 student ticket is a proven acquisition tool we currently don\'t deploy.'],
          ['PROMOTIONAL CREDIBILITY', '"On Sale" at full price erodes trust and burns future promotional capacity.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 14px 280px 1fr; gap: 1.2rem; align-items: center; padding: 0.7rem 0; border-bottom: 1px solid var(--divider);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal);"></div>
            <div style="font-family: var(--f-display); font-size: 1.2rem; color: var(--teal); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 0.95rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-8" style="margin-top: 1.5rem; border-left-color: var(--pink);">
        <strong style="font-style: normal;">The Ticketmaster relationship costs more than the service fee. It costs fans data, dynamic capability, and direct ownership of the transaction.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 52: TICKETING FUTURE ----------
SLIDES.push({
  title: 'Ticketing Roadmap',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; TICKETING ROADMAP</div>
      <h2 class="reveal reveal-2">A staged migration.</h2>
      <p class="subtitle reveal reveal-3">Pilot at USL2 first; promote up to Family Arena at next contract opening.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['YEAR 1', ['Real promotional pricing &mdash; genuine discounts, real deadlines', 'College student .edu program at season opener', 'Day-after-win promo', 'Migrate from ~20-25% fees to ~5%', 'Custom-built interface for the Ambush']],
          ['YEAR 2', ['Prices reviewed every Monday based on inventory, days-to-game, and opponent tier', 'Adjusted pricing pushed automatically']],
          ['YR 2-3', ['Make the switch for Family Arena', 'Save $140-$170K per season at current volume', 'Every transaction generates fan data feeding the marketing engine']],
        ].map(([phase, items]) => `
          <div style="background: var(--bg-card); border: 1px solid var(--divider); display: flex; flex-direction: column;">
            <div style="background: var(--pink); color: var(--bg); padding: 0.8rem; text-align: center; font-family: var(--f-display); font-size: 1.1rem; letter-spacing: 0.15em;">${phase}</div>
            <ul class="bullets pink" style="padding: 1rem; font-size: 0.85rem;">
              ${items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 53: TICKETING INVENTORY INNOVATION (NEW) ----------
SLIDES.push({
  title: 'Ticket Inventory',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; INVENTORY STRATEGY</div>
      <h2 class="reveal reveal-2">Ticketing inventory innovation.</h2>
      <p class="subtitle reveal reveal-3">Revenue lines that don't require platform migration &mdash; and can ship in Year 1.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['FLEX PACKS', 'Any 5 games, any seat. Solves the "we might not make it every game" family objection.'],
          ['MINI-PLANS', '3-game packs built around rivalry nights, heritage nights, and holiday games.'],
          ['GROUP PRICING', 'Inclusive pricing that bakes in transportation (bus companies partner), making group coordination a yes.'],
          ['PREMIUM EXPERIENCE', 'Locker room visit + signed jersey + on-court photo. Priced at a multiple of a normal ticket.'],
          ['GROUP LEADER MODEL', 'Sell 20 tickets, get yours free. Turns every business and community leader into a sales channel.'],
          ['BIRTHDAY PACKAGE', 'Jumbotron shoutout + cake + 10-ticket minimum. Creates recurring family revenue.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1rem;">${t}</h3>
            <p style="font-size: 0.88rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 54: CURRENT SPONSOR LANDSCAPE ----------
SLIDES.push({
  title: 'Sponsor Landscape',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; SPONSORSHIP</div>
      <h2 class="reveal reveal-2">A broad portfolio. Shallow roots.</h2>
      <p class="subtitle reveal reveal-3">Real community relationships &mdash; but mostly logo placements.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['OFFICIAL CORPORATE', 'NatureMed, Axius, St. Luke\'s, Window World, Under the Yellow Umbrella, Solomon Contracting, Clovr, Eletto, BJC Health Care'],
          ['RESTAURANT PARTNERS', 'Haus Pizzeria, Tucanos, Bellacino\'s, Hotshots, Raising Cane\'s, The Post'],
          ['CHAMBER PARTNERS', 'Greater St. Charles County, O\'Fallon, Chesterfield, North County, Cottleville-Weldon Spring'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 220px 1fr; gap: 1.5rem; align-items: center; padding: 0.9rem 1.2rem; background: var(--bg-card); border-left: 4px solid var(--teal); margin-bottom: 0.5rem;">
            <div style="font-family: var(--f-display); font-size: 1rem; color: var(--teal); letter-spacing: 0.08em;">${t}</div>
            <div style="font-size: 0.88rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
      <p style="color: var(--mute); font-style: italic; margin-top: 1rem; font-size: 0.9rem;">Plus 20+ additional business partners across professional services, health, and retail.</p>
      <p style="color: var(--pink); font-weight: 700; font-style: italic; margin-top: 0.5rem; font-size: 0.95rem;">The breadth reflects real community-relationship work. The gap: most function as logo placements &mdash; visibility for a fee, with no documented activation or ROI measurement.</p>
    </div>
  `
});

// ---------- SLIDE 55: SPONSORSHIP GAP ----------
SLIDES.push({
  title: 'Sponsorship Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; SPONSORSHIP GAP</div>
      <h2 class="reveal reveal-2">Logo on the wall is not a partnership.</h2>
      <p class="subtitle reveal reveal-3">Five structural gaps that turn relationships into transactions.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['NO ACTIVATION FRAMEWORK', 'No documented plan for what sponsors receive &mdash; and how it\'s measured.'],
          ['NO MONTHLY SCORECARD', 'Sponsors receive no data on what their investment delivered.'],
          ['GEOGRAPHIC CONCENTRATION', 'Portfolio skews heavily toward St. Charles small business.'],
          ['MISSING CATEGORIES', 'No gym, no recovery tech, no media outlet, no performance brand.'],
          ['NO RENEWAL PROCESS', 'Conversations happen at expiration, not six months before &mdash; without supporting data.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 14px 300px 1fr; gap: 1.2rem; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid var(--divider);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal);"></div>
            <div style="font-family: var(--f-display); font-size: 1.1rem; color: var(--teal); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 0.92rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 56: SPONSORSHIP FUTURE ----------
SLIDES.push({
  title: 'Sponsorship Tiers',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; SPONSORSHIP</div>
      <h2 class="reveal reveal-2">From logo rental to strategic partnership.</h2>
      <p class="subtitle reveal reveal-3">A tiered framework with documented value at each level.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['PLATINUM', '2-3', 'Naming rights, jersey, dedicated activation, quarterly executive review, co-branded content.'],
          ['GOLD', '4-6', 'In-arena visibility, game-day activation, bi-monthly scorecard, annual review.'],
          ['SILVER', '10-15', 'Logo placement, digital inclusion, one fan-facing promo, annual summary.'],
        ].map(([tier, num, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.3rem;">${tier}</h3>
              <span style="font-family: var(--f-display); font-size: 1.5rem; color: var(--amber);">${num}</span>
            </div>
            <p style="font-size: 0.85rem; margin-top: 0.5rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="kicker pink reveal reveal-7" style="margin-top: 1.5rem;">TARGET CATEGORY SPONSORS</div>
      <ul class="bullets pink reveal reveal-8" style="margin-top: 0.5rem; font-size: 0.95rem;">
        <li>Gym / fitness facility &mdash; branded access for player content</li>
        <li>Recovery tech (NormaTec, HigherDose) &mdash; equipment for endorsement content</li>
        <li>Celebrity investor &mdash; local roots with national platform</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 57: SPONSORSHIP RECS ----------
SLIDES.push({
  title: 'Sponsorship Recs',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; RECOMMENDATIONS</div>
      <h2 class="reveal reveal-2">Sponsorship recommendations.</h2>
      <p class="subtitle reveal reveal-3">Two local partnerships to pursue immediately.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['THE ALIGN ROOM STL', 'Dr. Brianna Evans (Chiropractor)', 'Player wellness, recovery content, in-arena chiro tent on game days.'],
          ['STEVEN BIBAS PERFORMANCE', 'Strength &amp; Conditioning', 'Off-season training, lifting programs, in-house S&amp;C resource.'],
        ].map(([t, c, d]) => `
          <div class="card pink" style="padding: 2rem;">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1.4rem;">${t}</h3>
            <div style="font-family: var(--f-body); color: var(--amber); font-style: italic; margin-top: 0.4rem; font-size: 0.95rem;">${c}</div>
            <p style="margin-top: 1rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 58: WORLD CUP ACTIVATION ----------
SLIDES.push({
  title: 'World Cup Activation',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; WORLD CUP ACTIVATION</div>
      <h2 class="reveal reveal-2">The biggest marketing window in club history.</h2>
      <p class="subtitle reveal reveal-3">World Cup 2026. Olympics 2028. Women's World Cup 2031.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 1.5rem;">
        ${[
          ['PHASE 1', 'APR-MAY', ['World Cup countdown content series', 'Official Ambush watch party locations established', 'Landing page launched for email capture']],
          ['PHASE 2', 'JUN-JUL', ['4 official watch parties at Family Arena', 'Mini-game activations; player appearances', 'Merch discounts + First game on us giveaway']],
          ['PHASE 3', 'AUG-SEP', ['Season ticket priority access campaign', '"New to Soccer?" content for activated fans', 'Introduction to the indoor game']],
        ].map(([phase, window, items]) => `
          <div style="background: var(--bg-card); border: 1px solid var(--divider); display: flex; flex-direction: column;">
            <div style="background: var(--pink); color: var(--bg); padding: 0.6rem 0.8rem;">
              <div style="font-family: var(--f-display); font-size: 1rem; letter-spacing: 0.15em;">${phase}</div>
              <div style="font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; margin-top: 0.2rem;">${window}</div>
            </div>
            <ul class="bullets pink" style="padding: 1rem; font-size: 0.82rem;">
              ${items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      <div class="todo reveal reveal-7" style="margin-top: 1.5rem;">Insert World Cup activation landing page mock or screenshot</div>
    </div>
  `
});

// ---------- SLIDE 59: TST ACTIVATION ----------
SLIDES.push({
  title: 'TST Activation',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; TST ACTIVATION</div>
      <h2 class="reveal reveal-2">TST activation plan.</h2>
      <p class="subtitle reveal reveal-3">We are taking a team to TST. Here's the plan to activate around it.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 1.5rem;">
        ${[
          ['PHASE 1', 'APR-MAY', ['TST countdown content &mdash; roster reveals, prep footage', 'Watch party locations established', 'Landing page for tournament sign-ups']],
          ['PHASE 2', 'MAY-JUN', ['Watch parties at Family Arena for premier matches', 'Mini-game activations with player challenges', 'TST-themed merchandise drop']],
          ['PHASE 3', 'AUG-SEP', ['Season ticket priority access for TST-engaged fans', 'Convert outdoor audience to indoor MASL season', '"From TST to Ambush" content campaign']],
        ].map(([phase, window, items]) => `
          <div style="background: var(--bg-card); border: 1px solid var(--divider); display: flex; flex-direction: column;">
            <div style="background: var(--pink); color: var(--bg); padding: 0.6rem 0.8rem;">
              <div style="font-family: var(--f-display); font-size: 1rem; letter-spacing: 0.15em;">${phase}</div>
              <div style="font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; margin-top: 0.2rem;">${window}</div>
            </div>
            <ul class="bullets pink" style="padding: 1rem; font-size: 0.82rem;">
              ${items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 60: BEYOND THE BOARDS PODCAST ----------
SLIDES.push({
  title: 'Beyond the Boards',
  render: (n, total) => `
    ${chrome(n, total, 'PART IV &middot; MARKETING')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>MEDIA</div>
      <h2 class="reveal reveal-2">Beyond the Boards.</h2>
      <p class="subtitle reveal reveal-3">The story is already happening. We just need to tell it.</p>
      <div class="card reveal reveal-4" style="margin-top: 1.5rem;">
        <div class="accent-bar"></div>
        <div class="kicker teal" style="margin-bottom: 0.4rem;">CURRENT STATE</div>
        <p>Launched February 2026. YouTube only. AI-generated thumbnails. Two episodes shipped. Hosted by Dyllan Haggard and Nate White.</p>
      </div>
      <div class="two-col reveal reveal-6" style="margin-top: 1.5rem;">
        <div>
          <div class="two-col-head pink">IMMEDIATE UPGRADES</div>
          <ul class="bullets pink" style="font-size: 0.95rem;">
            <li>Distribute to Spotify, Apple Podcasts, Amazon Music &mdash; multi-platform reach</li>
            <li>Custom Canva thumbnails by Pat &mdash; distinctive per episode</li>
            <li>Interview format: guest across from host, structured visual</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">FUTURE VISION</div>
          <ul class="bullets pink" style="font-size: 0.95rem;">
            <li>Monthly special guests &mdash; players, coaches, league figures</li>
            <li>Short-form Reels and TikTok clips from every episode</li>
            <li>Episode-level sponsor integration &mdash; presenting sponsor as a revenue line</li>
          </ul>
        </div>
      </div>
    </div>
  `
});

// ==========================================================
// PART V - COMMUNITY (slides 61-72)
// ==========================================================

// ---------- SLIDE 61: PART V DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part V',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART V')}
    <div class="part-num reveal reveal-1">V</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART V</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">COMMUNITY</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 62: COMMUNITY CURRENT ----------
SLIDES.push({
  title: 'Community Current',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Community &mdash; current.</h2>
      <p class="subtitle reveal reveal-3">The Ambush is in the community already. It just needs to be louder about it.</p>
      <div class="kicker reveal reveal-4" style="margin-top: 2rem;">WHAT CURRENTLY EXISTS</div>
      <ul class="bullets reveal reveal-5" style="margin-top: 0.8rem;">
        <li>Player appearances (random &mdash; limited sign-ups)</li>
        <li>Hospital visits</li>
        <li>School visits</li>
        <li>Youth camps as revenue and pipeline tool</li>
        <li>Tucanos / Haus Pizza partnership &mdash; fan dining touchpoint</li>
      </ul>
      <p style="color: var(--pink); font-weight: 700; font-style: italic; margin-top: 2rem;" class="reveal reveal-7">Great work happens &mdash; but it's underpromoted, and turnout for player participation is inconsistent.</p>
    </div>
  `
});

// ---------- SLIDE 63: KIDS CLUB ----------
SLIDES.push({
  title: 'Kids Club',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; KIDS CLUB</div>
      <h2 class="reveal reveal-2">The Ambush Kids Club.</h2>
      <p class="subtitle reveal reveal-3">Build the next generation of Ambush fans &mdash; before they can drive.</p>
      <div class="grid grid-2 reveal reveal-4" style="margin-top: 1.5rem;">
        <div style="border: 1px solid var(--divider); background: var(--bg-card);">
          <div style="background: var(--mute-dark); color: var(--bg); padding: 0.6rem; text-align: center; font-family: var(--f-display); font-size: 1rem; letter-spacing: 0.1em;">CITY SC KIDS CLUB</div>
          <div style="padding: 1.2rem;">
            <div style="font-family: var(--f-display); font-size: 1.4rem; color: var(--ink); letter-spacing: 0.05em;">$39/SEASON &middot; AGES 5-12</div>
            <p style="color: var(--mute); margin-top: 0.6rem; font-size: 0.9rem;">Four tickets, merch, trading cards, sticker pack, exclusive events.</p>
          </div>
        </div>
        <div style="border: 2px solid var(--pink); background: var(--bg-card);">
          <div style="background: var(--pink); color: var(--bg); padding: 0.6rem; text-align: center; font-family: var(--f-display); font-size: 1rem; letter-spacing: 0.1em;">THE AMBUSH KIDS CLUB</div>
          <div style="padding: 1.2rem;">
            <div style="font-family: var(--f-display); font-size: 1.4rem; color: var(--ink); letter-spacing: 0.05em;">$25-$35 / SEASON</div>
            <ul class="bullets pink" style="margin-top: 0.8rem; font-size: 0.85rem;">
              <li>Welcome pack: drawstring bag, sticker, signed trading card, membership card</li>
              <li>Two themed game-day experiences with on-field access</li>
              <li>Birthday jumbotron shoutout + small gift</li>
              <li>Future mobile app challenges</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="reveal reveal-7" style="margin-top: 1.5rem; background: var(--amber); color: var(--bg); padding: 1rem; text-align: center;">
        <div style="font-family: var(--f-display); font-size: 1.3rem; letter-spacing: 0.1em;">
          EVERY KIDS CLUB MEMBER BRINGS AT LEAST TWO PAYING ADULTS PER GAME
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 64: SUPPORTERS GROUP (NEW) ----------
SLIDES.push({
  title: 'Supporters Group',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; SUPPORTERS GROUP</div>
      <h2 class="reveal reveal-2">Build a supporters section.</h2>
      <p class="subtitle reveal reveal-3">The cheapest atmosphere multiplier in the entire deck.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head pink">WHAT IT IS</div>
          <ul class="bullets pink">
            <li>Independent fan group, club-recognized but fan-led</li>
            <li>Dedicated section behind a goal &mdash; chants, drums, tifo</li>
            <li>The atmosphere multiplier MASL games are missing</li>
            <li>The 18-35 acquisition channel currently underserved</li>
            <li>ISC affiliation for legitimacy and best practices</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">WHAT THE CLUB PROVIDES</div>
          <ul class="bullets pink">
            <li>Reserved section pricing &mdash; discounted for verified members</li>
            <li>Drum and capo permission, banner storage, tifo materials budget</li>
            <li>Annual supporters summit with leadership</li>
            <li>Away travel partnership &mdash; discounted bus to Comets games</li>
            <li>Match programs, scarves, founding-member packs</li>
          </ul>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">Naming the section is the first community decision &mdash; let the founding members name it. They will defend what they built.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 65: HERITAGE NIGHTS SERIES (NEW) ----------
SLIDES.push({
  title: 'Heritage Nights',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; HERITAGE SERIES</div>
      <h2 class="reveal reveal-2">Heritage nights as a series.</h2>
      <p class="subtitle reveal reveal-3">St. Louis is one of the most diasporic cities in the U.S. The calendar should reflect that.</p>
      <div class="grid grid-5 gap-sm reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['BOSNIAN NIGHT', 'Largest diaspora in U.S. BOHFS partnership. Bosnia in 2026 WC.'],
          ['MEXICAN NIGHT', 'Huge Hispanic community. Restaurant partners. Banda performers.'],
          ['VIETNAMESE NIGHT', 'Growing community in South County. Food partners. Lion dance.'],
          ['NIGERIAN NIGHT', 'Strong African community. Drumline. Jersey redesign night.'],
          ['IRISH NIGHT', 'St. Patrick\'s adjacent. Tailgate activation. Post-game music.'],
        ].map(([t, d]) => `
          <div class="card pink" style="padding: 1rem;">
            <div class="accent-bar"></div>
            <h3 style="font-size: 0.95rem;">${t}</h3>
            <p style="font-size: 0.78rem; margin-top: 0.4rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="kicker pink reveal reveal-6" style="margin-top: 1.5rem;">PER-NIGHT PLAYBOOK</div>
      <ul class="bullets pink reveal reveal-7" style="margin-top: 0.5rem; font-size: 0.9rem;">
        <li>Community partner co-markets the night to their list (free audience expansion)</li>
        <li>Food vendor aligned to the culture (new revenue, new reason to come early)</li>
        <li>Performance or demonstration during pre-game and halftime</li>
        <li>Themed scarf drop or patch giveaway &mdash; collectible for regulars</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 66: YOUTH CLUB & PIPELINE ----------
SLIDES.push({
  title: 'Youth Pipeline',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CONVERSION</div>
      <h2 class="reveal reveal-2">Youth club &amp; pipeline.</h2>
      <p class="subtitle reveal reveal-3">Youth members aren't being systematically converted into pro game attendees.</p>
      <div class="kicker pink reveal reveal-4" style="margin-top: 1.5rem;">WHAT SHOULD BE TRUE</div>
      <ul class="bullets pink reveal reveal-5" style="margin-top: 0.5rem;">
        <li>Youth players training in the same philosophy as the first team</li>
        <li>First-team coaches formally connected to youth curriculum</li>
        <li>Youth teams attend at least one home game per season as a club event &mdash; seated together, jumbotron recognition</li>
        <li>Parents receive a ticket discount linked to youth enrollment</li>
        <li>FC Ambush Learning Center &mdash; film-based tactical program using first-team and USL2 footage</li>
      </ul>
      <div class="card amber reveal reveal-7" style="margin-top: 1.5rem;">
        <div class="accent-bar"></div>
        <div class="kicker amber">THE MATH</div>
        <div style="font-family: var(--f-display); font-size: 1.4rem; color: var(--ink); letter-spacing: 0.02em; margin-top: 0.3rem;">
          100 families &times; 1 game/season &times; $70 avg family spend &nbsp;=&nbsp; $7,000 annual revenue
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 67: FC AMBUSH YOUTH DEEP DIVE (NEW) ----------
SLIDES.push({
  title: 'FC Ambush Youth',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>PIPELINE &middot; YOUTH ORG</div>
      <h2 class="reveal reveal-2">FC Ambush youth &mdash; the measured state.</h2>
      <p class="subtitle reveal reveal-3">The data layer missing from the pathway argument.</p>
      <div class="grid grid-4 reveal reveal-4" style="margin-top: 2rem;">
        <div class="stat"><div class="value" data-count="100" data-suffix="+">0</div><div class="label">Youth players enrolled</div></div>
        <div class="stat"><div class="value">U-8 TO U-18</div><div class="label">Age range covered</div></div>
        <div class="stat"><div class="value">1:12</div><div class="label">Coach-to-player ratio (avg)</div></div>
        <div class="stat"><div class="value">&lt; 10%</div><div class="label">Attended a pro game this year</div></div>
      </div>
      <div class="kicker pink reveal reveal-6" style="margin-top: 2rem;">WHAT WE NEED TO MEASURE</div>
      <ul class="bullets pink reveal reveal-7" style="margin-top: 0.5rem; font-size: 0.95rem;">
        <li>Annual enrollment trend and age-group distribution</li>
        <li>Fee revenue and capacity vs. competitor St. Louis clubs</li>
        <li>Youth-to-pro attendance conversion rate (the headline metric)</li>
        <li>Retention cohort &mdash; what share of U-10s are still in the program at U-14, at U-18</li>
      </ul>
      <div class="todo reveal reveal-8" style="margin-top: 1rem;">Pull exact enrollment and revenue figures</div>
    </div>
  `
});

// ---------- SLIDE 68: BOSNIAN HERITAGE NIGHT ----------
SLIDES.push({
  title: 'Bosnian Heritage',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>ACTIVATION</div>
      <h2 class="reveal reveal-2">Bosnian Heritage Night.</h2>
      <p class="subtitle reveal reveal-3">St. Louis already hosts one of the largest Bosnian diaspora communities in the U.S.</p>
      <ul class="bullets pink reveal reveal-4" style="margin-top: 2rem;">
        <li>Existing partnership with BOHFS &mdash; a Bosnian-led St. Louis organization</li>
        <li>Former Ambush players and alumni from the Bosnian community</li>
        <li>Established Bosnian restaurants and cultural venues across the metro</li>
        <li>Bosnia qualified for the 2026 World Cup &mdash; an obvious tie-in moment</li>
      </ul>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        Lean into the heritage with a dedicated night &mdash; and consider a pre-season Bosnia World Cup watch party leading into the indoor season.
      </div>
    </div>
  `
});

// ---------- SLIDE 69: HIGH-IMPACT PROGRAMS ----------
SLIDES.push({
  title: 'Impact Programs',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>PROGRAMS</div>
      <h2 class="reveal reveal-2">High-impact programs.</h2>
      <p class="subtitle reveal reveal-3">The work that builds the brand beyond the game.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['SCHOOL RECESS CLINICS', 'Players visit during PE; parent email before and after with promo code; Kids Club link included.'],
          ['CHARITY NIGHTS', 'Dedicated game with 50/50 raffle, merchandise auction, portion of revenue to local charity partner.'],
          ['AMBUSH CHARITY CLASSIC', 'Annual off-season event: charity match or 5K ending inside Family Arena, player booths, kids games, BBQ.'],
          ['HOSPITAL VISITS', 'Formalized on annual calendar; two per season; submitted as press releases to local media.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1.1rem;">${t}</h3>
            <p style="font-size: 0.9rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 70: COMMUNITY GAP ANALYSIS ----------
SLIDES.push({
  title: 'Community Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE</div>
      <h2 class="reveal reveal-2">Community gap analysis.</h2>
      <p class="subtitle reveal reveal-3">Fixes that support the initiatives.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['PLAYER APPEARANCES', 'Same players volunteer every time; no enforcement; no forward calendar.'],
          ['UNDERPUBLICIZED WORK', 'Events happen; promotion is sometimes posted the day before &mdash; or not at all.'],
          ['NO LOCAL NEWS RELATIONSHIP', 'KSDK and Fox 2 don\'t cover the Ambush &mdash; only one segment during playoffs.'],
          ['NO IMPACT DATA', 'When making the case to a city partner or anchor sponsor, no numbers to back it up.'],
        ].map(([t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 14px 280px 1fr; gap: 1.2rem; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid var(--divider);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal);"></div>
            <div style="font-family: var(--f-display); font-size: 1.1rem; color: var(--teal); letter-spacing: 0.05em;">${t}</div>
            <div style="font-size: 0.92rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--pink);">
        <strong style="font-style: normal;">All four gaps are solved by the same thing: a calendar, a camera, a press list, and a tracking spreadsheet.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 71: ALUMNI ACTIVATION (NEW) ----------
SLIDES.push({
  title: 'Alumni Activation',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; ALUMNI</div>
      <h2 class="reveal reveal-2">30 years of alumni. Untapped asset.</h2>
      <p class="subtitle reveal reveal-3">Honor the past. Fund the future.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['AMBASSADOR PROGRAM', 'Opt-in alumni network for podcast guests, watch-party hosts, intern mentors, community event faces.'],
          ['JERSEY RETIREMENT NIGHTS', 'One per season. Tifo. Video tribute. Alumni attendance. Press release to local media.'],
          ['ALUMNI-LED YOUTH CLINICS', 'FC Ambush summer camps headlined by a returning legend. Parents buy tickets.'],
          ['LOCKER ROOM ALUMNI WING', 'Jersey wall + video loop of historic moments. Free. Shows up in every photo and broadcast.'],
          ['ALUMNI NEWSLETTER', 'Monthly digest of club news, game results, alumni business promotions, reunion signals.'],
          ['FIRST-TEAM MENTORS', 'Formal pairings: active player + alumni mentor. Free institutional memory transfer.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1rem;">${t}</h3>
            <p style="font-size: 0.85rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 72: BRAND & IDENTITY REFRESH (NEW) ----------
SLIDES.push({
  title: 'Brand Refresh',
  render: (n, total) => `
    ${chrome(n, total, 'PART V &middot; COMMUNITY')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; BRAND &amp; IDENTITY</div>
      <h2 class="reveal reveal-2">Brand &amp; identity refresh.</h2>
      <p class="subtitle reveal reveal-3">Vermont Green. Wrexham. KC Current. Brand is the highest-ROI lever in lower-division sports.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['KIT CYCLE', 'Home / Away / Third on a predictable annual cadence. Each drop generates a merch window.'],
          ['ALTERNATE KITS', 'Bosnian heritage kit. 30-year anniversary throwback. Kids Club kit. Each is a standalone revenue line.'],
          ['RETRO NIGHTS', 'One per season: players wear a historic kit, fans get a matching giveaway, alumni are honored.'],
          ['CREST / TYPOGRAPHY AUDIT', 'Modernize without losing the red. Document a proper brand book. Extend to youth and USL2.'],
          ['STADIUM GRAPHICS', 'Tunnel, bench skirts, ice surface, jumbotron lower-thirds &mdash; every surface becomes the brand.'],
          ['KIT LAUNCH CONTENT', 'Player-led reveal videos. Community partner cameos. Pre-season energy where there is currently none.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1rem;">${t}</h3>
            <p style="font-size: 0.85rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ==========================================================
// PART VI - FINANCE & SUSTAINABILITY (slides 73-80)
// ==========================================================

// ---------- SLIDE 73: PART VI DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part VI',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART VI')}
    <div class="part-num reveal reveal-1">VI</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART VI</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">FINANCE &amp;</span>
        <span class="line">SUSTAINABILITY</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 74: REVENUE STREAMS ----------
SLIDES.push({
  title: 'Revenue Streams',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>REVENUE</div>
      <h2 class="reveal reveal-2">Revenue streams analysis.</h2>
      <p class="subtitle reveal reveal-3">Where the money comes from &mdash; and the ceiling on each.</p>
      <table class="table reveal reveal-4" style="margin-top: 2rem;">
        <thead>
          <tr>
            <th style="width: 25%;">STREAM</th>
            <th class="teal" style="width: 40%;">CURRENT STATE</th>
            <th class="pink" style="width: 35%;">GROWTH LEVER</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="title-cell">TICKET REVENUE</td><td>~$484K net at current volume</td><td>Dynamic pricing / platform migration</td></tr>
          <tr><td class="title-cell">SPONSORSHIP</td><td>Broad but shallow</td><td>Tiered activation + anchor partner</td></tr>
          <tr><td class="title-cell">MERCHANDISE</td><td>Demand present, supply falling</td><td>Pre-season survey + themed drops</td></tr>
          <tr><td class="title-cell">YOUTH / CAMPS</td><td>100-member base</td><td>Youth-to-pro narrative drives enrollment</td></tr>
          <tr><td class="title-cell">ANCILLARY / EVENTS</td><td>Near zero</td><td>Tailgate, Charity Classic, watch parties</td></tr>
        </tbody>
      </table>
      <div class="todo reveal reveal-7" style="margin-top: 1rem;">Confirm $484K and 100-member base figures</div>
    </div>
  `
});

// ---------- SLIDE 75: YEAR 1 INVESTMENT SUMMARY (NEW) ----------
SLIDES.push({
  title: 'Year 1 Investment',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>THE ASK</div>
      <h2 class="reveal reveal-2">Year 1 investment summary.</h2>
      <p class="subtitle reveal reveal-3">A specific, tiered, actionable dollar ask.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        <div class="card" style="border-color: var(--teal);">
          <div class="accent-bar" style="background: var(--teal);"></div>
          <div class="kicker teal">TIER 1 &middot; FREE / MINIMAL</div>
          <h3 style="color: var(--teal); font-size: 1.2rem;">~$0 - $5K</h3>
          <ul class="bullets" style="margin-top: 0.6rem; font-size: 0.85rem;">
            <li>Playbook documentation</li>
            <li>Wellness survey + leaderboard</li>
            <li>Intern program setup</li>
            <li>Press distribution list</li>
            <li>Supporters group launch</li>
          </ul>
        </div>
        <div class="card amber">
          <div class="accent-bar"></div>
          <div class="kicker amber">TIER 2 &middot; MODEST</div>
          <h3 style="color: var(--amber); font-size: 1.2rem;">~$15K - $40K</h3>
          <ul class="bullets amber" style="margin-top: 0.6rem; font-size: 0.85rem;">
            <li>CRM + CDP stack ($3-4K/yr)</li>
            <li>Pre-season merch inventory</li>
            <li>Kids Club welcome packs (100)</li>
            <li>World Cup activation campaign</li>
            <li>Podcast production upgrade</li>
          </ul>
        </div>
        <div class="card pink">
          <div class="accent-bar"></div>
          <div class="kicker pink">TIER 3 &middot; REAL INVESTMENT</div>
          <h3 style="color: var(--pink); font-size: 1.2rem;">~$60K - $120K</h3>
          <ul class="bullets pink" style="margin-top: 0.6rem; font-size: 0.85rem;">
            <li>Dedicated S&amp;C coach</li>
            <li>GPS / Catapult system</li>
            <li>Mobile app (PWA path)</li>
            <li>Expanded analyst role</li>
            <li>Tailgate + event activation</li>
          </ul>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">Total Year 1 investment range: $75K - $165K.</strong> Against a Year 1 revenue lift model of $196K-$236K in new net ticket revenue alone.
      </div>
    </div>
  `
});

// ---------- SLIDE 76: COST OF INACTION (NEW) ----------
SLIDES.push({
  title: 'Cost of Inaction',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1" style="color: var(--red);"><span class="dot"></span>THE ALTERNATIVE</div>
      <h2 class="reveal reveal-2">The cost of doing nothing.</h2>
      <p class="subtitle reveal reveal-3">What happens if the Ambush stays exactly as it is for three years.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['CITY SC MATURES', 'Their academy absorbs the St. Louis youth soccer pipeline. FC Ambush enrollment softens.', 'var(--red)'],
          ['KC COMETS EXTENDS LEAD', 'They already average 4,500. Their TV deal grows. Their alumni network deepens. Gap widens.', 'var(--red)'],
          ['WORLD CUP WINDOW PASSES', 'The biggest organic soccer marketing moment in a generation. Without activation, it activates other clubs instead.', 'var(--red)'],
          ['SPONSOR RENEWALS SOFTEN', 'Without scorecards or activation frameworks, the first soft-economy conversation becomes a lost renewal.', 'var(--red)'],
          ['KEY-PERSON ATTRITION', 'Jeff. Donnie. Dyllan. Without investment, the current staff absorbs more while the output ceiling stays the same.', 'var(--red)'],
          ['RELEVANCE QUIETLY COMPRESSES', 'No dramatic collapse. Just slow erosion. In five years, we look like the Ambush of 2015, not 2030.', 'var(--red)'],
        ].map(([t, d, c]) => `
          <div class="card" style="border-color: ${c};">
            <div class="accent-bar" style="background: ${c};"></div>
            <h3 style="color: ${c}; font-size: 1rem;">${t}</h3>
            <p style="font-size: 0.88rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--red);">
        <strong style="font-style: normal;">The real cost of Year 1 isn't the investment. It's the cumulative value of what gets lost if we don't make it.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 77: FINANCIAL GAP ANALYSIS ----------
SLIDES.push({
  title: 'Financial Gaps',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; CONSTRAINTS</div>
      <h2 class="reveal reveal-2">Financial gap analysis.</h2>
      <p class="subtitle reveal reveal-3">Three structural constraints worth naming precisely.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['01', 'VENUE CONTROL', 'Concessions, parking, off-season events, premium inventory all gated by a third party. We are the longest-tenured tenant &mdash; that relationship has value. Constraint is not permanent.'],
          ['02', 'PLATFORM FEE DRAIN', '$100K-$170K per season leaving via Ticketmaster fees. Addressable within 12-18 months. Highest-ROI infrastructure change available.'],
          ['03', 'LIMITED INVESTMENT CAPITAL', 'Sequence: start with zero-cost wins, use returns to fund the next tier, repeat.'],
        ].map(([num, t, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: start; margin-bottom: 1.5rem;">
            <div style="font-family: var(--f-display); font-size: 3rem; color: var(--teal); line-height: 1; letter-spacing: 0.05em;">${num}</div>
            <div>
              <div style="font-family: var(--f-display); font-size: 1.3rem; color: var(--ink); letter-spacing: 0.05em; margin-bottom: 0.4rem;">${t}</div>
              <p style="color: var(--mute); font-size: 0.92rem;">${d}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 78: FUTURE FINANCIAL MODEL ----------
SLIDES.push({
  title: 'Financial Model',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; FINANCIAL MODEL</div>
      <h2 class="reveal reveal-2">Sustainable growth, with targets.</h2>
      <p class="subtitle reveal reveal-3">Specific numbers tied to specific operational moves.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        <div style="background: var(--bg-card); border: 1px solid var(--divider);">
          <div style="background: var(--pink); color: var(--bg); padding: 0.8rem; text-align: center; font-family: var(--f-display); font-size: 1.3rem; letter-spacing: 0.15em;">YEAR 1</div>
          <div style="padding: 1.5rem;">
            <ul class="bullets pink" style="font-size: 0.9rem;">
              <li>Avg attendance &rarr; 2,800 (World Cup + student program)</li>
              <li>Platform migration &rarr; saves $140K-$170K/season</li>
              <li>Dynamic pricing &rarr; 8-12% improvement</li>
            </ul>
            <div style="margin-top: 1rem; background: var(--bg); border: 2px solid var(--amber); padding: 1rem;">
              <div class="kicker amber" style="margin-bottom: 0.3rem;">NET TICKET REVENUE</div>
              <div style="font-family: var(--f-display); font-size: 2rem; color: var(--ink); letter-spacing: 0.02em;">$484K &rarr; $680-720K</div>
            </div>
          </div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--divider);">
          <div style="background: var(--pink); color: var(--bg); padding: 0.8rem; text-align: center; font-family: var(--f-display); font-size: 1.3rem; letter-spacing: 0.15em;">YEAR 3</div>
          <div style="padding: 1.5rem;">
            <ul class="bullets pink" style="font-size: 0.9rem;">
              <li>Avg attendance &rarr; 3,500 (70% of lower bowl)</li>
              <li>Platinum anchor sponsor secured</li>
              <li>Merchandise revenue up 40%+</li>
              <li>Ancillary as a meaningful line item</li>
            </ul>
            <div style="margin-top: 1rem; background: var(--bg); border: 2px solid var(--amber); padding: 1rem;">
              <div class="kicker amber" style="margin-bottom: 0.3rem;">NET TICKET REVENUE</div>
              <div style="font-family: var(--f-display); font-size: 2rem; color: var(--ink); letter-spacing: 0.02em;">EXCEEDS $900K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 79: CELEBRITY & INVESTMENT MODEL ----------
SLIDES.push({
  title: 'Investment Model',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>CAPITAL</div>
      <h2 class="reveal reveal-2">Celebrity &amp; investment model.</h2>
      <p class="subtitle reveal reveal-3">Who else should have a stake in this growth?</p>
      <div class="grid grid-3 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['CELEBRITY INVESTOR', 'KSI changed the trajectory of lower-division English clubs with one social post. The St. Louis equivalent: Nelly &mdash; local roots, national platform, civic credibility. The exchange: free tickets, social integration, a named section, a nominal equity stake.'],
          ['MCO PATH', 'A well-documented brand + growing attendance + professional infrastructure + a clear venue strategy = a meaningful acquisition target. The Ambush doesn\'t need to seek an investor. It needs to be worth finding.'],
          ['MASL OPEN CUP', 'Cross-division indoor tournament &mdash; MASL vs. MASL2 vs. MASL3 &mdash; May through August. Gate revenue split 70/30. Broadcast rights. Full proposal ready for league leadership.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1.05rem;">${t}</h3>
            <p style="font-size: 0.85rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 80: STRATEGIC RISK REGISTER ----------
SLIDES.push({
  title: 'Risk Register',
  render: (n, total) => `
    ${chrome(n, total, 'PART VI &middot; FINANCE')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>STRATEGIC RISK</div>
      <h2 class="reveal reveal-2">Risks worth naming.</h2>
      <p class="subtitle reveal reveal-3">Threats that exist outside the operational scope &mdash; and how we plan around them.</p>
      <div class="grid grid-3 reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['CITY SC ABSORPTION', 'MEDIUM', 'CITY SC pipeline pulls youth talent + family attention away from FC Ambush.'],
          ['VENUE CHANGE', 'LOW-MED', 'Family Arena ownership/management shift before our long-term plan matures.'],
          ['KEY-PERSON RISK', 'MEDIUM', 'Heavy concentration of institutional knowledge in Jeff and Donnie.'],
          ['MASL CONTRACTION', 'LOW', 'League restructuring or club exits affect schedule, travel cost, broadcast.'],
          ['MARQUEE INJURY', 'MEDIUM', 'Loss of a key player in-season tanks attendance and on-field momentum.'],
          ['ECONOMIC DOWNTURN', 'LOW-MED', 'Discretionary entertainment spend tightens; renewals soften.'],
        ].map(([t, p, d]) => `
          <div class="card pink" style="padding: 1rem;">
            <div class="accent-bar"></div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 0.95rem;">${t}</h3>
              <span style="font-family: var(--f-mono); font-size: 9px; color: var(--amber); letter-spacing: 0.15em; font-weight: 700;">${p}</span>
            </div>
            <p style="font-size: 0.82rem; margin-top: 0.4rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <p style="color: var(--mute); font-style: italic; margin-top: 1rem; font-size: 0.9rem;">Each risk has an assigned mitigation owner. Reviewed quarterly. Full register lives outside this deck.</p>
    </div>
  `
});

// ==========================================================
// PART VII - IMPLEMENTATION ROADMAP (slides 81-102)
// ==========================================================

// ---------- SLIDE 81: PART VII DIVIDER ----------
SLIDES.push({
  cls: 'slide-divider',
  title: 'Part VII',
  render: (n, total) => `
    <div class="divider-vert"></div>
    ${chrome(n, total, 'PART VII')}
    <div class="part-num reveal reveal-1">VII</div>
    <div class="slide-inner centered" style="padding-left: 2rem;">
      <div style="width: 60px; height: 3px; background: var(--teal); margin-bottom: 1.5rem;" class="reveal reveal-line"></div>
      <div class="divider-part reveal reveal-1">PART VII</div>
      <div class="divider-title reveal reveal-2">
        <span class="line">IMPLEMENTATION</span>
        <span class="line">ROADMAP</span>
      </div>
    </div>
  `
});

// ---------- SLIDE 82: MY CURRENT ROLE ----------
SLIDES.push({
  title: 'Current Role',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>CURRENT STATE &middot; THE ANALYTICS FUNCTION</div>
      <h2 class="reveal reveal-2">My current role.</h2>
      <p class="subtitle reveal reveal-3">Part-time hours. Full-time impact.</p>
      <ul class="bullets reveal reveal-4" style="margin-top: 2rem;">
        <li>Live analytics dashboard &mdash; updated through March 2026</li>
        <li>Real-time iPad analytics at every home game</li>
        <li>Opposition scouting reports and pre-match game sheets</li>
        <li>Scenario-based Hudl playlists &mdash; press, counters, transition sequences</li>
        <li>Various tech integrations &mdash; tryout evaluation system, player surveys, etc.</li>
        <li>USL 2 broadcast stats tracker</li>
        <li>And more &mdash; across ops, game day, recruiting, and player development</li>
      </ul>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">The output is real. The model limits how much further it can go.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 83: FUTURE ROLE ----------
SLIDES.push({
  title: 'Future Role',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; THE VISION</div>
      <h2 class="reveal reveal-2">My future role.</h2>
      <p class="subtitle reveal reveal-3">Embedded intelligence. Not a report &mdash; a presence.</p>
      <ul class="bullets pink reveal reveal-4" style="margin-top: 2rem; font-size: 0.95rem;">
        <li>The role doesn't need a new title. It needs integration and enhancement.</li>
        <li>Proactive delivery &mdash; opposition reports two weeks out; wellness dashboards live before training; recruitment database always current</li>
        <li>Agentic AI layer &mdash; post-match reports distributed automatically; receipts filed; pricing alerts triggered; fan campaigns personalized and sent</li>
        <li>Compounding value &mdash; every season of data makes the next decision better, the next hire smarter, the next sponsorship more credible</li>
        <li>Enhancements at 3-10&times; current scope &mdash; practice data, personalized player reports, league-wide context</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 84: TRACK RECORD / WHY ME (NEW) ----------
SLIDES.push({
  title: 'Why Me',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>TRACK RECORD</div>
      <h2 class="reveal reveal-2">Why me. Why now.</h2>
      <p class="subtitle reveal reveal-3">Everything below was built on my own time, with no formal mandate.</p>
      <div class="two-col reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head pink">PROFESSIONAL BACKGROUND</div>
          <ul class="bullets pink" style="font-size: 0.9rem;">
            <li>Data Analyst II at Stifel Bank &amp; Trust &mdash; ETL/ELT pipelines, SQL Server, Power BI, R</li>
            <li>M.S. Data Science (4.0 GPA), B.S. Computer Science + Applied Math (3.79)</li>
            <li>Co-founder Footy Collective &mdash; soccer analytics research (USL pro/rel valuation thesis)</li>
            <li>MLS Growth Series + World Cup Effect paper &mdash; published research</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">SHIPPED FOR THE AMBUSH</div>
          <ul class="bullets pink" style="font-size: 0.9rem;">
            <li>Streamlit coaching dashboard (ambushdashboard.streamlit.app)</li>
            <li>USL2 tryout evaluation app</li>
            <li>End-of-year player exit survey (React)</li>
            <li>MASL Fantasy app prototype</li>
            <li>KC Comets playoff scouting report</li>
            <li>TST research &mdash; statistical analysis + film review for captain</li>
            <li>Two-app PWA analytics platform in development</li>
          </ul>
        </div>
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">The track record is the argument. Expanded scope isn't a bet &mdash; it's an extension of what's already working.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 85: AI OPERATIONS LAYER ----------
SLIDES.push({
  title: 'AI Operations',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; AGENTIC OPERATIONS</div>
      <h2 class="reveal reveal-2">AI as the operations layer.</h2>
      <p class="subtitle reveal reveal-3">A small front office punching at the weight of a much larger one.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['CONTENT AGENT', 'Auto-generates post-match recaps, social copy, sponsor-tagged graphics. One game &rarr; 12 deliverables in under an hour.'],
          ['CRM AGENT', 'Auto-segments fan list weekly. Triggers welcome, win-back, birthday, pre-game lift campaigns based on behavior.'],
          ['PRICING AGENT', 'Monitors inventory, days-to-game, opponent tier, demand signals. Surfaces price adjustment recommendations every Monday.'],
          ['SCOUTING AGENT', 'Monitors league + USL + university tape, surfaces players matching tactical fit matrix, drafts profiles automatically.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3>${t}</h3>
            <p style="font-size: 0.9rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="reveal reveal-7" style="margin-top: 1.5rem; background: var(--pink); color: var(--bg); padding: 1.2rem; text-align: center;">
        <div style="font-family: var(--f-display); font-size: 1.4rem; letter-spacing: 0.1em;">
          THIS IS THE EDGE NO COMPETING HIRE CAN BRING. THE WORK IS ALREADY UNDERWAY.
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 86: DAY IN THE LIFE 2026 vs 2027 (NEW) ----------
SLIDES.push({
  title: 'Day in the Life',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>BEFORE / AFTER</div>
      <h2 class="reveal reveal-2">Day in the life &mdash; 2026 vs 2027.</h2>
      <p class="subtitle reveal reveal-3">Same family. Same Saturday. Different club.</p>
      <div class="grid grid-2 reveal reveal-4" style="margin-top: 2rem;">
        <div style="background: var(--bg-card); border: 1px solid var(--divider);">
          <div style="background: var(--mute-dark); color: var(--bg); padding: 0.7rem; text-align: center; font-family: var(--f-display); font-size: 1.2rem; letter-spacing: 0.1em;">DEC 2026 &middot; TODAY</div>
          <div style="padding: 1.2rem; font-size: 0.9rem;">
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>5:15 PM</strong> &mdash; Arrive at Family Arena. Parking lot is quiet.</p>
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>5:25 PM</strong> &mdash; Inside. Merch shelves half-empty. Kids want a jersey &mdash; sold out.</p>
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>5:45 PM</strong> &mdash; Grab venue concessions. Generic.</p>
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>6:05 PM</strong> &mdash; Game starts. Good action. Atmosphere average.</p>
            <p style="color: var(--mute); font-style: italic;"><strong>7:30 PM</strong> &mdash; Home. Already fading.</p>
          </div>
        </div>
        <div style="background: var(--bg-card); border: 2px solid var(--pink);">
          <div style="background: var(--pink); color: var(--bg); padding: 0.7rem; text-align: center; font-family: var(--f-display); font-size: 1.2rem; letter-spacing: 0.1em;">DEC 2027 &middot; FUTURE</div>
          <div style="padding: 1.2rem; font-size: 0.9rem;">
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>4:30 PM</strong> &mdash; Tailgate in the lot. Haus Pizza truck. Music. Player booth.</p>
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>5:15 PM</strong> &mdash; Kids Club table. Trading cards. Birthday shoutout on jumbotron.</p>
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>5:45 PM</strong> &mdash; New limited merch drop. Kids grab scarves.</p>
            <p style="color: var(--ink); margin-bottom: 0.7rem;"><strong>6:05 PM</strong> &mdash; Supporters section roars. Drums. Chants. Electric.</p>
            <p style="color: var(--ink);"><strong>7:30 PM</strong> &mdash; Post-match highlight on app before leaving the lot.</p>
            <p style="color: var(--pink); font-weight: 700; margin-top: 0.6rem;">Already talking about next game.</p>
          </div>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 87: WOMEN'S PROGRAM ----------
SLIDES.push({
  title: "Women's Program",
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>EXPANSION</div>
      <h2 class="reveal reveal-2">Implementing the women's side.</h2>
      <p class="subtitle reveal reveal-3">There has been ongoing discussion about whether to add a women's team.</p>
      <div class="kicker pink reveal reveal-4" style="margin-top: 2rem;">MY SUGGESTED PATH</div>
      <ul class="bullets pink reveal reveal-5" style="margin-top: 0.5rem;">
        <li>Secure 3-5 additional women's teams at FC Ambush first &mdash; grow the youth and adult fan base before going pro</li>
        <li>Larger youth participation creates the natural conversion funnel for a future pro side</li>
        <li>From there, the discussion can begin &mdash; backed by St. Louis-specific demand data</li>
        <li>Open questions: same coaching staff or separate? Shared facility? Schedule overlap?</li>
      </ul>
      <div class="todo reveal reveal-7" style="margin-top: 1.5rem;">Pull St. Louis women's soccer demand data</div>
    </div>
  `
});

// ---------- SLIDE 88: UNIVERSITY BROADCAST PARTNERSHIP (NEW) ----------
SLIDES.push({
  title: 'Broadcast Partnership',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; BROADCAST</div>
      <h2 class="reveal reveal-2">University broadcast partnership.</h2>
      <p class="subtitle reveal reveal-3">Solve broadcast quality + deepen intern pipeline with one move.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        <div>
          <div class="two-col-head pink">WHAT WE GIVE</div>
          <ul class="bullets pink" style="font-size: 0.95rem;">
            <li>Game-day broadcast access for students in media production tracks</li>
            <li>Academic credit agreement with partner programs</li>
            <li>Letters of recommendation and on-air credit for their portfolio</li>
            <li>Priority hiring when roles open</li>
          </ul>
        </div>
        <div>
          <div class="two-col-head pink">WHAT WE GET</div>
          <ul class="bullets pink" style="font-size: 0.95rem;">
            <li>Production-quality game broadcasts without production costs</li>
            <li>Multi-camera coverage, graphics, commentary talent</li>
            <li>Full rights retention &mdash; we own the feed and the archive</li>
            <li>University co-marketing pushes the product to their audience</li>
          </ul>
        </div>
      </div>
      <div class="kicker pink reveal reveal-7" style="margin-top: 1.5rem;">TARGET PARTNERS</div>
      <p style="color: var(--ink); font-size: 0.95rem; margin-top: 0.3rem;">SLU (Billiken Broadcast Network) &middot; Webster (Film Production) &middot; Lindenwood (Digital Media) &middot; Maryville (Sports Broadcasting)</p>
    </div>
  `
});

// ---------- SLIDE 89: 90 DAYS TO SEASON (DAYS 1-60) ----------
SLIDES.push({
  title: '90 Days: 1-60',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; SPRINT PLAN</div>
      <h2 class="reveal reveal-2">90 days to season.</h2>
      <p class="subtitle reveal reveal-3">What happens in the first 90 days &mdash; owned, sequenced, measured.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        <div style="background: var(--bg-card); border: 1px solid var(--divider);">
          <div style="background: var(--pink); color: var(--bg); padding: 0.7rem; text-align: center; font-family: var(--f-display); font-size: 1.2rem; letter-spacing: 0.15em;">DAYS 1-30</div>
          <ul class="bullets pink" style="padding: 1.2rem; font-size: 0.88rem;">
            <li>Game-day playbook and set-piece playbook written and tested</li>
            <li>MASL compliance calendar built and shared</li>
            <li>Player appearance assignment calendar built and shared</li>
            <li>Press release distribution list established</li>
            <li>Pre-season merchandise survey launched</li>
          </ul>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--divider);">
          <div style="background: var(--pink); color: var(--bg); padding: 0.7rem; text-align: center; font-family: var(--f-display); font-size: 1.2rem; letter-spacing: 0.15em;">DAYS 31-60</div>
          <ul class="bullets pink" style="padding: 1.2rem; font-size: 0.88rem;">
            <li>World Cup activation campaign live; email captures collected</li>
            <li>College student ticket program launched</li>
            <li>Sponsor scorecard templates built; sponsors confirmed</li>
            <li>Podcast distributed across platforms; "Ambush Voice" YouTube series launched</li>
            <li>Wellness survey piloted with the team</li>
          </ul>
        </div>
      </div>
    </div>
  `
});

// ---------- SLIDE 90: 90 DAYS CONT'D (DAYS 61-90) ----------
SLIDES.push({
  title: '90 Days: 61-90',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; SPRINT PLAN</div>
      <h2 class="reveal reveal-2">90 days to season &mdash; cont'd.</h2>
      <p class="subtitle reveal reveal-3">Closing out the pre-season sprint.</p>
      <div class="reveal reveal-4" style="margin-top: 2rem; background: var(--pink); color: var(--bg); padding: 0.8rem; text-align: center;">
        <div style="font-family: var(--f-display); font-size: 1.5rem; letter-spacing: 0.2em;">DAYS 61-90</div>
      </div>
      <ul class="bullets pink reveal reveal-5" style="margin-top: 1.5rem;">
        <li>Intern program partnerships confirmed across all six target universities</li>
        <li>Intern onboardings and orientations completed</li>
        <li>Economic impact tracking dashboard live</li>
        <li>Kids Club proposal presented to ownership for go/no-go decision</li>
      </ul>
    </div>
  `
});

// ---------- SLIDE 91: YEAR 1 BLUEPRINT ----------
SLIDES.push({
  title: 'Year 1',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; YEAR 1</div>
      <h2 class="reveal reveal-2">Year 1 blueprint.</h2>
      <p class="subtitle reveal reveal-3">The first full season of the new model.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['SPORTING', 'S&C hired. Wellness survey operational from Day 1. Tactical/set-piece document distributed. GPS monitoring piloted. New film/data flow replacing Hudl-only stack.'],
          ['GAME DAY', 'Playbook in active use. 4 interns per home game. Kids Club launched. Tailgate piloted at home opener. Post-match player summaries operational.'],
          ['MARKETING', 'World Cup campaign executed. .edu student program live. Platform migration complete. Dynamic pricing manual protocol running. "Ambush Voice" series live.'],
          ['COMMUNITY', 'Player appearance calendar enforced. Press distribution to KSDK/Fox 2 for every major announcement. Economic impact tracking from Day 1.'],
          ['FINANCE', 'Fee savings tracked and reported quarterly. Themed merchandise drop executed. Sponsorship scorecard reviews and renewal conversations at six-month marks.'],
        ].map(([label, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 180px 1fr; gap: 1.5rem; align-items: center; padding: 0.5rem 0;">
            <div style="background: var(--pink); color: var(--bg); font-family: var(--f-display); font-size: 1.1rem; padding: 0.6rem; text-align: center; letter-spacing: 0.1em;">${label}</div>
            <div style="font-size: 0.92rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 92: YEAR 3 BLUEPRINT ----------
SLIDES.push({
  title: 'Year 3',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker pink reveal reveal-1"><span class="dot"></span>FUTURE STATE &middot; YEAR 3</div>
      <h2 class="reveal reveal-2">Year 3 blueprint.</h2>
      <p class="subtitle reveal reveal-3">What the Ambush looks like in 2029.</p>
      <div style="margin-top: 2rem;">
        ${[
          ['SPORTING', 'Full staff. Unified tactical identity youth &rarr; USL2 &rarr; first team. A season of GPS data. At least one Ron Newman Cup Final appearance.'],
          ['FAN BASE', 'Average attendance consistently above 3,000. Kids Club at 250+ members. Mobile app with active loyal user base. World Cup fans retained.'],
          ['COMMERCIAL', 'Tiered sponsor portfolio with 80%+ renewal rate. Platinum anchor partner secured. Ticketing migration live. Merchandise revenue up 40%.'],
          ['COMMUNITY', 'Annual community impact report published. Formal school district partnerships. Charity Classic established. Formal venue conversation underway with three years of data.'],
        ].map(([label, d], i) => `
          <div class="reveal reveal-${Math.min(i + 3, 8)}" style="display: grid; grid-template-columns: 180px 1fr; gap: 1.5rem; align-items: center; padding: 0.6rem 0;">
            <div style="background: var(--pink); color: var(--bg); font-family: var(--f-display); font-size: 1.1rem; padding: 0.6rem; text-align: center; letter-spacing: 0.1em;">${label}</div>
            <div style="font-size: 0.92rem; color: var(--ink);">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 93: LEAGUE SUGGESTIONS ----------
SLIDES.push({
  title: 'League Suggestions',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>LEAGUE</div>
      <h2 class="reveal reveal-2">League suggestions.</h2>
      <p class="subtitle reveal reveal-3">What the Ambush can bring to MASL &mdash; not just receive from it.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['MASL OPEN CUP', 'Cross-division tournament, May-August, open to MASL/MASL2/MASL3. Upsets drive press. Full proposal prepared and ready for league leadership.'],
          ['FILM EXCHANGE PROGRAM', 'League-facilitated shared tactical film repository. Raises the analytical standard across all clubs. Better-prepared opponents make for better games.'],
          ['VIDEO ANALYSIS PARTNERSHIP', 'League-level deal with Hudl or a similar partner built specifically for the indoor game &mdash; pressing, board play, power play coverage.'],
          ['MASL DOCUMENTARY SERIES', 'Pitched to ESPN+ or Apple TV. Production-grade access series in the spirit of the NWSL show &mdash; building national audience for the indoor game.'],
        ].map(([t, d]) => `
          <div class="card pink">
            <div class="accent-bar"></div>
            <h3 style="font-size: 1.05rem;">${t}</h3>
            <p style="font-size: 0.9rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 94: WHAT WE'RE NOT DOING ----------
SLIDES.push({
  title: 'What We Aren\'t Doing',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>SCOPE</div>
      <h2 class="reveal reveal-2">What we're not doing &mdash; and why.</h2>
      <p class="subtitle reveal reveal-3">Discipline matters. These are the attractive bets we are consciously deferring.</p>
      <div class="grid grid-2 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['PRO WOMEN\'S TEAM', 'Build the youth and adult women\'s base at FC Ambush first. Pro launch without that foundation is a brand risk, not a brand asset.'],
          ['FAMILY ARENA RENEGOTIATION', 'Current contract cycle is closed. We invest in the data, attendance growth, and economic-impact case that gives us leverage at the next opening.'],
          ['OWN PRACTICE FACILITY', 'Capital outlay disproportionate to current revenue base. Revisit at Year 3 if attendance and sponsor portfolio match the model.'],
          ['FULL-TIME MARKETING DIRECTOR', 'Deferred until Year 2. The intern program + AI ops layer + targeted contractor work fills the gap at a fraction of the cost.'],
        ].map(([t, d]) => `
          <div class="card">
            <div class="accent-bar" style="background: var(--mute-dark);"></div>
            <h3 style="color: var(--mute);">${t}</h3>
            <p style="font-size: 0.92rem;">${d}</p>
          </div>
        `).join('')}
      </div>
      <div class="pullquote reveal reveal-7" style="margin-top: 1.5rem; border-left-color: var(--amber);">
        Each of these is on the radar &mdash; none is on the Year 1 plan. Discipline is what makes the rest of the deck achievable.
      </div>
    </div>
  `
});

// ---------- SLIDE 95: DEI & ACCESSIBILITY (NEW) ----------
SLIDES.push({
  title: 'DEI & Accessibility',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>VALUES</div>
      <h2 class="reveal reveal-2">DEI &amp; accessibility.</h2>
      <p class="subtitle reveal reveal-3">What the club stands for &mdash; named explicitly, not inferred.</p>
      <div class="grid grid-3 gap-lg reveal reveal-4" style="margin-top: 2rem;">
        ${[
          ['INCLUSIVE ATMOSPHERE', 'The supporters section code-of-conduct, the Heritage Nights calendar, the community programs &mdash; all built to reflect every part of the St. Louis metro.'],
          ['PHYSICAL ACCESSIBILITY', 'Wheelchair-accessible seating audit. Clear signage. Staff trained. Direct feedback channel for families.'],
          ['SENSORY-FRIENDLY NIGHTS', 'One per season: reduced jumbotron, adjusted sound, quiet room available. A real family that couldn\'t come before can come now.'],
          ['ASL INTERPRETATION', 'National anthem and halftime segments interpreted for a nominated game per season.'],
          ['YOUTH FEE SCALING', 'FC Ambush program: need-based enrollment discount for qualifying families. Expands the pipeline, reflects the city.'],
          ['LANGUAGE', 'Game-day signage and key marketing in Spanish where relevant to the audience. Low effort, high signal.'],
        ].map(([t, d]) => `
          <div class="card">
            <div class="accent-bar" style="background: var(--teal);"></div>
            <h3 style="color: var(--teal); font-size: 1rem;">${t}</h3>
            <p style="font-size: 0.88rem;">${d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

// ---------- SLIDE 96: LONG-TERM CONTINUITY (NEW) ----------
SLIDES.push({
  title: 'Continuity Planning',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>BEYOND 2030</div>
      <h2 class="reveal reveal-2">Long-term continuity planning.</h2>
      <p class="subtitle reveal reveal-3">Flagged for the conversation &mdash; not pushed.</p>
      <p class="body-text reveal reveal-4" style="margin-top: 2rem;">The Ambush has been operating for over thirty years under a small, tight, owner-led structure. That has been a strength. At some point in the next decade it becomes a question worth answering deliberately rather than reactively.</p>
      <div class="kicker amber reveal reveal-5" style="margin-top: 2rem;">WHAT CONTINUITY PLANNING COVERS</div>
      <ul class="bullets amber reveal reveal-6" style="margin-top: 0.5rem; font-size: 0.95rem;">
        <li>Documented roles, decision rights, and institutional knowledge transfer</li>
        <li>Written operating manuals for sporting, commercial, and community functions</li>
        <li>Succession scenarios and what each would require</li>
        <li>Relationship-ownership audit &mdash; which partnerships live in people vs. in the club</li>
      </ul>
      <div class="pullquote reveal reveal-7" style="margin-top: 2rem; border-left-color: var(--amber);">
        <strong style="font-style: normal;">Naming the conversation now means it can be shaped. Avoiding it means it happens to us.</strong>
      </div>
    </div>
  `
});

// ---------- SLIDE 97: KPI SCORECARD ----------
SLIDES.push({
  title: 'KPI Scorecard',
  render: (n, total) => `
    ${chrome(n, total, 'PART VII &middot; ROADMAP')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker reveal reveal-1"><span class="dot"></span>ACCOUNTABILITY</div>
      <h2 class="reveal reveal-2">How we know it's working.</h2>
      <p class="subtitle reveal reveal-3">One scorecard. Owned. Reviewed. Reported.</p>
      <table class="table reveal reveal-4" style="margin-top: 2rem;">
        <thead>
          <tr>
            <th style="width: 30%;">METRIC</th>
            <th class="teal">YEAR 1</th>
            <th class="pink">YEAR 3</th>
            <th>OWNER</th>
            <th>CADENCE</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="title-cell">AVG ATTENDANCE</td><td style="color: var(--teal); font-weight: 700;">2,800</td><td style="color: var(--pink); font-weight: 700;">3,500+</td><td>GM</td><td>Per game</td></tr>
          <tr><td class="title-cell">NET TICKET REVENUE</td><td style="color: var(--teal); font-weight: 700;">$680-720K</td><td style="color: var(--pink); font-weight: 700;">$900K+</td><td>Ownership</td><td>Monthly</td></tr>
          <tr><td class="title-cell">KIDS CLUB MEMBERS</td><td style="color: var(--teal); font-weight: 700;">100+</td><td style="color: var(--pink); font-weight: 700;">250+</td><td>Community</td><td>Quarterly</td></tr>
          <tr><td class="title-cell">SPONSOR RENEWAL RATE</td><td style="color: var(--teal); font-weight: 700;">70%</td><td style="color: var(--pink); font-weight: 700;">80%+</td><td>GM</td><td>Per renewal</td></tr>
          <tr><td class="title-cell">EMAIL LIST SIZE</td><td style="color: var(--teal); font-weight: 700;">5,000</td><td style="color: var(--pink); font-weight: 700;">15,000+</td><td>Marketing</td><td>Monthly</td></tr>
          <tr><td class="title-cell">PLAYOFF APPEARANCE</td><td style="color: var(--teal); font-weight: 700;">Yes</td><td style="color: var(--pink); font-weight: 700;">Final once</td><td>Coach</td><td>Annual</td></tr>
        </tbody>
      </table>
      <p style="color: var(--amber); font-weight: 700; font-style: italic; margin-top: 1rem;">Color-coded red/yellow/green at every review. Misses are not failure &mdash; misses are signal.</p>
    </div>
  `
});

// ---------- SLIDE 98: CLOSING NARRATIVE ----------
SLIDES.push({
  cls: 'slide-cover',
  title: 'Closing',
  render: (n, total) => `
    <div class="cover-accent"></div>
    <div class="chrome-top">
      <div class="brand">ST. LOUIS AMBUSH &middot; CLOSING</div>
      <div class="section"></div>
    </div>
    <div class="slide-inner centered" style="padding-left: 1.5rem;">
      <div class="kicker reveal reveal-1" style="margin-bottom: 2rem;">CLOSING</div>
      <h1 class="cover-title reveal reveal-2">
        <span class="line">THIS IS THE MOMENT.</span>
        <span class="line">THIS IS THE MAP.</span>
        <span class="line"><span class="underlined">LET'S BUILD IT.</span></span>
      </h1>
      <div class="reveal reveal-5" style="margin-top: 3rem; max-width: 720px;">
        <p class="body-text" style="margin-bottom: 1rem;">A football club is not one business &mdash; it is twenty businesses operating simultaneously. The clubs that win at this level don't win because they have more money. They win because they out-operate, out-prepare, and out-connect.</p>
        <p class="body-text" style="color: var(--mute);">The St. Louis Ambush has something that cannot be manufactured: genuine roots. What this deck has tried to do is take everything already here &mdash; the talent, the community, the ambition, the love for the club &mdash; and build a map from where we are to where we could be.</p>
      </div>
    </div>
    <div class="chrome-bottom">
      <div class="signature">DYLLAN HAGGARD &middot; DATA &amp; VIDEO ANALYST</div>
      <div class="counter">${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
    </div>
  `
});
