'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Lockup } from './brand';

// Shared across all pages. Nav points at home-page sections ("/#…") so it works
// from /support, /privacy, /terms too; "Support" + the trial CTA point at the
// standalone /support page (a real URL Amazon / Meta reviewers can validate).
const NAV = [
  ['Features', '/#features'],
  ['Pricing', '/#pricing'],
  ['Support', '/support'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250,250,247,0.82)' : 'rgba(250,250,247,0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--rule)' : 'transparent'}`,
      transition: 'background .2s ease, border-color .2s ease',
    }}>
      <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Link href="/" aria-label="Lazlo home"><Lockup /></Link>

        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }} aria-label="Primary">
          {NAV.map(([label, href]) => (
            <Link key={href} href={href} style={{ padding: '8px 14px', fontSize: 14.5, fontWeight: 500, color: 'var(--ink)', borderRadius: 8 }}>{label}</Link>
          ))}
        </nav>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link className="btn btn-elec" href="/support">Start your 1-month free trial</Link>
        </div>

        <button className="nav-mobile-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} style={{
          display: 'none', background: 'none', border: '1px solid var(--rule)', borderRadius: 9, width: 42, height: 42,
          cursor: 'pointer', flexDirection: 'column', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 18, height: 1.7, background: 'var(--ink)', borderRadius: 2 }}></span>
          <span style={{ width: 18, height: 1.7, background: 'var(--ink)', borderRadius: 2 }}></span>
          <span style={{ width: 18, height: 1.7, background: 'var(--ink)', borderRadius: 2 }}></span>
        </button>
      </div>

      {open && (
        <div className="nav-mobile-panel" style={{ borderTop: '1px solid var(--rule)', background: 'var(--bone)', padding: '10px var(--pad) 18px' }}>
          {NAV.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '13px 4px', fontSize: 16, fontWeight: 500, borderBottom: '1px solid var(--rule-soft)' }}>{label}</Link>
          ))}
          <Link className="btn btn-elec btn-block btn-lg" href="/support" onClick={() => setOpen(false)} style={{ marginTop: 14 }}>Start your 1-month free trial</Link>
        </div>
      )}
    </header>
  );
}
