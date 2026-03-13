import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import JourneyTabs from "../JourneyTabs";
import "../customer-journey.scss";

export const metadata: Metadata = {
  title: "Findability | Customer Journey | Homefield Marketing",
  description:
    "Findability makes your business easy to find. It's an essential building block of any marketing plan.",
};

export default function FindabilityPage() {
  return (
    <main
      className="photo-hero-page"
      style={
        {
          "--hero-img": `url('/images/customer-journey/hero-findability.webp')`,
        } as CSSProperties
      }
    >
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="sol__hero" style={{ position: "relative" }}>
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">
            {/* Left: text */}
            <div>
              <h1 className="sol__title">Findability</h1>
              <span
                className="sol__tagline"
                style={{ paddingBottom: "1rem", paddingTop: "0" }}
              >
                Hey! There you are.
              </span>
              <p className="sol__hero-body">
                Shop on the corner: check. Website: check. Best offering around:
                check. So, why are people going to your competitor down the
                street? When your customers know you exist, but can&apos;t find
                you—it&apos;s like playing a game of Marco Polo.
              </p>
              <Button
                href="/contact"
                label="Figure Out Your Findability"
                variant="pill-gold"
              />
            </div>

            {/* Right: hero photo */}
            <div className="sol__hero-image">
              <Image
                src="/images/customer-journey/hero-findability.webp"
                alt="Findability — desktop website design"
                width={706}
                height={800}
                priority
              />
            </div>
          </div>
        </div>

        {/* Badge icon — location pin */}
        <div className="cj-hero-icon">
          <Image
            src="/images/customer-journey/icon-location.svg"
            alt="Location pin icon"
            width={192}
            height={192}
          />
        </div>

        {/* Wave — must render within hero z-index:2 context to appear above cj-help */}
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
        {/* Right decoration — "?" icon */}
        <div className="cj-help__deco">
          <Image
            src="/images/customer-journey/icon-awareness.svg"
            alt=""
            width={350}
            height={482}
            unoptimized
          />
        </div>

        <div className="cj-help__inner">
          <div className="cj-help__content-wrap">
            <h2 className="cj-help__heading">Homefield can help.</h2>
            <p className="cj-help__body">
              We can make sure your best customers can find you. When they search
              on Google for you, we&apos;ll make sure you&apos;re on the first
              page. When they ask their GPS for directions, we&apos;ll make sure
              they get to the right place. Hide and seek is fun, but not when it
              comes to your business. Let&apos;s get you out there and be seen.
            </p>
            <div className="cj-help__cta">
              <Button
                href="/contact"
                label="Figure Out Your Findability"
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
