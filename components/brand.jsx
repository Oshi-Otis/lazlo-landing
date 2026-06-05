// =====================================================================
// LAZLO — Marketing site · brand primitives
// Palette, logo mark, wordmark, channel marks, module icons, shared bits.
// Ported verbatim from the Claude Design mockup (source of truth).
// =====================================================================

export const P = {
  bone: '#FAFAF7', paper: '#F4F2EC', surf: '#FFFFFF',
  navy: '#13243F', navyDeep: '#0B1A30',
  elec: '#7CE08A', elecDeep: '#3DB154',
  ink: '#0B1220', slate: '#6B7280',
};

export const CARTOUCHE = 'M18 4 L82 4 L96 18 L96 82 L82 96 L18 96 L4 82 L4 18 Z';

// ── Cartouche "L" — the master mark ───────────────────────────────────
export function LogoCartouche({ size = 40, bg = P.navy, fg = P.elec }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }} aria-hidden="true">
      <path d={CARTOUCHE} fill={bg} />
      <rect x="32" y="24" width="14" height="52" fill={fg} />
      <rect x="32" y="62" width="36" height="14" fill={fg} />
      <rect x="62" y="22" width="8" height="8" fill={fg} />
    </svg>
  );
}

// ── Wordmark ──────────────────────────────────────────────────────────
export function Wordmark({ size = 22, weight = 700, color = P.ink, ls = '-0.035em' }) {
  return (
    <span style={{ fontFamily: 'Geist,sans-serif', fontWeight: weight, fontSize: size,
      letterSpacing: ls, color, lineHeight: 1 }}>Lazlo</span>
  );
}

// ── Horizontal lockup ─────────────────────────────────────────────────
export function Lockup({ markSize = 30, wordSize = 22, color = P.ink, gap = 11 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <LogoCartouche size={markSize} />
      <Wordmark size={wordSize} color={color} />
    </span>
  );
}

// ── Eyebrow / kicker ──────────────────────────────────────────────────
export function Eyebrow({ children, light, elec, style }) {
  const cls = light ? 'eyebrow-light' : (elec ? 'eyebrow eyebrow-elec' : 'eyebrow');
  return <div className={cls} style={style}>{children}</div>;
}

// ── Channel marks — original geometric monogram tiles (not platform logos)
// A neutral tile system so the page reads as "connects to" without
// reproducing any third-party brand mark.
export function ChannelTile({ letter, sub, tone = 'navy', soon }) {
  const dark = tone === 'navy';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
      <div style={{
        width: 42, height: 42, borderRadius: 11, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: dark ? P.navy : P.surf,
        border: dark ? 'none' : `1px solid ${'rgba(11,18,32,0.12)'}`,
        boxShadow: dark ? 'none' : '0 1px 0 rgba(11,18,32,0.03)',
      }}>
        <span style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, fontSize: 20,
          letterSpacing: '-0.03em', color: dark ? P.elec : P.navy }}>{letter}</span>
      </div>
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 14.5, color: P.ink, whiteSpace: 'nowrap' }}>{sub}</div>
        {soon && <div className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', color: P.slate, marginTop: 3 }}>COMING SOON</div>}
      </div>
    </div>
  );
}

// ── Module icons — simple geometric line glyphs on a 24 grid ──────────
const ic = (paths) => ({ size = 22, stroke = P.navy, sw = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths}
  </svg>
);

export const Icons = {
  // Profit Dashboard — split bars / P&L
  profit: ic(<g>
    <rect x="3" y="13" width="3.6" height="7" rx="0.6" />
    <rect x="10.2" y="9" width="3.6" height="11" rx="0.6" />
    <rect x="17.4" y="5" width="3.6" height="15" rx="0.6" />
    <path d="M3 4.5h6.5" />
  </g>),
  // Landed Cost — layers / stack
  cost: ic(<g>
    <path d="M12 3 L21 7.5 L12 12 L3 7.5 Z" />
    <path d="M3 12 L12 16.5 L21 12" />
    <path d="M3 16.5 L12 21 L21 16.5" />
  </g>),
  // Inventory & Stock Sync — box + sync
  inventory: ic(<g>
    <path d="M4 8 L12 4 L20 8 L20 16 L12 20 L4 16 Z" />
    <path d="M4 8 L12 12 L20 8" />
    <path d="M12 12 L12 20" />
  </g>),
  // Demand Forecasting — trend line + point
  forecast: ic(<g>
    <path d="M3 16 L8.5 11 L12.5 14 L21 5" />
    <path d="M21 9 V5 H17" />
    <circle cx="8.5" cy="11" r="1.1" fill={P.navy} stroke="none" />
    <circle cx="12.5" cy="14" r="1.1" fill={P.navy} stroke="none" />
  </g>),
  // Supplier & PO — document / list
  supplier: ic(<g>
    <rect x="5" y="3" width="14" height="18" rx="1.6" />
    <path d="M8.5 8 H15.5" />
    <path d="M8.5 12 H15.5" />
    <path d="M8.5 16 H12.5" />
  </g>),
  // Executive Reporting & Alerts — bell over rule
  reporting: ic(<g>
    <path d="M7 10 a5 5 0 0 1 10 0 c0 4 1.4 5.5 2 6.2 H5 c0.6 -0.7 2 -2.2 2 -6.2 Z" />
    <path d="M10.2 19.5 a2 2 0 0 0 3.6 0" />
  </g>),
  // small inline utility glyphs
  check: ({ size = 16, stroke = P.elecDeep, sw = 2 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12.5 L9.5 18 L20 6" /></svg>
  ),
  arrow: ({ size = 16, stroke = 'currentColor', sw = 1.8 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12 H19" /><path d="M13 6 L19 12 L13 18" /></svg>
  ),
  shield: ({ size = 22, stroke = P.navy, sw = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 L19 6 V11 c0 5 -3.4 8 -7 9.5 C8.4 19 5 16 5 11 V6 Z" /><path d="M9 12 L11 14 L15 9.5" /></svg>
  ),
  lock: ({ size = 22, stroke = P.navy, sw = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10 V7.5 a4 4 0 0 1 8 0 V10" /></svg>
  ),
  pin: ({ size = 22, stroke = P.navy, sw = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21 c4 -5 6 -8 6 -11 a6 6 0 0 0 -12 0 c0 3 2 6 6 11 Z" /><circle cx="12" cy="10" r="2.2" /></svg>
  ),
  mail: ({ size = 22, stroke = P.navy, sw = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5 L12 13 L20.5 6.5" /></svg>
  ),
  phone: ({ size = 22, stroke = P.navy, sw = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3 H9 L10.5 8 L8.2 9.6 a11 11 0 0 0 5.2 5.2 L15 12.5 L20 14 V17 a2 2 0 0 1 -2.2 2 A15 15 0 0 1 4 6.2 A2 2 0 0 1 6 4 Z" /></svg>
  ),
};

// ── Plus / coming-soon pill ───────────────────────────────────────────
export function Pill({ children, tone = 'soon' }) {
  const styles = {
    soon: { bg: 'rgba(11,18,32,0.05)', col: P.slate, bd: 'rgba(11,18,32,0.10)' },
    elec: { bg: P.elec, col: P.navy, bd: 'transparent' },
    navy: { bg: P.navy, col: P.elec, bd: 'transparent' },
  }[tone];
  return (
    <span className="mono" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, letterSpacing: '0.12em',
      textTransform: 'uppercase', padding: '4px 9px', borderRadius: 999, whiteSpace: 'nowrap',
      background: styles.bg, color: styles.col, border: `1px solid ${styles.bd}`,
    }}>{children}</span>
  );
}
