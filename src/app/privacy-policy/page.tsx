import type { Metadata } from "next";
import "./privacy-policy.scss";

export const metadata: Metadata = {
  title: "Privacy Policy | Homefield Marketing",
  description:
    "Learn how Homefield Marketing collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="privacy-hero">
        <div className="privacy-hero__inner">
          <h1 className="privacy-hero__title">Privacy Policy</h1>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <section className="privacy-content">
        <div className="privacy-content__inner">

          <p>
            It is the policy of Homefield that personal information, such as
            your name, personal postal and email address, or personal telephone
            number is private and confidential. By using this website, you
            consent to the collection, use and disclosure of your personal
            information for the purposes set out below. We will not collect,
            use, or disclose your personal information other than for the
            identified purposes, or without your consent, or as required by law.
          </p>

          <h2>Website Privacy Policy</h2>

          <p>
            This policy describes how Homefield Marketing handles personal
            information collected through this website. We are committed to
            protecting the privacy of our visitors and clients, and to
            maintaining the trust you place in us.
          </p>

          <h2>The Information We Collect</h2>

          <h2>Site Activity Data</h2>
          <p>
            Our web servers may automatically record certain information about
            your visit, including your TCP/IP address, your username (if
            applicable), the date, time, and files you accessed. These records
            also include referrer information (the page you came from) and are
            retained for a reasonable period. This data is used exclusively for
            performance monitoring, site administration, and security reviews.
            It is not sold or shared with third parties.
          </p>

          <h2>Cookies</h2>
          <p>
            This website may use cookies for security and authentication
            purposes only — specifically to maintain your computer&apos;s
            session with the Homefield web server. Information gathered through
            cookies is not sold or shared with any external organizations.
          </p>

          <h2>Personal Information</h2>
          <p>
            We collect personal information only when you voluntarily provide
            it — for example, when you contact us by email, complete a form on
            our website, or register for a course or event. Any information you
            submit will be directed only to the person or department best
            equipped to handle your request.
          </p>
          <p>
            Your personal information will not be sold to any third parties,
            nor will it be added to bulk email lists or used for any purpose
            other than responding to your inquiry or fulfilling the service you
            requested.
          </p>

          <h2>Policy Revisions</h2>
          <p>
            Any changes to this privacy policy will be promptly communicated on
            this website. Revisions to this policy will not affect how
            previously submitted personal information is handled — any
            information collected prior to a policy change will continue to be
            treated in accordance with the policy that was in place at the time
            of collection.
          </p>
          <p>
            If you have questions about this privacy policy or wish to update
            personal information we may hold about you, please{" "}
            <a href="/contact">contact us</a>.
          </p>

          <span className="privacy-content__updated">Last Updated: June 2019</span>

        </div>
      </section>

    </main>
  );
}
