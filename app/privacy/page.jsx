import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Eyebrow } from '../../components/brand';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Oshi Group Ltd collects, uses and protects personal data through the Lazlo platform (UK GDPR).',
};

// ⚠️ DRAFT — LEGAL REVIEW RECOMMENDED. This is a standard UK/GDPR-aware SaaS
// template drafted for completeness. Have it reviewed by a qualified solicitor
// before relying on it, and confirm the integration and sub-processor lists are
// accurate at the time of publishing.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div className="wrap prose">
            <Eyebrow elec>Legal</Eyebrow>
            <h2 style={{ margin: '14px 0 6px' }}>Privacy Policy</h2>
            <p className="mono" style={{ fontSize: 12, color: 'var(--slate)', margin: '0 0 28px' }}>Last updated: 10 June 2026</p>

            <p className="lead">
              This Privacy Policy explains how <strong>Oshi Group Ltd</strong> (&ldquo;Oshi Group&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, shares and protects
              personal data when you use <strong>Lazlo</strong> (the &ldquo;Service&rdquo;) and our
              website. We are committed to handling your data in accordance with the UK General Data
              Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h3>1. Who we are</h3>
            <p>
              The data controller is <strong>Oshi Group Ltd</strong>, a company registered in England
              and Wales (Companies House No. <strong>16129680</strong>), with registered office at
              Nightingale House, 46–48 East Street, Epsom, Surrey KT17 1HQ, United Kingdom. Oshi Group
              is VAT registered. For any privacy question, or to exercise your data-protection rights,
              contact us at <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a>.
            </p>

            <h3>2. The data we process</h3>
            <p>
              Lazlo is a unified analytics platform. To provide it, we process the following
              categories of data:
            </p>
            <ul>
              <li>
                <strong>Account &amp; authentication data</strong> — your name, business name, email
                address and the credentials and access tokens needed to sign you in and to maintain
                your authorised connections. Access tokens for connected channels are encrypted at
                rest.
              </li>
              <li>
                <strong>E-commerce &amp; advertising data</strong> — when you connect a channel, we
                access (on a <strong>read-only</strong> basis, via that platform&apos;s authorised
                OAuth flow) order, product, fee, cost, inventory, payout and ad-spend data from your
                connected accounts. We do not place orders, move stock or initiate payouts.
              </li>
              <li>
                <strong>Usage &amp; technical data</strong> — log data, device/browser information and
                basic analytics needed to operate and secure the Service.
              </li>
              <li>
                <strong>Communications</strong> — the content of messages you send us by email, phone
                or our contact form.
              </li>
            </ul>

            <h3>3. Connected platforms (data sources)</h3>
            <p>
              With your authorisation, we connect to the following third-party platforms via their
              official OAuth / API authorisation flows to retrieve the data described above:
            </p>
            <ul>
              <li><strong>Shopify</strong> — orders, products and store data.</li>
              <li><strong>Amazon Selling Partner (SP-API)</strong> — orders, settlements, fees and inventory.</li>
              <li><strong>Amazon Ads</strong> — advertising spend and campaign metrics.</li>
              <li><strong>Google Ads</strong> — advertising spend and campaign metrics.</li>
              <li><strong>Meta Ads</strong> — advertising spend and campaign metrics.</li>
              <li><strong>Klaviyo</strong> — email marketing metrics and attributed revenue.</li>
              <li><strong>Not On The High Street (NOTHS)</strong> — marketplace orders and fees.</li>
              <li><strong>ShipHero</strong> — fulfilment and inventory data.</li>
            </ul>
            <p>
              Connections are read-only and can be revoked by you at any time, either from within
              Lazlo or from the connected platform&apos;s own settings. Each platform&apos;s own
              privacy terms continue to govern your relationship with it.
            </p>

            <h3>4. How and why we use it (lawful bases)</h3>
            <ul>
              <li><strong>To provide the Service</strong> — to deliver per-tenant analytics, profit reporting, forecasting and recommendations to you: performance of a contract (UK GDPR Art. 6(1)(b)).</li>
              <li><strong>To respond to enquiries and set up trials</strong> — to take steps at your request prior to entering a contract (Art. 6(1)(b)).</li>
              <li><strong>To secure, maintain and improve the Service</strong> — our legitimate interests in running a reliable, secure product (Art. 6(1)(f)).</li>
              <li><strong>To meet legal and accounting obligations</strong> — compliance with a legal obligation (Art. 6(1)(c)).</li>
            </ul>
            <p>
              Your data is processed on a strictly per-tenant basis: one customer&apos;s data is never
              shared with, or used to serve, another customer.
            </p>

            <h3>5. Sharing &amp; sub-processors</h3>
            <p>
              We do not sell your data. We share it only with service providers who process it on our
              behalf under contract, to operate the Service:
            </p>
            <ul>
              <li><strong>Supabase</strong> — managed database and authentication (hosted in the EU, eu-west-2 / London region).</li>
              <li><strong>Fly.io</strong> — application hosting and compute.</li>
              <li><strong>Anthropic</strong> — large-language-model processing used to generate written insights and recommendations. Only the minimum data needed for a given insight is sent, and it is not used to train third-party models.</li>
              <li><strong>Resend</strong> — transactional email delivery.</li>
            </ul>
            <p>A current list of sub-processors is available on request.</p>

            <h3>6. Where your data is held &amp; international transfers</h3>
            <p>
              We host and store data within the United Kingdom and the European Union. Where any data
              is transferred outside the UK (for example to a sub-processor), we rely on appropriate
              safeguards such as UK adequacy regulations or the International Data Transfer Agreement /
              Addendum to the EU Standard Contractual Clauses.
            </p>

            <h3>7. Retention</h3>
            <p>
              We keep personal data only for as long as necessary for the purposes above, to comply
              with legal and accounting obligations, and to resolve disputes. When you close your
              account, you may ask us to export or delete your data — see our{' '}
              <a href="/data-deletion">Data Deletion</a> page.
            </p>

            <h3>8. Security</h3>
            <p>
              We use appropriate technical and organisational measures — including encryption in
              transit and at rest, encrypted storage of connection tokens, and tenant-level access
              controls — to protect personal data against unauthorised access, loss or disclosure.
            </p>

            <h3>9. Your rights</h3>
            <p>
              Under UK GDPR you have the right to access, rectify, erase, restrict or object to the
              processing of your personal data, and the right to data portability. To exercise any of
              these rights, email <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a>{' '}
              and we will respond within one month. You also have the right to lodge a complaint with
              the Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>,
              though we would welcome the chance to address your concern first.
            </p>

            <h3>10. Data deletion</h3>
            <p>
              You can request deletion of your account and associated data at any time. Full
              instructions, including what is deleted and the timeframe, are on our{' '}
              <a href="/data-deletion">Data Deletion</a> page.
            </p>

            <h3>11. Cookies</h3>
            <p>
              This website uses only cookies and similar technologies that are strictly necessary to
              operate the site and keep you signed in. If we introduce analytics or marketing cookies,
              we will request your consent and update this policy.
            </p>

            <h3>12. Children</h3>
            <p>The Service is intended for businesses and is not directed at children under 16.</p>

            <h3>13. Changes</h3>
            <p>
              We may update this policy from time to time. We will post the revised version here and
              update the &ldquo;last updated&rdquo; date above.
            </p>

            <h3>14. Contact</h3>
            <p>
              Oshi Group Ltd, Nightingale House, 46–48 East Street, Epsom, Surrey KT17 1HQ, United
              Kingdom · <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
