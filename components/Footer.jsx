import Link from 'next/link';
import { P, Lockup } from './brand';
import { SIGNUP_URL } from '../lib/links';

// Shared footer. Internal routes via next/link (basePath-safe); section jumps as
// "/#…" so they work from every page. Legal block carries the verbatim Oshi Group
// company details required by the L165 brief.
export default function Footer() {
  return (
    <footer style={{ background: P.navy, color: P.bone }}>
      <div className="wrap" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 36, paddingBottom: 40, borderBottom: '1px solid var(--rule-inv)' }}>
          <div>
            <Lockup markSize={30} wordSize={22} color={P.bone} />
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--bone-70)', margin: '18px 0 0', maxWidth: 320 }}>
              Every channel&apos;s profit, in one place. Unified analytics for multi-channel
              e-commerce and marketplace sellers.
            </p>
            <div style={{ marginTop: 20 }}>
              <a className="btn btn-elec" href={SIGNUP_URL}>Start your 1-month free trial</a>
            </div>
          </div>

          <div>
            <div className="eyebrow-light" style={{ marginBottom: 16 }}>Product</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['Features', '/#features'], ['Pricing', '/#pricing'], ['Support', '/support'], ['Start free trial', SIGNUP_URL]].map(([l, h]) => (
                <li key={l}>
                  {h.startsWith('http') ? (
                    <a href={h} className="foot-link" style={{ fontSize: 14.5, color: 'var(--bone-70)' }}>{l}</a>
                  ) : (
                    <Link href={h} className="foot-link" style={{ fontSize: 14.5, color: 'var(--bone-70)' }}>{l}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow-light" style={{ marginBottom: 16 }}>Company</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><a href="mailto:support@oshigroup.co.uk" className="foot-link" style={{ fontSize: 14.5, color: 'var(--bone-70)' }}>Customer support</a></li>
              <li><a href="mailto:api@oshigroup.co.uk" className="foot-link" style={{ fontSize: 14.5, color: 'var(--bone-70)' }}>Partner / API enquiries</a></li>
              <li><Link href="/privacy" className="foot-link" style={{ fontSize: 14.5, color: 'var(--bone-70)' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="foot-link" style={{ fontSize: 14.5, color: 'var(--bone-70)' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* legal block — verbatim per L165 brief */}
        <div className="footer-legal" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 36, marginTop: 28 }}>
          <div className="mono" style={{ fontSize: 12, lineHeight: 1.85, color: 'var(--bone-55)' }}>
            <div style={{ color: 'var(--bone-70)' }}>Oshi Group Ltd</div>
            Companies House No. 16129680<br />
            Nightingale House, 46–48 East Street,<br />
            Epsom, Surrey KT17 1HQ, United Kingdom<br />
            VAT registered
          </div>
          <div className="mono" style={{ fontSize: 12, lineHeight: 1.85, color: 'var(--bone-55)' }}>
            <div style={{ color: 'var(--bone-70)' }}>Get in touch</div>
            support@oshigroup.co.uk<br />
            courtney@oshigroup.co.uk<br />
            Partner / API: api@oshigroup.co.uk
          </div>
          <div className="mono" style={{ fontSize: 12, lineHeight: 1.85, color: 'var(--bone-55)' }}>
            <div style={{ color: 'var(--bone-70)' }}>Legal</div>
            <Link href="/privacy" className="foot-link" style={{ color: 'var(--bone-55)' }}>Privacy Policy</Link><br />
            <Link href="/terms" className="foot-link" style={{ color: 'var(--bone-55)' }}>Terms of Service</Link>
          </div>
        </div>

        <div style={{ marginTop: 36, paddingTop: 22, borderTop: '1px solid var(--rule-inv-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: 11.5, color: 'var(--bone-40)', letterSpacing: '0.04em' }}>© 2026 Oshi Group Ltd. All rights reserved.</span>
          <span className="mono" style={{ fontSize: 11.5, color: 'var(--bone-40)', letterSpacing: '0.04em' }}>Made in the United Kingdom.</span>
        </div>
      </div>
    </footer>
  );
}
