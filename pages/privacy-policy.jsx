import Link from "next/link";
import Layout from "../components/layout/Layout";

const LAST_UPDATED = "September 9, 2026";

export default function PrivacyPage() {
  return (
    <Layout title="Privacy Policy — Rankly">
      <div className="max-w-2xl mx-auto px-8 py-10">
        <h1 className="font-display text-4xl font-extrabold text-ink-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Last updated: {LAST_UPDATED}
        </p>

        <Section title="1. Information we collect">
          <p>When you submit a profile or place a bid, we collect:</p>
          <ul>
            <li>
              Your profile username, category, and profile link, as you provide
              them.
            </li>
            <li>Your bid amount and payment status.</li>
            <li>
              The IP address of anyone who clicks through to a ranked profile,
              used to count unique visits and prevent duplicate counting.
            </li>
          </ul>
          <p>
            We do not collect or store your card, UPI, or bank details — those
            are handled entirely by Razorpay (see Section 3).
          </p>
        </Section>

        <Section title="2. How we use this information">
          <ul>
            <li>To display your submission and its rank on the leaderboard.</li>
            <li>To process and verify your payment.</li>
            <li>
              To count profile clicks fairly, so one visitor refreshing the page
              repeatedly doesn't inflate a profile's click count.
            </li>
            <li>To respond if you contact us for support.</li>
          </ul>
        </Section>

        <Section title="3. Payment processing">
          <p>
            Payments are processed by Razorpay, a third-party payment gateway.
            When you pay, your payment details are sent directly to Razorpay
            under their own privacy and security practices. Rankly receives only
            confirmation that your payment succeeded and a transaction reference
            — never your full card or bank details.
          </p>
        </Section>

        <Section title="4. IP addresses and click tracking">
          <p>
            We record the IP address associated with each unique click on a
            ranked profile link. This is used solely to produce an accurate
            click count per profile and to prevent the same visitor from being
            counted multiple times. We do not use IP addresses for advertising
            or sell this data to third parties.
          </p>
        </Section>

        <Section title="5. Data sharing">
          <p>We share data only with the service providers that run Rankly:</p>
          <ul>
            <li>Razorpay, to process payments.</li>
            <li>
              Supabase, our database and hosting provider, which stores
              submission and click data on our behalf.
            </li>
          </ul>
          <p>
            We don't sell your personal data, and we don't share it with
            advertisers.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p>
            We keep submission, payment, and click records for as long as your
            profile remains active on the leaderboard, and for a reasonable
            period afterward for accounting and dispute purposes. You can
            request deletion at any time — see Section 7.
          </p>
        </Section>

        <Section title="7. Your rights">
          <p>
            You can request a copy of the personal data we hold about you, ask
            us to correct it, or ask us to delete it, by contacting us at the
            email below. We'll respond within a reasonable time and may need to
            verify your identity first.
          </p>
        </Section>

        <Section title="8. Children's privacy">
          <p>
            Rankly is not intended for anyone under 18. We don't knowingly
            collect data from minors. If you believe a minor has submitted
            information to us, contact us and we'll remove it.
          </p>
        </Section>

        <Section title="9. Changes to this policy">
          <p>
            We may update this policy from time to time. We'll update the date
            at the top of this page when we do, and continued use of Rankly
            after a change means you accept the updated policy.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about this policy, or want to exercise your data rights?
            Reach out at{" "}
            <a
              href="mailto:privacy@rankly.example"
              className="text-rise-600 hover:text-rise-700 font-medium"
            >
              support@rankly.example
            </a>
            .
          </p>
        </Section>

        <p className="mt-12 text-sm text-ink-500">
          See also our{" "}
          <Link
            href="/terms-and-conditions"
            className="text-rise-600 hover:text-rise-700 font-medium"
          >
            Terms & Conditions
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-10 pt-8 border-t border-ink-100">
      <h2 className="font-display text-xl font-bold text-ink-900">{title}</h2>
      <div className="mt-3 text-ink-700 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
