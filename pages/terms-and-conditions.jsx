import Link from "next/link";
import Layout from "../components/layout/Layout";

const LAST_UPDATED = "September 9, 2026";

export default function TermsPage() {
  return (
    <Layout title="Terms & Conditions — Rankly">
      <div className="max-w-2xl mx-auto px-8 py-10">
        <h1 className="font-display text-4xl font-extrabold text-ink-900 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Last updated: {LAST_UPDATED}
        </p>

        <Section title="1. Agreement to these terms">
          <p>
            By submitting a profile, placing a bid, or otherwise using Rankly,
            you agree to these Terms & Conditions. If you don't agree, please
            don't use the service.
          </p>
        </Section>

        <Section title="2. What Rankly is">
          <p>
            Rankly lets you submit a link to your public social media profile
            and place a monetary bid to hold the top-ranked spot in that
            profile's category (for example, Instagram or YouTube). The highest
            current bid in a category holds rank #1 until another bid exceeds
            it. Ranking is determined solely by bid amount — Rankly makes no
            claim about the quality, popularity, or legitimacy of any ranked
            profile.
          </p>
        </Section>

        <Section title="3. Eligibility">
          <ul>
            <li>You must be at least 18 years old to place a bid.</li>
            <li>
              You must submit only profiles you own or are authorized to
              represent. Submitting someone else's profile without permission is
              prohibited.
            </li>
            <li>
              You're responsible for ensuring your use of Rankly complies with
              the laws that apply to you.
            </li>
          </ul>
        </Section>

        <Section title="4. Bids and payments">
          <ul>
            <li>
              All bids are processed through Razorpay. By placing a bid, you
              authorize the payment amount shown at checkout.
            </li>
            <li>
              A bid takes effect once payment is verified. Your profile is
              ranked immediately based on the bid amount.
            </li>
            <li>
              Because ranking is granted immediately upon payment, bids are
              final and non-refundable, except where required by law or where
              Rankly rejects your submission under Section 5 below.
            </li>
            <li>
              Being outbid doesn't entitle you to a refund — a bid pays for
              holding the top spot for as long as it remains the highest, not
              for a fixed duration.
            </li>
          </ul>
        </Section>

        <Section title="5. Submission review and removal">
          <p>
            Rankly may review, reject, or remove any submission at its
            discretion, including profiles that are fake, impersonate someone
            else, link to unrelated or harmful content, or otherwise violate
            these terms. If Rankly removes a submission for reasons other than
            your violation of these terms, we'll refund the associated bid.
          </p>
        </Section>

        <Section title="6. Prohibited conduct">
          <p>You agree not to:</p>
          <ul>
            <li>Submit a profile link you don't own or control.</li>
            <li>
              Attempt to manipulate click counts, rankings, or payment
              verification by technical or fraudulent means.
            </li>
            <li>
              Use bots, scripts, or automated tools to interact with Rankly.
            </li>
            <li>
              Initiate a chargeback or payment dispute for a bid that was
              processed correctly and resulted in your profile being ranked as
              agreed.
            </li>
          </ul>
        </Section>

        <Section title="7. No guarantee of outcomes">
          <p>
            Rankly sells visibility on our leaderboard — a ranked position and
            the resulting clicks that position may generate. We don't guarantee
            any specific number of clicks, followers, sales, or other outcomes
            from being ranked.
          </p>
        </Section>

        <Section title="8. Intellectual property">
          <p>
            You retain all rights to your own profile and its content. By
            submitting a profile, you grant Rankly a license to display your
            username, category, bid amount, and profile link on the leaderboard
            for as long as your submission remains active.
          </p>
        </Section>

        <Section title="9. Disclaimers and limitation of liability">
          <p>
            Rankly is provided "as is," without warranties of any kind. To the
            fullest extent permitted by law, Rankly is not liable for indirect,
            incidental, or consequential damages arising from your use of the
            service, including losses related to being outbid or a submission
            being removed.
          </p>
        </Section>

        <Section title="10. Changes to these terms">
          <p>
            We may update these terms from time to time. Continued use of Rankly
            after a change means you accept the updated terms. We'll update the
            date at the top of this page when changes are made.
          </p>
        </Section>

        <Section title="11. Governing law">
          <p>
            These terms are governed by the laws of India. Any disputes will be
            subject to the exclusive jurisdiction of the courts located in
            India.{" "}
            <span className="text-ink-500 text-sm">
              (Confirm and update this with your actual registered
              jurisdiction.)
            </span>
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Questions about these terms? Reach out at{" "}
            <a
              href="mailto:support@rankly.example"
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
            href="/privacy-policy"
            className="text-rise-600 hover:text-rise-700 font-medium"
          >
            Privacy Policy
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
