import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Eyebrow } from '../../components/brand';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Oshi Group Ltd collects, uses and protects personal data through the Lazlo platform (UK GDPR).',
};

// ⚠️ LEGAL REVIEW RECOMMENDED — this is a standard UK/GDPR-aware SaaS template
// drafted for completeness and compliance review. Have it reviewed by a qualified
// solicitor before relying on it, and confirm the sub-processor list is accurate.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div className="wrap prose">
            <Eyebrow elec>Legal</Eyebrow>
            <h2 style={{ margin: '14px 0 6px' }}>Privacy Policy</h2>
            <p className="mono" style={{ fontSize: 12, color: 'var(--slate)', margin: '0 0 28px' }}>Last updated: 5 June 2026</p>

            <p className="lead">
              This Privacy Policy explains how <strong>Oshi Group Ltd</strong> (&ldquo;Oshi Group&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares and protects personal data when
              you use <strong>Lazlo</strong> (the &ldquo;Service&rdquo;) and our website. We are committed
              to handling your data in accordance with the UK General Data Protection Regulation
              (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h3>1. Who we are</h3>
            <p>
              The data controller is Oshi Group Ltd, a company registered in England and Wales
              (Companies House No. 16129680), Nightingale House, 46–48 East Street, Epsom, Surrey
              KT17 1HQ, United Kingdom. For any privacy question, contact us at{' '}
              <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a>.
            </p>

            <h3>2. The data we collect</h3>
            <ul>
              <li><strong>Account &amp; contact data</strong> — name, business name, email address and phone number you provide when enquiring or signing up.</li>
              <li><strong>Business &amp; commerce data</strong> — when you connect a sales channel, we process order, sales, fee, inventory, cost, ad-spend and product data drawn from your connected accounts. Connections are <strong>read-only</strong>; we do not place orders, move stock or initiate payouts.</li>
              <li><strong>Usage &amp; technical data</strong> — log data, device/browser information and basic analytics needed to operate and secure the Service.</li>
              <li><strong>Communications</strong> — the content of messages you send us by email, phone or our contact form.</li>
            </ul>

            <h3>3. How and why we use it (lawful bases)</h3>
            <ul>
              <li><strong>To provide the Service</strong> — performance of a contract with you (UK GDPR Art. 6(1)(b)).</li>
              <li><strong>To respond to enquiries and set up trials</strong> — to take steps at your request prior to entering a contract (Art. 6(1)(b)) and our legitimate interests (Art. 6(1)(f)).</li>
              <li><strong>To secure, maintain and improve the Service</strong> — our legitimate interests in running a reliable, secure product (Art. 6(1)(f)).</li>
              <li><strong>To meet legal and accounting obligations</strong> — compliance with a legal obligation (Art. 6(1)(c)).</li>
            </ul>

            <h3>4. Sharing &amp; sub-processors</h3>
            <p>
              We do not sell your data. We share it only with service providers who process it on
              our behalf under contract, including hosting and infrastructure, database, and
              transactional email providers. We also process data from the third-party channels
              you choose to connect (such as Shopify, Amazon, Not On The High Street and Klaviyo),
              strictly to provide the analytics you have asked for. A current list of
              sub-processors is available on request.
            </p>

            <h3>5. International transfers</h3>
            <p>
              Where data is transferred outside the UK, we rely on appropriate safeguards such as
              UK adequacy regulations or the International Data Transfer Agreement / Addendum to the
              EU Standard Contractual Clauses.
            </p>

            <h3>6. Retention</h3>
            <p>
              We keep personal data only for as long as necessary for the purposes above, to comply
              with legal obligations, and to resolve disputes. When you close your account you may
              ask us to export or delete your data.
            </p>

            <h3>7. Security</h3>
            <p>
              We use appropriate technical and organisational measures, including encryption in
              transit and at rest and access controls, to protect personal data against
              unauthorised access, loss or disclosure.
            </p>

            <h3>8. Your rights</h3>
            <p>
              Under UK GDPR you have the right to access, rectify, erase, restrict or object to
              processing of your personal data, to data portability, and to withdraw consent where
              processing is based on consent. To exercise any right, email{' '}
              <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a>. You also have the
              right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h3>9. Cookies</h3>
            <p>
              This website uses only cookies and similar technologies that are strictly necessary
              to operate the site. If we introduce analytics or marketing cookies, we will request
              your consent and update this policy.
            </p>

            <h3>10. Children</h3>
            <p>The Service is intended for businesses and is not directed at children under 16.</p>

            <h3>11. Changes</h3>
            <p>
              We may update this policy from time to time. We will post the revised version here
              and update the &ldquo;last updated&rdquo; date above.
            </p>

            <h3>12. Contact</h3>
            <p>
              Oshi Group Ltd, Nightingale House, 46–48 East Street, Epsom, Surrey KT17 1HQ, United
              Kingdom · <a href="mailto:support@oshigroup.co.uk">support@oshigroup.co.uk</a> · +44 7714 236456
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
