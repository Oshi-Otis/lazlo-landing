// =====================================================================
// LAZLO — Marketing site · sections part 2
// Pricing · Trust band   (home-page-only → in-page "#support" hrefs are safe)
// =====================================================================

import { P, Lockup, Eyebrow, Icons, Pill } from './brand';
import { SIGNUP_URL } from '../lib/links';

// NOTE (pricing — TBC): prices below are carried verbatim from the Claude Design
// mockup. Per the L165 brief they are placeholders to be confirmed before publish.
// The site ships noindex (see app/layout.jsx) until these are signed off.
const TIERS = [
  {
    name: 'Unified KPI Dashboard',
    price: '£29',
    who: 'True profit visibility across every channel.',
    features: [
      'Multi-channel Profit Dashboard — Shopify, Amazon, Not On The High Street & email',
      'Landed Cost Manager — real margins after freight, duty & packaging',
      'Real-time data refresh',
    ],
    popular: false,
  },
  {
    name: 'Inventory Automation',
    price: '£99',
    who: 'Everything in Unified KPI Dashboard, plus operations & planning.',
    features: [
      'Inventory & Stock Sync across warehouses and Amazon FBA',
      'Demand Forecasting & Reorder — ~400 SKUs in minutes',
      'Supplier & Purchase Order management',
    ],
    popular: true,
  },
  {
    name: 'Full Platform',
    price: '£299',
    who: 'Everything in Inventory Automation, plus reporting & growth tools.',
    features: [
      'Executive Reporting & Alerts — daily digests, exception alerts',
      'Amazon PPC analytics, Payout Reconciliation & Opportunity Engine (rolling out)',
      'Priority support',
    ],
    popular: false,
  },
];

function PriceCard({ tier }) {
  const pop = tier.popular;
  return (
    <div className="price-card" style={{
      position: 'relative', display: 'flex', flexDirection: 'column',
      background: pop ? P.navy : 'var(--surf)',
      color: pop ? P.bone : 'var(--ink)',
      border: pop ? '1px solid ' + P.navy : '1px solid var(--rule)',
      borderRadius: 16, padding: '28px 26px 30px',
      boxShadow: pop ? '0 34px 64px -30px rgba(11,18,32,0.55)' : '0 1px 0 rgba(11,18,32,0.03)',
    }}>
      {pop && (
        <div style={{ position: 'absolute', top: -12, left: 26 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
            background: P.elec, color: P.navy, padding: '5px 11px', borderRadius: 999, fontWeight: 600 }}>Most popular</span>
        </div>
      )}

      <h3 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em', margin: 0,
        color: pop ? P.bone : 'var(--ink)' }}>{tier.name}</h3>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
        <span style={{ fontFamily: '"JetBrains Mono",monospace', fontWeight: 600, fontSize: 42, letterSpacing: '-0.02em',
          color: pop ? P.bone : 'var(--ink)' }}>{tier.price}</span>
        <span className="mono" style={{ fontSize: 12, color: pop ? 'var(--bone-55)' : 'var(--slate)' }}>/mo incl. VAT</span>
      </div>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', color: pop ? 'var(--bone-40)' : 'var(--slate-2,#8A909B)', marginTop: 5 }}>BILLED MONTHLY</div>

      <p style={{ fontSize: 14, lineHeight: 1.5, margin: '16px 0 0', color: pop ? 'var(--bone-70)' : 'var(--slate)' }}>{tier.who}</p>

      <hr style={{ height: 1, border: 0, margin: '20px 0', background: pop ? 'var(--rule-inv)' : 'var(--rule)' }} />

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {tier.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
            <span style={{ flexShrink: 0, marginTop: 1, width: 18, height: 18, borderRadius: 5,
              background: pop ? 'rgba(124,224,138,0.18)' : 'rgba(61,177,84,0.12)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icons.check size={12} stroke={pop ? P.elec : P.elecDeep} />
            </span>
            <span style={{ fontSize: 14, lineHeight: 1.5, color: pop ? 'var(--bone-70)' : 'var(--ink)' }}>{f}</span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <a className={pop ? 'btn btn-elec btn-block btn-lg' : 'btn btn-primary btn-block btn-lg'} href={SIGNUP_URL}>Start your 1-month free trial</a>
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.08em', textAlign: 'center',
          color: pop ? 'var(--bone-55)' : 'var(--slate)' }}>NO CARD REQUIRED</span>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" style={{ paddingTop: 84, paddingBottom: 84, scrollMarginTop: 72, background: 'var(--bone)' }}>
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 680, marginBottom: 44 }}>
          <Eyebrow elec>Pricing</Eyebrow>
          <h2 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '14px 0 16px' }}>
            Simple, monthly, all-in.
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.55, color: 'var(--slate)', margin: 0 }}>
            Prices in GBP, shown including VAT and billed monthly. Start any plan with a
            one-month free trial — no card, no commitment.
          </p>
        </div>

        <div className="pricing-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, alignItems: 'start' }}>
          {TIERS.map((t) => <PriceCard key={t.name} tier={t} />)}
        </div>

        <p className="reveal mono" style={{ marginTop: 22, fontSize: 11.5, letterSpacing: '0.04em', color: 'var(--slate)', textAlign: 'center' }}>
          All plans include read-only data connections · UK support · cancel anytime.
        </p>
      </div>
    </section>
  );
}

// ── Trust band ────────────────────────────────────────────────────────
export function TrustBand() {
  const points = [
    ['shield', 'Read-only access', 'Lazlo connects to your channels read-only. We never place orders, move stock or touch payouts.'],
    ['lock', 'Your data stays yours', 'Encrypted in transit and at rest. Export or delete it any time — no lock-in, no resale, ever.'],
    ['pin', 'Built in the UK', 'Designed and operated by Oshi Group Ltd in Epsom, Surrey. Support answered by the team that built it.'],
  ];
  return (
    <section style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30, flexWrap: 'wrap' }}>
          <Lockup markSize={26} wordSize={18} />
          <span style={{ width: 1, height: 18, background: 'var(--rule)' }}></span>
          <span style={{ fontFamily: 'Geist,sans-serif', fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
            Built by <strong style={{ fontWeight: 600 }}>Oshi Group Ltd</strong>, United Kingdom.
          </span>
        </div>

        <div className="trust-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {points.map(([icon, title, body]) => {
            const Glyph = Icons[icon];
            return (
              <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, background: 'var(--surf)',
                  border: '1px solid var(--rule)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Glyph size={21} />
                </span>
                <div>
                  <h3 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 16, margin: '2px 0 6px', letterSpacing: '-0.01em' }}>{title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--slate)', margin: 0 }}>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
