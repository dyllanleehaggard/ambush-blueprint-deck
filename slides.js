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
    <div class="frame" style="grid-template-rows: 1fr auto; padding: clamp(4rem, 7vw, 8rem) clamp(3rem, 5vw, 6rem);">

      <!-- Hero type centered -->
      <div style="display: flex; flex-direction: column; justify-content: center; position: relative;">
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
        <div class="rev d5" style="margin-top: 2.5rem; max-width: 48ch;">
          <div class="serif serif-lg" style="color: var(--pink); font-style: italic; line-height: 1.1;">
            A strategic blueprint for the next three years.
          </div>
        </div>
      </div>

      <!-- Foot: just the author credit -->
      <div class="rev d6" style="display: flex; justify-content: space-between; align-items: end; padding-top: 2rem; border-top: 1px solid var(--rule);">
        <div>
          <div class="mono accent-mute" style="margin-bottom: 0.4rem;">PREPARED BY</div>
          <div style="font-family: var(--f-heavy); font-size: 1.2rem; letter-spacing: 0.03em;">DYLLAN HAGGARD</div>
          <div class="mono accent-mute" style="margin-top: 0.2rem;">DATA &amp; VIDEO ANALYST</div>
        </div>
        <div style="text-align: right;">
          <div class="mono accent-mute" style="margin-bottom: 0.4rem;">PRESENTED TO</div>
          <div style="font-family: var(--f-body); font-size: 1rem; line-height: 1.4; color: var(--paper);">
            Jeff Locker &nbsp;·&nbsp; Shelly Clark &nbsp;·&nbsp; Donnie Alberty
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
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline; gap: 2rem;">
        <div>
          <span class="chip teal">CURRENT STATE</span>
          <div class="display display-lg" style="color: var(--paper); margin-top: 1.2rem;"><span class="accent-teal">What's</span> working.</div>
        </div>
        <div class="serif serif-lg accent-mute" style="max-width: 24ch; text-align: right;">Real strengths, not romanticized.</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; align-items: stretch; border-top: 2px solid var(--paper); border-bottom: 2px solid var(--paper);">
        ${[
          ['13-5-6', 'SEASON RECORD', 'PLAYOFF BOUND'],
          ['30+', 'YEARS IN ST. LOUIS', 'OLDEST PRO CLUB'],
          ['USL 2', 'AFFILIATE PATHWAY', 'EXISTS'],
          ['MULTI', 'PLATFORM SOCIAL', 'CONSISTENT'],
          ['ROOTED', 'COMMUNITY', 'SPONSORSHIP BASE'],
        ].map(([big, mid, small], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="border-right: ${i < 4 ? '1px solid var(--rule)' : 'none'}; padding: 3rem 1.5rem; display: flex; flex-direction: column; justify-content: space-between; gap: 2rem; min-height: 55vh;">
            <div class="display" style="font-size: clamp(2.8rem, 5.5vw, 5rem); line-height: 0.85; color: var(--teal);">${big}</div>
            <div>
              <div class="mono" style="font-weight: 700; color: var(--paper); margin-bottom: 0.4rem; font-size: 11px;">${mid}</div>
              <div class="mono accent-mute" style="font-size: 10px;">${small}</div>
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
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline; gap: 2rem;">
        <div>
          <span class="chip paper">THE GAPS</span>
          <div class="display display-lg" style="color: var(--paper); margin-top: 1.2rem;">What we name,<br>we can <span style="color: var(--ink);">fix.</span></div>
        </div>
        <div class="serif serif-lg" style="color: var(--paper); max-width: 24ch; text-align: right; font-style: italic; opacity: 0.8;">Five gaps worth naming precisely.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 4rem; align-content: start; border-top: 2px solid var(--paper);">
        ${[
          ['01', 'PERSONNEL', 'Each role absorbs 2–3 professional functions.'],
          ['02', 'DATA & TOOLS', 'Decisions without supporting infrastructure.'],
          ['03', 'NO CRM', 'A list, not a lifecycle. No segmentation.'],
          ['04', 'NO WORLD CUP PLAN', 'The biggest window. No activation strategy.'],
          ['05', 'TRANSACTIONAL SPONSORS', 'Logo placements without measured ROI.'],
        ].map(([num, label, desc], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="border-bottom: 1px solid rgba(244,241,234,0.3); padding: 1.6rem 0; display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: baseline;">
            <div class="display" style="font-size: 2.4rem; color: var(--paper); opacity: 0.5; letter-spacing: 0.05em;">${num}</div>
            <div>
              <div style="font-family: var(--f-display); font-size: clamp(1.5rem, 2.4vw, 2.2rem); letter-spacing: 0.02em; color: var(--paper); text-transform: uppercase; line-height: 1;">${label}</div>
              <div class="serif" style="color: var(--paper); opacity: 0.85; font-size: 1.1rem; margin-top: 0.5rem; font-style: italic; line-height: 1.35;">${desc}</div>
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
    <div class="frame" style="grid-template-columns: 1fr 2.2fr; gap: 5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem); align-items: center;">

      <div class="rev d1" style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="eyebrow accent-pink">OPERATING RISK</div>
        <div class="display" style="font-size: clamp(3.5rem, 7vw, 7rem); line-height: 0.9; color: var(--ink);">What keeps<br>this club<br><span class="accent-pink">vulnerable.</span></div>
        <div style="width: 60%; height: 4px; background: var(--ink);" class="draw-x"></div>
        <div class="serif" style="color: var(--mute-deep); font-size: 1.2rem; font-style: italic; max-width: 32ch; line-height: 1.35;">A clear-eyed register of the structural risks in the current setup.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink);">
        ${[
          ['DISJOINTED PATHWAYS',         'Youth, USL2, and MASL operate as adjacent — not connected — entities.'],
          ['UNDERBUILT INFRASTRUCTURE',   'Analytics, tooling, and data stack lag professional standards.'],
          ['PROFESSIONAL ALIGNMENT',      'Roles, responsibilities, and decision rights are informal.'],
          ['VENUE DEPENDENCY',            'Concessions, parking, and premium inventory controlled by a third party.'],
          ['FAN MARKET BURNOUT',          'Concentrated audience, no systematic acquisition pipeline.'],
        ].map(([label, desc], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 80px 1.2fr 2fr; gap: 2rem; padding: 1.8rem 0; border-top: ${i > 0 ? '1px solid rgba(10,10,10,0.15)' : '0'}; align-items: center;">
            <div class="display" style="font-size: 2.4rem; color: var(--pink); letter-spacing: 0.04em;">${String(i+1).padStart(2,'0')}</div>
            <div class="display" style="font-size: clamp(1.1rem, 1.5vw, 1.5rem); color: var(--ink); letter-spacing: 0.05em; line-height: 1.05;">${label}</div>
            <div style="font-family: var(--f-body); font-size: clamp(0.98rem, 1.1vw, 1.1rem); color: var(--mute-deep); line-height: 1.5;">${desc}</div>
          </div>
        `).join('')}
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

      <div style="display: grid; grid-template-columns: 200px 1fr 1fr; gap: 0; align-items: stretch; border-top: 2px solid var(--paper); border-bottom: 2px solid var(--paper);">
        <div style="padding: 1.2rem 1.5rem; border-right: 1px solid var(--rule); display: flex; align-items: center; justify-content: center;">
          <div class="mono accent-mute">PILLAR</div>
        </div>
        <div class="rev d2" style="padding: 1.2rem 1.5rem; border-right: 1px solid var(--rule); background: rgba(0,184,169,0.08); display: flex; align-items: center; justify-content: center;">
          <div class="mono accent-teal" style="font-weight: 700;">▸ CURRENT</div>
        </div>
        <div class="rev d3" style="padding: 1.2rem 1.5rem; background: rgba(255,61,110,0.08); display: flex; align-items: center; justify-content: center;">
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
            <div style="padding: 1.6rem 1rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule); display: flex; align-items: center; justify-content: center;">
              <div style="font-family: var(--f-display); font-size: 1.5rem; color: var(--paper); letter-spacing: 0.04em; text-align: center;">${pillar}</div>
            </div>
            <div style="padding: 1.6rem 1.5rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule); background: rgba(0,184,169,0.04); display: flex; align-items: center; justify-content: center;">
              <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; text-align: center; line-height: 1.35;">${cur}</div>
            </div>
            <div style="padding: 1.6rem 1.5rem; border-top: 1px solid var(--rule); background: rgba(255,61,110,0.04); display: flex; align-items: center; justify-content: center;">
              <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; text-align: center; line-height: 1.35;">${fut}</div>
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
        backgroundColor: ['#FF3D6E', '#F4F1EA', '#00B8A9'],
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
            ['FLOOR',      '$25'],
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
          ['JEFF',    'LOCKER',    'Owner / Head Coach',         'images/locker.jpg'],
          ['DONNIE',  'ALBERTY',   'GM / Asst Coach / Scouting', 'images/alberty.jpg'],
          ['JAMIE',   'SWANNER',   'GK Coach / Asst Coach',      'images/swanner.jpg'],
          ['CODY',    'ELMENDORF', 'Athletic Trainer',            'images/elmendorf.jpg'],
          ['BRIAN',   'WAGNER',    'Equipment Manager',           'images/wagner.jpg'],
        ].map(([first, last, role, img], i) => `
          <div class="rev d${i+2}" style="border-left: ${i>0 ? '1px solid var(--rule)' : 'none'}; padding: 1.5rem 1.2rem; display: flex; flex-direction: column; gap: 1rem; min-height: 320px;">
            <div style="aspect-ratio: 3/4; margin-bottom: 0.5rem; position: relative; overflow: hidden; background: var(--teal-deep); background-image: radial-gradient(ellipse at 30% 30%, rgba(255, 61, 110, 0.4), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(0, 184, 169, 0.6), transparent 60%);">
              <img src="${img}" alt="${first} ${last}" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.2) contrast(1.05);" onerror="this.style.display='none'"/>
            </div>
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
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip paper">FUTURE STATE</span>
        <div class="mono" style="color: var(--paper); opacity: 0.8;">A PROFESSIONAL PERFORMANCE ENVIRONMENT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 2fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="display" style="font-size: clamp(3.5rem, 8vw, 8rem); line-height: 0.88; color: var(--paper);">Built for<br>this level.<br><span style="color: var(--ink);">Designed<br>for the next.</span></div>
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
            <div class="rev d${Math.min(i+3, 8)}" style="display: grid; grid-template-columns: 180px 1fr; gap: 2rem; padding: 1.3rem 0; border-top: 1px solid rgba(244,241,234,0.3); align-items: center;">
              <div class="display" style="color: var(--ink); font-size: 1.4rem; letter-spacing: 0.05em;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.25rem; font-style: italic; line-height: 1.35;">${v}</div>
            </div>
          `).join('')}
          <div style="height: 1px; background: rgba(244,241,234,0.3);"></div>
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
          <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.25rem; line-height: 1.35;">Anchor performers carrying the tactical identity.</div>

          <div style="display: flex; flex-direction: column; gap: 1.2rem; margin-top: 0.5rem;">
            <div style="border-top: 1px solid var(--rule); padding-top: 1rem;">
              <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: 0.4rem;">
                <div class="display" style="color: var(--paper); font-size: 1.5rem; letter-spacing: 0.03em;">PAULO NASCIMENTO</div>
                <div class="mono accent-teal" style="font-weight: 700;">GK · #1</div>
              </div>
              <div class="serif" style="color: var(--mute); font-size: 0.98rem; font-style: italic; line-height: 1.4;">
                2025-26 MASL Goalkeeper of the Year. Elite Six selection. 250 saves. 7th year in the shirt — the spine of the team.
              </div>
            </div>

            <div style="border-top: 1px solid var(--rule); padding-top: 1rem;">
              <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: 0.4rem;">
                <div class="display" style="color: var(--paper); font-size: 1.5rem; letter-spacing: 0.03em;">ESKAY</div>
                <div class="mono accent-teal" style="font-weight: 700;">ATT · CAPTAIN</div>
              </div>
              <div class="serif" style="color: var(--mute); font-size: 0.98rem; font-style: italic; line-height: 1.4;">
                Tactical anchor of the attack. The press trigger. Locker-room standard-setter and the face fans recognize.
              </div>
            </div>
          </div>
        </div>

        <div class="rev d3" style="border-left: 3px solid var(--pink); padding-left: 2rem; display: flex; flex-direction: column; gap: 1.2rem;">
          <div class="display display-md accent-pink">OPPORTUNITIES</div>
          <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.25rem; line-height: 1.35;">Where the roster needs sharpening.</div>
          <div style="display: flex; flex-direction: column; gap: 0.9rem; margin-top: 0.5rem;">
            ${[
              'Older players in specific positions incompatible with our identity',
              'Tactical fit matrix — score every roster slot against the playbook',
              'Roster turnover plan tied to advancement criteria from USL2',
              'Depth at key positions when a starter misses a road trip',
              'Pipeline from FC Ambush youth not yet feeding roster spots',
            ].map(item => `
              <div style="display: grid; grid-template-columns: 20px 1fr; gap: 1rem; align-items: baseline;">
                <div style="width: 10px; height: 10px; background: var(--pink); margin-top: 0.5rem;"></div>
                <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic; line-height: 1.35;">${item}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `
});

/* ============================================================
   21 — RECRUITMENT. Diagonal label + dense inventory.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Recruitment',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · RECRUITMENT')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Good <span class="accent-teal">relationships.</span></div>
        <div class="mono accent-mute">NO SYSTEM BEHIND THEM</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center;">

        <div class="rev d2" style="padding: 2rem 3rem 2rem 0; border-right: 1px solid var(--rule);">
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="chip teal">SOURCES TODAY</span>
            <span class="mono accent-mute">FOUR CHANNELS</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.4rem;">
            ${[
              ['01', 'Coaching network'],
              ['02', 'MASL Combine'],
              ['03', 'Open Google Form'],
              ['04', 'Mitre &amp; Holiday Classic observations'],
            ].map(([num, txt]) => `
              <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; align-items: center;">
                <div class="display" style="font-size: 2.2rem; color: var(--teal); letter-spacing: 0.03em;">${num}</div>
                <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.5rem; line-height: 1.3;">${txt}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="rev d3" style="padding: 2rem 0 2rem 3rem;">
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="chip pink">WHAT'S MISSING</span>
            <span class="mono accent-pink" style="font-weight: 700;">FIVE GAPS</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.4rem;">
            ${[
              ['01', 'Searchable player evaluation database'],
              ['02', 'Defined position profile aligned to tactical identity'],
              ['03', 'Video-based remote scouting protocol'],
              ['04', 'University pipeline for post-eligibility players'],
              ['05', 'Formal presence at Mitre / Holiday Classic'],
            ].map(([num, txt]) => `
              <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; align-items: center;">
                <div class="display" style="font-size: 2.2rem; color: var(--pink); letter-spacing: 0.03em;">${num}</div>
                <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.5rem; line-height: 1.3;">${txt}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `
});

/* ============================================================
   22 — VETTA PARTNERSHIP. Branded lemon accent.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Vetta',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · PARTNERSHIPS')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE STATE · VETTA</span>
        <div class="mono accent-mute">SCOUTING · RECRUITMENT · ENGAGEMENT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 2fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="display" style="font-size: clamp(2.5rem, 6vw, 6rem); line-height: 0.9; color: var(--paper);">Every<br>local<br>tournament,<br>a <span class="accent-lemon">scouting<br>engine.</span></div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
          ${[
            ['FAN EXPERIENCE',    'Real-time scores, leaderboards, top performers across every court.'],
            ['RECRUITMENT',       'Notable performers flagged automatically into scouting database.'],
            ['BRAND PRESENCE',    'Ambush embedded in the tournament before fans set foot in the arena.'],
          ].map(([k, v], i) => `
            <div class="rev d${i+3}" style="display: grid; grid-template-columns: 180px 1fr; gap: 1.5rem; padding: 1.5rem; background: rgba(31,216,200,0.06); border-left: 3px solid var(--lemon);">
              <div class="display" style="font-size: 1.4rem; color: var(--lemon); letter-spacing: 0.04em;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic; line-height: 1.4;">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d6" style="display: flex; justify-content: space-between; align-items: baseline; border-top: 1px solid var(--rule); padding-top: 1.5rem;">
        <div class="mono accent-mute">INVESTMENT REQUIRED</div>
        <div class="serif serif-lg" style="color: var(--paper); font-style: italic;">Interns as statisticians. One web app. One Vetta conversation.</div>
      </div>
    </div>
  `
});

/* ============================================================
   22a — VETTA: WHAT WE'RE PROPOSING. Direct, plain-language.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Vetta · The Proposal',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · VETTA · PROPOSAL')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip teal">VETTA · WHAT WE'RE PROPOSING</span>
        <div class="mono accent-mute">PUT PLAINLY</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: center;">

        <!-- Left: the headline pitch -->
        <div class="rev d2">
          <div class="display" style="font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 0.9; color: var(--paper);">A formal<br><span class="accent-teal">analytics partnership</span><br>with Vetta.</div>
          <div class="serif" style="color: var(--mute); font-size: 1.2rem; font-style: italic; margin-top: 1.5rem; line-height: 1.35;">
            We provide live stat services across their tournaments. They give us a structured front-row seat to scout the talent.
          </div>
        </div>

        <!-- Right: 3 columns - The Ask, The Deliverable, The Outcome -->
        <div class="rev d3" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            ['THE ASK',
              'A signed partnership letting our analytics interns staff every Vetta tournament — boys and girls, all age groups, year-round.'],
            ['THE DELIVERABLE',
              'A live web app showing real-time scores, leaderboards, top performers, MVP voting. Vetta-branded, Ambush-powered, fan-accessible from any phone in the building.'],
            ['THE BENEFIT TO VETTA',
              'A free tournament platform that improves their fan experience and adds professionalism — the kind of upgrade their families notice and brag about on social.'],
            ['THE BENEFIT TO US',
              'Every standout performer gets flagged automatically into our scouting database. Every parent in the gym sees the Ambush logo on the leaderboard. Every weekend becomes a scouting weekend.'],
            ['HOW IT STARTS',
              'One conversation with Vetta leadership. Three interns. One existing web app prototype. We can be live within sixty days of a green light.'],
          ].map(([k, v], i) => `
            <div style="display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; padding: 1rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
              <div class="display" style="color: var(--teal); font-size: 1.05rem; letter-spacing: 0.05em;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic; line-height: 1.4;">${v}</div>
            </div>
          `).join('')}
          <div style="border-top: 1px solid var(--rule);"></div>
        </div>
      </div>

      <div class="rev d6" style="border-top: 2px solid var(--teal); padding-top: 1.5rem;">
        <div class="serif" style="color: var(--paper); font-size: 1.25rem; font-style: italic; text-align: center; line-height: 1.3;">
          Vetta hosts <span class="accent-teal" style="font-style: normal; font-weight: 600;">thousands of competitive youth players</span> in St. Louis every year. Right now we have zero structured presence. This fixes that for the cost of a conversation.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   23 — PLAYER PROFILE TOOLS. Dashboard mock + list.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Player Profile',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · DATA')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Every player. <span class="accent-pink">One place.</span></div>
        <div class="mono accent-mute">FUTURE PLAYER DASHBOARD</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 3rem; align-items: center;">

        <div class="rev d2" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            ['01', 'DAILY WELLNESS SCORE',          '5-question morning check'],
            ['02', 'GPS TRAINING LOAD',             'Distance · sprint count · intensity'],
            ['03', 'IN-MATCH STATS',                'Goals · assists · +/- · situational'],
            ['04', 'FILM ENGAGEMENT',               'Hours watched · playlists completed'],
            ['05', 'RECRUITMENT PROFILE',           'Tactical fit score · scouting notes'],
          ].map(([num, k, v], i) => `
            <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; padding: 1.2rem 0; border-bottom: 1px solid var(--rule); align-items: center;">
              <div class="display" style="font-size: 2.4rem; color: var(--pink); line-height: 0.9;">${num}</div>
              <div>
                <div class="display" style="font-size: 1.3rem; color: var(--paper); letter-spacing: 0.04em; line-height: 1;">${k}</div>
                <div class="serif" style="color: var(--mute); font-size: 1rem; font-style: italic; margin-top: 0.35rem; line-height: 1.3;">${v}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Sample dashboard mockup -->
        <div class="rev d4" style="background: linear-gradient(145deg, #0F1419 0%, #0A0A0A 100%); border: 1px solid var(--rule); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; font-family: var(--f-mono); aspect-ratio: 4/3;">

          <!-- Header bar -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.6rem; border-bottom: 1px solid var(--rule);">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <div style="width: 8px; height: 8px; background: var(--teal); border-radius: 50%;"></div>
              <div style="color: var(--paper); font-size: 0.75rem; letter-spacing: 0.15em; font-weight: 700;">PAULO NASCIMENTO · GK</div>
            </div>
            <div style="color: var(--mute); font-size: 0.65rem; letter-spacing: 0.2em;">WEEK 14 · APR 22</div>
          </div>

          <!-- 3-stat row -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem;">
            ${[
              ['READINESS', '87%',    'var(--teal)'],
              ['LOAD',      '7.4/10', 'var(--paper)'],
              ['SAVE %',    '.769',   'var(--pink)'],
            ].map(([lbl, v, c]) => `
              <div style="padding: 0.7rem; background: rgba(244,241,234,0.03); border-left: 2px solid ${c};">
                <div style="font-size: 0.55rem; color: var(--mute); letter-spacing: 0.2em; margin-bottom: 0.3rem;">${lbl}</div>
                <div style="font-family: var(--f-heavy); font-size: 1.3rem; color: ${c}; line-height: 0.95;">${v}</div>
              </div>
            `).join('')}
          </div>

          <!-- Chart: load curve -->
          <div style="flex: 1; background: rgba(244,241,234,0.03); padding: 0.8rem; display: flex; flex-direction: column; gap: 0.4rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div style="font-size: 0.6rem; color: var(--mute); letter-spacing: 0.15em;">LOAD · 10-DAY</div>
              <div style="font-size: 0.6rem; color: var(--teal); font-weight: 700;">▲ +12% vs 4-wk avg</div>
            </div>
            <svg viewBox="0 0 200 60" style="width: 100%; flex: 1;" preserveAspectRatio="none">
              <polyline fill="none" stroke="#00B8A9" stroke-width="1.5" points="0,42 22,35 44,40 66,28 88,32 110,20 132,25 154,15 176,22 200,12"/>
              <polyline fill="none" stroke="#FF3D6E" stroke-width="1" stroke-dasharray="2,2" points="0,48 22,50 44,46 66,48 88,46 110,42 132,48 154,44 176,40 200,38"/>
              ${[0,22,44,66,88,110,132,154,176,200].map(x => `<circle cx="${x}" cy="${[42,35,40,28,32,20,25,15,22,12][[0,22,44,66,88,110,132,154,176,200].indexOf(x)]}" r="1.5" fill="#00B8A9"/>`).join('')}
            </svg>
          </div>

          <!-- Footer strip -->
          <div style="display: flex; justify-content: space-between; padding-top: 0.6rem; border-top: 1px solid var(--rule);">
            <div style="font-size: 0.6rem; color: var(--mute); letter-spacing: 0.15em;">FILM 3.2H · PLAYLIST 4/5</div>
            <div style="font-size: 0.6rem; color: var(--paper); font-weight: 700; letter-spacing: 0.15em;">CLEARED FOR SAT</div>
          </div>
        </div>

      </div>
    </div>
  `
});

/* ============================================================
   24 — TRAINING & PERFORMANCE. Weekly matrix.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Training',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · TRAINING')}
    <div class="frame" style="grid-template-rows: auto auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Training. <span class="accent-mute">Periodized.</span></div>
        <div class="mono accent-mute">FRAMEWORK EXISTS · DATA TO OPTIMIZE DOES NOT</div>
      </div>

      <div class="rev d2" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; border-top: 2px solid var(--paper); border-bottom: 2px solid var(--paper);">
        ${[
          ['MON', 'RECOVERY',      'Film review',           'var(--mute)'],
          ['TUE', 'TECHNICAL',     'Skills block',          'var(--paper)'],
          ['WED', 'TACTICAL',      'Peak intensity',        'var(--pink)'],
          ['THU', 'ACTIVATION',    'Sharpness',             'var(--teal)'],
          ['FRI', 'PRE-MATCH',     'Preparation',           'var(--lemon)'],
          ['WKD', 'MATCHDAY',      'Rest',                  'var(--paper)'],
        ].map(([day, focus, desc, color], i) => `
          <div style="border-left: ${i>0 ? '1px solid var(--rule)' : 'none'}; padding: 1.5rem 1rem; display: flex; flex-direction: column; gap: 0.8rem; min-height: 180px;">
            <div class="display" style="font-size: 1.4rem; color: ${color}; letter-spacing: 0.1em;">${day}</div>
            <div style="width: 40%; height: 2px; background: ${color};"></div>
            <div>
              <div class="display" style="font-size: 1.1rem; color: var(--paper); letter-spacing: 0.03em;">${focus}</div>
              <div class="serif" style="color: var(--mute); font-size: 0.9rem; font-style: italic; margin-top: 0.3rem;">${desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rev d4" style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 3rem; align-items: center;">
        <div class="serif" style="font-size: clamp(1.4rem, 2.5vw, 2.2rem); color: var(--paper); font-style: italic; line-height: 1.2;">
          Three consecutive late-season 5-4 losses suggest accumulated fatigue — <span class="accent-pink" style="font-style: normal; font-weight: 600;">the kind GPS flags weeks in advance.</span>
        </div>
        <div class="todo-tag">INSERT CATAPULT LOAD CHART</div>
      </div>
    </div>
  `
});

/* ============================================================
   25 — SCIENCE-BACKED TRAINING. Four-pane grid, big numbers.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Sport Science',
  cls: 'bg-teal',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · SPORT SCIENCE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip paper">FUTURE STATE</span>
        <div class="mono" style="color: var(--ink); font-weight: 700;">FROM INTUITION TO INFORMATION</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink);">
        ${[
          ['01', 'INJURY PREVENTION',
            'GPS-tracked players showed <strong>92.6% → 55.2% drop</strong> in injury prevalence after a 5-week guided acclimatization protocol.',
            'Maupin et al. (2021), Int J Sports Phys Ther'],
          ['02', 'EARLY WARNING',
            'Players ran <strong>+9.6% more meters/min</strong> in the week preceding a non-contact injury vs. their seasonal average.',
            'Catapult / Akenhead, J Sci Med Sport'],
          ['03', 'PEAKING FITNESS',
            'Acute-to-chronic workload ratio (ACWR) outside <strong>0.8–1.3</strong> band correlates with elevated lower-extremity injury risk.',
            'Lee et al. (2021), Orthop J Sports Med'],
          ['04', 'OBJECTIVE READINESS',
            '7 GPS variables combined with daily wellness produce <strong>decision-grade injury risk forecasting</strong> for the upcoming microcycle.',
            'Mariscal et al. (2023), Sensors'],
        ].map(([num, title, desc, source], i) => `
          <div class="rev d${i+2}" style="border-right: ${i%2===0 ? '1px solid rgba(10,10,10,0.15)' : 'none'}; border-bottom: ${i<2 ? '1px solid rgba(10,10,10,0.15)' : 'none'}; padding: 2rem; display: flex; gap: 1.5rem; align-items: flex-start;">
            <div class="outline-num" style="font-size: 5.5rem; color: var(--ink); line-height: 0.85;">${num}</div>
            <div style="flex: 1; padding-top: 0.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
              <div class="display" style="font-size: 1.3rem; color: var(--ink); letter-spacing: 0.04em;">${title}</div>
              <div class="serif" style="color: var(--ink); font-size: 1rem; font-style: italic; line-height: 1.4;">${desc}</div>
              <div class="mono" style="color: var(--ink); opacity: 0.6; font-size: 0.7rem; letter-spacing: 0.15em; margin-top: auto;">▸ ${source}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6" style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.5rem;">
        <div class="serif" style="color: var(--ink); font-size: 1.05rem; font-style: italic; max-width: 60ch;">
          The science isn't speculative. <span style="font-style: normal; font-weight: 700;">It's been validated across collegiate and professional soccer for over a decade.</span>
        </div>
        <div class="mono" style="color: var(--ink); opacity: 0.6;">CATAPULT VECTOR S7 · 10 HZ GNSS</div>
      </div>
    </div>
  `
});

/* ============================================================
   26 — FEEDBACK LOOP. Circular progression.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Feedback Loop',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · FEEDBACK LOOP')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE STATE · FEEDBACK LOOP</span>
        <div class="display display-md accent-pink">05</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; justify-content: center;">
        ${[
          ['01', 'WELLNESS SURVEY',        'Five-question phone check before each training week.'],
          ['02', 'GPS LOAD CAPTURE',       'Every session tracked. Injury risk flagged automatically.'],
          ['03', 'IN-MATCH TAGGING',       'Hudl Assist data feeds objective performance metrics.'],
          ['04', 'WEEKLY REPORT CARD',     'Stats, load, wellness, one coaching note per player.'],
          ['05', 'LEADERBOARD',            'Plus/minus, film engagement, community — visible in the locker room.'],
        ].map(([num, title, desc], i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 80px 280px 1fr 60px; gap: 2rem; padding: 1.2rem 0; border-bottom: 1px solid var(--rule); align-items: center;">
            <div class="display" style="font-size: 2.2rem; color: var(--pink); letter-spacing: 0.04em;">${num}</div>
            <div class="display" style="font-size: 1.3rem; color: var(--paper); letter-spacing: 0.04em;">${title}</div>
            <div class="serif" style="color: var(--mute); font-size: 1rem; font-style: italic; line-height: 1.35;">${desc}</div>
            <div style="text-align: right;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg></div>
          </div>
        `).join('')}
      </div>

      <div class="rev d7" style="text-align: center;">
        <div class="serif serif-lg" style="color: var(--paper); font-style: italic;">Consistent feedback. Faster development. Better decisions <span class="accent-pink">next time.</span></div>
      </div>
    </div>
  `
});

/* ============================================================
   27 — SPORT SCIENCE. Two-side comparison with big outline.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Fitness',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · FITNESS')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Physical demands,<br><span class="accent-pink">professional support.</span></div>
        <div class="mono accent-mute">STATE OF THE SUPPORT INFRASTRUCTURE</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <div class="rev d2" style="border: 1px solid var(--rule); padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2rem;">
            <div class="display display-md accent-teal">CURRENT</div>
            <div class="mono accent-mute">3 ITEMS</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.2rem;">
            ${[
              ['S&C',              'Vacant'],
              ['RECOVERY',         'NormaTec only — no cold-water, no protocol'],
              ['MENTAL',           'No resource currently in place'],
            ].map(([k, v]) => `
              <div style="display: grid; grid-template-columns: 120px 1fr; gap: 1rem; align-items: baseline; padding: 0.8rem 0; border-top: 1px solid var(--rule);">
                <div class="mono accent-mute" style="font-weight: 700;">${k}</div>
                <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="rev d3" style="border: 2px solid var(--pink); padding: 2rem; background: rgba(255,61,110,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2rem;">
            <div class="display display-md accent-pink">ACHIEVABLE</div>
            <div class="mono accent-pink" style="font-weight: 700;">4 MOVES</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.2rem;">
            ${[
              ['RECOVERY STATION',   'Portable unit with cold-water immersion · <strong style="font-style: normal; color: var(--paper);">~$3K – $5K one-time</strong>'],
              ['MENTAL PERFORMANCE', 'Contracted sports psych consultant (local grad)'],
              ['YOGA / MOBILITY',    'HotWorx or local studio sponsor — Sunday slot'],
              ['DEDICATED S&C',      'Individualized programs per player'],
            ].map(([k, v]) => `
              <div style="display: grid; grid-template-columns: 170px 1fr; gap: 1rem; align-items: baseline; padding: 0.8rem 0; border-top: 1px solid rgba(255,61,110,0.3);">
                <div class="mono accent-pink" style="font-weight: 700;">${k}</div>
                <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `
});

/* ============================================================
   28 — TACTICAL IDENTITY. Big serif thesis.
   ============================================================ */
SLIDES.push({
  section: 'PART II · SPORTING',
  title: 'Tactical Identity',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · IDENTITY')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem); position: relative;">

      <div class="rev d1 eyebrow accent-pink">TACTICAL IDENTITY</div>

      <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; align-items: center;">
        <div>
          <div class="wipe" style="font-family: var(--f-display); font-size: clamp(3.5rem, 9vw, 10rem); line-height: 0.85; color: var(--ink);">WE PLAY FAST.</div>
          <div class="wipe" style="transition-delay: 0.15s; font-family: var(--f-display); font-size: clamp(3.5rem, 9vw, 10rem); line-height: 0.85; color: var(--pink-deep);">BUT DOES<br>EVERYONE KNOW<br>WHAT THAT <span style="text-decoration: underline; text-decoration-thickness: 4px;">MEANS?</span></div>
        </div>

        <div class="rev d4" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="mono accent-mute" style="font-weight: 700;">WHY DOCUMENT IT</div>
          ${[
            ['ONBOARDING', 'New signings learn faster'],
            ['USL ALIGN',  'Promoted players arrive fluent'],
            ['OPP PREP',   'Scouting becomes surgical'],
            ['LEGACY',     "Personnel leave. System doesn't."],
          ].map(([k,v]) => `
            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 1rem; align-items: baseline; padding: 0.7rem 0; border-top: 1px solid rgba(10,10,10,0.15);">
              <div class="mono accent-pink" style="font-weight: 700;">${k}</div>
              <div class="serif" style="color: var(--ink); font-size: 1rem; font-style: italic;">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   29 — USL2 PATHWAY. Asymmetric split.
   ============================================================ */
SLIDES.push({
  section: 'PART II · PATHWAY',
  title: 'USL 2 Pathway',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · PATHWAY')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);"><span class="accent-teal">USL 2.</span></div>
        <div class="mono accent-mute">PATHWAY EXISTS IN THEORY. IN PRACTICE, UNDEFINED.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center;">
        <div class="rev d2" style="padding: 1rem 3rem 1rem 0; border-right: 1px solid var(--rule);">
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="chip teal">WHAT EXISTS</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.4rem;">
            ${[
              ['01', 'USL 2 team in summer outdoor'],
              ['02', 'Shared coaching staff across levels'],
              ['03', 'Hudl for training, broadcast crew for games'],
              ['04', 'Theoretical promotion pathway to MASL'],
            ].map(([num, txt]) => `
              <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; align-items: center;">
                <div class="display" style="font-size: 2.2rem; color: var(--teal); letter-spacing: 0.03em;">${num}</div>
                <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.5rem; line-height: 1.3;">${txt}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="rev d3" style="padding: 1rem 0 1rem 3rem;">
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="chip pink">WHAT'S MISSING</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.4rem;">
            ${[
              ['01', 'Formal advancement criteria'],
              ['02', 'Shared tactical playbook'],
              ['03', 'Standardized onboarding for promoted players'],
              ['04', 'Marketing around the pathway'],
            ].map(([num, txt]) => `
              <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; align-items: center;">
                <div class="display" style="font-size: 2.2rem; color: var(--pink); letter-spacing: 0.03em;">${num}</div>
                <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.5rem; line-height: 1.3;">${txt}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="rev d6" style="border-top: 1px solid var(--rule); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.6rem; color: var(--paper); font-style: italic; text-align: center; line-height: 1.3;">
          <span class="accent-teal" style="font-style: normal; font-weight: 600;">100 youth members.</span> A USL2 squad. A first team in MASL. <span class="accent-pink" style="font-style: normal; font-weight: 600;">One pipeline.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   30 — FUTURE PIPELINE. Pyramid visual.
   ============================================================ */
SLIDES.push({
  section: 'PART II · PATHWAY',
  title: 'Future Pipeline',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · FUTURE PATHWAY')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">A <span class="accent-pink">defined ladder.</span></div>
        <div class="mono accent-mute">GRASSROOTS → FIRST TEAM</div>
      </div>

      <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: center;">

        <!-- Pyramid: 5 tiers, top-down -->
        <div class="rev d2" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          ${[
            { label: 'MASL  ·  USL C / USL 1',   note: 'FIRST TEAM',                width: '38%',  bg: 'var(--pink)',     color: 'var(--paper)' },
            { label: 'USL 2',                     note: 'PROVING GROUND',           width: '52%',  bg: 'var(--pink-soft)', color: 'var(--ink)' },
            { label: 'MWPSL',                     note: 'MIDWEST PREMIER LEAGUE',   width: '66%',  bg: 'var(--paper)',    color: 'var(--ink)' },
            { label: 'FC AMBUSH YOUTH',           note: 'U8 — U18 DEVELOPMENT',     width: '82%',  bg: 'var(--teal)',     color: 'var(--ink)' },
            { label: 'SOCCER SCHOOL  ·  COACH ED CLINICS', note: 'GRASSROOTS BASE', width: '100%', bg: 'var(--teal-deep)', color: 'var(--paper)' },
          ].map(({ label, note, width, bg, color }, i) => `
            <div style="width: ${width}; background: ${bg}; color: ${color}; padding: 1rem 1.4rem; display: flex; flex-direction: column; align-items: center; gap: 0.2rem;">
              <div class="display" style="font-size: clamp(0.85rem, 1.1vw, 1.2rem); letter-spacing: 0.06em; line-height: 1; text-align: center;">${label}</div>
              <div class="mono" style="font-size: 0.65rem; opacity: 0.85; letter-spacing: 0.18em;">${note}</div>
            </div>
          `).join('')}
        </div>

        <!-- Right column: positioning + comparison -->
        <div class="rev d3" style="display: flex; flex-direction: column; gap: 1.8rem;">

          <div>
            <div class="eyebrow accent-pink">WHAT IT TAKES TO MOVE UP</div>
            <div class="serif" style="color: var(--paper); font-size: 1.5rem; font-style: italic; margin-top: 1rem; line-height: 1.25;">
              A scoring rubric. A film standard. A fitness baseline. <span class="accent-pink" style="font-style: normal; font-weight: 600;">Not a vibe.</span>
            </div>
          </div>

          <!-- Comparison block -->
          <div style="border-top: 1px solid var(--rule); padding-top: 1.2rem;">
            <div class="mono accent-mute" style="font-weight: 700; margin-bottom: 1rem;">▸ THE WEDGE</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--rule);">
              <div style="padding: 1rem; border-right: 1px solid var(--rule); background: rgba(244,241,234,0.03);">
                <div class="display" style="color: var(--mute); font-size: 0.9rem; letter-spacing: 0.05em; margin-bottom: 0.4rem;">GALLAGHER · LOU FUSZ</div>
                <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.35;">Youth-only. Pay-to-play. The ladder ends at the program.</div>
              </div>
              <div style="padding: 1rem; background: rgba(255,61,110,0.06);">
                <div class="display" style="color: var(--pink); font-size: 0.9rem; letter-spacing: 0.05em; margin-bottom: 0.4rem;">FC AMBUSH</div>
                <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.35;">A pro club at the top. Every tier is a step toward the first team.</div>
              </div>
            </div>
          </div>

          <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; line-height: 1.4;">
            <span class="accent-teal" style="font-style: normal; font-weight: 600;">No other St. Louis youth club</span> can offer a child a path that ends in a professional shirt.
          </div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   31 — ACADEMY GAP. Compact declarative.
   ============================================================ */
SLIDES.push({
  section: 'PART II · PATHWAY',
  title: 'Academy Gap',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · GAPS')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Same name. <span class="accent-mute">Different worlds.</span></div>
        <div class="mono accent-mute">FIXABLE</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center; gap: 3rem;">
        <div class="rev d2">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            ${[
              ['01', 'STYLE MISALIGNMENT',      'USL and MASL players arrive needing tactical acclimation'],
              ['02', 'INVISIBLE LADDER',         'Advancement criteria inconsistent; support varies across levels'],
              ['03', 'YOUTH DISCONNECTION',     'No clear link from families to the professional product'],
            ].map(([num, title, desc]) => `
              <div style="display: grid; grid-template-columns: 90px 320px 1fr; gap: 2rem; align-items: baseline; padding: 1.2rem 0; border-bottom: 1px solid var(--rule);">
                <div class="outline-num" style="font-size: 3.5rem; color: var(--pink); line-height: 0.85;">${num}</div>
                <div class="display" style="font-size: 1.3rem; color: var(--paper); letter-spacing: 0.04em;">${title}</div>
                <div class="serif" style="color: var(--mute); font-size: 1.05rem; font-style: italic; line-height: 1.4;">${desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="rev d6" style="background: var(--pink); color: var(--paper); padding: 2rem; display: flex; gap: 2rem; align-items: center;">
          <div class="mono" style="font-weight: 700; flex-shrink: 0;">THE FIX</div>
          <div class="serif serif-lg" style="font-style: italic; color: var(--paper); line-height: 1.2;">
            <span style="font-style: normal; font-weight: 600;">Structural, not financial.</span> A shared curriculum document. A written advancement criteria sheet. Structured support at every step before promotion.
          </div>
        </div>

      </div>
    </div>
  `
});

/* ============================================================
   32 — UNIFIED DNA. Three-column pathway.
   ============================================================ */
SLIDES.push({
  section: 'PART II · PATHWAY',
  title: 'Unified DNA',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · FUTURE STATE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">One club.<br><span style="color: var(--ink);">One identity.</span><br>One <span style="color: var(--lemon);">ladder.</span></div>
        <div class="mono" style="color: var(--paper); font-weight: 700;">UNIFIED DNA</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 2px solid var(--ink);">
        ${[
          ['YOUTH',   'U-12 → U-18',        'Age-appropriate modules built from first-team philosophy. First-team players appear as mentors.'],
          ['USL 2',   'SUMMER OUTDOOR',      'Same tactical system, same guidelines. Mid- and end-of-season formal evaluations.'],
          ['MASL',    'FIRST TEAM',          'Structured onboarding: physical, tactical doc, Hudl walkthrough, social announcement.'],
        ].map(([level, sub, desc], i) => `
          <div class="rev d${i+2}" style="border-right: ${i<2 ? '1px solid rgba(10,10,10,0.2)' : 'none'}; padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1.5rem; min-height: 320px;">
            <div class="mono" style="color: var(--ink); font-weight: 700;">${sub}</div>
            <div class="display" style="font-size: clamp(2.5rem, 5vw, 5rem); color: var(--paper); line-height: 0.85; letter-spacing: -0.01em;">${level}</div>
            <div class="serif" style="color: var(--ink); font-size: 1rem; font-style: italic; line-height: 1.4; margin-top: auto;">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   33 — DYLLAN CURRENT ROLE. Tight list.
   ============================================================ */
SLIDES.push({
  section: 'PART II · ANALYTICS',
  title: 'Current Role',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · ANALYTICS')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <span class="chip teal">CURRENT STATE</span>
          <div class="display display-lg" style="color: var(--paper);">Dyllan Haggard.</div>
        </div>
        <div class="mono accent-mute" style="text-align: right;">PART-TIME HOURS<br>FULL-TIME OUTPUT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 4rem; align-items: center;">
        <div class="rev d2" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            'Live analytics dashboard',
            'Real-time iPad analytics at every home game',
            'Opposition scouting reports & pre-match game sheets',
            'Scenario-based Hudl playlists',
            'USL 2 broadcast stats tracker',
          ].map((t, i) => `
            <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; padding: 1.1rem 0; border-bottom: 1px solid var(--rule); align-items: center;">
              <div class="display" style="font-size: 2.2rem; color: var(--teal); letter-spacing: 0.03em;">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.35rem; line-height: 1.3;">${t}</div>
            </div>
          `).join('')}
        </div>
        <div class="rev d3" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            'Player exit surveys (React)',
            'Tryout evaluation system',
            'Ops + game day + recruiting support',
            'Custom tools built on own time',
            'And more — across all operations',
          ].map((t, i) => `
            <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; padding: 1.1rem 0; border-bottom: 1px solid var(--rule); align-items: center;">
              <div class="display" style="font-size: 2.2rem; color: var(--teal); letter-spacing: 0.03em;">${String(i+6).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-style: italic; font-size: 1.35rem; line-height: 1.3;">${t}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d6" style="padding-top: 1rem;">
        <div class="serif" style="color: var(--paper); font-style: italic; text-align: center; font-size: 1.5rem; line-height: 1.3;">
          Every deliverable above: built <span class="accent-teal" style="font-style: normal; font-weight: 600;">remotely, part-time,</span> with no dedicated budget.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   34 — DYLLAN FUTURE ROLE. Pink wall + banner close.
   ============================================================ */
SLIDES.push({
  section: 'PART II · ANALYTICS',
  title: 'Future Role',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART II · FUTURE ROLE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <span class="chip pink">FUTURE STATE</span>
          <div class="display display-lg" style="color: var(--paper);">Embedded <span class="accent-pink">intelligence.</span></div>
        </div>
        <div class="mono accent-mute" style="text-align: right;">REMOTE ANALYST<br>→ PRESENCE</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-content: center;">
        ${[
          ['DATA INTEGRATION', 'Dashboards surface at meetings — ticket sales, performance, sponsorship — at a glance.'],
          ['PROACTIVE',         'Opposition reports built a week out. Wellness dashboards live before training.'],
          ['AUTOMATED',         'AI distributes match reports, logs receipts, triggers pricing alerts — without manual work.'],
          ['COMPOUNDING',       'Every question answered with data that supports the next decision.'],
        ].map(([k, v], i) => `
          <div class="rev d${i+2}" style="border: 1px solid var(--pink); padding: 1.5rem; background: rgba(255,61,110,0.04); display: flex; flex-direction: column; gap: 0.8rem;">
            <div class="display" style="font-size: 1.3rem; color: var(--pink); letter-spacing: 0.04em;">${k}</div>
            <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; line-height: 1.4;">${v}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6" style="border-top: 1px solid var(--rule); padding-top: 1.2rem;">
        <div class="mono accent-teal" style="font-weight: 700; margin-bottom: 0.8rem;">WHAT DYLLAN HAGGARD COULD ALSO ADD</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem;">
          ${[
            'Stand up the player profile interview series — fan-facing storytelling that drives ticket affinity',
            'Lead the Vetta partnership build — turning every St. Louis youth tournament into a scouting pipeline',
            'Run the AI ops layer — content, CRM, pricing, and scouting agents that punch above payroll weight',
            'Own the Footy Collective research lens — original analytics published under the Ambush umbrella',
            'Build the in-house broadcast partnership with SLU / Webster / Lindenwood / Maryville',
            'Manage the data foundations — wellness, GPS, Hudl, ticketing — as one connected system',
          ].map(t => `
            <div style="display: grid; grid-template-columns: 12px 1fr; gap: 0.8rem; align-items: baseline;">
              <div style="width: 8px; height: 8px; background: var(--teal); margin-top: 0.45rem;"></div>
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.4;">${t}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d7" style="background: var(--pink); color: var(--ink); padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; gap: 2rem;">
        <div class="display" style="font-size: clamp(1.5rem, 2.8vw, 2.5rem); letter-spacing: 0.04em; line-height: 1;">1 DEDICATED ANALYST</div>
        <div style="font-family: var(--f-mono); font-size: 1.5rem; font-weight: 700;">=</div>
        <div class="display" style="font-size: clamp(1.5rem, 2.8vw, 2.5rem); letter-spacing: 0.04em; line-height: 1;">~3 TO 5 WINS / SEASON</div>
      </div>
    </div>
  `
});

/* ============================================================
   35 — PART III DIVIDER
   ============================================================ */
SLIDES.push({
  section: 'PART III',
  title: 'Part III',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · GAME DAY')}
    <div style="position: absolute; bottom: -20vh; right: -5vw; font-family: var(--f-display); font-size: 100vh; line-height: 0.8; color: rgba(10,10,10,0.07); letter-spacing: -0.05em; user-select: none;">III</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
      <div class="rev d1" style="display: flex; align-items: center; gap: 2rem;">
        <div style="width: 60px; height: 4px; background: var(--ink);" class="draw-x"></div>
        <div class="mono" style="color: var(--ink); font-weight: 700;">PART III</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="wipe display" style="font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--ink);">GAME DAY</div>
        <div class="wipe display" style="transition-delay: 0.15s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--pink-deep);">&amp; OPS<span style="color: var(--ink);">.</span></div>
      </div>

      <div class="rev d4" style="display: flex; justify-content: space-between; align-items: end;">
        <div class="serif" style="font-size: 1.3rem; color: var(--ink); max-width: 45ch; font-style: italic;">
          Matchday is the product. Every detail is the pitch.
        </div>
        <div class="mono" style="color: var(--ink); opacity: 0.7;">EIGHT SLIDES</div>
      </div>
    </div>
  `
});

/* ============================================================
   36 — GAME DAY OVERVIEW. Tight declarative list.
   ============================================================ */
SLIDES.push({
  section: 'PART III · GAME DAY',
  title: 'Overview',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · OVERVIEW')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip teal">CURRENT STATE</span>
        <div class="mono accent-mute">GAME DAY TODAY</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="display" style="font-size: clamp(3rem, 7vw, 7rem); line-height: 0.88; color: var(--paper);">Competent.<br><span class="accent-mute">Small.</span><br><span class="accent-pink">Genuinely capable.</span></div>
        </div>

        <div class="rev d3" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            'Media assets — Greenfly &amp; Canva',
            'Ticket promotion &amp; email coordination',
            'Locker room setup',
            'In-match iPad analytics',
            'Halftime programming, jumbotron, anthem',
          ].map(t => `
            <div style="display: grid; grid-template-columns: 10px 1fr; gap: 1rem; padding: 0.9rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
              <div style="width: 8px; height: 8px; background: var(--teal); margin-top: 0.4rem;"></div>
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">${t}</div>
            </div>
          `).join('')}
          <div style="border-bottom: 1px solid var(--rule); height: 0;"></div>
        </div>
      </div>

      <div class="rev d6" style="padding-top: 1rem;">
        <div class="serif serif-lg" style="color: var(--paper); font-style: italic; max-width: 80ch;">
          The gap is not the people. It is the absence of a <span class="accent-pink" style="font-style: normal; font-weight: 600;">written playbook</span> and the capacity to expand.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   37 — GAME DAY GAP ANALYSIS. Dense numbered.
   ============================================================ */
SLIDES.push({
  section: 'PART III · GAME DAY',
  title: 'Game Day Gaps',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · GAPS')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--ink);">Five <span class="accent-pink">opportunities</span> in plain sight.</div>
        <div class="mono" style="color: var(--mute-deep);">LOW-COST FIXES</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink);">
        ${[
          ['WRITTEN PLAYBOOK',     'Runs on memory currently. Key-person risk.'],
          ['LOCKER ROOM',          'Needs leaderboard wall art, rolling TV with Hudl film.'],
          ['BOOT & EQUIPMENT',     'No labeled storage, no ventilation, no per-player cart.'],
          ['CONCESSIONS',          'Venue-controlled. Fan feedback consistently negative.'],
          ['MERCHANDISE',          'Undersupplied. Fans turned away by empty shelves.'],
        ].map(([k, v], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 110px 1.2fr 1.6fr; gap: 2rem; padding: 1.7rem 0; border-top: ${i > 0 ? '1px solid rgba(10,10,10,0.15)' : '0'}; align-items: center;">
            <div class="display" style="font-size: clamp(3rem, 4.5vw, 4.5rem); color: var(--pink); line-height: 0.85; text-align: center;">${String(i+1).padStart(2,'0')}</div>
            <div class="display" style="font-size: clamp(1.3rem, 1.8vw, 1.8rem); color: var(--ink); letter-spacing: 0.04em; line-height: 1.05;">${k}</div>
            <div class="serif" style="color: var(--mute-deep); font-size: clamp(1.05rem, 1.2vw, 1.25rem); font-style: italic; line-height: 1.4;">${v}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   38 — MATCHDAY PLAYBOOK. Timeline.
   ============================================================ */
SLIDES.push({
  section: 'PART III · GAME DAY',
  title: 'Matchday Playbook',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · PLAYBOOK')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE STATE · MATCHDAY PLAYBOOK</span>
        <div class="mono accent-mute">EVERY DETAIL. EVERY TIME.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; justify-content: center; border-top: 2px solid var(--rule); border-bottom: 2px solid var(--rule);">
        ${[
          ['T-72 HRS',       'Scouting report finalized. Ticket email sent. Greenfly assets distributed. Meals ordered.', 'var(--teal)'],
          ['T-24 HRS',       'Newsletter live. Game sheet loaded. Locker room set. Interns briefed.',                     'var(--teal)'],
          ['PRE-DOORS',      'Venue walkthrough. Merch stocked. Promo setup complete. Tech tested.',                      'var(--paper)'],
          ['IN-MATCH',       'Live analytic updates. Jumbotron coordination. Halftime executed.',                         'var(--pink)'],
          ['POST-MATCH',     'Kit collection. Report initiated. Injury log updated. Lineup filed. Video on Hudl.',         'var(--pink)'],
        ].map(([phase, desc, color], i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 240px 14px 1fr; gap: 2.5rem; padding: 1.7rem 0; border-top: ${i > 0 ? '1px solid var(--rule)' : '0'}; align-items: center;">
            <div style="text-align: right;">
              <div class="display" style="font-size: clamp(1.8rem, 2.4vw, 2.2rem); color: ${color}; letter-spacing: 0.05em; line-height: 1;">${phase}</div>
            </div>
            <div style="width: 14px; height: 14px; background: ${color}; border-radius: 50%;"></div>
            <div class="serif" style="color: var(--paper); font-size: clamp(1.2rem, 1.5vw, 1.55rem); font-style: italic; line-height: 1.4;">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   39 — PLAYER EXPERIENCE. Two-column with pullquote.
   ============================================================ */
SLIDES.push({
  section: 'PART III · GAME DAY',
  title: 'Player Experience',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · PLAYER ENVIRONMENT')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1">
        <div class="display display-lg" style="color: var(--paper);">The environment before the game<br><span class="accent-pink">shapes the performance during it.</span></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center;">
        <div class="rev d2" style="padding-right: 3rem; border-right: 1px solid var(--rule);">
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="chip teal">STRENGTHS</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${[
              'Jerseys hung before players arrive',
              'Structured warm-up protocols',
              'Food preference form in place',
              'Coaching staff arrives 3+ hours before kickoff',
              'Locker room layout supports group meetings',
              'Pre-game tactical talk delivered consistently',
              'Towels, water, and ice well-stocked at every match',
            ].map(t => `
              <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; padding: 0.85rem 0; border-top: 1px solid var(--rule); line-height: 1.35;">▸ ${t}</div>
            `).join('')}
          </div>
        </div>
        <div class="rev d3" style="padding-left: 3rem;">
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span class="chip pink">OPPORTUNITIES</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${[
              'Pre-game meals aligned to performance nutrition timing',
              'Formalized post-match recovery (currently informal)',
              'Quiet space / prayer room / mental prep zone',
              'Player cafe lounge — centralized supply station',
              'Tactical board with opposition heat maps live in locker room',
              'In-locker iPad with Hudl playlists ready for each player',
              'Post-match meal coordinated, not improvised',
              'Music control — let players own the pre-game audio',
            ].map(t => `
              <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; padding: 0.85rem 0; border-top: 1px solid var(--rule); line-height: 1.35;">▸ ${t}</div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="rev d6" style="background: var(--paper); color: var(--ink); padding: 1.5rem 2rem; display: flex; gap: 2rem; align-items: center;">
        <div class="mono" style="font-weight: 700; flex-shrink: 0;">FUTURE STATE</div>
        <div class="serif" style="font-size: 1.3rem; font-style: italic; line-height: 1.3;">
          Players arrive to a prepared environment — <span style="font-style: normal; font-weight: 600;">IT, nutrition, tactical board, opponent reports</span> — all in one place before boots hit the floor.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   40 — IN-MATCH ANALYTICS. Split w/ visual tag.
   ============================================================ */
SLIDES.push({
  section: 'PART III · GAME DAY',
  title: 'Analytics',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · ANALYTICS')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Live <span class="accent-teal">intelligence.</span></div>
        <div class="mono accent-mute">iPAD DELIVERY AT EVERY HOME GAME</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <div class="rev d2" style="border: 1px solid var(--rule); padding: 2rem;">
          <div class="display display-md accent-teal" style="margin-bottom: 1.5rem;">NOW</div>
          <div style="display: flex; flex-direction: column; gap: 0.8rem;">
            ${[
              'Shot charts by location',
              'Plus/minus by player',
              'Transition rates, foul tracking',
              'Goal recaps',
            ].map(t => `
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; padding: 0.5rem 0; border-top: 1px solid var(--rule);">${t}</div>
            `).join('')}
          </div>
        </div>
        <div class="rev d3" style="border: 2px solid var(--pink); padding: 2rem; background: rgba(255,61,110,0.05);">
          <div class="display display-md accent-pink" style="margin-bottom: 1.5rem;">ENHANCED</div>
          <div style="display: flex; flex-direction: column; gap: 0.8rem;">
            ${[
              'Shot zones with quality scoring',
              'Player tendencies + live scouting overlay',
              'Pressure-area heat maps',
              'Auto-generated halftime summary',
              'GPS / injury metrics via Catapult',
            ].map(t => `
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; padding: 0.5rem 0; border-top: 1px solid rgba(255,61,110,0.3);">${t}</div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="rev d6" style="padding-top: 0.5rem; border-top: 1px solid var(--rule); padding: 1rem 0 0 0;">
        <div class="serif serif-lg" style="color: var(--paper); font-style: italic; text-align: center;">
          Post-match: individual performance summary delivered to <span class="accent-pink" style="font-style: normal; font-weight: 600;">any player who wants it.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   41 — TRAVEL & COMPLIANCE. Compact two-col.
   ============================================================ */
SLIDES.push({
  section: 'PART III · OPS',
  title: 'Travel',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · TRAVEL & COMPLIANCE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">The <span class="accent-mute">operational backbone.</span></div>
        <div class="mono accent-mute">TRAVEL · RISK · COMPLIANCE</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-content: center;">
        <div class="rev d2" style="padding: 2rem; border-left: 3px solid var(--teal);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem;">
            <div class="display display-md accent-teal" style="font-size: 1.8rem;">CURRENT STANDARD</div>
            <div class="mono accent-mute">3</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${[
              'Flights booked 2 days out',
              'Food ordered day before — JJ\'s or Panera',
              'Decaled bus regional travel, snack packs',
            ].map(t => `
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; padding: 0.5rem 0; border-top: 1px solid var(--rule);">${t}</div>
            `).join('')}
          </div>
        </div>
        <div class="rev d3" style="padding: 2rem; border-left: 3px solid var(--pink);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem;">
            <div class="display display-md accent-pink" style="font-size: 1.8rem;">OPPORTUNITIES</div>
            <div class="mono accent-pink" style="font-weight: 700;">3</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${[
              'Vendors researched at season start, locked mid-week',
              'Itinerary distributed 72 hours out',
              'Road meals upgraded — Pure Plates STL partnership',
            ].map(t => `
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; padding: 0.5rem 0; border-top: 1px solid var(--rule);">${t}</div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   42 — INTERN PROGRAM. Grid of universities + tracks.
   ============================================================ */
SLIDES.push({
  section: 'PART III · OPS',
  title: 'Interns',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART III · INTERN PIPELINE')}
    <div class="frame" style="grid-template-rows: auto auto auto 1fr; gap: 1.8rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Build the pipeline. <span class="accent-pink">Multiply the capacity.</span></div>
        <div class="mono accent-mute">DATA · VIDEO · OPS</div>
      </div>

      <div class="rev d2">
        <div class="eyebrow accent-pink">TARGET UNIVERSITY PROGRAMS</div>
      </div>

      <div class="rev d3" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.5rem;">
        ${[
          ['LINDENWOOD',  'Sports Mgmt · Exercise Sci'],
          ['SLU',         'Kinesiology · Sports Biz'],
          ['LOGAN',       'Sports Sci · Chiropractic'],
          ['UMSL',        'Sports Mgmt · Data Sci'],
          ['MARYVILLE',   'Sports Mgmt · Data Sci'],
          ['WEBSTER',     'Sports Mgmt · Data Sci'],
        ].map(([name, d]) => `
          <div style="border: 1px solid var(--rule); padding: 1rem; text-align: center;">
            <div class="display" style="font-size: 0.95rem; color: var(--pink); letter-spacing: 0.04em;">${name}</div>
            <div class="mono accent-mute" style="font-size: 8px; margin-top: 0.3rem;">${d}</div>
          </div>
        `).join('')}
      </div>

      <div style="display: grid; grid-template-rows: auto 1fr; gap: 1.2rem;">
        <div class="rev d4" style="padding-top: 0.5rem;">
          <div class="eyebrow accent-pink">THREE INTERN TRACKS · WHAT THEY ACTUALLY DO</div>
        </div>
        <div class="rev d5" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;">
          ${[
            { title: 'DATA & VIDEO', color: 'var(--teal)',
              items: [
                'Code matches in Hudl Sportscode for tactical analysis',
                'Build opposition scouting reports — formations, set pieces, key threats',
                'Cut player-specific film playlists for review',
                'Maintain the player evaluation database',
                'Run live in-match analytics on iPad bench-side',
                'Pull post-match stats reports for staff and media',
              ] },
            { title: 'GAME DAY OPS', color: 'var(--pink)',
              items: [
                'Matchday setup — locker room, signage, fan zones',
                'Run promotional activations and giveaways at gates',
                'Capture social content during pre-match, halftime, post-match',
                'Support merchandise table and Kids Club booth',
                'Coordinate with venue staff on logistics',
                'Lead post-match teardown and inventory check',
              ] },
            { title: 'SPORTS SCIENCE', color: 'var(--paper)',
              items: [
                'Daily wellness survey collection and entry',
                'Run the recovery station before and after sessions',
                'Support rehab protocols under athletic trainer',
                'Operate Catapult GPS units — fit, sync, download',
                'Compile weekly load report cards for staff',
                'Assist with movement screens and return-to-play testing',
              ] },
          ].map(({ title, color, items }, i) => `
            <div style="border-right: ${i<2 ? '1px solid var(--rule)' : 'none'}; padding: 1.2rem 1.4rem; display: flex; flex-direction: column; gap: 0.8rem;">
              <div class="display" style="font-size: 1.2rem; color: ${color}; letter-spacing: 0.04em;">${title}</div>
              <div style="width: 30px; height: 2px; background: ${color};"></div>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem;">
                ${items.map(it => `
                  <li style="display: grid; grid-template-columns: 8px 1fr; gap: 0.6rem; align-items: baseline;">
                    <div style="width: 5px; height: 5px; background: ${color}; margin-top: 0.45rem;"></div>
                    <div style="font-family: var(--f-body); color: var(--paper); font-size: 0.85rem; line-height: 1.4;">${it}</div>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   43 — PART IV DIVIDER
   ============================================================ */
SLIDES.push({
  section: 'PART IV',
  title: 'Part IV',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · MARKETING')}
    <div style="position: absolute; top: 15%; right: -10vw; font-family: var(--f-display); font-size: 80vh; line-height: 0.8; color: rgba(10,10,10,0.07); letter-spacing: -0.05em; user-select: none;">IV</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
      <div class="rev d1" style="display: flex; align-items: center; gap: 2rem;">
        <div style="width: 60px; height: 4px; background: var(--paper);" class="draw-x"></div>
        <div class="mono" style="color: var(--paper); font-weight: 700;">PART IV</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="wipe display" style="font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--paper);">MARKETING</div>
        <div class="wipe display" style="transition-delay: 0.15s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--ink);">&amp; COMMERCIAL<span style="color: var(--paper);">.</span></div>
      </div>

      <div class="rev d4" style="display: flex; justify-content: space-between; align-items: end;">
        <div class="serif" style="font-size: 1.3rem; color: var(--paper); max-width: 45ch; font-style: italic;">
          Fans, ticketing, sponsors, brand — and the data layer that turns transactions into relationships.
        </div>
        <div class="mono" style="color: var(--paper); opacity: 0.7;">EIGHTEEN SLIDES</div>
      </div>
    </div>
  `
});

/* ============================================================
   44 — CURRENT MARKETING. Audience gaps.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · MARKETING',
  title: 'Marketing Now',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · CURRENT STATE')}
    <div class="frame" style="grid-template-rows: auto auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Ceiling <span class="accent-teal">visible.</span></div>
        <div class="mono accent-mute">PATH NOT YET SYSTEMATIZED</div>
      </div>

      <div class="rev d2" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 2px solid var(--paper);">
        ${[
          ['1.8-2.8K',  'AVG ATTENDANCE',      '36-56% OF CAPACITY'],
          ['ACTIVE',    'SOCIAL PRESENCE',      'MULTI-PLATFORM'],
          ['ST CHARLES','FAN GEOGRAPHY',        'CONCENTRATED'],
        ].map(([big, mid, small], i) => `
          <div style="border-right: ${i<2 ? '1px solid var(--rule)' : 'none'}; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
            <div class="display" style="font-size: clamp(2rem, 4vw, 3.5rem); color: var(--teal); letter-spacing: 0.02em;">${big}</div>
            <div class="mono" style="color: var(--paper); font-weight: 700;">${mid}</div>
            <div class="mono accent-mute" style="font-size: 9px;">${small}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d4" style="padding-top: 2rem;">
        <div class="eyebrow accent-pink" style="margin-bottom: 1.5rem;">WHO ISN'T IN THE SEATS YET</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem;">
          ${[
            'Families across the river',
            'College students',
            'Corporate groups',
            'Bosnian heritage community',
            'New WC soccer fans',
          ].map(t => `
            <div style="border: 1px solid var(--pink); padding: 1.2rem 0.8rem; text-align: center; background: rgba(255,61,110,0.04);">
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.3;">${t}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   45 — MARKETING GAPS. Compact numbered.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · MARKETING',
  title: 'Marketing Gaps',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · MARKETING GAPS')}
    <div class="frame" style="grid-template-columns: 1fr 2fr; gap: 4rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; flex-direction: column; gap: 1.5rem; padding-top: 3rem;">
        <div class="eyebrow accent-pink">MARKETING GAPS</div>
        <div class="display display-lg" style="color: var(--ink);">The <span class="accent-pink">content</span> is there.</div>
        <div class="display display-md" style="color: var(--mute-deep); font-size: 2rem;">The strategy behind it<br><span style="color: var(--ink);">isn't built.</span></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; background: rgba(10,10,10,0.15);">
        ${[
          ['NO CRM',                'Email list only. No behavioral segmentation.'],
          ['NO COLLEGE PROGRAM',    'No .edu tier. Obvious acquisition lever.'],
          ['PODCAST CONSISTENCY',   'YouTube-only. AI thumbnails. 2 episodes.'],
          ['GAME-DAY HEAVY',        'Match updates dominate. Stories missing.'],
          ['NO WORLD CUP PLAN',     'Biggest window. No activation strategy.'],
          ['MERCH UNDERSUPPLIED',   'Empty stock. One-time releases only.'],
        ].map(([k, v], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="background: var(--paper); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
            <div class="display" style="font-size: 1.2rem; color: var(--pink-deep); letter-spacing: 0.04em;">${k}</div>
            <div class="serif" style="color: var(--mute-deep); font-size: 1rem; font-style: italic;">${v}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   46 — MARKETING FUTURE. Serif thesis.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · MARKETING',
  title: 'Marketing Future',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · FUTURE STATE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1 eyebrow accent-pink">FUTURE STATE</div>

      <div style="display: flex; flex-direction: column; justify-content: center; gap: 3rem;">
        <div class="wipe">
          <div class="display" style="font-size: clamp(3.5rem, 9vw, 10rem); line-height: 0.85; color: var(--paper);">From broadcast</div>
        </div>
        <div class="wipe" style="transition-delay: 0.15s;">
          <div class="display" style="font-size: clamp(3.5rem, 9vw, 10rem); line-height: 0.85; color: var(--pink);">to relationship.</div>
        </div>

        <div class="rev d5" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
          ${[
            ['CRM',        'Lifecycle stages defined. First-timers get different messages than season holders.'],
            ['CONTENT',    'Short-form player stories, behind-the-scenes, reels and interviews.'],
            ['STUDENTS',   '$12/game with .edu verification. Launched at Lindenwood first.'],
            ['WORLD CUP',  'Watch parties. Landing page. Email capture. Fan conversion.'],
          ].map(([k, v]) => `
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 1rem; align-items: baseline; padding: 0.8rem 0; border-top: 1px solid var(--rule);">
              <div class="display" style="font-size: 1.1rem; color: var(--pink); letter-spacing: 0.05em;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d6" style="padding-top: 1.5rem; border-top: 1px solid var(--rule);">
        <div class="serif serif-lg" style="color: var(--paper); font-style: italic; text-align: center;">
          People fall in love with people. <span class="accent-pink" style="font-style: normal; font-weight: 600;">Show them who the players are.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   47 — CRM / CDP ARCHITECTURE. Data flow + campaigns.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · MARKETING',
  title: 'CRM & CDP',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · FAN DATA INFRASTRUCTURE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.2rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">A <span class="accent-pink">unified</span> fan profile.</div>
        <div class="mono accent-mute">CRM · CDP · CAMPAIGNS</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">

        <div class="rev d2">
          <div class="eyebrow accent-teal" style="margin-bottom: 1.5rem;">DATA SOURCES → ONE PROFILE</div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${[
              ['TICKETING',    'Purchase history, seat preferences, frequency, group size'],
              ['MOBILE APP',   'Push response, in-app actions, location, time-on-screen'],
              ['MERCH',        'Items bought, sizing, gift vs. self, price sensitivity'],
              ['EMAIL',        'Opens, clicks, lifecycle stage, content preferences'],
              ['SOCIAL',       'Platform mix, engagement rate, post-game sentiment'],
              ['ARENA WIFI',   'In-venue movement, dwell time at concessions and merch'],
            ].map(([k, v]) => `
              <div style="display: grid; grid-template-columns: 150px 1fr; gap: 1.2rem; align-items: baseline; padding: 0.95rem 0; border-top: 1px solid var(--rule);">
                <div class="display" style="font-size: 1.15rem; color: var(--teal); letter-spacing: 0.04em;">${k}</div>
                <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic; line-height: 1.4;">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="rev d3">
          <div class="eyebrow accent-pink" style="margin-bottom: 1.5rem;">FIVE LAUNCH CAMPAIGNS</div>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${[
              ['01', 'WELCOME SERIES',    'First-time ticket buyers receive a 5-email lifecycle: welcome, schedule preview, behind-the-scenes content, sponsor offer, return-game discount.'],
              ['02', 'WIN-BACK',           'Season ticket holders who lapsed last year get a personalized return offer based on their original section, with content showing what changed.'],
              ['03', 'PRE-GAME LIFT',      'Three days before each home game, fans get a tailored email — content varies by attendance frequency, opponent interest, and family vs. group profile.'],
              ['04', 'BIRTHDAY',           'Auto-trigger a free ticket offer plus jumbotron shoutout the week of a fan birthday — friends and family attend and pay full price.'],
              ['05', 'POST-GAME RECAP',    'Highlight reel, social-friendly clips, next-game promo, and player content — segmented by whether they attended in person.'],
            ].map(([num, k, v]) => `
              <div style="border-left: 3px solid var(--pink); padding: 0.8rem 1.1rem; background: rgba(255,61,110,0.05); display: grid; grid-template-columns: 40px 1fr; gap: 0.8rem;">
                <div class="display" style="color: var(--pink); font-size: 1.4rem; line-height: 0.9;">${num}</div>
                <div>
                  <div class="display" style="font-size: 1.05rem; color: var(--paper); letter-spacing: 0.04em; margin-bottom: 0.3rem;">${k}</div>
                  <div class="serif" style="color: var(--mute); font-size: 0.93rem; font-style: italic; line-height: 1.4;">${v}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <div class="rev d7" style="background: var(--paper); color: var(--ink); padding: 1.2rem 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div class="mono" style="font-weight: 700;">STARTING STACK</div>
        <div class="serif" style="font-size: 1.15rem; font-style: italic;">HubSpot or Klaviyo + Segment + Zapier — <span style="font-style: normal; font-weight: 700;">~$300/mo</span></div>
      </div>
    </div>
  `
});

/* ============================================================
   48 — TAILGATE & CONCESSIONS. Photo-box + list.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · EXPERIENCE',
  title: 'Tailgate',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · TAILGATE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2.2rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display" style="font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: 0.95; color: var(--paper);">Start the experience <span class="accent-pink">before</span> they walk in.</div>
        <div class="mono accent-mute">PRE-MATCH ACTIVATION</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 3rem; align-items: center;">

        <!-- Left: filled with the Battlehawks proof point as content, no empty box -->
        <div class="rev d2" style="background: linear-gradient(135deg, var(--teal-deep) 0%, var(--ink) 100%); padding: 2rem; display: flex; flex-direction: column; gap: 1.4rem; border: 1px solid var(--rule); position: relative; min-height: 360px;">
          <div style="position: absolute; top: 1.2rem; left: 1.2rem;" class="chip paper">BATTLEHAWKS PROOF POINT</div>
          <div style="margin-top: 3rem;">
            <div class="display" style="color: var(--paper); font-size: 1.6rem; letter-spacing: 0.04em; line-height: 1.05; margin-bottom: 1rem;">PRE-GAME ACTIVATION DRIVES THREE THINGS</div>
            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
              ${[
                ['EARLIER ARRIVAL',     'Doors open 90 minutes pre-kick — fans show up at minute 0, not 70.'],
                ['HIGHER IN-VENUE SPEND','Once you\'ve eaten, drunk, and bought merch in the lot, the experience continues inside.'],
                ['HIGHER RETURN RATE',   'Activation creates a memory the social channels reinforce all week.'],
              ].map(([k, v]) => `
                <div style="display: grid; grid-template-columns: 16px 1fr; gap: 0.8rem; align-items: baseline; padding: 0.4rem 0;">
                  <div style="width: 8px; height: 8px; background: var(--paper); margin-top: 0.4rem;"></div>
                  <div>
                    <div class="display" style="color: var(--paper); font-size: 0.92rem; letter-spacing: 0.04em;">${k}</div>
                    <div class="serif" style="color: var(--paper); opacity: 0.85; font-size: 0.92rem; font-style: italic; margin-top: 0.2rem; line-height: 1.35;">${v}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="todo-tag" style="position: absolute; bottom: 1rem; right: 1rem;">REPLACE WITH BATTLEHAWKS LOT PHOTO</div>
        </div>

        <div class="rev d3">
          <div class="eyebrow accent-pink" style="margin-bottom: 1.5rem;">THE AMBUSH TAILGATE</div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${[
              ['01', 'Grilled food &amp; beverages sold pre-game in the lot'],
              ['02', 'Player &amp; alumni booths — 30-min rotations'],
              ['03', 'Kids games, prize wheel, cornhole'],
              ['04', 'Live music or pep band'],
              ['05', 'Branded photo moment — organic social pre-kick'],
            ].map(([num, t]) => `
              <div style="display: grid; grid-template-columns: 50px 1fr; gap: 1rem; padding: 0.85rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
                <div class="display" style="color: var(--pink); font-size: 1.6rem; line-height: 0.9;">${num}</div>
                <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; line-height: 1.35;">${t}</div>
              </div>
            `).join('')}
          </div>
          <div class="rev d6" style="margin-top: 1.2rem; padding: 1.1rem 1.2rem; background: rgba(0,184,169,0.08); border-left: 3px solid var(--teal);">
            <div class="mono accent-teal" style="margin-bottom: 0.4rem; font-weight: 700;">CONCESSION PLAY · MILWAUKEE WAVE MODEL</div>
            <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; line-height: 1.4;">
              Game-day menu items co-branded with local partners. <span style="color: var(--paper); font-style: normal; font-weight: 700;">Example: "The Bush" pizza slice</span> by Haus Pizza — pepperoni, hot honey, chili flakes, served only on matchdays. A signature item fans line up for, marketed all week, photographed all night.
            </div>
          </div>
        </div>

      </div>
    </div>
  `
});

/* ============================================================
   49 — MOBILE APP. Three-phase roadmap.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · PRODUCT',
  title: 'Mobile App',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · MOBILE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">In every fan's <span class="accent-pink">pocket.</span></div>
        <div class="mono accent-mute">THREE PHASES</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; align-content: center;">
        ${[
          ['PHASE 1', 'LAUNCH',  [
            'Ticket purchases and group sales',
            'Schedule, results, standings, news',
            'Push notifications 90 min pre-kick',
            'Enter-to-win with email capture',
          ], 'var(--teal)'],
          ['PHASE 2', 'ENGAGE',  [
            'Fan profile and loyalty points',
            'Score prediction — weekly engagement',
            'Ambush Kids Club section',
            'Achievement milestones',
          ], 'var(--pink)'],
          ['PHASE 3', 'DEEPEN',  [
            'AI-driven personalization per fan',
            'Mobile food ordering (if venue)',
            'Full ticket / membership mgmt',
            'Fan history journey customization',
          ], 'var(--paper)'],
        ].map(([phase, label, items, color], i) => `
          <div class="rev d${i+2}" style="border: 2px solid ${color}; padding: 2.2rem 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div class="display" style="font-size: 1.5rem; color: ${color}; letter-spacing: 0.08em;">${phase}</div>
              <div class="mono" style="color: ${color}; font-weight: 700; font-size: 1.05rem;">${label}</div>
            </div>
            <div style="width: 100%; height: 3px; background: ${color};"></div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${items.map(t => `
                <div style="display: grid; grid-template-columns: 10px 1fr; gap: 0.8rem; align-items: baseline;">
                  <div style="width: 6px; height: 6px; background: ${color}; margin-top: 0.55rem;"></div>
                  <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; line-height: 1.35;">${t}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   50 — TICKETING CURRENT. Platform constraints.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · TICKETING',
  title: 'Ticketing Now',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · TICKETING · CURRENT')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Inherited platform. <span class="accent-mute">Constrained levers.</span></div>
        <div class="mono accent-mute">TICKETING TODAY</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
        <div class="rev d2">
          <div class="eyebrow accent-teal" style="margin-bottom: 1.5rem;">PLATFORM TODAY</div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${[
              ['TICKETMASTER',    '15-25% service fees per ticket — eats $100K-$170K per season at current volume'],
              ['NO DYNAMIC',      'Static prices regardless of demand, opponent, or day-of-week'],
              ['NO FAN DATA',     'Buyer transactions invisible to the club — we own zero relationships'],
              ['NO LOYALTY',      'No integration with Kids Club, season tickets, or repeat-buyer rewards'],
            ].map(([k,v]) => `
              <div style="display: grid; grid-template-columns: 200px 1fr; gap: 1.2rem; padding: 1.1rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
                <div class="display" style="color: var(--teal); font-size: 1.25rem; letter-spacing: 0.04em;">${k}</div>
                <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; line-height: 1.4;">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="rev d3">
          <div class="eyebrow accent-pink" style="margin-bottom: 1.5rem;">PRICING ISSUES</div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${[
              ['GA PRICING',       'Approximately $25 across the board with "sale" promos that often match the same price'],
              ['NO STUDENT',       'No .edu tier — we leave the largest local audience on the table every game'],
              ['NO OPPONENT TIER', 'Rivalry vs. midweek vs. national-night-out games all priced identically'],
              ['NO PREMIUM',       'Suite and club inventory controlled by the venue — we capture none of the upside'],
            ].map(([k,v]) => `
              <div style="display: grid; grid-template-columns: 200px 1fr; gap: 1.2rem; padding: 1.1rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
                <div class="display" style="color: var(--pink); font-size: 1.25rem; letter-spacing: 0.04em;">${k}</div>
                <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; line-height: 1.4;">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="rev d6" style="padding-top: 1.2rem; border-top: 1px solid var(--rule);">
        <div class="serif" style="font-size: 1.25rem; color: var(--mute); font-style: italic; text-align: center;">
          Currently controlled by Family Arena and not open for renegotiation this cycle.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   51 — TICKETING GAPS. Big stat dominant.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · TICKETING',
  title: 'Platform Fee Drain',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · PLATFORM FEE DRAIN')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="eyebrow" style="color: var(--paper);">PLATFORM FEE DRAIN</div>
        <div class="mono" style="color: var(--paper); opacity: 0.85;">EVERY SEASON · UNRECOVERED</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="big-num" style="color: var(--paper); font-size: clamp(5rem, 13vw, 14rem); line-height: 0.85;">
            $<span data-count="170" data-decimals="0">0</span>K
          </div>
          <div class="mono" style="color: var(--paper); font-weight: 700; margin-top: 1.5rem; opacity: 0.9; font-size: 1.05rem; letter-spacing: 0.18em;">LEAVING THE CLUB EVERY SEASON<br>VIA TICKETMASTER FEES</div>
          <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; margin-top: 1.5rem; line-height: 1.4; opacity: 0.85;">
            That's a Strength &amp; Conditioning coach, a Catapult system, a Kids Club launch, and a tailgate program — every single year.
          </div>
        </div>

        <div class="rev d3" style="display: flex; flex-direction: column; gap: 0;">
          ${[
            ['DYNAMIC PRICING',         'Playoff games priced the same as midweek February. We leave the upside on the table at the very moments demand peaks.'],
            ['STUDENT PROGRAM',         'A $12 student ticket is a proven acquisition tool with multi-year repeat-customer ROI. We don\'t deploy it. SLU, Webster, Lindenwood, Maryville — sitting right there.'],
            ['PROMO CREDIBILITY',       '"On Sale" at full price erodes trust with the most engaged fans. Every email becomes the boy who cried wolf.'],
            ['CUSTOMER DATA',           'Every transaction goes to Ticketmaster\'s database, not ours. We can\'t segment, can\'t retarget, can\'t personalize, can\'t win back.'],
          ].map(([k,v]) => `
            <div style="display: grid; grid-template-columns: 240px 1fr; gap: 1.4rem; padding: 1.2rem 0; border-top: 1px solid rgba(244,241,234,0.3); align-items: baseline;">
              <div class="display" style="color: var(--paper); font-size: 1.25rem; letter-spacing: 0.04em;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; opacity: 0.9; line-height: 1.4;">${v}</div>
            </div>
          `).join('')}
          <div style="border-top: 1px solid rgba(244,241,234,0.3);"></div>
        </div>
      </div>

      <div class="rev d6" style="border-top: 1px solid rgba(244,241,234,0.3); padding-top: 1.2rem;">
        <div class="serif" style="color: var(--paper); font-size: 1.3rem; font-style: italic; text-align: center;">
          The cost isn't the fee. It's the <span style="font-style: normal; font-weight: 700;">fan data, dynamic capability,</span> and direct ownership of the transaction.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   52 — TICKETING FUTURE. Staged roadmap.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · TICKETING',
  title: 'Ticketing Roadmap',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · TICKETING ROADMAP')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">A <span class="accent-pink">staged</span> migration.</div>
        <div class="mono accent-mute">PILOT USL2 FIRST · PROMOTE TO FAMILY ARENA</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-content: center;">
        ${[
          ['YEAR 1', [
            'Real promotional pricing',
            'College .edu program at season opener',
            'Day-after-win promo',
            'Migrate to ~5% fees',
            'Custom interface for Ambush',
          ], 'var(--teal)'],
          ['YEAR 2', [
            'Prices reviewed every Monday',
            'Adjustment by inventory, opponent, days-to-game',
            'Automated pricing pushes',
          ], 'var(--pink)'],
          ['YEAR 2-3', [
            'Switch Family Arena platform',
            'Save $140-$170K per season',
            'Every transaction = fan data',
          ], 'var(--lemon)'],
        ].map(([phase, items, color], i) => `
          <div class="rev d${i+2}" style="padding: 2rem 1.5rem; border-right: ${i<2 ? '1px solid var(--rule)' : 'none'}; display: flex; flex-direction: column; gap: 1.2rem;">
            <div class="display" style="font-size: clamp(2rem, 4vw, 3.5rem); color: ${color}; line-height: 0.85;">${phase}</div>
            <div style="width: 100%; height: 2px; background: ${color};"></div>
            <div style="display: flex; flex-direction: column; gap: 0.6rem;">
              ${items.map(t => `<div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.4;">▸ ${t}</div>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   53 — TICKETING INVENTORY. Six-card grid.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · TICKETING',
  title: 'Inventory Innovation',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · INVENTORY')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Six <span class="accent-pink">revenue lines</span> — no platform migration.</div>
        <div class="mono accent-mute">SHIP IN YEAR 1</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; align-content: center;">
        ${[
          ['FLEX PACKS',          'Any 5 games, any seat. Solves the "might not make every game" objection.'],
          ['MINI-PLANS',          '3-game packs around rivalry, heritage, and holiday.'],
          ['GROUP PRICING',       'Inclusive pricing with transport baked in.'],
          ['PREMIUM EXPERIENCE',  'Locker room visit + signed jersey + on-court photo.'],
          ['GROUP LEADER',        'Sell 20, get yours free. Every business leader is a sales channel.'],
          ['BIRTHDAY PACKAGE',    'Jumbotron shoutout + cake + 10-ticket min.'],
        ].map(([k, v], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="border: 1px solid var(--pink); padding: 1.5rem; background: rgba(255,61,110,0.04); display: flex; flex-direction: column; gap: 0.8rem; min-height: 160px;">
            <div class="display" style="font-size: 1.2rem; color: var(--pink); letter-spacing: 0.04em;">${k}</div>
            <div style="width: 30px; height: 2px; background: var(--pink);"></div>
            <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.4;">${v}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   54 — CURRENT SPONSOR LANDSCAPE. Dense multi-category list.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · SPONSORSHIP',
  title: 'Sponsor Landscape',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · SPONSOR LANDSCAPE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Broad <span class="accent-teal">portfolio.</span> <span class="accent-mute">Shallow roots.</span></div>
        <div class="mono accent-mute">40+ PARTNERS</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; align-content: center; justify-content: center;">
        ${[
          { title: 'OFFICIAL CORPORATE',
            count: '9+ partners',
            partners: 'NatureMed · Axius · St. Luke\'s · Window World · Under the Yellow Umbrella · Solomon · Clovr · Eletto · BJC',
            note: 'The flagship layer — financial services, healthcare, home, professional services. Strongest renewal candidates if scorecards are introduced.' },
          { title: 'RESTAURANT PARTNERS',
            count: '6+ partners',
            partners: 'Haus Pizzeria · Tucanos · Bellacino\'s · Hotshots · Raising Cane\'s · The Post',
            note: 'Game-day touchpoints already established. Underleveraged for matchday menu activations like "The Bush" pizza slice.' },
          { title: 'CHAMBER PARTNERS',
            count: '5+ chambers',
            partners: 'Greater St. Charles County · O\'Fallon · Chesterfield · North County · Cottleville-Weldon Spring',
            note: 'Civic credibility. The right partners to anchor a Chamber Night, Heritage Night co-marketing, or sponsored youth programming.' },
        ].map(({ title, count, partners, note }, i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 280px 1fr; gap: 2.5rem; padding: 1.5rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
            <div>
              <div class="display" style="font-size: 1.4rem; color: var(--teal); letter-spacing: 0.05em; line-height: 1; margin-bottom: 0.5rem;">${title}</div>
              <div class="mono accent-mute">${count}</div>
            </div>
            <div>
              <div style="font-family: var(--f-body); color: var(--paper); font-size: 1.1rem; line-height: 1.5; margin-bottom: 0.7rem;">${partners}</div>
              <div class="serif" style="color: var(--mute); font-size: 1rem; font-style: italic; line-height: 1.4;">${note}</div>
            </div>
          </div>
        `).join('')}
        <div style="border-top: 1px solid var(--rule);"></div>
      </div>

      <div class="rev d5" style="padding-top: 1rem;">
        <div class="serif" style="color: var(--paper); font-size: 1.25rem; font-style: italic; max-width: 90ch; line-height: 1.4;">
          The breadth reflects real community work. The gap: most function as <span class="accent-pink" style="font-style: normal; font-weight: 600;">logo placements</span> — visibility for a fee, no activation, no ROI measurement, no scorecard at renewal time.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   55 — SPONSORSHIP GAP. Brutalist five-gap list.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · SPONSORSHIP',
  title: 'Sponsor Gaps',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · SPONSOR GAPS')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1">
        <div class="display" style="font-size: clamp(3rem, 7vw, 7rem); line-height: 0.88; color: var(--ink);">Logo on the wall<br>is not a <span class="accent-pink">partnership.</span></div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center; gap: 0;">
        ${[
          ['01', 'NO ACTIVATION FRAMEWORK',    'No documented plan for what sponsors receive — or how measured'],
          ['02', 'NO MONTHLY SCORECARD',        'Sponsors receive no data on what their investment delivered'],
          ['03', 'GEOGRAPHIC CONCENTRATION',   'Portfolio skews heavily toward St. Charles small business'],
          ['04', 'MISSING CATEGORIES',          'No gym, no recovery tech, no media outlet, no performance brand'],
          ['05', 'NO RENEWAL PROCESS',          'Conversations at expiration, not six months before — without data'],
        ].map(([num, title, desc], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 90px 320px 1fr; gap: 2rem; padding: 1.3rem 0; border-top: 1px solid rgba(10,10,10,0.15); align-items: baseline;">
            <div class="outline-num" style="font-size: 3rem; color: var(--pink-deep); line-height: 0.85;">${num}</div>
            <div class="display" style="font-size: 1.2rem; color: var(--ink); letter-spacing: 0.04em;">${title}</div>
            <div class="serif" style="color: var(--mute-deep); font-size: 1rem; font-style: italic;">${desc}</div>
          </div>
        `).join('')}
        <div style="border-bottom: 1px solid rgba(10,10,10,0.15); height: 0;"></div>
      </div>
    </div>
  `
});

/* ============================================================
   56 — SPONSORSHIP TIERS. Three tier cards.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · SPONSORSHIP',
  title: 'Sponsor Tiers',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · TIERED FRAMEWORK')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">From logo rental<br>to <span class="accent-pink">strategic partnership.</span></div>
        <div class="mono accent-mute">TIERED · MEASURED · RENEWED</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; align-content: center;">
        ${[
          ['PLATINUM', '2-3',    'Naming rights · jersey · dedicated activation · quarterly exec review', 'var(--lemon)'],
          ['GOLD',     '4-6',    'In-arena visibility · game-day activation · bi-monthly scorecard',      'var(--pink)'],
          ['SILVER',   '10-15',  'Logo placement · digital inclusion · one fan-facing promo',              'var(--teal)'],
        ].map(([tier, count, desc, color], i) => `
          <div class="rev d${i+2}" style="background: ${color}; color: var(--ink); padding: 2rem; display: flex; flex-direction: column; gap: 1rem; min-height: 240px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div class="display" style="font-size: clamp(2rem, 3.5vw, 3rem); line-height: 0.85; letter-spacing: 0.03em;">${tier}</div>
              <div class="display" style="font-size: 2rem; line-height: 1; opacity: 0.6;">${count}</div>
            </div>
            <div style="width: 40px; height: 2px; background: var(--ink);"></div>
            <div class="serif" style="font-size: 0.95rem; font-style: italic; line-height: 1.4; margin-top: auto;">${desc}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6" style="padding-top: 1rem; border-top: 1px solid var(--rule);">
        <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">
          <span class="accent-pink" style="font-style: normal; font-weight: 600;">Target categories:</span> Gym / fitness · Recovery tech (NormaTec, HigherDose) · Celebrity investor (local roots, national platform)
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   57 — SPONSORSHIP RECS. Two featured partnerships.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · SPONSORSHIP',
  title: 'Sponsor Recs',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · RECOMMENDATIONS')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Two local <span class="accent-pink">partnerships.</span></div>
        <div class="mono accent-mute">IMMEDIATE PURSUIT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-content: center;">
        ${[
          ['THE ALIGN ROOM STL', 'Dr. Brianna Evans',     'Chiropractor',       'Player wellness · recovery content · in-arena chiro tent on game days'],
          ['BIBAS PERFORMANCE',  'Steven Bibas',           'Strength & Conditioning', 'Off-season training · lifting programs · in-house S&C resource'],
        ].map(([name, person, title, desc], i) => `
          <div class="rev d${i+2}" style="border: 1px solid var(--pink); padding: 2rem; background: rgba(255,61,110,0.04); display: flex; flex-direction: column; gap: 1rem; min-height: 280px;">
            <div class="mono accent-pink" style="font-weight: 700;">TARGET ${i+1}</div>
            <div class="display" style="font-size: clamp(1.5rem, 2.5vw, 2.2rem); color: var(--paper); line-height: 0.9; letter-spacing: 0.02em;">${name}</div>
            <div style="display: flex; flex-direction: column; gap: 0.2rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,61,110,0.3);">
              <div class="serif" style="color: var(--pink); font-size: 1.1rem; font-style: italic;">${person}</div>
              <div class="mono accent-mute" style="font-size: 10px;">${title}</div>
            </div>
            <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.4; margin-top: auto;">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   58 — WORLD CUP ACTIVATION. Three phases.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · ACTIVATION',
  title: 'World Cup',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · WORLD CUP ACTIVATION')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1">
        <div class="display" style="font-size: clamp(3.2rem, 7vw, 7rem); line-height: 0.88; color: var(--ink);">The biggest <span class="accent-pink">marketing window</span><br>in club history.</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-content: center;">
        ${[
          ['PHASE 1', 'APR–MAY',  ['World Cup countdown content series', 'Watch party locations established', 'Landing page for email capture', 'Heritage Night co-marketing kicks off']],
          ['PHASE 2', 'JUN–JUL',  ['Four official watch parties at Family Arena', 'Mini-game activations &amp; player appearances', 'Merch discounts + "first game on us" offer', 'Heritage Nation viewing parties — Bosnia, Mexico']],
          ['PHASE 3', 'AUG–SEP',  ['Season ticket priority access for captured emails', '"New to Soccer?" onboarding content series', 'Introduction to the indoor game', 'Convert World Cup fans into Ambush opening night']],
        ].map(([phase, window, items], i) => `
          <div class="rev d${i+2}" style="padding: 2.4rem 2.2rem; border-right: ${i<2 ? '1px solid rgba(10,10,10,0.2)' : 'none'}; display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div class="display" style="font-size: 2rem; color: var(--ink); letter-spacing: 0.04em;">${phase}</div>
              <div class="mono" style="color: var(--pink-deep); font-weight: 700; font-size: 1rem;">${window}</div>
            </div>
            <div style="width: 50px; height: 3px; background: var(--pink-deep);"></div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${items.map(t => `
                <div style="display: grid; grid-template-columns: 10px 1fr; gap: 0.8rem; align-items: baseline;">
                  <div style="width: 6px; height: 6px; background: var(--pink-deep); margin-top: 0.55rem;"></div>
                  <div class="serif" style="color: var(--ink); font-size: 1.15rem; font-style: italic; line-height: 1.4;">${t}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6">
        <div class="todo-tag">INSERT WORLD CUP LANDING PAGE MOCK</div>
      </div>
    </div>
  `
});

/* ============================================================
   59 — TST ACTIVATION.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · ACTIVATION',
  title: 'TST',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · TST')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">TST <span class="accent-lemon">activation</span> plan.</div>
        <div class="mono accent-mute">WE ARE TAKING A TEAM</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-content: center;">
        ${[
          ['PHASE 1', 'APR–MAY',  ['TST countdown — roster reveals, prep footage', 'Watch party locations established', 'Landing page for tournament sign-ups', 'Player profile content tied to the tournament']],
          ['PHASE 2', 'MAY–JUN',  ['Live watch parties at Family Arena', 'Mini-game activations with player challenges', 'TST-themed limited merchandise drop', 'Real-time social during matches']],
          ['PHASE 3', 'AUG–SEP',  ['Season ticket priority for TST-engaged fans', 'Convert outdoor audience to indoor season', '"From TST to Ambush" video campaign', 'Tournament storylines feed opening-night narrative']],
        ].map(([phase, window, items], i) => `
          <div class="rev d${i+2}" style="padding: 2.4rem 2.2rem; border-right: ${i<2 ? '1px solid var(--rule)' : 'none'}; display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div class="display" style="font-size: 2rem; color: var(--paper); letter-spacing: 0.04em;">${phase}</div>
              <div class="mono accent-pink" style="font-weight: 700; font-size: 1rem;">${window}</div>
            </div>
            <div style="width: 50px; height: 3px; background: var(--pink);"></div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${items.map(t => `
                <div style="display: grid; grid-template-columns: 10px 1fr; gap: 0.8rem; align-items: baseline;">
                  <div style="width: 6px; height: 6px; background: var(--pink); margin-top: 0.55rem;"></div>
                  <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; line-height: 1.4;">${t}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   60 — BEYOND THE BOARDS PODCAST.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · MEDIA',
  title: 'Beyond the Boards',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · PODCAST')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="display display-lg" style="color: var(--paper);">Beyond the Boards.</div>
          <div class="serif" style="color: var(--mute); font-style: italic; margin-top: 0.8rem; font-size: 1.6rem; line-height: 1.25;">The story is already happening. We just need to tell it.</div>
        </div>
        <div class="mono accent-mute" style="text-align: right; font-size: 1.05rem;">HOSTED BY<br>DONNIE &amp; NATE</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-content: center;">
        <div class="rev d2" style="border-left: 4px solid var(--teal); padding: 2rem 2.5rem;">
          <div class="display" style="color: var(--teal); font-size: 1.3rem; letter-spacing: 0.05em; margin-bottom: 1.2rem;">CURRENT STATE</div>
          <div class="serif" style="color: var(--paper); font-size: 1.4rem; font-style: italic; line-height: 1.4;">
            Launched February 2026. YouTube only. AI-generated thumbnails. Two episodes shipped.
          </div>
        </div>
        <div class="rev d3" style="border-left: 4px solid var(--pink); padding: 2rem 2.5rem;">
          <div class="display" style="color: var(--pink); font-size: 1.3rem; letter-spacing: 0.05em; margin-bottom: 1.2rem;">IMMEDIATE UPGRADES</div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${[
              'Distribute to Spotify · Apple · Amazon Music',
              'Custom Canva thumbnails by Pat',
              'Interview format: guest across from host',
            ].map(t => `<div class="serif" style="color: var(--paper); font-size: 1.3rem; font-style: italic; line-height: 1.35;">▸ ${t}</div>`).join('')}
          </div>
        </div>
        <div class="rev d4" style="border-left: 4px solid var(--paper); padding: 2rem 2.5rem; grid-column: span 2;">
          <div class="display" style="color: var(--paper); font-size: 1.3rem; letter-spacing: 0.05em; margin-bottom: 1.2rem;">FUTURE VISION</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem;">
            ${[
              ['Monthly special guests', 'Players, coaches, opposition managers, league figures'],
              ['Short-form clips',         'Reels &amp; TikTok cuts from every episode for distribution'],
              ['Sponsor integration',      'Episode-level presenting sponsor as a revenue line'],
            ].map(([h, d]) => `
              <div>
                <div class="display" style="color: var(--paper); font-size: 1.1rem; letter-spacing: 0.04em; margin-bottom: 0.5rem;">${h}</div>
                <div class="serif" style="color: var(--mute); font-size: 1.05rem; font-style: italic; line-height: 1.4;">${d}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   60a — PLAYER PROFILES VIDEO SERIES (NEW). Interview series Dyllan launches.
   ============================================================ */
SLIDES.push({
  section: 'PART IV · MEDIA',
  title: 'Player Profiles',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART IV · PLAYER PROFILES')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <span class="chip pink">FUTURE · NEW VIDEO SERIES</span>
          <div class="display display-lg" style="color: var(--paper); margin-top: 1rem;">The <span class="accent-pink">human side</span> of the shirt.</div>
        </div>
        <div class="mono accent-mute" style="text-align: right; line-height: 1.5;">DYLLAN-LED INITIATIVE<br>READY TO BUILD</div>
      </div>

      <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 4rem; align-items: center;">

        <!-- Left: format and intent -->
        <div class="rev d2" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="serif" style="color: var(--paper); font-size: 1.55rem; font-style: italic; line-height: 1.35;">
            A 30-minute sit-down with one player. Professional backdrop. Real questions. <span class="accent-pink" style="font-style: normal; font-weight: 600;">Real answers.</span>
          </div>
          <div class="serif" style="color: var(--mute); font-size: 1.2rem; font-style: italic; line-height: 1.4;">
            Where they grew up. How they got here. The path through college, indoor, abroad. The injury they came back from. What playing for the Ambush actually means to them.
          </div>
          <div style="border-top: 1px solid var(--rule); padding-top: 1rem;">
            <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 0.6rem;">▸ THE REFERENCE</div>
            <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; line-height: 1.4;">
              St. Louis City SC runs this format under "City Voice." It works. Fans buy in personally. Personal stories sell tickets.
            </div>
          </div>
        </div>

        <!-- Right: format spec card -->
        <div class="rev d3" style="border: 2px solid var(--pink); background: rgba(255,61,110,0.06); padding: 2rem; display: flex; flex-direction: column; gap: 1.2rem;">
          <div class="display" style="color: var(--pink); font-size: 1.3rem; letter-spacing: 0.05em;">THE FORMAT</div>
          ${[
            ['LENGTH',         '~30 minutes per episode'],
            ['CADENCE',         'One player every two weeks'],
            ['SETTING',         'Branded backdrop · two-camera · clean audio'],
            ['CORE QUESTIONS',  'Origin · path · biggest moment · the why'],
            ['DELIVERABLES',    'YouTube longform · 3-5 short clips for social'],
            ['SPONSOR HOOK',    'Episode-level presenting partner — local food &amp; beverage'],
            ['INVESTMENT',      'Equipment one-time, time recurring — ready to start'],
          ].map(([k, v]) => `
            <div style="display: grid; grid-template-columns: 160px 1fr; gap: 1rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,61,110,0.25); align-items: baseline;">
              <div class="mono accent-pink" style="font-weight: 700;">${k}</div>
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${v}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d6" style="border-top: 2px solid var(--pink); padding-top: 1.5rem;">
        <div class="serif" style="color: var(--paper); font-size: 1.3rem; font-style: italic; text-align: center; line-height: 1.3;">
          Fans don't fall in love with rosters. <span class="accent-pink" style="font-style: normal; font-weight: 600;">They fall in love with people.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   61 — PART V DIVIDER. Teal-deep with rotated V.
   ============================================================ */
SLIDES.push({
  section: 'PART V',
  title: 'Part V',
  cls: 'bg-teal-deep',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · COMMUNITY')}
    <div style="position: absolute; top: -5vh; right: -5vw; font-family: var(--f-display); font-size: 95vh; line-height: 0.8; color: rgba(244,241,234,0.06); letter-spacing: -0.05em; user-select: none;">V</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
      <div class="rev d1" style="display: flex; align-items: center; gap: 2rem;">
        <div style="width: 60px; height: 4px; background: var(--teal-bright);" class="draw-x"></div>
        <div class="mono" style="color: var(--teal-bright); font-weight: 700;">PART V</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="wipe display" style="font-size: clamp(5rem, 15vw, 18rem); line-height: 0.82; color: var(--paper);">COMMUNITY<span style="color: var(--pink);">.</span></div>
      </div>

      <div class="rev d4" style="display: flex; justify-content: space-between; align-items: end; gap: 2rem;">
        <div class="serif" style="font-size: 1.3rem; color: var(--paper); max-width: 50ch; font-style: italic;">
          The work that builds the club beyond the game. Programs, heritage, pipeline, supporters, alumni, and brand.
        </div>
        <div class="mono" style="color: var(--teal-bright); font-weight: 700;">TWELVE SLIDES</div>
      </div>
    </div>
  `
});

/* ============================================================
   62 — COMMUNITY CURRENT STATE.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Community · Current',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · CURRENT')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="eyebrow accent-teal">COMMUNITY · CURRENT</div>
        <div class="mono accent-mute">GREAT WORK, UNDERPROMOTED</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="display display-lg" style="color: var(--paper);">Already in the <span class="accent-teal">community.</span></div>
          <div class="serif" style="color: var(--mute); font-size: 1.15rem; font-style: italic; margin-top: 1.5rem;">
            Needs to be louder about it.
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0;">
          ${[
            'Player appearances (random — limited sign-ups)',
            'Hospital visits',
            'School visits',
            'Youth camps as revenue and pipeline tool',
            'Tucanos / Haus Pizza partnership — fan dining touchpoint',
          ].map((s, i) => `
            <div class="rev d${i+3}" style="display: grid; grid-template-columns: 40px 1fr; gap: 1rem; padding: 1rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
              <div class="display" style="color: var(--teal); font-size: 1.4rem;">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
          <div style="border-top: 1px solid var(--rule);"></div>
        </div>
      </div>

      <div class="rev d7" style="border-top: 2px solid var(--pink); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.2rem; color: var(--paper); font-style: italic;">
          Great work happens — but turnout for player participation is inconsistent, and <span class="accent-pink" style="font-style: normal; font-weight: 600;">the marketing doesn't keep up</span>.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   63 — KIDS CLUB. Comparison cards.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Kids Club',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · KIDS CLUB')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE · KIDS CLUB</span>
        <div class="mono accent-mute">BUILD THE NEXT GEN OF AMBUSH FANS</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
        <div class="rev d2" style="padding: 2rem; border: 1px solid var(--rule);">
          <div class="mono accent-mute" style="margin-bottom: 1rem;">REFERENCE</div>
          <div class="display display-md accent-mute" style="font-size: 1.8rem;">CITY SC · KIDS CLUB</div>
          <div class="num-heavy" style="color: var(--paper); font-size: 4rem; margin: 1.5rem 0 0.5rem;">$39</div>
          <div class="mono accent-mute">/ SEASON · AGES 5-12</div>
          <div class="serif" style="color: var(--mute); margin-top: 1.5rem; font-style: italic;">
            Four tickets, merch, trading cards, sticker pack, exclusive events.
          </div>
        </div>

        <div class="rev d3" style="padding: 2rem; border: 2px solid var(--pink); background: rgba(255,61,110,0.06);">
          <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 1rem;">OUR MOVE</div>
          <div class="display display-md" style="color: var(--paper); font-size: 1.8rem;">THE AMBUSH KIDS CLUB</div>
          <div style="display: flex; align-items: baseline; gap: 1rem; margin: 1.5rem 0 0.5rem;">
            <div class="num-heavy accent-pink" style="font-size: 4rem;">$25</div>
            <div class="serif accent-mute" style="font-size: 1.3rem; font-style: italic;">–</div>
            <div class="num-heavy accent-pink" style="font-size: 4rem;">$35</div>
          </div>
          <div class="mono accent-pink" style="font-weight: 700;">/ SEASON</div>
          <ul style="list-style: none; padding: 0; margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
            ${[
              'Welcome pack: drawstring bag, sticker, signed trading card, membership card',
              'Two themed game-day experiences with on-field access',
              'Birthday jumbotron shoutout + small gift',
              'Future mobile app challenges',
            ].map(s => `<li style="display: grid; grid-template-columns: 16px 1fr; gap: 0.8rem; align-items: baseline;">
              <div style="width: 6px; height: 6px; background: var(--pink); margin-top: 0.6rem;"></div>
              <div style="color: var(--paper); font-size: 0.95rem; line-height: 1.4;">${s}</div>
            </li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="rev d6" style="background: var(--teal); color: var(--ink); padding: 1.2rem 2rem; text-align: center;">
        <div class="display" style="font-size: clamp(1rem, 2vw, 1.6rem); letter-spacing: 0.1em; color: var(--ink);">
          EVERY MEMBER BRINGS AT LEAST <span class="num-heavy">2</span> PAYING ADULTS PER GAME
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   64 — SUPPORTERS GROUP.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Supporters Group',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · SUPPORTERS')}
    <div style="position: absolute; top: 10%; right: -2rem; font-family: var(--f-display); font-size: 45vh; line-height: 0.8; color: rgba(10,10,10,0.1); letter-spacing: -0.03em; user-select: none;">CAPO</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem); position: relative;">

      <div class="rev d1"><span class="chip paper">FUTURE · SUPPORTERS GROUP</span></div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="display display-lg" style="color: var(--paper);">Build a <span style="color: var(--ink);">supporters</span> section.</div>
          <div class="serif" style="font-size: 1.5rem; color: var(--paper); font-style: italic; margin-top: 1.8rem; line-height: 1.3;">
            The <span style="color: var(--ink); font-style: normal; font-weight: 700;">cheapest atmosphere multiplier</span> in the entire deck.
          </div>
          <div style="margin-top: 2rem;">
            <div class="mono" style="color: var(--ink); font-weight: 700; margin-bottom: 1.2rem;">WHAT IT IS</div>
            ${[
              'Independent, fan-led, club-recognized',
              'Dedicated section behind a goal — chants, drums, tifo',
              'The atmosphere multiplier MASL is missing',
              'The 18-35 acquisition channel we don\'t have',
              'ISC affiliation for legitimacy',
            ].map(s => `
              <div style="display: grid; grid-template-columns: 18px 1fr; gap: 1rem; padding: 0.85rem 0; border-bottom: 1px dashed rgba(244,241,234,0.35); align-items: baseline;">
                <div style="width: 10px; height: 10px; background: var(--paper); margin-top: 0.55rem;"></div>
                <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; line-height: 1.35;">${s}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="rev d4" style="padding: 2.2rem; background: var(--ink); color: var(--paper);">
          <div class="mono" style="color: var(--teal); font-weight: 700; margin-bottom: 1.2rem; font-size: 1rem;">WHAT THE CLUB PROVIDES</div>
          ${[
            'Reserved section pricing for verified members',
            'Drum and capo permission, banner storage',
            'Tifo materials budget',
            'Annual supporters summit with leadership',
            'Away travel partnership — discounted bus to Comets',
            'Match programs, scarves, founding-member packs',
          ].map(s => `
            <div style="display: grid; grid-template-columns: 18px 1fr; gap: 1rem; padding: 0.85rem 0; border-bottom: 1px solid var(--rule); align-items: baseline;">
              <div style="width: 10px; height: 10px; background: var(--teal); margin-top: 0.55rem;"></div>
              <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; line-height: 1.35;">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d7" style="border-top: 1px solid rgba(244,241,234,0.3); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.4rem; color: var(--paper); font-style: italic; line-height: 1.35;">
          Naming the section is the first community decision. <span style="color: var(--ink); font-style: normal; font-weight: 700;">Let the founding members name it.</span> They will defend what they built.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   65 — HERITAGE NIGHTS SERIES.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Heritage Nights',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · HERITAGE SERIES')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <span class="chip teal">FUTURE · HERITAGE SERIES</span>
        </div>
        <div class="display display-lg" style="color: var(--paper);">Heritage nights<br>as a <span class="accent-teal">series.</span></div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; align-items: stretch;">
        ${[
          ['BOSNIAN',    '🇧🇦', 'Largest U.S. diaspora', 'BOHFS partnership · 2026 WC tie-in',    'var(--teal)'],
          ['MEXICAN',    '🇲🇽', 'Hispanic community',    'Restaurant partners · Banda performers', 'var(--pink)'],
          ['VIETNAMESE', '🇻🇳', 'South County',          'Food partners · Lion dance',             'var(--paper)'],
          ['NIGERIAN',   '🇳🇬', 'African community',     'Drumline · Alt kit drop',                'var(--teal)'],
          ['IRISH',      '🇮🇪', 'St. Patrick\'s window', 'Tailgate · Post-game music',             'var(--pink)'],
        ].map(([country, flag, sub, details, color], i) => `
          <div class="rev d${i+2}" style="border-left: ${i>0 ? '1px solid var(--rule)' : 'none'}; padding: 1.5rem 1.2rem; display: flex; flex-direction: column; gap: 1rem; min-height: 240px;">
            <div style="font-size: 2.5rem;">${flag}</div>
            <div class="display" style="color: ${color}; font-size: 1.5rem; letter-spacing: 0.04em; line-height: 0.95;">${country}</div>
            <div class="mono accent-mute">${sub}</div>
            <div class="serif" style="color: var(--paper); font-size: 0.9rem; font-style: italic; line-height: 1.35; margin-top: auto;">${details}</div>
          </div>
        `).join('')}
      </div>

      <!-- World Cup tie-in callout -->
      <div class="rev d7" style="border: 2px solid var(--pink); background: rgba(255,61,110,0.08); padding: 1.5rem 2rem; display: grid; grid-template-columns: auto 1fr; gap: 2rem; align-items: center;">
        <div>
          <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 0.4rem;">▸ WORLD CUP × HERITAGE</div>
          <div class="display" style="color: var(--pink); font-size: 1.5rem; letter-spacing: 0.04em; line-height: 1;">DOUBLE THE LEVERAGE</div>
        </div>
        <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; line-height: 1.4;">
          Host an official watch party for each heritage nation while their team plays — capture emails at the door, follow up with a Heritage Night invite tied to that community's match. <span class="accent-pink" style="font-style: normal; font-weight: 700;">Bosnia qualified for 2026.</span> Their watch party at Family Arena should be the headline event. The same playbook applies to Mexico, Nigeria, and Ireland if they advance.
        </div>
      </div>

      <div class="rev d8" style="display: grid; grid-template-columns: auto 1fr; gap: 2rem; align-items: center;">
        <div class="mono accent-teal" style="font-weight: 700;">PER-NIGHT PLAYBOOK</div>
        <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">Community partner co-markets · Cultural food vendor · Performance pre-game &amp; halftime · Themed scarf / patch giveaway</div>
      </div>
    </div>
  `
});

/* ============================================================
   66 — YOUTH PIPELINE. Math-focused.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Youth Pipeline',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · YOUTH CONVERSION')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="eyebrow accent-teal">YOUTH · CONVERSION</div>
        <div class="display display-lg" style="color: var(--paper);">The <span class="accent-teal">math</span> is obvious.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="mono accent-mute" style="margin-bottom: 1.5rem; font-size: 1.05rem;">WHAT SHOULD BE TRUE</div>
          ${[
            'Youth players training in first-team philosophy',
            'First-team coaches connected to youth curriculum',
            'Youth teams attend 1+ pro game/season as a club event',
            'Parents get ticket discount via youth enrollment',
            'FC Ambush Learning Center using first-team footage',
          ].map((s,i)=>`
            <div style="display: grid; grid-template-columns: 70px 1fr; gap: 1.2rem; padding: 1.1rem 0; border-top: 1px solid var(--rule); align-items: center;">
              <div class="display" style="color: var(--pink); font-size: 2rem; line-height: 0.9;">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.3rem; font-style: italic; line-height: 1.35;">${s}</div>
            </div>
          `).join('')}
        </div>

        <div class="rev d5" style="background: var(--pink); padding: 2.5rem; display: flex; flex-direction: column; gap: 1.8rem;">
          <div class="mono" style="color: var(--paper); font-weight: 700; font-size: 1.05rem;">THE MATH</div>
          <div style="display: grid; grid-template-columns: repeat(3, auto) 1fr; gap: 1.4rem; align-items: center;">
            <div class="num-heavy" style="color: var(--paper); font-size: clamp(4rem, 8vw, 7rem); line-height: 0.9;">100</div>
            <div class="display" style="color: var(--ink); font-size: 2.6rem;">×</div>
            <div class="num-heavy" style="color: var(--paper); font-size: clamp(4rem, 8vw, 7rem); line-height: 0.9;">$70</div>
            <div></div>
          </div>
          <div class="mono" style="color: var(--paper); opacity: 0.85; font-size: 1.05rem; letter-spacing: 0.18em;">FAMILIES · AVG FAMILY SPEND</div>
          <div style="width: 100%; height: 3px; background: var(--paper);"></div>
          <div style="display: flex; align-items: baseline; gap: 1.5rem;">
            <div class="display" style="color: var(--ink); font-size: 2rem;">=</div>
            <div class="num-heavy" style="color: var(--paper); font-size: clamp(4.5rem, 9vw, 8rem); line-height: 0.9;">$7K</div>
            <div class="mono" style="color: var(--paper); font-weight: 700; font-size: 1.05rem; letter-spacing: 0.15em;">/SEASON<br>ONE GAME</div>
          </div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   67 — FC AMBUSH YOUTH DEEP DIVE. Data dashboard.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'FC Ambush Youth',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · YOUTH ORG')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">PIPELINE · YOUTH ORG</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">FC Ambush youth<br>— the <span class="accent-pink">measured state.</span></div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;">
        ${[
          ['100+',       'PLAYERS',        'Current enrollment',     'var(--teal)'],
          ['U8 — U18',   'AGE RANGE',      'Full youth ladder',      'var(--teal)'],
          ['1:12',       'RATIO',          'Coach-to-player avg',    'var(--teal)'],
          ['<10%',       'CONVERSION',     'Attended pro game',      'var(--pink)'],
        ].map(([big, label, sub, color], i) => `
          <div class="rev d${i+2}" style="border-left: ${i>0 ? '1px solid var(--rule)' : 'none'}; padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 0.8rem;">
            <div class="num-heavy" style="color: ${color}; font-size: clamp(2.5rem, 5vw, 4rem); line-height: 0.85;">${big}</div>
            <div class="display" style="color: var(--paper); font-size: 1rem; letter-spacing: 0.05em;">${label}</div>
            <div class="mono accent-mute">${sub}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6" style="border-top: 2px solid var(--pink); padding-top: 1.5rem;">
        <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 0.8rem;">WHAT WE NEED TO MEASURE</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem 2rem;">
          ${[
            'Annual enrollment trend and age distribution',
            'Fee revenue and capacity vs. competitor clubs',
            'Youth-to-pro attendance conversion (headline metric)',
            'Retention cohort — U10s still in at U14, U18',
          ].map(s => `
            <div style="display: grid; grid-template-columns: 10px 1fr; gap: 1rem; align-items: baseline;">
              <div style="width: 8px; height: 8px; background: var(--pink); margin-top: 0.4rem;"></div>
              <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>
        <div class="todo-tag" style="margin-top: 1rem;">PULL EXACT ENROLLMENT + REVENUE FIGURES</div>
      </div>
    </div>
  `
});

/* ============================================================
   68 — BOSNIAN HERITAGE NIGHT. Full-bleed feature.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Bosnian Heritage',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · BOSNIAN HERITAGE')}
    <div style="position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr;">

      <div class="rev d1" style="padding: clamp(2rem, 4vw, 4rem); background: linear-gradient(135deg, var(--teal-deep) 0%, var(--ink) 100%); display: flex; flex-direction: column; justify-content: space-between; gap: 2rem;">
        <div class="mono" style="color: var(--teal-bright); font-weight: 700;">ACTIVATION · ST. LOUIS · BOSNIAN DIASPORA</div>
        <div>
          <div style="font-size: 5rem;">🇧🇦</div>
          <div class="display" style="font-size: clamp(4rem, 9vw, 8rem); line-height: 0.88; color: var(--paper); margin-top: 1rem;">BOSNIAN<br>HERITAGE<br><span class="accent-pink">NIGHT.</span></div>
        </div>
        <div class="serif" style="color: var(--paper); font-size: 1.15rem; font-style: italic; max-width: 40ch;">
          <span class="accent-teal" style="font-weight: 600; font-style: normal;">Largest Bosnian diaspora in the U.S.</span> Active partnerships. 2026 World Cup tie-in.
        </div>
      </div>

      <div class="rev d3" style="padding: clamp(2rem, 4vw, 4rem); display: flex; flex-direction: column; justify-content: center; gap: 1.2rem;">
        <div class="mono accent-mute" style="margin-bottom: 0.5rem;">ASSETS IN PLACE</div>
        ${[
          'Existing BOHFS partnership — Bosnian-led St. Louis org',
          'Former Ambush players / alumni from the community',
          'Established Bosnian restaurants and cultural venues',
          'Bosnia qualified for 2026 WC — obvious tie-in moment',
        ].map((s, i) => `
          <div style="display: grid; grid-template-columns: 30px 1fr; gap: 1rem; padding: 1rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
            <div class="display accent-teal" style="font-size: 1.3rem;">${String(i+1).padStart(2,'0')}</div>
            <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic;">${s}</div>
          </div>
        `).join('')}
        <div style="border-top: 1px solid var(--rule); padding-top: 1.5rem; margin-top: 1rem;">
          <div class="serif" style="font-size: 1.15rem; color: var(--pink); font-style: italic;">Plus: pre-season Bosnia World Cup watch party leading into the indoor opener.</div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   69 — HIGH-IMPACT PROGRAMS.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Impact Programs',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · HIGH-IMPACT PROGRAMS')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2.5rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">PROGRAMS</div>
          <div class="display display-lg" style="color: var(--ink); margin-top: 0.5rem;">Work that builds<br>the <span class="accent-pink">brand beyond</span> the game.</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem;">
        ${[
          ['SCHOOL RECESS CLINICS',
            'Two players plus the mascot visit a local elementary school during recess for a 30-minute clinic. Parent emails are collected at sign-in via a one-question form. A follow-up email goes out within 48 hours including a Kids Club discount code, an upcoming-game invite, and a video clip from the visit. The school gets a banner photo for their newsletter. Press release submitted to KSDK and Fox 2 the same week.'],
          ['CHARITY NIGHTS',
            'One designated home game per season tied to a single charity partner — Mercy Kids, Backstoppers, or a Bosnian community organization. 50/50 raffle runs all night with proceeds split. Auction tables for game-worn jerseys and signed memorabilia. Tickets sold at a slightly higher price with the difference donated. Charity speaks pre-match. Outcome report goes out the next week to the entire email list.'],
          ['AMBUSH CHARITY CLASSIC',
            'Annual off-season tentpole event. Charity 5K starts and finishes in the arena parking lot, players run with fans, finishers walk into the building for a pasta dinner and live music. Player booths line the concourse for autographs. Silent auction for trips, signed gear, and dining experiences. Cost-low, headline-high, naturally photogenic for press and sponsors.'],
          ['HOSPITAL VISITS',
            'Two scheduled visits per season — Cardinal Glennon and SSM Cardinal Glennon. Players arrive in kit with signed cards, mini balls, and patient-specific notes prepared in advance. A staff photographer captures the visit (with parental consent) for press distribution. Each visit produces a press release, three social posts, and one long-form story for the website. Sponsor partner gets co-branded mention.'],
        ].map(([t, d], i) => `
          <div class="rev d${i+2}" style="border: 1px solid var(--ink); padding: 1.8rem; display: flex; flex-direction: column; gap: 1rem;">
            <div class="display" style="color: var(--ink); font-size: 1.5rem; letter-spacing: 0.04em; line-height: 1;">${t}</div>
            <div style="width: 50px; height: 3px; background: var(--pink);" class="draw-x"></div>
            <div class="serif" style="color: var(--mute-deep); font-size: 1rem; font-style: italic; line-height: 1.5;">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   70 — COMMUNITY GAP ANALYSIS.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Community Gaps',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · COMMUNITY GAPS')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 3rem; padding: clamp(3rem, 5vw, 5rem) clamp(4rem, 7vw, 8rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Community <span class="accent-pink">gap analysis.</span></div>
        <div class="mono accent-mute">CURRENT · FIXABLE</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; border-top: 2px solid var(--rule); border-bottom: 2px solid var(--rule);">
        ${[
          ['PLAYER APPEARANCES',        'Same players volunteer every time. No enforcement. No forward calendar.'],
          ['UNDERPUBLICIZED WORK',      'Events happen. Promotion posted the day before — or not at all.'],
          ['NO LOCAL NEWS RELATIONSHIP','KSDK and Fox 2 don\'t cover the Ambush. One segment during playoffs.'],
          ['NO IMPACT DATA',            'When making the case to a city partner or anchor sponsor, no numbers behind it.'],
        ].map(([t, d], i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 110px 1.3fr 1.6fr; gap: 2rem; padding: 1.7rem 0; border-top: ${i > 0 ? '1px solid var(--rule)' : '0'}; align-items: center;">
            <div class="display" style="color: var(--pink); font-size: clamp(2.6rem, 4vw, 3.8rem); line-height: 0.85; text-align: center;">${String(i+1).padStart(2,'0')}</div>
            <div class="display" style="color: var(--paper); font-size: clamp(1.2rem, 1.6vw, 1.6rem); letter-spacing: 0.04em; line-height: 1.05;">${t}</div>
            <div class="serif" style="color: var(--mute); font-size: clamp(1.05rem, 1.2vw, 1.25rem); font-style: italic; line-height: 1.4;">${d}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6" style="background: var(--pink); color: var(--paper); padding: 1.5rem 2rem;">
        <div class="serif" style="font-size: 1.35rem; font-style: italic; line-height: 1.4;">
          All four are solved by <span style="color: var(--ink); font-style: normal; font-weight: 700;">the same thing:</span> a calendar, a camera, a press list, a tracking spreadsheet.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   71 — ALUMNI ACTIVATION.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Alumni Activation',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · ALUMNI')}
    <div class="frame" style="grid-template-rows: auto auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1"><span class="chip teal">FUTURE · ALUMNI</span></div>
      <div class="rev d2" style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: end;">
        <div class="display display-lg" style="color: var(--paper);"><span class="accent-teal">30 years</span> of alumni.<br>Untapped asset.</div>
        <div class="serif accent-mute" style="font-style: italic; font-size: 1.1rem; max-width: 30ch;">
          Honor the past. Fund the future.
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
        ${[
          ['AMBASSADOR PROGRAM',     'Opt-in alumni network for podcast, watch-parties, intern mentors, events.'],
          ['JERSEY RETIREMENT',       'One per season. Tifo. Video tribute. Alumni attendance. Press release.'],
          ['ALUMNI-LED CLINICS',     'FC Ambush camps headlined by returning legend. Parents buy tickets.'],
          ['LOCKER ROOM ALUMNI WING','Jersey wall + video loop. Free. Shows up in every broadcast photo.'],
          ['ALUMNI NEWSLETTER',       'Monthly digest of club, results, alumni businesses, reunion signals.'],
          ['FIRST-TEAM MENTORS',     'Formal pairings: active player + alumni. Free institutional memory transfer.'],
        ].map(([t, d], i) => `
          <div class="rev d${Math.min(i+3, 8)}" style="border-top: 3px solid var(--teal); padding: 1.2rem 0; display: flex; flex-direction: column; gap: 0.7rem;">
            <div class="display" style="color: var(--teal); font-size: 1.2rem; letter-spacing: 0.04em; line-height: 1;">${t}</div>
            <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic; line-height: 1.4;">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   72 — BRAND & IDENTITY REFRESH.
   ============================================================ */
SLIDES.push({
  section: 'PART V · COMMUNITY',
  title: 'Brand Refresh',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART V · BRAND')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <span class="chip pink">FUTURE · BRAND &amp; IDENTITY</span>
        </div>
        <div class="mono accent-mute">VERMONT GREEN · WREXHAM · KC CURRENT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start;">
        <div class="rev d2">
          <div class="display display-lg" style="color: var(--paper);">Highest-<span class="accent-pink">ROI</span> lever<br>in lower-division<br>sports.</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 2rem; align-content: start;">
          ${[
            ['KIT CYCLE',           'Home/Away/Third on a predictable cadence — each drop a merch window'],
            ['ALTERNATE KITS',       'Bosnian heritage kit · 30-year throwback · Kids Club kit'],
            ['RETRO NIGHTS',         'Per season: players wear historic kit, fans get matching giveaway'],
            ['CREST AUDIT',           'Modernize without losing the red. Extend brand book to youth + USL2'],
            ['STADIUM GRAPHICS',     'Tunnel, bench skirts, ice surface, jumbotron — every surface'],
            ['KIT LAUNCH CONTENT',   'Player-led reveal videos · community partner cameos · pre-season energy'],
          ].map(([t, d], i) => `
            <div class="rev d${Math.min(i+3, 8)}" style="padding: 1rem 0; border-top: 1px solid var(--rule);">
              <div class="display" style="color: var(--pink); font-size: 1.1rem; letter-spacing: 0.04em; margin-bottom: 0.3rem;">${t}</div>
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic;">${d}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   73 — PART VI DIVIDER. Ink + deep pink watermark VI.
   ============================================================ */
SLIDES.push({
  section: 'PART VI',
  title: 'Part VI',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · FINANCE')}
    <div style="position: absolute; top: -5vh; right: -5vw; font-family: var(--f-display); font-size: 95vh; line-height: 0.8; color: rgba(244,241,234,0.06); letter-spacing: -0.05em; user-select: none;">VI</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
      <div class="rev d1" style="display: flex; align-items: center; gap: 2rem;">
        <div style="width: 60px; height: 4px; background: var(--pink);" class="draw-x"></div>
        <div class="mono" style="color: var(--pink); font-weight: 700;">PART VI</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="wipe display" style="font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--paper);">FINANCE</div>
        <div class="wipe display" style="transition-delay: 0.15s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--pink);">&amp; SUSTAIN-</div>
        <div class="wipe display" style="transition-delay: 0.3s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--paper);">ABILITY<span class="accent-teal">.</span></div>
      </div>

      <div class="rev d5" style="display: flex; justify-content: space-between; align-items: end; gap: 2rem;">
        <div class="serif" style="font-size: 1.3rem; color: var(--paper); max-width: 50ch; font-style: italic;">
          Revenue streams. Cost structure. Year 1 investment summary. The cost of doing nothing.
        </div>
        <div class="mono" style="color: var(--pink); font-weight: 700;">EIGHT SLIDES</div>
      </div>
    </div>
  `
});

/* ============================================================
   74 — REVENUE STREAMS. Three-column growth-lever table.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Revenue Streams',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · REVENUE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Where the <span class="accent-teal">money</span> comes from.</div>
        <div class="mono accent-mute">CURRENT · CEILING · LEVER</div>
      </div>

      <div style="display: grid; grid-template-columns: 240px 1fr 1fr; gap: 0; border-top: 2px solid var(--paper);">
        <div style="padding: 1rem 1.5rem; border-right: 1px solid var(--rule);">
          <div class="mono accent-mute">STREAM</div>
        </div>
        <div style="padding: 1rem 1.5rem; border-right: 1px solid var(--rule); background: rgba(0,184,169,0.06);">
          <div class="mono accent-teal" style="font-weight: 700;">▸ CURRENT</div>
        </div>
        <div style="padding: 1rem 1.5rem; background: rgba(255,61,110,0.06);">
          <div class="mono accent-pink" style="font-weight: 700;">▸ GROWTH LEVER</div>
        </div>

        ${[
          ['TICKET REVENUE',    '~$484K net at current volume',       'Dynamic pricing / platform migration'],
          ['SPONSORSHIP',       'Broad but shallow',                   'Tiered activation + anchor partner'],
          ['MERCHANDISE',       'Demand present, supply falling',       'Pre-season survey + themed drops'],
          ['YOUTH / CAMPS',     '100-member base',                     'Youth-to-pro narrative drives enrollment'],
          ['ANCILLARY / EVENTS', 'Near zero',                           'Tailgate · Charity Classic · watch parties'],
        ].map(([stream, cur, lever], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: contents;">
            <div style="padding: 1.3rem 1.5rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule);">
              <div class="display" style="color: var(--paper); font-size: 1.15rem; letter-spacing: 0.04em;">${stream}</div>
            </div>
            <div style="padding: 1.3rem 1.5rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule); background: rgba(0,184,169,0.04);">
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${cur}</div>
            </div>
            <div style="padding: 1.3rem 1.5rem; border-top: 1px solid var(--rule); background: rgba(255,61,110,0.04);">
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${lever}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="todo-tag" style="align-self: flex-start; margin-top: 1rem;">CONFIRM $484K AND 100-MEMBER FIGURES</div>
    </div>
  `
});

/* ============================================================
   75 — YEAR 1 INVESTMENT SUMMARY. Three tier cards.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Year 1 Investment',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · THE ASK')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">THE ASK</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Year 1 <span class="accent-pink">investment.</span></div>
        </div>
        <div class="mono accent-mute">TIERED · ACTIONABLE · DOLLAR-SPECIFIC</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem;">
        ${[
          {
            tier: 'TIER 1', label: 'FREE / MINIMAL', range: '$0—$5K', color: 'var(--teal)',
            items: ['Playbook documentation','Wellness survey + leaderboard','Intern program setup','Press distribution list','Supporters group launch']
          },
          {
            tier: 'TIER 2', label: 'MODEST', range: '$15K—$40K', color: 'var(--paper)',
            items: ['CRM + CDP stack ($3-4K/yr)','Pre-season merch inventory','Kids Club welcome packs (100)','World Cup activation campaign','Podcast production upgrade']
          },
          {
            tier: 'TIER 3', label: 'REAL INVESTMENT', range: '$60K—$120K', color: 'var(--pink)',
            items: ['Dedicated S&C coach','GPS / Catapult system','Mobile app (PWA path)','Expanded analyst role','Tailgate + event activation']
          },
        ].map((t, i) => `
          <div class="rev d${i+2}" style="border-top: 4px solid ${t.color}; padding: 1.5rem; background: rgba(244,241,234,0.03); display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <div class="display" style="color: ${t.color}; font-size: 1.5rem; letter-spacing: 0.05em;">${t.tier}</div>
              <div class="mono accent-mute">${t.label}</div>
            </div>
            <div class="num-heavy" style="color: var(--paper); font-size: clamp(2rem, 3vw, 2.6rem);">${t.range}</div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 0.4rem;">
              ${t.items.map(it => `
                <div style="display: grid; grid-template-columns: 10px 1fr; gap: 0.7rem; align-items: baseline; padding: 0.3rem 0; border-bottom: 1px dashed var(--rule);">
                  <div style="width: 6px; height: 6px; background: ${t.color}; margin-top: 0.4rem;"></div>
                  <div style="color: var(--paper); font-size: 0.88rem; line-height: 1.3;">${it}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rev d6" style="background: var(--pink); color: var(--paper); padding: 1.5rem 2rem; display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center;">
        <div class="mono" style="font-weight: 700;">TOTAL YEAR 1</div>
        <div class="display" style="font-size: clamp(1.5rem, 3vw, 2.5rem); letter-spacing: 0.02em;">$75K — $165K</div>
        <div class="serif" style="font-style: italic; font-size: 1rem; max-width: 25ch; text-align: right;">vs. $196K–$236K new net ticket revenue modeled in Year 1 alone.</div>
      </div>
    </div>
  `
});

/* ============================================================
   76 — COST OF INACTION. Red-heavy warning slide.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Cost of Inaction',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · INACTION')}
    <div style="position: absolute; inset: 0; opacity: 0.15;" class="stripes"></div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow" style="color: #FF4444;">ALTERNATIVE</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">The cost of<br><span style="color: #FF4444;">doing nothing.</span></div>
        </div>
        <div class="mono" style="color: #FF4444;">THREE YEARS OF STATUS QUO</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem;">
        ${[
          ['CITY SC MATURES',          'Their academy absorbs St. Louis youth pipeline. FC Ambush softens.'],
          ['KC COMETS EXTENDS LEAD',   'They already average 4,500. TV deal grows. Alumni deepens. Gap widens.'],
          ['WORLD CUP WINDOW PASSES',  'Biggest organic soccer marketing moment in a generation. Activates other clubs.'],
          ['SPONSOR RENEWALS SOFTEN', 'No scorecards or activation. First soft-economy conversation = lost renewal.'],
          ['KEY-PERSON ATTRITION',    'Jeff. Donnie. Dyllan. Without investment, staff absorbs more, output ceiling holds.'],
          ['RELEVANCE COMPRESSES',    'No collapse. Slow erosion. In five years we look like 2015, not 2030.'],
        ].map(([t, d], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="padding: 1.2rem; border-left: 4px solid #FF4444; background: rgba(255, 68, 68, 0.05); display: flex; flex-direction: column; gap: 0.5rem;">
            <div class="display" style="color: #FF4444; font-size: 1.1rem; letter-spacing: 0.04em;">${t}</div>
            <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic; line-height: 1.4;">${d}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d8" style="border-top: 2px solid #FF4444; padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.3rem; color: var(--paper); font-style: italic;">
          The real cost of Year 1 isn't the investment. It's the <span style="color: #FF4444; font-style: normal; font-weight: 600;">cumulative value of what gets lost</span> if we don't make it.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   77 — FINANCIAL GAP ANALYSIS. Three structural constraints.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Financial Gaps',
  cls: 'bg-paper',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · STRUCTURAL')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--ink);"><span class="accent-pink">Three</span> structural constraints.</div>
        <div class="mono" style="color: var(--mute-deep);">WORTH NAMING</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0;">
        ${[
          ['01', 'VENUE CONTROL',        'Concessions, parking, off-season events, premium inventory all gated by a third party.', 'We are the longest-tenured tenant — that has value. Constraint is not permanent.'],
          ['02', 'PLATFORM FEE DRAIN',   '$100K–$170K per season leaving via Ticketmaster fees.',                                     'Addressable within 12–18 months. Highest-ROI infrastructure change available.'],
          ['03', 'LIMITED CAPITAL',      'Year 1 can\'t spend at a Year 3 budget.',                                                    'Sequence: start with zero-cost wins, use returns to fund the next tier, repeat.'],
        ].map(([num, t, problem, fix], i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 80px 1fr 2fr; gap: 2rem; padding: 1.5rem 0; border-top: 1px solid rgba(10,10,10,0.15); align-items: start;">
            <div class="display" style="font-size: clamp(3rem, 5vw, 5rem); color: var(--pink); line-height: 0.85;">${num}</div>
            <div>
              <div class="display" style="color: var(--ink); font-size: 1.3rem; letter-spacing: 0.04em; margin-bottom: 0.3rem;">${t}</div>
              <div class="serif" style="color: var(--mute-deep); font-size: 1rem; font-style: italic;">${problem}</div>
            </div>
            <div style="padding: 1rem; background: var(--ink); color: var(--paper);">
              <div class="mono" style="color: var(--teal); font-weight: 700; margin-bottom: 0.3rem;">TRAJECTORY</div>
              <div class="serif" style="font-size: 0.95rem; font-style: italic; line-height: 1.4;">${fix}</div>
            </div>
          </div>
        `).join('')}
        <div style="border-top: 1px solid rgba(10,10,10,0.15);"></div>
      </div>
    </div>
  `
});

/* ============================================================
   78 — FINANCIAL MODEL. Year 1 vs Year 3 side-by-side.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Financial Model',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · FINANCIAL MODEL')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE · FINANCIAL MODEL</span>
        <div class="display display-lg" style="color: var(--paper);">Sustainable <span class="accent-pink">growth.</span></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <div class="rev d2" style="padding: 2rem; border: 1px solid var(--rule); background: rgba(0,184,169,0.05);">
          <div class="mono accent-teal" style="font-weight: 700; margin-bottom: 1rem;">YEAR 1 · NET TICKET REVENUE</div>
          <div style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
            <div class="num-heavy" style="font-size: clamp(2rem, 4vw, 3rem); color: var(--mute);">$484K</div>
            <div class="display" style="font-size: 2rem; color: var(--pink);">→</div>
            <div class="num-heavy" style="font-size: clamp(2rem, 4vw, 3.5rem); color: var(--teal);">$680K</div>
            <div class="display" style="font-size: 1.5rem; color: var(--mute);">–</div>
            <div class="num-heavy" style="font-size: clamp(2rem, 4vw, 3.5rem); color: var(--teal);">$720K</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 1rem;">
            ${[
              'Avg attendance → 2,800 (WC + student program)',
              'Platform migration → saves $140K-$170K/season',
              'Dynamic pricing → 8-12% improvement',
            ].map(s => `
              <div style="display: grid; grid-template-columns: 10px 1fr; gap: 0.8rem; align-items: baseline;">
                <div style="width: 6px; height: 6px; background: var(--teal); margin-top: 0.4rem;"></div>
                <div style="color: var(--paper); font-size: 0.9rem;">${s}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="rev d3" style="padding: 2rem; border: 2px solid var(--pink); background: rgba(255,61,110,0.08);">
          <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 1rem;">YEAR 3 · NET TICKET REVENUE</div>
          <div style="display: flex; align-items: baseline; gap: 1rem; margin: 1rem 0;">
            <div class="mono accent-mute" style="font-weight: 700;">EXCEEDS</div>
            <div class="num-heavy" style="font-size: clamp(3rem, 6vw, 5rem); color: var(--pink);">$900K</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 1rem;">
            ${[
              'Avg attendance → 3,500 (70% of lower bowl)',
              'Platinum anchor sponsor secured',
              'Merchandise revenue up 40%+',
              'Ancillary as a meaningful line item',
            ].map(s => `
              <div style="display: grid; grid-template-columns: 10px 1fr; gap: 0.8rem; align-items: baseline;">
                <div style="width: 6px; height: 6px; background: var(--pink); margin-top: 0.4rem;"></div>
                <div style="color: var(--paper); font-size: 0.9rem;">${s}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   79 — CELEBRITY & INVESTMENT. Three paths.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Investment Model',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · CAPITAL')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <span class="chip pink">FUTURE · CAPITAL</span>
        </div>
        <div class="display display-lg" style="color: var(--paper);">Who <span class="accent-pink">else</span><br>should have a stake?</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        ${[
          {
            num: '01', t: 'CELEBRITY INVESTOR',
            d: 'KSI changed English lower-division. St. Louis equivalent: <span style="color: var(--teal); font-weight: 600;">Nelly</span> — local roots, national platform, civic credibility.',
            footer: 'The exchange: free tickets, social integration, named section, nominal equity.'
          },
          {
            num: '02', t: 'MCO PATH',
            d: 'A well-documented brand + growing attendance + professional infrastructure + clear venue strategy = meaningful acquisition target.',
            footer: "The Ambush doesn't need to seek an investor. It needs to be worth finding."
          },
          {
            num: '03', t: 'MASL OPEN CUP',
            d: 'Cross-division indoor tournament — MASL vs MASL2 vs MASL3. May through August. Gate split 70/30. Broadcast rights.',
            footer: 'Full proposal ready for league leadership.'
          },
        ].map((c, i) => `
          <div class="rev d${i+2}" style="border-top: 4px solid var(--pink); padding: 1.5rem 0; display: flex; flex-direction: column; gap: 1rem;">
            <div class="display" style="color: var(--pink); font-size: 2.5rem;">${c.num}</div>
            <div class="display" style="color: var(--paper); font-size: 1.3rem; letter-spacing: 0.04em; line-height: 1;">${c.t}</div>
            <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic; line-height: 1.45;">${c.d}</div>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--rule);">
              <div class="mono accent-teal" style="font-weight: 700;">${c.footer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   80 — STRATEGIC RISK REGISTER. Six-card grid.
   ============================================================ */
SLIDES.push({
  section: 'PART VI · FINANCE',
  title: 'Risk Register',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VI · STRATEGIC RISK')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">STRATEGIC RISK</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Risks worth <span class="accent-pink">naming.</span></div>
        </div>
        <div class="mono accent-mute">EACH HAS AN OWNER. REVIEWED QUARTERLY.</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem;">
        ${[
          ['CITY SC ABSORPTION',  'MEDIUM',   'Pipeline pulls youth talent + family attention.'],
          ['VENUE CHANGE',        'LOW-MED',  'Family Arena ownership/management shift.'],
          ['KEY-PERSON RISK',     'MEDIUM',   'Institutional knowledge concentrated in Jeff &amp; Donnie.'],
          ['MASL CONTRACTION',    'LOW',       'League restructuring affects schedule, travel, broadcast.'],
          ['MARQUEE INJURY',      'MEDIUM',   'Key player loss tanks attendance + on-field momentum.'],
          ['ECONOMIC DOWNTURN',   'LOW-MED',  'Discretionary entertainment spend tightens.'],
        ].map(([t, prob, d], i) => {
          const probColor = prob === 'MEDIUM' ? 'var(--pink)' : prob === 'LOW' ? 'var(--teal)' : 'var(--paper)';
          return `
          <div class="rev d${Math.min(i+2, 8)}" style="border-top: 3px solid ${probColor}; padding: 1.2rem 0; display: flex; flex-direction: column; gap: 0.7rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div class="display" style="color: var(--paper); font-size: 1.1rem; letter-spacing: 0.04em;">${t}</div>
              <div class="mono" style="color: ${probColor}; font-weight: 700;">${prob}</div>
            </div>
            <div class="serif" style="color: var(--mute); font-size: 0.95rem; font-style: italic; line-height: 1.4;">${d}</div>
          </div>`;
        }).join('')}
      </div>

      <div class="rev d8 mono accent-mute" style="border-top: 1px solid var(--rule); padding-top: 1rem;">FULL REGISTER MAINTAINED OUTSIDE THIS DECK · MITIGATION OWNERS ASSIGNED</div>
    </div>
  `
});

/* ============================================================
   81 — PART VII DIVIDER. Pink dominant, left-anchored VII.
   ============================================================ */
SLIDES.push({
  section: 'PART VII',
  title: 'Part VII',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · IMPLEMENTATION')}
    <div style="position: absolute; top: -5vh; left: -5vw; font-family: var(--f-display); font-size: 95vh; line-height: 0.8; color: rgba(10,10,10,0.1); letter-spacing: -0.05em; user-select: none;">VII</div>
    <div class="frame" style="grid-template-rows: auto 1fr auto; position: relative;">
      <div class="rev d1" style="display: flex; align-items: center; gap: 2rem;">
        <div style="width: 60px; height: 4px; background: var(--ink);" class="draw-x"></div>
        <div class="mono" style="color: var(--ink); font-weight: 700;">PART VII · THE FINAL PART</div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="wipe display" style="font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--ink);">IMPLEMEN-</div>
        <div class="wipe display" style="transition-delay: 0.15s; font-size: clamp(5rem, 14vw, 16rem); line-height: 0.82; color: var(--paper);">TATION.</div>
      </div>

      <div class="rev d4" style="display: flex; justify-content: space-between; align-items: end; gap: 2rem;">
        <div class="serif" style="font-size: 1.3rem; color: var(--ink); max-width: 50ch; font-style: italic;">
          Roles. Sprint plan. Year 1 and Year 3 blueprints. The KPI scorecard. The closing.
        </div>
        <div class="mono" style="color: var(--ink); font-weight: 700;">EIGHTEEN SLIDES</div>
      </div>
    </div>
  `
});

/* ============================================================
   82 — MY CURRENT ROLE. Resume-density list.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Current Role',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · CURRENT ROLE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-teal">CURRENT · ANALYTICS FUNCTION</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Part-time hours.<br><span class="accent-teal">Full-time impact.</span></div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 3rem;">
        ${[
          'Live analytics dashboard updated through March 2026',
          'Real-time iPad analytics at every home game',
          'Opposition scouting reports, pre-match game sheets',
          'Scenario-based Hudl playlists — press, counters, transitions',
          'Tryout eval system, player surveys, USL2 broadcast tracker',
          'And more across ops, game day, recruiting, development',
        ].map((s, i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: grid; grid-template-columns: 40px 1fr; gap: 1rem; padding: 1rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
            <div class="mono accent-teal" style="font-weight: 700;">${String(i+1).padStart(2,'0')}</div>
            <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic;">${s}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d8" style="border-top: 2px solid var(--pink); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.25rem; color: var(--paper); font-style: italic;">
          The output is real. <span class="accent-pink" style="font-style: normal; font-weight: 600;">The model limits how much further it can go.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   83 — MY FUTURE ROLE. Pink full-bleed with big stacked display.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Future Role',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · FUTURE ROLE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1"><span class="chip paper">FUTURE · THE VISION</span></div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
        <div class="rev d2">
          <div class="display" style="font-size: clamp(3rem, 7vw, 7rem); line-height: 0.88; color: var(--paper);">Embedded<br>intelligence.</div>
          <div class="serif" style="color: var(--ink); font-size: 1.3rem; font-style: italic; margin-top: 2rem;">Not a report.<br>A presence.</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0;">
          ${[
            'The role doesn\'t need a new title. It needs integration.',
            'Proactive delivery — opposition reports two weeks out, wellness live before training, recruitment database current',
            'Agentic AI layer — reports distributed automatically, receipts filed, pricing alerts triggered, campaigns personalized',
            'Compounding value — every season of data makes the next decision better',
            'Enhancements at 3-10× current scope — practice data, personalized reports, league-wide context',
          ].map((s, i) => `
            <div class="rev d${Math.min(i+3, 8)}" style="display: grid; grid-template-columns: 40px 1fr; gap: 1rem; padding: 1rem 0; border-top: 1px solid rgba(244,241,234,0.3); align-items: baseline;">
              <div class="mono" style="color: var(--ink); font-weight: 700;">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; line-height: 1.45;">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   84 — WHY ME / TRACK RECORD. Two-column CV.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Why Me',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · TRACK RECORD')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">TRACK RECORD</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Why <span class="accent-pink">me.</span> Why <span class="accent-teal">now.</span></div>
        </div>
        <div class="mono accent-mute" style="text-align: right; max-width: 30ch;">
          EVERYTHING BELOW WAS BUILT ON MY OWN TIME, WITH NO FORMAL MANDATE
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
        <div class="rev d2">
          <div class="mono accent-teal" style="font-weight: 700; margin-bottom: 1rem;">PROFESSIONAL</div>
          ${[
            'Data Analyst II at Stifel Bank — ETL/ELT, SQL Server, Power BI, R',
            'M.S. Data Science (4.0 GPA), B.S. CS + Applied Math (3.79)',
            'Co-founder Footy Collective — USL pro/rel valuation thesis',
            'MLS Growth Series + World Cup Effect paper (published)',
          ].map(s => `
            <div style="display: grid; grid-template-columns: 16px 1fr; gap: 0.8rem; padding: 0.7rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
              <div style="width: 8px; height: 8px; background: var(--teal); margin-top: 0.4rem;"></div>
              <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>

        <div class="rev d4">
          <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 1rem;">SHIPPED FOR THE AMBUSH</div>
          ${[
            'Streamlit coaching dashboard — ambushdashboard.streamlit.app',
            'USL2 tryout evaluation app',
            'End-of-year player exit survey (React)',
            'MASL Fantasy app prototype',
            'KC Comets playoff scouting report',
            'TST research — statistical analysis + film review',
            'Two-app PWA analytics platform in development',
          ].map(s => `
            <div style="display: grid; grid-template-columns: 16px 1fr; gap: 0.8rem; padding: 0.6rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
              <div style="width: 8px; height: 8px; background: var(--pink); margin-top: 0.4rem;"></div>
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d7" style="border-top: 2px solid var(--paper); padding-top: 1.5rem;">
        <div class="serif" style="font-size: 1.25rem; color: var(--paper); font-style: italic;">
          The track record is the argument. <span class="accent-pink" style="font-style: normal; font-weight: 600;">Expanded scope isn't a bet</span> — it's an extension of what's already working.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   85 — AI OPERATIONS LAYER. Four agent cards.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'AI Operations',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · AGENTIC OPS')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE · AGENTIC OPERATIONS</span>
        <div class="display display-lg" style="color: var(--paper);">A small office<br>punching at <span class="accent-pink">weight.</span></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        ${[
          ['01', 'CONTENT AGENT',   'Auto-generates post-match recaps, social copy, sponsor-tagged graphics. One game → 12 deliverables in under an hour.'],
          ['02', 'CRM AGENT',        'Auto-segments fan list weekly. Triggers welcome, win-back, birthday, pre-game lift campaigns based on behavior.'],
          ['03', 'PRICING AGENT',    'Monitors inventory, days-to-game, opponent tier, demand signals. Surfaces price adjustment recommendations every Monday.'],
          ['04', 'SCOUTING AGENT',   'Monitors league + USL + university tape, surfaces players matching tactical fit matrix, drafts profiles automatically.'],
        ].map(([num, t, d], i) => `
          <div class="rev d${i+2}" style="padding: 2rem; border: 1px solid var(--rule); display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <div class="display" style="color: var(--pink); font-size: 2rem;">${num}</div>
              <div class="display" style="color: var(--paper); font-size: 1.3rem; letter-spacing: 0.04em;">${t}</div>
            </div>
            <div style="width: 100%; height: 2px; background: var(--pink);"></div>
            <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; line-height: 1.45;">${d}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d7" style="background: var(--pink); color: var(--paper); padding: 1.5rem 2rem;">
        <div class="display" style="font-size: clamp(1.3rem, 2.5vw, 2.2rem); letter-spacing: 0.04em; text-align: center;">
          THIS IS THE EDGE NO COMPETING HIRE CAN BRING. <span style="color: var(--ink);">THE WORK IS UNDERWAY.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   86 — DAY IN THE LIFE 2026 VS 2027. Two schedule panels.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Day in the Life',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · 2026 VS 2027')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div class="display display-lg" style="color: var(--paper);">Same <span class="accent-teal">family.</span> Same Saturday.<br>Different <span class="accent-pink">club.</span></div>
        <div class="mono accent-mute">BEFORE / AFTER</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <div class="rev d2" style="padding: 2rem; border: 1px solid var(--rule);">
          <div class="mono accent-mute" style="font-weight: 700; margin-bottom: 1rem;">DEC 2026 · TODAY</div>
          ${[
            ['5:15 PM', 'Arrive. Parking lot is quiet.'],
            ['5:25 PM', 'Merch shelves half-empty. Kids want a jersey — sold out.'],
            ['5:45 PM', 'Grab generic venue concessions.'],
            ['6:05 PM', 'Game starts. Good action. Atmosphere average.'],
            ['7:30 PM', 'Home. Already fading.'],
          ].map(([t, s]) => `
            <div style="display: grid; grid-template-columns: 90px 1fr; gap: 1rem; padding: 0.6rem 0; border-bottom: 1px dashed var(--rule);">
              <div class="mono accent-mute" style="font-weight: 700;">${t}</div>
              <div class="serif" style="color: var(--mute); font-size: 0.95rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>

        <div class="rev d3" style="padding: 2rem; border: 2px solid var(--pink); background: rgba(255,61,110,0.08);">
          <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 1rem;">DEC 2027 · FUTURE</div>
          ${[
            ['4:30 PM', 'Tailgate. Haus Pizza truck. Player booth. Music.'],
            ['5:15 PM', 'Kids Club table. Trading cards. Birthday shoutout on jumbo.'],
            ['5:45 PM', 'New limited merch drop. Kids grab scarves.'],
            ['6:05 PM', 'Supporters section roars. Drums. Chants. Electric.'],
            ['7:30 PM', 'Post-match highlight live before leaving the lot.'],
            ['—',       'Already talking about next game.'],
          ].map(([t, s], i) => `
            <div style="display: grid; grid-template-columns: 90px 1fr; gap: 1rem; padding: 0.6rem 0; border-bottom: 1px dashed rgba(255,61,110,0.3);">
              <div class="mono accent-pink" style="font-weight: 700;">${t}</div>
              <div class="serif" style="color: ${i === 5 ? 'var(--pink)' : 'var(--paper)'}; font-size: 0.95rem; font-style: italic; ${i === 5 ? 'font-weight: 600;' : ''}">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   87 — WOMEN'S PROGRAM. Numbered path.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: "Women's Program",
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · EXPANSION')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">EXPANSION</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Implementing the<br><span class="accent-pink">women's side.</span></div>
        </div>
        <div class="serif accent-mute" style="font-size: 1.1rem; font-style: italic; max-width: 30ch; text-align: right;">Ongoing discussion. This is my suggested path.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0; max-width: 80%;">
        ${[
          'Secure 3-5 additional women\'s teams at FC Ambush first',
          'Larger youth participation creates the natural conversion funnel',
          'From there, the pro discussion can begin — backed by St. Louis demand data',
          'Open questions: same coaching staff or separate? Shared facility? Schedule overlap?',
        ].map((s, i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 60px 1fr; gap: 2rem; padding: 1.2rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
            <div class="display accent-pink" style="font-size: 1.8rem;">${String(i+1).padStart(2,'0')}</div>
            <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic; line-height: 1.4;">${s}</div>
          </div>
        `).join('')}
        <div style="border-top: 1px solid var(--rule);"></div>
      </div>

      <div class="todo-tag" style="align-self: flex-start;">PULL ST. LOUIS WOMEN'S SOCCER DEMAND DATA</div>
    </div>
  `
});

/* ============================================================
   88 — UNIVERSITY BROADCAST PARTNERSHIP. Give/Get two-pane.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Broadcast Partnership',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · BROADCAST')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <span class="chip paper">FUTURE · BROADCAST</span>
        </div>
        <div class="display display-lg" style="color: var(--paper);">One move.<br>Two problems <span class="accent-pink">solved.</span></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <div class="rev d2" style="padding: 2rem; border: 1px solid var(--rule);">
          <div class="mono accent-teal" style="font-weight: 700; margin-bottom: 1rem;">WHAT WE GIVE</div>
          ${[
            'Game-day broadcast access for students in media production',
            'Academic credit agreement with partner programs',
            'Letters of rec + on-air credit for portfolio',
            'Priority hiring when roles open',
          ].map(s => `
            <div style="padding: 0.6rem 0; border-bottom: 1px solid var(--rule);">
              <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>

        <div class="rev d3" style="padding: 2rem; border: 2px solid var(--paper); background: rgba(244,241,234,0.08);">
          <div class="mono" style="color: var(--paper); font-weight: 700; margin-bottom: 1rem;">WHAT WE GET</div>
          ${[
            'Production-quality broadcasts without production costs',
            'Multi-camera coverage, graphics, commentary talent',
            'Full rights retention — we own the feed + archive',
            'University co-markets to their audience',
          ].map(s => `
            <div style="padding: 0.6rem 0; border-bottom: 1px solid rgba(244,241,234,0.3);">
              <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rev d6 mono accent-mute" style="border-top: 1px solid var(--rule); padding-top: 1rem;">
        TARGET: SLU (BILLIKEN BROADCAST NETWORK) · WEBSTER (FILM PROD) · LINDENWOOD (DIGITAL MEDIA) · MARYVILLE (SPORTS BROADCASTING)
      </div>
    </div>
  `
});

/* ============================================================
   89 — 90 DAYS · DAYS 1-60. Two-column sprint breakdown.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: '90 Days · 1-60',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · SPRINT PLAN')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE · SPRINT</span>
        <div class="display display-lg" style="color: var(--paper);"><span class="accent-pink">90 days</span> to season.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

        <div class="rev d2" style="padding: 2rem; border: 1px solid var(--rule);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem;">
            <div class="display" style="color: var(--pink); font-size: 2rem;">DAYS 1-30</div>
            <div class="mono accent-mute">FOUNDATION</div>
          </div>
          ${[
            'Game-day + set-piece playbook written and tested',
            'MASL compliance calendar built + shared',
            'Player appearance assignment calendar built + shared',
            'Press release distribution list established',
            'Pre-season merchandise survey launched',
          ].map((s, i) => `
            <div style="display: grid; grid-template-columns: 30px 1fr; gap: 1rem; padding: 0.6rem 0; border-bottom: 1px dashed var(--rule); align-items: baseline;">
              <div class="mono accent-pink">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>

        <div class="rev d3" style="padding: 2rem; border: 1px solid var(--rule);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem;">
            <div class="display" style="color: var(--pink); font-size: 2rem;">DAYS 31-60</div>
            <div class="mono accent-mute">MOMENTUM</div>
          </div>
          ${[
            'World Cup activation campaign live; emails collected',
            'College student ticket program launched',
            'Sponsor scorecard templates built; sponsors confirmed',
            'Podcast distributed across platforms; "Ambush Voice" live',
            'Wellness survey piloted with the team',
          ].map((s, i) => `
            <div style="display: grid; grid-template-columns: 30px 1fr; gap: 1rem; padding: 0.6rem 0; border-bottom: 1px dashed var(--rule); align-items: baseline;">
              <div class="mono accent-pink">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   90 — 90 DAYS · DAYS 61-90. Pink dominant, close-out.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: '90 Days · 61-90',
  cls: 'bg-pink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · SPRINT CLOSE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1"><span class="chip paper">SPRINT CLOSE-OUT</span></div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="display" style="font-size: clamp(4rem, 10vw, 10rem); line-height: 0.85; color: var(--paper);">DAYS<br><span style="color: var(--ink);">61-90.</span></div>
          <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; margin-top: 2rem;">Pre-season locked. Opening night ready.</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0;">
          ${[
            'Intern program partnerships confirmed across all six target universities',
            'Intern onboardings and orientations completed',
            'Economic impact tracking dashboard live',
            'Kids Club proposal presented to ownership for go/no-go decision',
          ].map((s, i) => `
            <div class="rev d${i+3}" style="display: grid; grid-template-columns: 40px 1fr; gap: 1rem; padding: 1.2rem 0; border-top: 1px solid rgba(244,241,234,0.3); align-items: baseline;">
              <div class="mono" style="color: var(--ink); font-weight: 700;">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 1.05rem; font-style: italic; line-height: 1.4;">${s}</div>
            </div>
          `).join('')}
          <div style="border-top: 1px solid rgba(244,241,234,0.3);"></div>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   91 — YEAR 1 BLUEPRINT. Five pillar rows.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Year 1',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · YEAR 1')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip pink">FUTURE · YEAR 1</span>
        <div class="display display-lg" style="color: var(--paper);"><span class="accent-pink">First full season</span> of the new model.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0;">
        ${[
          ['SPORTING',    'S&C hired. Wellness survey live Day 1. Tactical/set-piece doc distributed. GPS piloted. New data stack replacing Hudl-only.'],
          ['GAME DAY',    'Playbook active. 4 interns per home game. Kids Club launched. Tailgate piloted. Post-match player summaries operational.'],
          ['MARKETING',   'World Cup campaign executed. .edu student live. Platform migration complete. Dynamic pricing manual protocol. "Ambush Voice" live.'],
          ['COMMUNITY',   'Player appearance calendar enforced. Press to KSDK/Fox 2 every major announcement. Economic impact tracking from Day 1.'],
          ['FINANCE',     'Fee savings tracked + reported quarterly. Themed merch drop executed. Sponsor scorecard reviews at six-month marks.'],
        ].map(([label, d], i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 200px 1fr; gap: 2rem; padding: 1.3rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
            <div class="display" style="color: var(--pink); font-size: 1.4rem; letter-spacing: 0.04em;">${label}</div>
            <div class="serif" style="color: var(--paper); font-size: 1rem; font-style: italic; line-height: 1.45;">${d}</div>
          </div>
        `).join('')}
        <div style="border-top: 1px solid var(--rule);"></div>
      </div>
    </div>
  `
});

/* ============================================================
   92 — YEAR 3 BLUEPRINT. Teal full-bleed counterpoint.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Year 3',
  cls: 'bg-teal',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · YEAR 3')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="chip paper">FUTURE · YEAR 3</span>
        <div class="display display-lg" style="color: var(--ink);">What <span style="color: var(--paper);">2029</span> looks like.</div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0;">
        ${[
          ['SPORTING',    'Full staff. Unified tactical identity youth → USL2 → first team. A season of GPS data. At least one Ron Newman Cup Final.'],
          ['FAN BASE',    'Attendance consistently above 3,000. Kids Club 250+. Mobile app with active loyal users. World Cup fans retained.'],
          ['COMMERCIAL',  'Tiered sponsor portfolio with 80%+ renewal. Platinum anchor secured. Ticketing migration live. Merch up 40%.'],
          ['COMMUNITY',   'Annual community impact report. School district partnerships formal. Charity Classic established. Venue conversation underway with three years of data.'],
        ].map(([label, d], i) => `
          <div class="rev d${i+2}" style="display: grid; grid-template-columns: 200px 1fr; gap: 2rem; padding: 1.3rem 0; border-top: 1px solid rgba(10,10,10,0.25); align-items: baseline;">
            <div class="display" style="color: var(--ink); font-size: 1.4rem; letter-spacing: 0.04em;">${label}</div>
            <div class="serif" style="color: var(--ink); font-size: 1rem; font-style: italic; line-height: 1.45;">${d}</div>
          </div>
        `).join('')}
        <div style="border-top: 1px solid rgba(10,10,10,0.25);"></div>
      </div>
    </div>
  `
});

/* ============================================================
   93 — LEAGUE SUGGESTIONS. Four proposal cards.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'League Suggestions',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · LEAGUE')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-teal">LEAGUE</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">What we can <span class="accent-teal">bring</span><br>to MASL.</div>
        </div>
        <div class="mono accent-mute">NOT JUST RECEIVE FROM IT</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        ${[
          ['MASL OPEN CUP',           'Cross-division tournament. May-August. MASL/MASL2/MASL3. Upsets drive press. Full proposal ready.'],
          ['FILM EXCHANGE',            'League-facilitated shared tactical film repository. Raises the analytical standard across clubs.'],
          ['VIDEO ANALYSIS PARTNERSHIP','League-level deal with Hudl or similar, built for the indoor game — pressing, board play, power play.'],
          ['MASL DOCUMENTARY SERIES','Pitched to ESPN+ / Apple TV. Production-grade access series, NWSL-style. Building national audience for indoor.'],
        ].map(([t, d], i) => `
          <div class="rev d${i+2}" style="padding: 1.5rem; border: 1px solid var(--rule); background: rgba(0,184,169,0.03); display: flex; flex-direction: column; gap: 1rem;">
            <div class="display" style="color: var(--teal); font-size: 1.3rem; letter-spacing: 0.04em;">${t}</div>
            <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic; line-height: 1.4;">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   94 — WHAT WE'RE NOT DOING. PASS stamps.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Not Doing',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · SCOPE')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-mute">SCOPE</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">What we're <span class="accent-mute">not</span> doing.</div>
        </div>
        <div class="serif accent-mute" style="font-size: 1.1rem; font-style: italic; max-width: 30ch; text-align: right;">Discipline is what makes the rest achievable.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        ${[
          ['PRO WOMEN\'S TEAM',          'Build youth + adult base at FC Ambush first. Pro launch without foundation is a brand risk.'],
          ['VENUE RENEGOTIATION',         'Current cycle is closed. Invest in data + attendance + economic-impact case for the next opening.'],
          ['OWN PRACTICE FACILITY',       'Capital outlay disproportionate to current revenue. Revisit Year 3 if model matches.'],
          ['FULL-TIME MARKETING DIRECTOR','Deferred Year 2. Interns + AI ops + targeted contractor fills the gap at a fraction of cost.'],
        ].map(([t, d], i) => `
          <div class="rev d${i+2}" style="padding: 1.5rem; border: 1px solid var(--rule); position: relative;">
            <div style="position: absolute; top: 1rem; right: 1rem; font-family: var(--f-display); font-size: 2rem; color: var(--rule); letter-spacing: 0.05em;">PASS</div>
            <div class="display" style="color: var(--paper); font-size: 1.2rem; letter-spacing: 0.04em; margin-bottom: 0.6rem;">${t}</div>
            <div class="serif" style="color: var(--mute); font-size: 0.98rem; font-style: italic; line-height: 1.4;">${d}</div>
          </div>
        `).join('')}
      </div>

      <div class="rev d7" style="border-top: 1px solid var(--rule); padding-top: 1.2rem;">
        <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic;">
          Each of these is on the radar. <span class="accent-pink" style="font-style: normal; font-weight: 600;">None is on the Year 1 plan.</span>
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   95 — DEI & ACCESSIBILITY. Six-card grid.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'DEI & Accessibility',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · VALUES')}
    <div class="frame" style="grid-template-rows: auto 1fr; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-teal">VALUES</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Named explicitly.<br>Not <span class="accent-teal">inferred.</span></div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem;">
        ${[
          ['INCLUSIVE ATMOSPHERE',   'Supporters section code-of-conduct. Heritage Nights. Community programs reflect every part of St. Louis.'],
          ['PHYSICAL ACCESSIBILITY', 'Wheelchair seating audit. Clear signage. Staff trained. Direct feedback channel.'],
          ['SENSORY-FRIENDLY NIGHTS','One per season: reduced jumbotron, adjusted sound, quiet room. A family that couldn\'t come before can.'],
          ['ASL INTERPRETATION',      'National anthem + halftime segments interpreted for a nominated game per season.'],
          ['YOUTH FEE SCALING',      'FC Ambush: need-based enrollment discount. Expands the pipeline.'],
          ['LANGUAGE',                'Game-day signage + key marketing in Spanish where relevant. Low effort, high signal.'],
        ].map(([t, d], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="border-top: 3px solid var(--teal); padding: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
            <div class="display" style="color: var(--teal); font-size: 1.05rem; letter-spacing: 0.04em;">${t}</div>
            <div class="serif" style="color: var(--paper); font-size: 0.92rem; font-style: italic; line-height: 1.4;">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `
});

/* ============================================================
   96 — CONTINUITY PLANNING. Editorial serif + numbered.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'Continuity Planning',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · BEYOND 2030')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">BEYOND 2030</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">Long-term<br><span class="accent-pink">continuity.</span></div>
        </div>
        <div class="serif accent-mute" style="font-size: 1.1rem; font-style: italic; max-width: 30ch; text-align: right;">Flagged for the conversation — not pushed.</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div class="rev d2">
          <div class="serif" style="color: var(--paper); font-size: 1.2rem; font-style: italic; line-height: 1.45;">
            The Ambush has operated for thirty years under a small, tight, owner-led structure. That has been a <span class="accent-pink" style="font-style: normal; font-weight: 600;">strength</span>. At some point in the next decade it becomes a question worth answering deliberately rather than reactively.
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0;">
          <div class="mono accent-pink" style="font-weight: 700; margin-bottom: 0.8rem;">WHAT CONTINUITY COVERS</div>
          ${[
            'Documented roles, decision rights, institutional knowledge transfer',
            'Written operating manuals — sporting, commercial, community',
            'Succession scenarios and what each would require',
            'Relationship ownership — partnerships in people vs. in the club',
          ].map((s, i) => `
            <div class="rev d${i+3}" style="display: grid; grid-template-columns: 30px 1fr; gap: 1rem; padding: 0.8rem 0; border-top: 1px solid var(--rule); align-items: baseline;">
              <div class="mono accent-pink">${String(i+1).padStart(2,'0')}</div>
              <div class="serif" style="color: var(--paper); font-size: 0.98rem; font-style: italic;">${s}</div>
            </div>
          `).join('')}
          <div style="border-top: 1px solid var(--rule);"></div>
        </div>
      </div>

      <div class="rev d7" style="border-top: 1px solid var(--rule); padding-top: 1.2rem;">
        <div class="serif" style="font-size: 1.15rem; color: var(--paper); font-style: italic;">
          Naming the conversation now means it can be <span class="accent-pink" style="font-style: normal; font-weight: 600;">shaped</span>. Avoiding it means it happens to us.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   97 — KPI SCORECARD. The big accountability table.
   ============================================================ */
SLIDES.push({
  section: 'PART VII · ROADMAP',
  title: 'KPI Scorecard',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'PART VII · ACCOUNTABILITY')}
    <div class="frame" style="grid-template-rows: auto 1fr auto; gap: 2rem; padding: clamp(2rem, 4vw, 4rem);">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <div class="eyebrow accent-pink">ACCOUNTABILITY</div>
          <div class="display display-lg" style="color: var(--paper); margin-top: 0.5rem;">How we know<br>it's <span class="accent-pink">working.</span></div>
        </div>
        <div class="mono accent-mute">ONE SCORECARD · OWNED · REVIEWED</div>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 0; border-top: 2px solid var(--paper);">
        ${['METRIC','YEAR 1','YEAR 3','OWNER','CADENCE'].map((h, i) => `
          <div style="padding: 1rem 1.2rem; border-right: ${i<4 ? '1px solid var(--rule)' : 'none'};">
            <div class="mono" style="color: ${i===1 ? 'var(--teal)' : i===2 ? 'var(--pink)' : 'var(--mute)'}; font-weight: 700;">${h}</div>
          </div>
        `).join('')}

        ${[
          ['AVG ATTENDANCE',       '2,800',       '3,500+',      'GM',          'Per game'],
          ['NET TICKET REVENUE',   '$680-720K',   '$900K+',      'Ownership',   'Monthly'],
          ['KIDS CLUB MEMBERS',    '100+',        '250+',        'Community',   'Quarterly'],
          ['SPONSOR RENEWAL',      '70%',         '80%+',        'GM',          'Per renewal'],
          ['EMAIL LIST',           '5,000',       '15,000+',     'Marketing',   'Monthly'],
          ['PLAYOFF APPEARANCE',   'Yes',         'Final once',  'Coach',       'Annual'],
        ].map(([m, y1, y3, own, cad], i) => `
          <div class="rev d${Math.min(i+2, 8)}" style="display: contents;">
            <div style="padding: 1rem 1.2rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule);">
              <div class="display" style="color: var(--paper); font-size: 1.1rem; letter-spacing: 0.04em;">${m}</div>
            </div>
            <div style="padding: 1rem 1.2rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule); background: rgba(0,184,169,0.04);">
              <div class="num-heavy" style="color: var(--teal); font-size: 1.2rem;">${y1}</div>
            </div>
            <div style="padding: 1rem 1.2rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule); background: rgba(255,61,110,0.04);">
              <div class="num-heavy" style="color: var(--pink); font-size: 1.2rem;">${y3}</div>
            </div>
            <div style="padding: 1rem 1.2rem; border-top: 1px solid var(--rule); border-right: 1px solid var(--rule);">
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic;">${own}</div>
            </div>
            <div style="padding: 1rem 1.2rem; border-top: 1px solid var(--rule);">
              <div class="serif" style="color: var(--paper); font-size: 0.95rem; font-style: italic;">${cad}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rev d8" style="border-top: 1px solid var(--rule); padding-top: 1rem;">
        <div class="serif" style="color: var(--paper); font-size: 1.1rem; font-style: italic;">
          Color-coded <span style="color: #FF4444; font-weight: 600; font-style: normal;">red</span> / <span style="color: var(--paper); font-weight: 600; font-style: normal;">neutral</span> / <span style="color: var(--teal); font-weight: 600; font-style: normal;">green</span> at every review. <span class="accent-pink" style="font-style: normal; font-weight: 600;">Misses are not failure.</span> Misses are signal.
        </div>
      </div>
    </div>
  `
});

/* ============================================================
   98 — CLOSING. The hero.
   ============================================================ */
SLIDES.push({
  section: 'BLUEPRINT',
  title: 'Closing',
  cls: 'bg-ink',
  render: (n, total) => `
    ${edgeChrome(n, total, 'CLOSING')}
    <div style="position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(0,184,169,0.12), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(255,61,110,0.12), transparent 60%); pointer-events: none;"></div>

    <div class="frame" style="grid-template-rows: auto 1fr auto; padding: clamp(3rem, 5vw, 6rem); position: relative;">

      <div class="rev d1" style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <div class="eyebrow accent-pink"><span>CLOSING</span></div>
          <div class="mono accent-mute">STRATEGIC BLUEPRINT · APRIL 2026</div>
        </div>
        <div class="mono accent-mute" style="text-align: right;">
          DYLLAN HAGGARD<br>
          <span style="opacity: 0.6;">DATA &amp; VIDEO ANALYST</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center; gap: 1rem;">
        <div class="wipe">
          <div class="display" style="font-size: clamp(4rem, 11vw, 12rem); line-height: 0.88; color: var(--paper);">
            This is the <span class="accent-teal">moment.</span>
          </div>
        </div>
        <div class="wipe" style="transition-delay: 0.15s;">
          <div class="display" style="font-size: clamp(4rem, 11vw, 12rem); line-height: 0.88; color: var(--paper);">
            This is the <span class="accent-pink">map.</span>
          </div>
        </div>
        <div class="wipe" style="transition-delay: 0.3s;">
          <div class="display" style="font-size: clamp(4rem, 11vw, 12rem); line-height: 0.88; color: var(--paper);">
            Let's <span style="position: relative; display: inline-block;">build it<span style="position: absolute; left: 0; right: 0; bottom: 0.08em; height: 3px; background: var(--pink);"></span></span>.
          </div>
        </div>
      </div>

      <div class="rev d6" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding-top: 2.5rem; border-top: 1px solid var(--rule); align-items: start;">
        <div>
          <p class="serif" style="font-size: 1.15rem; color: var(--paper); font-style: italic; line-height: 1.4; max-width: 52ch;">
            A football club is not one business — it is twenty businesses operating simultaneously. The clubs that win at this level don't win because they have more money. They win because they <span class="accent-teal" style="font-weight: 600; font-style: normal;">out-operate, out-prepare, and out-connect.</span>
          </p>
        </div>
        <div>
          <p class="serif" style="font-size: 1.15rem; color: var(--paper); font-style: italic; line-height: 1.4; max-width: 52ch;">
            The St. Louis Ambush has something that cannot be manufactured: <span class="accent-pink" style="font-weight: 600; font-style: normal;">genuine roots.</span> This deck takes what's already here — the talent, the community, the ambition, the love for the club — and builds a map from where we are to where we could be.
          </p>
        </div>
      </div>

    </div>
  `
});
