import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Eyebrow } from '../../components/brand';

export const metadata = {
  title: 'Data Deletion',
  description: 'How to request deletion of your data from the Lazlo platform provided by Oshi Group Ltd.',
};

// ⚠️ DRAFT — LEGAL REVIEW RECOMMENDED. This page satisfies Meta App Review and
// Google OAuth verification "data deletion instructions" requirements. Meta may
// ADDITIONALLY require a backend data-deletion CALLBACK endpoint (app-side,
// separate from this static page) — see the L219 PR notes.
export default function DataDeletionPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div className="wrap prose">
            <Eyebrow elec>Legal</Eyebrow>
            <h2 style={{ margin: '14px 0 6px' }}>Data Deletion</h2>
            <p className="mono" style={{ fontSize: 12, color: 'var(--slate)', margin: '0 0 28px' }}>Last updated: 10 June 2026</p>

            <p className="lead">
              You can ask <strong>Oshi Group Ltd</strong> to delete your <strong>Lazlo</strong> account
              and the data we hold about you at any time. This page explains how to make the request,
              what is deleted, and how long it takes.
            </p>

            <h3>1. How to request deletion</h3>
            <p>
              Email <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a> from the email
              address associated with your account, with the subject line{' '}
              <strong>&ldquo;Data deletion request&rdquo;</strong>. Tell us the business / account name
              so we can locate your tenant. We may ask one or two questions to verify your identity
              before we act, to protect your data from unauthorised deletion.
            </p>

            <h3>2. What gets deleted</h3>
            <p>When we action a deletion request, we permanently remove:</p>
            <ul>
              <li>Your account and authentication details;</li>
              <li>The encrypted access tokens for every channel you connected;</li>
              <li>The e-commerce and advertising data we retrieved from your connected channels (orders, products, costs, ad spend, payouts, inventory and the analytics derived from them); and</li>
              <li>Your tenant&apos;s configuration and settings.</li>
            </ul>
            <p>
              We may retain a minimal set of records where the law requires us to (for example,
              invoices and VAT records for our accounting obligations). Any such records are kept only
              for the legally required period and are not used for any other purpose.
            </p>

            <h3>3. Revoking individual connections yourself</h3>
            <p>
              You can disconnect any channel at any time without deleting your whole account — from
              within Lazlo, or directly from the connected platform&apos;s own settings (for example,
              Shopify, Amazon Selling Partner, Amazon Ads, Google Ads, Meta Ads, Klaviyo, Not On The
              High Street or ShipHero). Revoking a connection immediately stops Lazlo accessing new data
              from that platform; email us if you also want the previously retrieved data removed.
            </p>

            <h3>4. Timeframe</h3>
            <p>
              We confirm receipt of your request promptly and complete deletion within{' '}
              <strong>30 days</strong>, and usually much sooner. We will email you to confirm once the
              deletion is complete.
            </p>

            <h3>5. Contact</h3>
            <p>
              Oshi Group Ltd, Nightingale House, 46–48 East Street, Epsom, Surrey KT17 1HQ, United
              Kingdom · <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a>. See also
              our <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
