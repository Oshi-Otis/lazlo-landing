import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import Support from '../../components/Support';
import { Eyebrow } from '../../components/brand';

export const metadata = {
  title: 'Support & Contact',
  description:
    'Contact Lazlo support — email support@oshigroup.co.uk or call +44 7714 236456. ' +
    'Start your one-month free trial, no card required.',
};

export default function SupportPage() {
  return (
    <>
      <Reveal />
      <Header />
      <main>
        {/* page header */}
        <section style={{ paddingTop: 56, paddingBottom: 8 }}>
          <div className="wrap reveal in" style={{ maxWidth: 760 }}>
            <Eyebrow elec>Support &amp; contact</Eyebrow>
            <h1 style={{ fontFamily: 'Geist,sans-serif', fontWeight: 700, fontSize: 'clamp(32px,4.4vw,48px)', letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 16px' }}>
              We&apos;re here to help.
            </h1>
            <p style={{ fontSize: 17.5, lineHeight: 1.6, color: 'var(--slate)', margin: 0, maxWidth: 620 }}>
              Reach the Oshi Group team directly by email or phone, or use the form below to
              start your free trial. We typically respond within one business day,
              Monday–Friday.
            </p>
          </div>
        </section>

        {/* reuse the shared support / contact + lead-capture section */}
        <Support />
      </main>
      <Footer />
    </>
  );
}
