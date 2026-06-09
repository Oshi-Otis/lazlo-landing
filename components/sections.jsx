// =====================================================================
// LAZLO — Marketing site · sections part 1
// Hero (+P&L visual) · Channel strip · Features · How it works
// These are home-page-only, so in-page hrefs ("#support", "#features") are safe.
// =====================================================================

import { P, LogoCartouche, Eyebrow, ChannelTile, Icons, Pill } from './brand';
import { SIGNUP_URL } from '../lib/links';

// ── Hero ──────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="wrap hero-grid" style={{ paddingTop: 64, paddingBottom: 72 }}>
        <div className="hero-copy reveal in">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
            <Pill tone="navy">For multi-channel sellers</Pill>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.06em', color: 'var(--slate)' }}>Shopify · Amazon · NOTHS · Email</span>
          </div>

          <h1 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.02,
            fontSize: 'clamp(40px, 6vw, 68px)', margin: '0 0 22px' }}>
            Every channel&apos;s<br />profit, in one place.
          </h1>

          <p style={{ fontSize: 'clamp(17px,2.1vw,20px)', lineHeight: 1.55, color: 'var(--slate)', maxWidth: 520, margin: '0 0 32px', fontWeight: 450 }}>
            Lazlo unifies your sales, costs, inventory, ad spend and forecasting across
            every channel into one source of truth — so you know your true margin, and
            exactly what to reorder, before the day starts.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <a className="btn btn-elec btn-lg" href={SIGNUP_URL}>Start your 1-month free trial <Icons.arrow size={16} stroke={P.navy} /></a>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', color: 'var(--slate)', paddingLeft: 2 }}>NO CARD REQUIRED</span>
            </div>
            <a className="btn btn-ghost btn-lg" href="#features" style={{ alignSelf: 'flex-start' }}>See features</a>
          </div>
        </div>

        <div className="hero-visual reveal in">
          <PnlDashboard />
        </div>
      </div>
      <hr className="rule" />
    </section>
  );
}

// ── Stylised unified P&L dashboard (hero visual) ──────────────────────
function PnlDashboard() {
  const channels = [
    ['Shopify', '£48,210', '+12.4%', 'up'],
    ['Amazon', '£61,540', '+4.1%', 'up'],
    ['NOTHS', '£9,180', '−2.3%', 'down'],
    ['Email', '£14,705', '+18.6%', 'up'],
  ];
  const bars = [38, 52, 44, 61, 57, 72, 66, 80, 74, 88];
  return (
    <div style={{
      background: P.navy, borderRadius: 18, padding: '22px 22px 24px',
      boxShadow: '0 30px 60px -28px rgba(11,18,32,0.45), 0 2px 0 rgba(11,18,32,0.10)',
      border: '1px solid rgba(11,18,32,0.30)', color: P.bone, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: -70, top: -70, opacity: 0.05, pointerEvents: 'none' }}>
        <LogoCartouche size={300} bg={P.elec} fg={P.navy} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <LogoCartouche size={22} />
          <span style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 13.5, color: P.bone }}>Profit Dashboard</span>
        </div>
        <span className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--bone-55)' }}>LAST 28 DAYS</span>
      </div>

      <hr style={{ height: 1, background: 'var(--rule-inv)', border: 0, margin: '16px 0' }} />

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative' }}>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--bone-55)' }}>NET PROFIT · TRUE</div>
          <div style={{ fontFamily: '"JetBrains Mono",monospace', fontWeight: 600, fontSize: 40, letterSpacing: '-0.02em', marginTop: 6, lineHeight: 1 }}>£42,318</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(124,224,138,0.16)', color: P.elec, padding: '3px 8px', borderRadius: 6 }} className="mono">
              <span style={{ fontSize: 11, fontWeight: 600 }}>▲ 9.8%</span>
            </span>
            <span className="mono" style={{ fontSize: 10.5, color: 'var(--bone-55)', letterSpacing: '0.04em' }}>vs prior 28-day</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 70 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ width: 7, height: `${h}%`, borderRadius: 2,
              background: i === bars.length - 1 ? P.elec : 'rgba(244,242,236,0.22)' }} />
          ))}
        </div>
      </div>

      <hr style={{ height: 1, background: 'var(--rule-inv-soft)', border: 0, margin: '18px 0 6px' }} />

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 8, padding: '8px 0 6px' }}>
          <span className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', color: 'var(--bone-40)' }}>CHANNEL</span>
          <span className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', color: 'var(--bone-40)', textAlign: 'right' }}>REVENUE</span>
          <span className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', color: 'var(--bone-40)', textAlign: 'right', minWidth: 56 }}>Δ</span>
        </div>
        {channels.map(([name, rev, delta, dir]) => (
          <div key={name} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 8, alignItems: 'center',
            padding: '9px 0', borderTop: '1px solid var(--rule-inv-soft)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <span style={{ width: 7, height: 7, borderRadius: 2, background: dir === 'up' ? P.elec : '#E58A8A' }}></span>
              <span style={{ fontFamily: 'Geist,sans-serif', fontWeight: 500, fontSize: 13.5, color: P.bone }}>{name}</span>
            </span>
            <span className="mono" style={{ fontSize: 12.5, color: P.bone, textAlign: 'right' }}>{rev}</span>
            <span className="mono" style={{ fontSize: 11.5, textAlign: 'right', minWidth: 56,
              color: dir === 'up' ? P.elec : '#E58A8A' }}>{delta}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, background: 'rgba(124,224,138,0.10)', border: '1px solid rgba(124,224,138,0.22)',
        borderRadius: 10, padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
        <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 6, background: P.elec, color: P.navy,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icons.check size={13} stroke={P.navy} /></span>
        <span style={{ fontSize: 12.5, lineHeight: 1.4, color: 'var(--bone-70)' }}>
          <b style={{ color: P.bone, fontWeight: 600 }}>Reorder DRPR-LTHR-S by Fri</b> — stocks out Sept 4 at current velocity.
        </span>
      </div>
    </div>
  );
}

// ── Channel strip ─────────────────────────────────────────────────────
export function ChannelStrip() {
  const live = [
    ['S', 'Shopify'], ['a', 'Amazon'], ['N', 'Not On The High Street'], ['K', 'Klaviyo'],
  ];
  const soon = [
    ['G', 'Google Ads'], ['M', 'Meta'],
  ];
  return (
    <section style={{ background: 'var(--bone)' }}>
      <div className="wrap reveal" style={{ paddingTop: 34, paddingBottom: 34 }}>
        <div className="channel-row" style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0 }}>
            <Eyebrow>Connects to</Eyebrow>
            <div style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 15, marginTop: 6, color: 'var(--ink)', maxWidth: 150, lineHeight: 1.3 }}>
              Your stack, already supported
            </div>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--rule)' }} className="channel-divider"></div>
          <div className="channel-marks" style={{ display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap', flex: 1 }}>
            {live.map(([l, s]) => <ChannelTile key={s} letter={l} sub={s} />)}
            {soon.map(([l, s]) => <ChannelTile key={s} letter={l} sub={s} tone="paper" soon />)}
          </div>
        </div>
      </div>
      <hr className="rule" />
    </section>
  );
}

// ── Features grid ─────────────────────────────────────────────────────
const FEATURES = [
  ['profit', 'Profit Dashboard', 'True per-channel P&L across Shopify, Amazon, NOTHS and email — one number you can trust.'],
  ['cost', 'Landed Cost Manager', 'Real product margins after freight, duty and packaging — not just the supplier invoice.'],
  ['inventory', 'Inventory & Stock Sync', 'Live stock across every warehouse and Amazon FBA, reconciled to one view.'],
  ['forecast', 'Demand Forecasting & Reorder', 'Know what to reorder and when — around 400 SKUs forecast in minutes.'],
  ['supplier', 'Supplier & Purchase Orders', 'Manage suppliers and generate purchase orders without leaving Lazlo.'],
  ['reporting', 'Executive Reporting & Alerts', 'Daily digests and exception alerts — the morning report you actually open.'],
];

function FeatureCard({ icon, title, body }) {
  const Glyph = Icons[icon];
  return (
    <article className="feature-card" style={{
      background: 'var(--surf)', border: '1px solid var(--rule)', borderRadius: 14, padding: '24px 24px 26px',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <span style={{ width: 46, height: 46, borderRadius: 11, background: 'var(--paper)', border: '1px solid var(--rule-soft)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Glyph size={23} /></span>
      <h3 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 18.5, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--slate)', margin: 0 }}>{body}</p>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" style={{ paddingTop: 84, paddingBottom: 84, scrollMarginTop: 80 }}>
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 680, marginBottom: 44 }}>
          <Eyebrow elec>The platform</Eyebrow>
          <h2 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '14px 0 16px' }}>
            One source of truth for the whole shop.
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.55, color: 'var(--slate)', margin: 0 }}>
            Six modules that replace the spreadsheets, the channel tabs and the guesswork.
            Each pulls from the same unified data, so the numbers always agree.
          </p>
        </div>

        <div className="feature-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {FEATURES.map(([icon, title, body]) => <FeatureCard key={title} icon={icon} title={title} body={body} />)}
        </div>

        <div className="reveal" style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
          background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 12, padding: '16px 20px' }}>
          <Pill tone="soon">Rolling out</Pill>
          <span style={{ fontSize: 14.5, color: 'var(--ink)', fontWeight: 500 }}>
            Coming soon — Amazon PPC analytics, Payout Reconciliation, and the Opportunity Engine.
          </span>
        </div>
      </div>
    </section>
  );
}

// ── How it works ──────────────────────────────────────────────────────
const STEPS = [
  ['01', 'Connect your channels', 'Securely link Shopify, Amazon, Not On The High Street and Klaviyo with read-only access. No spreadsheets, no CSV exports.'],
  ['02', 'Lazlo unifies the data', 'We reconcile sales, fees, landed costs, ad spend and stock into one model — fees, freight and duty included.'],
  ['03', 'See true profit & what to reorder', 'Open one screen for real per-channel margin, plus a forecast that tells you exactly what to reorder and when.'],
];

export function HowItWorks() {
  return (
    <section style={{ background: P.navy, color: P.bone, paddingTop: 84, paddingBottom: 84 }}>
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 680, marginBottom: 48 }}>
          <Eyebrow light style={{ color: P.elec }}>How it works</Eyebrow>
          <h2 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '14px 0 0', color: P.bone }}>
            From connected to clear in three steps.
          </h2>
        </div>

        <div className="steps-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0,
          borderTop: '1px solid var(--rule-inv)' }}>
          {STEPS.map(([n, title, body], i) => (
            <div key={n} style={{ padding: '30px 28px 30px 0', position: 'relative',
              borderRight: i < STEPS.length - 1 ? '1px solid var(--rule-inv-soft)' : 'none' }} className="step-cell">
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.16em', color: P.elec }}>STEP {n}</div>
              <h3 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 21, letterSpacing: '-0.02em', margin: '16px 0 12px', color: P.bone, lineHeight: 1.2, maxWidth: '14ch' }}>{title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--bone-70)', margin: 0, maxWidth: '34ch' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
