import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import JourneyTabs from "../JourneyTabs";
import "../customer-journey.scss";

export const metadata: Metadata = {
  title: "Reputation | Customer Journey | Homefield Marketing",
  description:
    "Of course you're likeable — but can potential customers see it? Reviews are how you connect and build relationships.",
};

export default function ReputationPage() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="sol__hero">
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left: text */}
            <div>
              <h1 className="sol__title">Reputation Building</h1>
              <span className="sol__tagline" style={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
                Put your star power to work
              </span>
              <p className="sol__hero-body">
                95% of buyers read online reviews before purchasing, making
                your online reputation more important than ever. We can help
                you easily monitor reviews across major online platforms to
                help you build your online reputation.
              </p>
              <Button
                href="/contact"
                label="Improve Your Brand Image"
                variant="pill-white"
              />
            </div>

            {/* Right: illustration */}
            <div className="sol__hero-image">
              <Image
                src="/images/customer-journey/icon-reputation.svg"
                alt="Reputation Building — star rating icon"
                width={480}
                height={480}
                unoptimized
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="sol__benefits">
        <div className="sol__benefits-inner">
          <div className="sol__benefits-grid">

            <div className="sol__benefit">
              <h3 className="sol__benefit-title">
                Increase Your Trust and Credibility
              </h3>
              <p className="sol__benefit-body">
                95% of buyers read online reviews before purchasing
              </p>
            </div>

            <div className="sol__benefit">
              <h3 className="sol__benefit-title">Drive More Business</h3>
            </div>

            <div className="sol__benefit">
              <h3 className="sol__benefit-title">Increase Sales</h3>
            </div>

          </div>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────── */}
      <section className="sol__content">
        <div className="sol__content-inner">
          <div className="sol__content-wrap">
            <h2 className="sol__content-heading">
              Business Reputations are Earned &amp; Managed
            </h2>
            <p className="sol__content-body">
              What people say about your business in public is extremely
              important. They want to have good experiences and get the most
              for their money. That&apos;s why most people view the reputation
              of a brand through search engines, word-of-mouth, and social
              media.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Customer Journey 탭 ──────────────────────────────── */}
      <JourneyTabs />

    </main>
  );
}
