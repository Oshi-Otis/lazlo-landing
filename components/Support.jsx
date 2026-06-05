'use client';

import { useState } from 'react';
import Link from 'next/link';
import { P, Eyebrow, Icons } from './brand';

// Support / Contact section. Doubles as the free-trial lead capture.
//
// Hosted form via Formspree (works on a pure static host — no backend, no secret):
//   1. Create a free form at https://formspree.io aimed at support@oshigroup.co.uk
//   2. Paste its endpoint below, e.g. 'https://formspree.io/f/abcdwxyz'
// While FORMSPREE_ENDPOINT is empty, the form falls back to opening the visitor's
// mail client (mailto:). Once set, submissions are sent automatically (AJAX).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqznzjn';

export default function Support() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (FORMSPREE_ENDPOINT) {
      setSending(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...form, _subject: `Lazlo free trial — ${form.company || form.name || form.email}` }),
        });
        if (res.ok) setSent(true);
        else setError('Something went wrong — please email support@oshigroup.co.uk directly.');
      } catch {
        setError('Couldn’t send just now — please email support@oshigroup.co.uk directly.');
      } finally {
        setSending(false);
      }
    } else {
      // No hosted endpoint yet → open the visitor's mail client, pre-filled.
      const subject = `Lazlo free trial — ${form.company || form.name || form.email}`;
      const body = [
        `Name: ${form.name}`, `Company: ${form.company}`, `Email: ${form.email}`,
        '', 'Where do you sell?', form.message,
      ].join('\n');
      window.location.href =
        `mailto:support@oshigroup.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent(true);
    }
  };

  const field = {
    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--rule)',
    background: 'var(--surf)', fontSize: 15, color: 'var(--ink)', outline: 'none', fontFamily: 'Geist,sans-serif',
  };
  const labelStyle = { fontFamily: 'Geist,sans-serif', fontWeight: 500, fontSize: 13, color: 'var(--ink)', marginBottom: 7, display: 'block' };

  return (
    <section id="support" style={{ paddingTop: 84, paddingBottom: 84, scrollMarginTop: 64 }}>
      <div className="wrap support-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'start' }}>
        {/* left — support details */}
        <div className="reveal">
          <Eyebrow elec>Support &amp; free trial</Eyebrow>
          <h2 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.6vw,40px)', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '14px 0 16px' }}>
            Talk to a human. Start in a day.
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--slate)', margin: '0 0 30px', maxWidth: 380 }}>
            Tell us where you sell and we&apos;ll get your free trial set up — onboarding is
            handled personally by our UK team. No card, no payment, no account to configure.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href="mailto:support@oshigroup.co.uk" className="contact-line" style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              <span style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--paper)', border: '1px solid var(--rule)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icons.mail size={20} /></span>
              <span>
                <span className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--slate)', display: 'block' }}>EMAIL SUPPORT</span>
                <span style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 15.5, color: 'var(--ink)' }}>support@oshigroup.co.uk</span>
              </span>
            </a>
          </div>

          <div style={{ marginTop: 26, padding: '16px 18px', background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 12 }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--slate)', margin: 0 }}>
              Typical response within one business day, Monday–Friday. Existing customers can
              also reach support directly from inside Lazlo.
            </p>
          </div>
        </div>

        {/* right — lead-capture form */}
        <div className="reveal" style={{ background: 'var(--surf)', border: '1px solid var(--rule)', borderRadius: 16, padding: '30px 30px 32px',
          boxShadow: '0 24px 50px -34px rgba(11,18,32,0.30)' }}>
          {!sent ? (
            <form onSubmit={onSubmit} noValidate>
              <h3 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 20, letterSpacing: '-0.02em', margin: '0 0 6px' }}>Start your 1-month free trial</h3>
              <p style={{ fontSize: 14, color: 'var(--slate)', margin: '0 0 22px', lineHeight: 1.5 }}>Leave your email and we&apos;ll be in touch to set you up. <span style={{ color: 'var(--ink)', fontWeight: 500 }}>No card required.</span></p>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={labelStyle} htmlFor="f-name">Name</label>
                  <input id="f-name" style={field} value={form.name} onChange={set('name')} placeholder="Your name" autoComplete="name" />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="f-company">Company</label>
                  <input id="f-company" style={field} value={form.company} onChange={set('company')} placeholder="Your shop" autoComplete="organization" />
                </div>
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle} htmlFor="f-email">Work email <span style={{ color: 'var(--danger)' }}>*</span></label>
                <input id="f-email" type="email" required style={field} value={form.email} onChange={set('email')} placeholder="you@yourshop.com" autoComplete="email" />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle} htmlFor="f-msg">Where do you sell? <span style={{ color: 'var(--slate)', fontWeight: 400 }}>(optional)</span></label>
                <textarea id="f-msg" rows="3" style={{ ...field, resize: 'vertical', minHeight: 84 }} value={form.message} onChange={set('message')} placeholder="e.g. Shopify + Amazon FBA, ~400 SKUs, two warehouses"></textarea>
              </div>

              <button type="submit" className="btn btn-elec btn-block btn-lg" disabled={sending} style={sending ? { opacity: 0.7, cursor: 'wait' } : undefined}>{sending ? 'Sending…' : 'Start your 1-month free trial'}</button>
              {error && <p style={{ color: 'var(--danger)', fontSize: 13, lineHeight: 1.5, textAlign: 'center', margin: '12px 0 0' }}>{error}</p>}
              <p className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--slate)', textAlign: 'center', margin: '12px 0 0', lineHeight: 1.6 }}>
                NO CARD REQUIRED · NO PAYMENT · NO ACCOUNT TO SET UP<br />
                By submitting you agree to our <Link href="/privacy" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </form>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, padding: '14px 0' }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: P.elec, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icons.check size={24} stroke={P.navy} /></span>
              <h3 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 600, fontSize: 21, letterSpacing: '-0.02em', margin: 0 }}>Thanks — we&apos;re on it.</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--slate)', margin: 0 }}>
                We&apos;ve got your details{form.email ? <> at <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{form.email}</strong></> : null}. A member of the Oshi Group team will be in touch within one business day to set up your free trial. No card needed — nothing to pay.
              </p>
              <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', message: '' }); }}>Submit another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
