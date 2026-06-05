import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Eyebrow } from '../../components/brand';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of the Lazlo platform provided by Oshi Group Ltd.',
};

// ⚠️ LEGAL REVIEW RECOMMENDED — this is a standard UK SaaS terms template drafted
// for completeness and compliance review. Have it reviewed by a qualified solicitor
// before relying on it, and confirm pricing/billing terms once prices are final.
export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div className="wrap prose">
            <Eyebrow elec>Legal</Eyebrow>
            <h2 style={{ margin: '14px 0 6px' }}>Terms of Service</h2>
            <p className="mono" style={{ fontSize: 12, color: 'var(--slate)', margin: '0 0 28px' }}>Last updated: 5 June 2026</p>

            <p className="lead">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
              <strong> Lazlo</strong> (the &ldquo;Service&rdquo;), provided by <strong>Oshi Group
              Ltd</strong> (&ldquo;Oshi Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using
              the Service you agree to these Terms.
            </p>

            <h3>1. The Service</h3>
            <p>
              Lazlo is a unified analytics platform for multi-channel e-commerce and marketplace
              sellers. It connects to your sales channels on a <strong>read-only</strong> basis to
              consolidate sales, costs, inventory, ad spend and forecasting into one view. We do not
              place orders, move stock or initiate payouts on your behalf.
            </p>

            <h3>2. Free trial</h3>
            <p>
              We may offer a one-month free trial. No payment card is required to start a trial. At
              the end of the trial you may choose a paid plan to continue; if you do not, access to
              paid features may end.
            </p>

            <h3>3. Accounts</h3>
            <p>
              You are responsible for keeping your account credentials secure and for all activity
              under your account. You must provide accurate information and notify us promptly of any
              unauthorised use.
            </p>

            <h3>4. Fees, billing &amp; VAT</h3>
            <p>
              Paid plans are billed monthly in advance in GBP. Prices are shown inclusive of UK VAT
              where applicable. Unless required by law, fees are non-refundable. We may change prices
              on reasonable notice; changes take effect at your next billing cycle. You may cancel at
              any time, effective at the end of the current billing period.
            </p>

            <h3>5. Acceptable use</h3>
            <p>
              You agree not to misuse the Service, including by attempting to gain unauthorised
              access, disrupting its operation, reverse-engineering it, or using it unlawfully or in
              breach of any third-party platform&apos;s terms.
            </p>

            <h3>6. Third-party connections</h3>
            <p>
              The Service integrates with third-party platforms (such as Shopify, Amazon, Not On The
              High Street and Klaviyo). Your use of those platforms is governed by their own terms,
              and we are not responsible for their availability or actions. You authorise us to access
              data from the accounts you connect, on a read-only basis, to provide the Service.
            </p>

            <h3>7. Data &amp; intellectual property</h3>
            <p>
              You retain ownership of your data. You grant us a limited licence to process it solely
              to provide and improve the Service, as described in our{' '}
              <a href="/privacy">Privacy Policy</a>. We and our licensors retain all rights in the
              Service, including its software, design and trade marks.
            </p>

            <h3>8. Availability &amp; warranties</h3>
            <p>
              We work to keep the Service available and accurate but provide it &ldquo;as is&rdquo;
              and do not warrant that it will be uninterrupted or error-free. Analytics and forecasts
              are decision-support tools and do not constitute financial, tax or accounting advice.
            </p>

            <h3>9. Limitation of liability</h3>
            <p>
              Nothing in these Terms limits liability that cannot be limited by law. Subject to that,
              we are not liable for indirect or consequential loss, loss of profits, revenue or data,
              and our total liability in any 12-month period is limited to the fees you paid for the
              Service in that period.
            </p>

            <h3>10. Termination</h3>
            <p>
              You may stop using the Service at any time. We may suspend or terminate access if you
              materially breach these Terms. On termination you may request export or deletion of
              your data.
            </p>

            <h3>11. Governing law</h3>
            <p>
              These Terms are governed by the laws of England and Wales, and the courts of England
              and Wales have exclusive jurisdiction.
            </p>

            <h3>12. Changes</h3>
            <p>
              We may update these Terms from time to time. We will post the revised version here and
              update the &ldquo;last updated&rdquo; date above. Continued use after changes take
              effect constitutes acceptance.
            </p>

            <h3>13. Contact</h3>
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
