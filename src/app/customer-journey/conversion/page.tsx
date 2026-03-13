import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import JourneyTabs from "../JourneyTabs";
import "../customer-journey.scss";

export const metadata: Metadata = {
  title: "Conversion | Customer Journey | Homefield Marketing",
  description:
    "Conversions are the lifeblood of a business. All major actions taken towards purchase is a conversion.",
};

export default function ConversionPage() {
  return (
    <main
      className="photo-hero-page"
      style={
        {
          "--hero-img": `url('/images/customer-journey/hero-conversion.webp')`,
        } as CSSProperties
      }
    >
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="sol__hero" style={{ position: "relative" }}>
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left: text */}
            <div>
              <h1 className="sol__title">Conversion</h1>
              <span
                className="sol__tagline"
                style={{ paddingBottom: "1rem", paddingTop: "0" }}
              >
                It&apos;s much easier to double your business by doubling your
                conversion rate than by doubling your traffic. — Jeff Eisenberg
              </span>
              <p className="sol__hero-body">
                At the end of the day, what every business wants are
                conversions. That&apos;s the point where your customer gives
                you what you asked for. It could be as simple as making a
                purchase, submitting a quote request, or booking an
                appointment.
              </p>
              <p className="sol__hero-body">
                While conversion sounds like the place in the customer journey
                where you want to spend all your time and money, it&apos;s
                actually the easiest to get—as long as every other step in the
                customer journey is well executed.
              </p>
              <Button
                href="/contact"
                label="Collect Your Conversions"
                variant="pill-gold"
              />
            </div>

            {/* Right: hero photo */}
            <div className="sol__hero-image">
              <Image
                src="/images/customer-journey/hero-conversion.webp"
                alt="Conversion — customer completing a purchase"
                width={706}
                height={800}
                priority
              />
            </div>

          </div>
        </div>

        {/* Badge icon — credit card */}
        <div className="cj-hero-icon">
          <Image
            src="/images/customer-journey/icon-card.svg"
            alt="Conversion icon"
            width={192}
            height={192}
            unoptimized
          />
        </div>

        {/* Wave — must render within hero z-index:3 context to appear above cj-help */}
        <Image
          src="/images/customer-journey/ico-wave.svg"
          alt=""
          width={254}
          height={32}
          className="cj-hero-wave"
          unoptimized
        />
      </section>

      {/* ── Homefield Can Help ────────────────────────────────────── */}
      <section className="cj-help">
        {/* Right decoration — calendar check icon */}
        <div className="cj-help__deco">
          <Image
            src="/images/customer-journey/icon-calendar-check.svg"
            alt=""
            width={317}
            height={362}
            unoptimized
          />
        </div>

        <div className="cj-help__inner">
          <div className="cj-help__content-wrap">
            <h2 className="cj-help__heading">Homefield can help.</h2>
            <p className="cj-help__body">
              We understand consumers and we can help you set up your
              marketing funnel to maximize conversions. What&apos;s that
              saying? Work smart, not harder. You can take that to the bank
              and cash it!
            </p>
            <div className="cj-help__cta">
              <Button
                href="/contact"
                label="Collect Your Conversions"
                variant="pill-dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Customer Journey 탭 ──────────────────────────────── */}
      <JourneyTabs />
    </main>
  );
}
