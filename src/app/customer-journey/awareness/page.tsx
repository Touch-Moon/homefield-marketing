import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import JourneyTabs from "../JourneyTabs";
import "../customer-journey.scss";

export const metadata: Metadata = {
  title: "Awareness | Customer Journey | Homefield Marketing",
  description:
    "Build it and they will come? Nope. Market it and they will buy. Awareness engages your audience and builds trust in your brand.",
};

export default function AwarenessPage() {
  return (
    <main
      className="photo-hero-page"
      style={
        {
          "--hero-img": `url('/images/customer-journey/hero-awareness.webp')`,
        } as CSSProperties
      }
    >
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="sol__hero" style={{ position: "relative" }}>
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left — Text */}
            <div>
              <h1 className="sol__title">Awareness</h1>
              <span className="sol__tagline" style={{ paddingBottom: "1rem", paddingTop: "0" }}>
                A Blend of Online and Offline Marketing for Success
              </span>
              <p className="sol__hero-body">
                Ahh, the customers&apos; first step in their journey, exciting!
                Awareness plays many different roles in your business. It&apos;s
                not just for those potential customers who don&apos;t know about
                you yet. It&apos;s also for those weekend customers to know about
                your big promotion. Or those seasonal customers to know when your
                summer shipments come in.
              </p>
              <Button href="/contact" label="Amplify Your Awareness" variant="pill-gold" />
            </div>

            {/* Right — Photo */}
            <div className="sol__hero-image">
              <Image
                src="/images/customer-journey/hero-awareness.webp"
                alt="Awareness — barista pouring coffee"
                width={706}
                height={800}
                priority
              />
            </div>

          </div>
        </div>

        {/* eye icon — same pattern as strategy's icon-map */}
        <div className="cj-hero-icon">
          <Image
            src="/images/customer-journey/icon-eye.svg"
            alt="Awareness icon"
            width={192}
            height={192}
          />
        </div>
      </section>

      {/* ── Homefield Can Help ────────────────────────────────────── */}
      <section className="cj-help">
        <div className="cj-help__inner">
          <div className="cj-help__content-wrap">
            <h2 className="cj-help__heading">Homefield can help.</h2>
            <p className="cj-help__body">
              Mastering the awareness stage of your customer&apos;s journey starts
              by reviewing your strategy and choosing the right roads to achieve
              your objectives. That&apos;s where Homefield comes in. Not only do we
              understand traditional media and its place in the awareness stage, we
              know how to pair it with new media effectively to make sure your
              community knows you.
            </p>
            <p className="cj-help__body">
              Awareness is that megaphone telling your community—no, the
              world—what you&apos;ve got going on!
            </p>
            <div className="cj-help__cta">
              <Button href="/contact" label="Amplify Your Awareness" variant="pill-dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Customer Journey 탭 ──────────────────────────────── */}
      <JourneyTabs />
    </main>
  );
}
