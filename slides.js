/* ============================================================
   ELEVATING THE ST. LOUIS AMBUSH — SLIDE CONTENT
   Editorial-brutalist + sports broadcast aesthetic.
   ============================================================ */

window.__chartInit = {};
window.SLIDES = [];

// Shared helpers
const edgeChrome = (n, total, section) => `
  <div class="edge">
    <div class="edge-tl"><span class="edge-red"></span><span>ST. LOUIS AMBUSH</span></div>
    <div class="edge-tr"><span>${section || ''}</span></div>
    <div class="edge-bl"><span>STRATEGIC BLUEPRINT</span></div>
    <div class="edge-br"><span>${String(n).padStart(3,'0')} / ${String(total).padStart(3,'0')}</span></div>
  </div>
`;

const wmNum = (num, position) => {
  const pos = position || { bottom: '-6rem', right: '-4rem' };
  const style = Object.entries(pos).map(([k,v]) => `${k}: ${v}`).join('; ');
  return `<div class="wm-num" style="${style}">${String(num).padStart(2,'0')}</div>`;
};

const SLIDES = window.SLIDES;

/* ============================================================
   01 — COVER. Editorial hero.
   ============================================================ */
SLIDES.push({
  section: 'BLUEPRINT',
  title: 'Cover',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, '2026')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; padding: clamp(3rem, 5vw, 6rem);">

      <!-- Top brow -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div class="rev d1" style="display: flex; flex-direction: column; gap: 0.4rem;">
          <div class="eyebrow accent-pink"><span>A Document in Two States</span></div>
          <div class="mono" style="opacity: 0.6;">TEAL · CURRENT &nbsp;&nbsp;|&nbsp;&nbsp; PINK · FUTURE</div>
        </div>
        <div class="rev d2 mono accent-mute" style="text-align: right;">
          INTERNAL<br>
          AMBUSH OWNERSHIP<br>
          APRIL 2026
        </div>
      </div>

      <!-- Hero type -->
      <div style="display: flex; flex-direction: column; justify-content: flex-end; position: relative;">
        <div class="wipe">
          <div class="display display-xxl" style="color: var(--paper);">
            ELEVATING
          </div>
        </div>
        <div class="wipe" style="transition-delay: 0.15s;">
          <div class="display display-xxl" style="color: var(--teal);">
            THE ST. LOUIS
          </div>
        </div>
        <div class="wipe" style="transition-delay: 0.3s;">
          <div class="display display-xxl" style="position: relative; color: var(--paper);">
            AMBUSH<span style="display: inline-block; width: 0.15em;"></span><span style="color: var(--pink);">.</span>
          </div>
        </div>
      </div>

      <!-- Foot -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3rem; align-items: end;">
        <div class="rev d5">
          <div class="mono accent-mute" style="margin-bottom: 0.4rem;">PREPARED BY</div>
          <div style="font-family: var(--f-heavy); font-size: 1.1rem; letter-spacing: 0.03em;">DYLLAN HAGGARD</div>
          <div class="mono accent-mute" style="margin-top: 0.2rem;">DATA &amp; VIDEO ANALYST</div>
        </div>
        <div class="rev d6">
          <div class="mono accent-mute" style="margin-bottom: 0.4rem;">AUDIENCE</div>
          <div style="font-family: var(--f-body); font-size: 0.95rem; line-height: 1.3;">
            Jeff Locker<br>
            Shelly Clark<br>
            Donnie Alberty
          </div>
        </div>
        <div class="rev d7" style="text-align: right;">
          <div class="serif serif-lg" style="color: var(--pink); font-style: italic; line-height: 1;">
            A roadmap for<br>
            the next<br>
            three years.
          </div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   02 — PURPOSE. Serif editorial.
   ============================================================ */
SLIDES.push({
  section: 'INTRO',
  title: 'Purpose',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PURPOSE')}
    <div class="frame" style="grid-template-columns: 1fr 2fr; gap: 4rem; align-items: center;">

      <div class="rev d1" style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="slide-num-big" style="color: var(--pink);">01</div>
        <div style="width: 40%; height: 4px; background: var(--ink);" class="draw-x"></div>
        <div class="mono accent-mute">THE PURPOSE</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="rev d2">
          <div class="display display-lg" style="color: var(--ink);">
            A full-organization<br>
            <span style="color: var(--teal-deep);">audit</span>
            <span class="serif" style="color: var(--ink); font-size: 0.8em;"> &amp; </span>
            <span style="color: var(--pink-deep);">commitment</span>.
          </div>
        </div>
        <div class="rev d4" style="max-width: 55ch;">
          <p class="serif serif-lg" style="color: var(--mute-deep);">
            Not a critique. A detailed vision for what this club can become in one of the most important windows in American soccer history.
          </p>
        </div>
        <div class="rev d5" style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1rem;">
          <span class="chip paper">2026 · WORLD CUP</span>
          <span class="chip paper">2028 · OLYMPICS</span>
          <span class="chip paper">2031 · WWC</span>
        </div>
      </div>

    </div>
  `
});

/* ============================================================
   03 — READER'S GUIDE. Two-color split.
   ============================================================ */
SLIDES.push({
  section: 'INTRO',
  title: 'Reading Guide',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'READ ME')}
    <div style="position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr;">
      <!-- Left half - TEAL / CURRENT -->
      <div style="background: var(--teal); color: var(--ink); padding: clamp(3rem, 5vw, 6rem); display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;">
        <div class="wm-num" style="top: -4rem; left: -4rem; color: rgba(10,10,10,0.08);">C</div>
        <div class="rev d1 mono">WHEN YOU SEE TEAL</div>
        <div style="position: relative; z-index: 1;">
          <div class="wipe" style="font-family: var(--f-display); font-size: clamp(5rem, 13vw, 14rem); line-height: 0.85; letter-spacing: -0.02em; color: var(--ink);">CURRENT.</div>
          <div class="rev d4" style="margin-top: 1.5rem; max-width: 32ch;">
            <p class="serif" style="font-size: 1.2rem; color: var(--ink); font-style: italic;">
              The honest state of where the Ambush is today.
            </p>
          </div>
        </div>
        <div class="rev d5 mono" style="font-weight: 700;">REAL NUMBERS · REAL GAPS · NO SPIN</div>
      </div>

      <!-- Right half - PINK / FUTURE -->
      <div style="background: var(--pink); color: var(--paper); padding: clamp(3rem, 5vw, 6rem); display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;">
        <div class="wm-num" style="top: -4rem; right: -4rem; color: rgba(244,241,234,0.1);">F</div>
        <div class="rev d2 mono">WHEN YOU SEE PINK</div>
        <div style="position: relative; z-index: 1;">
          <div class="wipe" style="transition-delay: 0.15s; font-family: var(--f-display); font-size: clamp(5rem, 13vw, 14rem); line-height: 0.85; letter-spacing: -0.02em; color: var(--paper);">FUTURE.</div>
          <div class="rev d5" style="margin-top: 1.5rem; max-width: 32ch;">
            <p class="serif" style="font-size: 1.2rem; color: var(--paper); font-style: italic;">
              The concrete vision of where we go next.
            </p>
          </div>
        </div>
        <div class="rev d6 mono" style="font-weight: 700;">SPECIFIC MOVES · TIED TO METRICS</div>
      </div>
    </div>
  `
});

/* ============================================================
   04 — CONTENTS. Typographic index.
   ============================================================ */
SLIDES.push({
  section: 'INTRO',
  title: 'Contents',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'CONTENTS')}
    ${wmNum('04', { bottom: '-8rem', left: '-3rem' })}
    <div class="frame" style="grid-template-columns: auto 1fr; gap: 4rem; align-items: start; padding: clamp(3rem, 5vw, 6rem);">

      <div class="rev d1" style="display: flex; flex-direction: column; gap: 1rem; padding-top: 2rem;">
        <div class="eyebrow accent-pink">TABLE OF CONTENTS</div>
        <div class="display display-lg" style="color: var(--paper);">SEVEN<br>PARTS.</div>
        <div class="serif serif-lg accent-teal">One blueprint.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; padding-top: 1rem;">
        ${[
          ['I',   'EXECUTIVE OVERVIEW',        'The big picture and the moment we are in'],
          ['II',  'SPORTING ANALYSIS',          'Performance, roster, training, pathway'],
          ['III', 'GAME DAY & OPERATIONS',     'Matchday experience, travel, compliance'],
          ['IV',  'MARKETING & COMMERCIAL',    'Fans, ticketing, sponsors, brand'],
          ['V',   'COMMUNITY',                  'Programs, presence, pipeline'],
          ['VI',  'FINANCE & SUSTAINABILITY',  'Revenue, cost structure, growth model'],
          ['VII', 'IMPLEMENTATION',             'Roles, sprint plan, three-year vision'],
        ].map(([num, title, desc], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 100px 1fr auto; gap: 2rem; align-items: baseline; padding: 1.2rem 0; border-bottom: 1px solid var(--rule);">
            <div class="display" style="font-size: 2.8rem; color: var(--pink); letter-spacing: 0.02em;">${num}</div>
            <div style="font-family: var(--f-display); font-size: clamp(1.4rem, 2vw, 2rem); letter-spacing: 0.02em; color: var(--paper); text-transform: uppercase;">${title}</div>
            <div class="serif" style="color: var(--mute); font-size: 0.95rem; max-width: 30ch;">${desc}</div>
          </div>
        `).join('')}
      </div>

    </div>
  `
});

/* ============================================================
   05 — PART I DIVIDER. Full-bleed type.
   ============================================================ */
SLIDES.push({
  section: 'PART I',
  title: 'Part I',
  cls: 'bg-teal',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · OVERVIEW')}
    <div style="position: absolute; inset: 0; overflow: hidden;">
      <!-- Giant I numeral -->
      <div style="position: absolute; top: -5vh; right: -8vw; font-family: var(--f-display); font-size: 90vh; line-height: 0.8; color: rgba(10,10,10,0.08); letter-spacing: -0.05em; user-select: none;">I</div>

      <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
        <div class="rev d1" style="display: flex; gap: 2rem; align-items: center;">
          <div style="width: 60px; height: 4px; background: var(--ink);" class="draw-x"></div>
          <div class="mono" style="color: var(--ink); font-weight: 700;">PART I</div>
        </div>

        <div style="display: flex; flex-direction: column; justify-content: center; gap: 0;">
          <div class="wipe display" style="font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; letter-spacing: -0.02em; color: var(--ink);">EXECUTIVE</div>
          <div class="wipe display" style="transition-delay: 0.15s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; letter-spacing: -0.02em; color: var(--paper);">OVERVIEW<span style="color: var(--pink-deep);">.</span></div>
        </div>

        <div class="rev d5" style="display: flex; justify-content: space-between; align-items: end; gap: 2rem;">
          <div class="serif" style="font-size: 1.3rem; color: var(--ink); max-width: 45ch; font-style: italic;">
            The moment we're in. The gaps worth naming. The five pillars that shape everything that follows.
          </div>
          <div class="mono" style="color: var(--ink); opacity: 0.7;">FIFTEEN SLIDES</div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   06 — MISSION. Serif quote + big type.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'Mission',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · OVERVIEW')}
    ${wmNum('06')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative; padding: clamp(3rem, 5vw, 6rem);">
      <div class="rev d1 eyebrow accent-pink" style="padding-bottom: 2rem;">MISSION</div>

      <div style="display: flex; flex-direction: column; justify-content: center; gap: 2rem;">
        <div class="wipe">
          <div class="display" style="font-size: clamp(3rem, 8vw, 8rem); line-height: 0.88; color: var(--paper);">
            We are not an<br>
            <span class="accent-mute">indoor soccer club.</span>
          </div>
        </div>
        <div class="wipe" style="transition-delay: 0.15s;">
          <div class="display" style="font-size: clamp(3rem, 8vw, 8rem); line-height: 0.88; color: var(--paper);">
            We are <span class="accent-pink">St. Louis</span><br>
            <span class="accent-teal">Soccer.</span>
          </div>
        </div>
      </div>

      <div class="rev d5" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding-top: 3rem; border-top: 1px solid var(--rule);">
        <div>
          <div class="mono accent-mute" style="margin-bottom: 0.5rem;">YOUTH</div>
          <div class="serif serif-lg accent-teal">Developed up a<br>connected pipeline</div>
        </div>
        <div>
          <div class="mono accent-mute" style="margin-bottom: 0.5rem;">GAME DAY</div>
          <div class="serif serif-lg accent-teal">Worth the drive<br>across the metro</div>
        </div>
        <div>
          <div class="mono accent-mute" style="margin-bottom: 0.5rem;">BRAND</div>
          <div class="serif serif-lg accent-teal">Respected beyond<br>St. Charles</div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   07 — WHAT'S WORKING. Grid of stats.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: "What's Working",
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · OVERVIEW · CURRENT')}
    ${wmNum('07', { top: '10%', right: '-3rem' })}
    <div class="frame" style="grid-template-rows: auto auto 1fr; gap: 2rem; padding: clamp(3rem, 5vw, 6rem);">

      <div class="rev d1" style="display: flex; align-items: baseline; gap: 2rem; justify-content: space-between;">
        <div style="display: flex; align-items: baseline; gap: 1.5rem;">
          <span class="chip teal">CURRENT STATE</span>
          <span class="serif serif-lg accent-mute">Real strengths, not romanticized.</span>
        </div>
      </div>

      <div class="rev d2">
        <div class="display display-lg"><span class="accent-teal">What's</span> working.</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; align-items: stretch; border-top: 2px solid var(--paper);">
        ${[
          ['13-5-6', 'SEASON RECORD', 'PLAYOFF BOUND'],
          ['30+', 'YEARS IN ST. LOUIS', 'OLDEST PRO CLUB'],
          ['USL2', 'AFFILIATE ESTABLISHED', 'PATHWAY EXISTS'],
          ['MULTI', 'PLATFORM SOCIAL', 'CONSISTENT CADENCE'],
          ['ROOTED', 'COMMUNITY', 'SPONSORSHIP BASE'],
        ].map(([big, mid, small], i) => `
          <div class="rev d${Math.min(i+3, 8)}" style="border-right: ${i < 4 ? '1px solid var(--rule)' : 'none'}; padding: 2rem 1.5rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
            <div class="display" style="font-size: clamp(2.2rem, 4vw, 4rem); line-height: 0.85; color: var(--teal);">${big}</div>
            <div>
              <div class="mono" style="font-weight: 700; color: var(--paper); margin-bottom: 0.3rem;">${mid}</div>
              <div class="mono accent-mute" style="font-size: 9px;">${small}</div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `
});

/* ============================================================
   08 — THE GAPS. Pink dominant, brutalist list.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'The Gaps',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · OVERVIEW · GAPS')}
    <div style="position: absolute; top: -4rem; right: -4rem; font-family: var(--f-display); font-size: 50vh; line-height: 0.7; color: rgba(10,10,10,0.08); letter-spacing: -0.05em; user-select: none;">✕</div>
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(3rem, 5vw, 6rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div style="display: flex; align-items: baseline; gap: 1.5rem;">
          <span class="chip paper">THE GAPS</span>
          <span class="mono" style="color: var(--paper); opacity: 0.7;">WHAT WE NAME, WE CAN FIX</span>
        </div>
        <div class="display display-md" style="color: var(--paper);">05</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 3rem; align-content: start;">
        ${[
          ['01', 'PERSONNEL', 'Each role absorbs 2–3 professional functions.'],
          ['02', 'DATA & TOOLS', 'Decisions without supporting infrastructure.'],
          ['03', 'NO CRM', 'A list, not a lifecycle. No segmentation.'],
          ['04', 'NO WORLD CUP PLAN', 'The biggest window. No activation strategy.'],
          ['05', 'TRANSACTIONAL SPONSORS', 'Logo placements without measured ROI.'],
        ].map(([num, label, desc], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="border-bottom: 1px solid rgba(244,241,234,0.3); padding: 1.5rem 0; display: grid; grid-template-columns: 60px 1fr; gap: 1rem; align-items: baseline;">
            <div class="display" style="font-size: 2rem; color: var(--paper); opacity: 0.5; letter-spacing: 0.05em;">${num}</div>
            <div>
              <div style="font-family: var(--f-display); font-size: clamp(1.3rem, 2.2vw, 2rem); letter-spacing: 0.02em; color: var(--paper); text-transform: uppercase; line-height: 1;">${label}</div>
              <div class="serif" style="color: var(--paper); opacity: 0.85; font-size: 1.05rem; margin-top: 0.4rem; font-style: italic;">${desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `
});

/* ============================================================
   09 — OPERATING RISK. Dense ranked list, paper bg.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'Operating Risk',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · RISK')}
    <div class="frame" style="grid-template-columns: 1fr 2.3fr; gap: 4rem; padding: clamp(3rem, 5vw, 6rem);">

      <div class="rev d1" style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="eyebrow accent-pink">OPERATING RISK</div>
        <div class="display display-lg" style="color: var(--ink);">What keeps<br>this club<br><span class="accent-pink">vulnerable.</span></div>
        <div style="width: 60%; height: 3px; background: var(--ink);" class="draw-x"></div>
        <div class="serif" style="color: var(--mute-deep); font-size: 1.1rem; font-style: italic;">A clear-eyed register of the structural risks in the current setup.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0;">
        ${[
          ['DISJOINTED PATHWAYS',         'Youth, USL2, and MASL operate as adjacent — not connected — entities.'],
          ['UNDERBUILT INFRASTRUCTURE',   'Analytics, tooling, and data stack lag professional standards.'],
          ['PROFESSIONAL ALIGNMENT',      'Roles, responsibilities, and decision rights are informal.'],
          ['VENUE DEPENDENCY',            'Concessions, parking, and premium inventory controlled by a third party.'],
          ['FAN MARKET BURNOUT',          'Concentrated audience, no systematic acquisition pipeline.'],
        ].map(([label, desc], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 60px 1fr 2fr; gap: 1.5rem; padding: 1.2rem 0; border-top: 1px solid rgba(10,10,10,0.15); align-items: baseline;">
            <div class="display" style="font-size: 1.8rem; color: var(--pink); letter-spacing: 0.04em;">${String(i+1).padStart(2,'0')}</div>
            <div class="display" style="font-size: 1.1rem; color: var(--ink); letter-spacing: 0.05em;">${label}</div>
            <div style="font-family: var(--f-body); font-size: 0.95rem; color: var(--mute-deep); line-height: 1.45;">${desc}</div>
          </div>
        `).join('')}
        <div style="height: 1px; background: rgba(10,10,10,0.15);"></div>
      </div>

    </div>
  `
});

/* ============================================================
   10 — THE MOMENT. Timeline bands, big years.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'The Moment',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · THE MOMENT')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(3rem, 5vw, 6rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="eyebrow accent-teal">THE MOMENT WE ARE IN</div>
        <div class="mono accent-mute">GENERATIONAL WINDOW</div>
      </div>

      <!-- Three years spread across -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; align-content: center; position: relative;">

        ${[
          ['2026', "FIFA MEN'S WORLD CUP",    'North American co-host',        'var(--pink)'],
          ['2028', 'SUMMER OLYMPICS',          'Los Angeles',                    'var(--teal)'],
          ['2031', "WOMEN'S WORLD CUP",       'U.S.-led bid',                   'var(--lemon)'],
        ].map(([year, event, loc, color], i) => `
          <div class="rev d${i+2}" style="padding: 0 2rem; border-right: ${i < 2 ? '1px solid var(--rule)' : 'none'}; display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
            <div class="mono" style="color: ${color}; font-weight: 700;">${loc}</div>
            <div class="display" style="font-size: clamp(4rem, 11vw, 12rem); line-height: 0.85; color: ${color}; letter-spacing: -0.02em;" data-count="${year}">${year}</div>
            <div style="font-family: var(--f-display); font-size: 1.3rem; color: var(--paper); letter-spacing: 0.02em; text-transform: uppercase;">${event}</div>
          </div>
        `).join('')}

      </div>

      <div class="rev d5" style="border-top: 1px solid var(--rule); padding-top: 2rem; display: grid; grid-template-columns: 3fr 1fr; gap: 3rem; align-items: end;">
        <div class="serif" style="font-size: clamp(1.3rem, 2.2vw, 2rem); color: var(--paper); font-style: italic; line-height: 1.15; max-width: 40ch;">
          Every U.S. World Cup team in history has had a <span style="color: var(--pink); font-style: normal; font-weight: 600;">St. Louis player.</span>
        </div>
        <div class="mono" style="color: var(--mute); text-align: right;">
          THIS COMMUNITY DOESN'T NEED<br>TO BE CONVINCED SOCCER MATTERS.
        </div>
      </div>

    </div>
  `
});

/* ============================================================
   11 — STRATEGIC THEMES. Numbered vertical bands.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'Strategic Themes',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · FRAMEWORK')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div style="display: flex; align-items: baseline; gap: 1rem;">
          <span class="chip pink">FRAMEWORK</span>
          <span class="display display-md" style="color: var(--paper);">FIVE PILLARS.</span>
        </div>
        <div class="mono accent-mute">EVERY RECOMMENDATION MAPS HERE</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; align-items: stretch;">
        ${[
          ['01', 'SPORTING EXCELLENCE',    'Performance, staff, identity, data',        'var(--teal)'],
          ['02', 'PLAYER PATHWAY',          'Youth → USL2 → MASL, a marketed ladder',   'var(--pink)'],
          ['03', 'GAME DAY OPS',           'Matchday experience, logistics',            'var(--lemon)'],
          ['04', 'COMMERCIAL',              'Ticketing, sponsors, lifecycle, brand',    'var(--teal)'],
          ['05', 'COMMUNITY',               'Civic presence, programs, pipeline',       'var(--pink)'],
        ].map(([num, title, desc, color], i) => `
          <div class="rev d${i+2}" style="border-left: ${i > 0 ? '1px solid var(--rule)' : 'none'}; padding: 2rem 1.2rem; display: flex; flex-direction: column; gap: 1.2rem; position: relative;">
            <div class="display" style="font-size: clamp(3rem, 5vw, 5rem); color: ${color}; line-height: 0.85;">${num}</div>
            <div style="width: 100%; height: 2px; background: ${color};"></div>
            <div style="font-family: var(--f-display); font-size: 1.1rem; color: var(--paper); letter-spacing: 0.03em;">${title}</div>
            <div class="serif" style="color: var(--mute); font-size: 0.95rem; font-style: italic; margin-top: auto;">${desc}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d7 marquee" style="color: var(--pink); border-color: var(--rule);">
        <div class="marquee-track">
          SPORTING · PATHWAY · GAME DAY · COMMERCIAL · COMMUNITY &nbsp;&nbsp;&nbsp; SPORTING · PATHWAY · GAME DAY · COMMERCIAL · COMMUNITY &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   12 — CURRENT VS FUTURE. Two-column asymmetric.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'Current vs Future',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · AT A GLANCE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">At a <span class="accent-pink">glance.</span></div>
        <div class="mono accent-mute">FIVE PILLARS · TWO COLUMNS</div>
      </div>

      <div style="display: grid; grid-template-columns: 140px 1fr 1fr; gap: 0; align-items: stretch; border-top: 2px solid var(--paper);">
        <div></div>
        <div class="rev d2" style="padding: 1rem 1.5rem; border-right: 1px solid var(--rule); background: rgba(0,184,169,0.08);">
          <div class="mono accent-teal" style="font-weight: 700;">▸ CURRENT</div>
        </div>
        <div class="rev d3" style="padding: 1rem 1.5rem; background: rgba(255,61,110,0.08);">
          <div class="mono accent-pink" style="font-weight: 700;">▸ FUTURE</div>
        </div>

        ${[
          ['SPORTING',    'Overlapping roles, Hudl only, no S&C',                'GPS, sport science, resourced coaching'],
          ['PATHWAY',     'Loose connection between levels',                      'Unified DNA, shared metrics, clear ladder'],
          ['GAME DAY',    'Competent but reactive',                              'Systemized playbook, elevated experience'],
          ['COMMERCIAL',  'Email list, transactional sponsors',                  'CRM, tiered activation, dynamic ticketing'],
          ['COMMUNITY',   'Inconsistent, unpublicized',                          'Scheduled, measured, amplified'],
        ].map(([pillar, cur, fut], i) => `
          <div class="rev d${Math.min(i+3, 8)}" style="display: contents;">
            <div style="padding: 1.5rem 1rem; border-top: 1px solid var(--rule); display: flex; align-items: center;">
              <div style="font-family: var(--f-display); font-size: 1.3rem; color: var(--paper); letter-spacing: 0.04em;">${pillar}</div>
            </div>
            <div style="padding: 1.5rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule); background: rgba(0,184,169,0.04);">
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">${cur}</div>
            </div>
            <div style="padding: 1.5rem; border-top: 1px solid var(--rule); background: rgba(255,61,110,0.04);">
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">${fut}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   13 — FUTURE VISION. Editorial serif dominant.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'Future Vision',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · FUTURE STATE')}
    <div style="position: absolute; top: 30%; right: -3rem; font-family: var(--f-display); font-size: 45vh; line-height: 0.8; color: rgba(10,10,10,0.08); user-select: none; letter-spacing: -0.04em;">3YR</div>

    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(3rem, 5vw, 6rem);">

      <div class="rev d1" style="display: flex; align-items: baseline; gap: 1.5rem;">
        <span class="chip paper">FUTURE STATE</span>
        <div class="mono" style="color: var(--paper); font-weight: 700;">THREE YEARS FROM NOW</div>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="serif" style="font-size: clamp(2rem, 4.5vw, 4rem); line-height: 1.1; color: var(--paper); font-style: italic; font-weight: 300;">
            The Ambush is the <span style="font-weight: 600; font-style: normal;">flagship professional sports experience</span> in the St. Louis metro.
          </div>
        </div>
        <div class="rev d4" style="display: flex; flex-direction: column; gap: 1rem;">
          ${[
            ['Pipeline', 'Players know how to progress up the ladder'],
            ['Sponsors', 'Renew because ROI is measurable'],
            ['Fans', 'Drive from South City, Illinois, North County'],
            ['Brand', 'Respected beyond St. Charles, across MASL & USL'],
            ['Window', 'The World Cup wave has been captured'],
          ].map(([k,v]) => `
            <div style="border-left: 3px solid var(--paper); padding-left: 0.8rem;">
              <div class="mono" style="color: var(--paper); opacity: 0.7; margin-bottom: 0.2rem;">${k}</div>
              <div style="font-family: var(--f-body); color: var(--paper); font-size: 0.95rem; line-height: 1.3;">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   14 — LEAGUE BENCHMARKS. Real chart + table.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'League Benchmarks',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · BENCHMARKS')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Where we <span class="accent-pink">sit.</span></div>
        <div class="mono accent-mute">MASL · 2025-26</div>
      </div>

      <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 3rem; align-items: center;">

        <div style="position: relative; height: 100%; min-height: 300px;">
          <canvas data-chart="benchmark-attendance" style="width: 100%; height: 100%;"></canvas>
        </div>

        <div class="rev d3" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            ['AMBUSH',       '1.8-2.8K',  'avg attendance',       'var(--pink)',      true],
            ['MIL WAVE',     '3,000+',    '7 titles · black turf', 'var(--paper)',    false],
            ['KC COMETS',    '~4,500',    'league-leading',       'var(--lemon)',    false],
          ].map(([team, val, note, color, highlight]) => `
            <div style="display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: baseline; padding: 1.2rem 0; border-top: 1px solid var(--rule); ${highlight ? 'background: rgba(255,61,110,0.05);' : ''}">
              <div>
                <div class="display" style="font-size: 1.8rem; color: ${color}; letter-spacing: 0.03em;">${team}</div>
                <div class="mono accent-mute" style="font-size: 9px; margin-top: 0.2rem;">${note}</div>
              </div>
              <div class="num-heavy" style="font-size: 2.2rem; color: ${color};">${val}</div>
            </div>
          `).join('')}
          <div style="border-top: 1px solid var(--rule); height: 0;"></div>
        </div>
      </div>

      <div class="rev d5" style="border-top: 1px solid var(--rule); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.3rem; color: var(--paper); font-style: italic; max-width: 70ch;">
          The I-70 series proves the <span class="accent-pink" style="font-style: normal; font-weight: 600;">demand</span> exists. The rest of the calendar isn't yet capturing it.
        </div>
      </div>
    </div>
  `
});
// Chart
window.__chartInit['benchmark-attendance'] = function(canvas) {
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['AMBUSH', 'MIL WAVE', 'KC COMETS'],
      datasets: [{
        data: [2300, 3000, 4500],
        backgroundColor: ['#FF3D6E', 'rgba(244,241,234,0.9)', '#F5E547'],
        borderRadius: 0,
        borderSkipped: false,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true, callbacks: { label: c => c.parsed.x.toLocaleString() + ' avg' } },
        title: {
          display: true,
          text: 'AVG ATTENDANCE (HEAD TO HEAD)',
          color: '#8F8A81',
          font: { family: "'JetBrains Mono', monospace", size: 10, weight: '500' },
          align: 'start'
        }
      },
      scales: {
        x: {
          ticks: { color: '#8F8A81', font: { family: "'JetBrains Mono', monospace", size: 10 }, callback: v => v.toLocaleString() },
          grid: { color: 'rgba(244,241,234,0.08)', drawBorder: false }
        },
        y: {
          ticks: { color: '#F4F1EA', font: { family: "'Anton', sans-serif", size: 16 } },
          grid: { display: false, drawBorder: false }
        }
      }
    }
  });
};

/* ============================================================
   15 — CITY SC POSITIONING. Full-bleed split.
   ============================================================ */
SLIDES.push({
  section: 'PART I · OVERVIEW',
  title: 'Vs CITY SC',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART I · POSITIONING')}
    <div class="frame" style="grid-template-rows: auto auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1 eyebrow accent-pink">POSITIONING</div>
      <div class="rev d2">
        <div class="display display-lg" style="color: var(--paper);">Different <span class="accent-teal">product</span>.</div>
        <div class="display display-lg" style="color: var(--paper);">Different <span class="accent-pink">fan</span>. Not in conflict.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <!-- CITY SC -->
        <div class="rev d3" style="border: 1px solid var(--rule); padding: 2rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div class="display display-md accent-mute" style="font-size: 2rem;">CITY SC</div>
            <div class="mono accent-mute">MLS</div>
          </div>
          <div style="width: 100%; height: 1px; background: var(--rule);"></div>
          ${[
            ['SEASON',     'Spring–Fall (outdoor)'],
            ['VENUE',      'Downtown (Energizer Park)'],
            ['FLOOR',      '$40–60+'],
            ['AUDIENCE',   'Destination event'],
            ['PACE',       'Traditional 90 min'],
            ['ACCESS',     'Distant'],
          ].map(([k,v]) => `
            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 1rem;">
              <div class="mono accent-mute">${k}</div>
              <div style="font-family: var(--f-body); color: var(--paper); font-size: 0.95rem;">${v}</div>
            </div>
          `).join('')}
        </div>

        <!-- AMBUSH -->
        <div class="rev d4" style="border: 2px solid var(--pink); padding: 2rem; display: flex; flex-direction: column; gap: 1rem; background: rgba(255,61,110,0.06);">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div class="display display-md accent-pink" style="font-size: 2rem;">AMBUSH</div>
            <div class="mono accent-pink" style="font-weight: 700;">MASL</div>
          </div>
          <div style="width: 100%; height: 1px; background: var(--pink); opacity: 0.5;"></div>
          ${[
            ['SEASON',     'Late Fall–Spring (indoor)'],
            ['VENUE',      'St. Charles (Family Arena)'],
            ['FLOOR',      '$15–25'],
            ['AUDIENCE',   'Regular family habit'],
            ['PACE',       'Fast, high-scoring 60 min'],
            ['ACCESS',     'Up close'],
          ].map(([k,v]) => `
            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 1rem;">
              <div class="mono accent-pink" style="font-weight: 700;">${k}</div>
              <div style="font-family: var(--f-body); color: var(--paper); font-size: 0.95rem; font-weight: 500;">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d5" style="border-top: 1px solid var(--rule); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.2rem; color: var(--paper); font-style: italic; max-width: 80ch;">
          CITY SC grows the soccer audience. <span class="accent-pink" style="font-style: normal; font-weight: 600;">Ambush converts them</span> into a year-round, high-frequency, high-touch product they can afford and reach.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   16 — PART II DIVIDER
   ============================================================ */
SLIDES.push({
  section: 'PART II',
  title: 'Part II',
  cls: 'bg-pink-deep',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · SPORTING')}
    <div style="position: absolute; top: -5vh; left: -5vw; font-family: var(--f-display); font-size: 95vh; line-height: 0.8; color: rgba(244,241,234,0.07); letter-spacing: -0.05em; user-select: none;">II</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
      <div class="rev d1" style="display: flex; align-items: center; gap: 2rem;">
        <div style="width: 60px; height: 4px; background: var(--paper);" class="draw-x"></div>
        <div class="mono" style="color: var(--paper); font-weight: 700;">PART II</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center; position: relative;">
        <div class="wipe display" style="font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--paper);">SPORTING</div>
        <div class="wipe display" style="transition-delay: 0.15s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--lemon);">ANALYSIS</div>
        <div class="wipe display" style="transition-delay: 0.3s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--paper);">&amp; STRATEGY.</div>
      </div>

      <div class="rev d5" style="display: flex; justify-content: space-between; align-items: end; gap: 2rem;">
        <div class="serif" style="font-size: 1.3rem; color: var(--paper); max-width: 45ch; font-style: italic;">
          Performance environment, roster, training, and the pathway from youth to first team.
        </div>
        <div class="mono" style="color: var(--paper); opacity: 0.7;">EIGHTEEN SLIDES</div>
      </div>
    </div>
  `
});

/* ============================================================
   17 — SPORTING STAFF. Portrait grid.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Staff',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · SPORTING · STAFF')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">The <span class="accent-teal">people</span>.</div>
        <div class="mono accent-mute">EACH ROLE CARRIES 2-3 PROFESSIONAL FUNCTIONS</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; align-items: stretch;">
        ${[
          ['JEFF',    'LOCKER',    'Owner / Head Coach'],
          ['DONNIE',  'ALBERTY',   'GM / Asst Coach / Scouting'],
          ['JAMIE',   'SWANNER',   'GK Coach / Asst Coach'],
          ['CODY',    'ELMENDORF', 'Athletic Trainer'],
          ['BRIAN',   'WAGNER',    'Equipment Manager'],
        ].map(([first, last, role], i) => `
          <div class="rev d${i+2}" style="border-left: ${i>0 ? '1px solid var(--rule)' : 'none'}; padding: 1.5rem 1.2rem; display: flex; flex-direction: column; gap: 1rem; min-height: 320px;">
            <div class="photo-box" style="aspect-ratio: 3/4; margin-bottom: 0.5rem;"></div>
            <div>
              <div class="mono accent-mute" style="margin-bottom: 0.3rem;">${first}</div>
              <div class="display display-md" style="font-size: 1.4rem; color: var(--paper); line-height: 0.9;">${last}</div>
              <div class="serif" style="color: var(--pink); font-size: 0.9rem; margin-top: 0.4rem; font-style: italic;">${role}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rev d7" style="border-top: 1px solid var(--rule); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.2rem; color: var(--paper); font-style: italic; max-width: 80ch;">
          Not a failure — a <span class="accent-teal" style="font-style: normal; font-weight: 600;">structural reality</span> that limits what each role can deliver. The path forward is not criticism. It is clarity.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   18 — SPORTING GAP ANALYSIS. Dense list with diagonal labels.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Sporting Gaps',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · SPORTING · CURRENT')}
    <div class="frame" style="grid-template-columns: 1fr 3fr; gap: 4rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; flex-direction: column; gap: 1.5rem; padding-top: 3rem;">
        <div class="eyebrow accent-pink">SPORTING GAPS</div>
        <div class="display display-lg" style="color: var(--ink);">Infrastructure,<br>not <span class="accent-pink">talent.</span></div>
        <div style="width: 60%; height: 3px; background: var(--ink);" class="draw-x"></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(10,10,10,0.2);">
        ${[
          ['SCOUTING',               'Relationship-driven. Needs database + evaluation framework.'],
          ['PERFORMANCE MONITORING', 'No GPS, no force plates, no readiness tracking.'],
          ['FILM ENGAGEMENT',        'Hudl is active. Voluntary player usage near zero.'],
          ['TACTICAL IDENTITY',      'Style recognizable. Not yet documented.'],
          ['WELLNESS',               'Self-reported verbally. No structured input.'],
          ['MENTAL PERFORMANCE',     'No resource currently in place.'],
        ].map(([label, desc], i) => `
          <div class="rev d${i+2}" style="background: var(--paper); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <div class="display" style="font-size: 1.3rem; color: var(--pink-deep); letter-spacing: 0.04em;">${label}</div>
            <div class="serif" style="color: var(--mute-deep); font-size: 1rem; font-style: italic;">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   19 — SPORTING FUTURE VISION. Pink maximalist.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Sporting Future',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · SPORTING · FUTURE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip paper">FUTURE STATE</span>
        <div class="mono" style="color: var(--paper); opacity: 0.8;">A PROFESSIONAL PERFORMANCE ENVIRONMENT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 2fr; gap: 3rem; align-items: start;">
        <div class="rev d2">
          <div class="display" style="font-size: clamp(3rem, 7vw, 7rem); line-height: 0.88; color: var(--paper);">Built for<br>this level.<br><span style="color: var(--ink);">Designed<br>for the next.</span></div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0;">
          ${[
            ['ROLES',       'Enhanced position descriptions across the staff'],
            ['S&C',         'Dedicated coach with individualized conditioning per player'],
            ['GPS LOAD',    'Monitored every session, periodizing fitness across the calendar'],
            ['WELLNESS',    '30-second daily survey feeding weekly availability report'],
            ['PLAYBOOK',    'Tactical identity documented and distributed'],
            ['LEADERBOARD', 'Film engagement, training output, community attendance — visible'],
            ['NUTRITION',   'Dedicated consultant backed by a meal-prep sponsorship'],
          ].map(([k,v], i) => `
            <div class="rev d${Math.min(i+3, 8)}" style="display: grid; grid-template-columns: 140px 1fr; gap: 1.5rem; padding: 1rem 0; border-top: 1px solid rgba(244,241,234,0.25); align-items: baseline;">
              <div class="display" style="color: var(--ink); font-size: 1.1rem; letter-spacing: 0.05em;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">${v}</div>
            </div>
          `).join('')}
          <div style="height: 1px; background: rgba(244,241,234,0.25);"></div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   20 — ROSTER COMPOSITION. Asymmetric data.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Roster',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · ROSTER')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Roster <span class="accent-teal">composition.</span></div>
        <div class="mono accent-mute">STRENGTHS / OPPORTUNITIES</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <div class="rev d2" style="border-left: 3px solid var(--teal); padding-left: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="display display-md accent-teal">STRENGTHS</div>
          <div class="serif serif-lg" style="color: var(--paper); font-style: italic; font-size: 1.4rem;">Anchor performers carrying tactical identity.</div>
          <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
            <div class="todo-tag">ADD ESKAY PROFILE + WHY ANCHOR</div>
            <div class="todo-tag">ADD PAULO PROFILE + WHY ANCHOR</div>
          </div>
        </div>

        <div class="rev d3" style="border-left: 3px solid var(--pink); padding-left: 2rem; display: flex; flex-direction: column; gap: 1.2rem;">
          <div class="display display-md accent-pink">OPPORTUNITIES</div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${[
              'Older players in specific positions incompatible with our identity',
              'Need a tactical fit matrix — score every roster slot against the playbook',
              'Roster turnover plan tied to advancement criteria from USL2',
            ].map(item => `
              <div style="display: grid; grid-template-columns: 20px 1fr; gap: 1rem; align-items: baseline;">
                <div style="width: 10px; height: 10px; background: var(--pink); margin-top: 0.5rem;"></div>
                <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; line-height: 1.35;">${item}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `
});
