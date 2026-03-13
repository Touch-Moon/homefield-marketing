import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import CjCards from "@/components/shared/CjCards";
import type { CjCardItem } from "@/components/shared/CjCards";
import JourneyTabs from "../JourneyTabs";
import "../customer-journey.scss";

const cards: CjCardItem[] = [
  {
    tag: null,
    heading: "Know where you're starting.",
    body: "Set a clear position in the market and establish your brand identity.",
    dark: false,
    href: null,
  },
  {
    tag: null,
    heading: "Know where you're going.",
    body: "Identify objectives to take your business to the next level",
    dark: false,
    href: null,
  },
  {
    tag: null,
    heading: "Know how to get there.",
    body: "Understand your audience and build a plan that drives action against your goals.",
    dark: false,
    href: null,
  },
];

export const metadata: Metadata = {
  title: "Marketing Strategy | Customer Journey | Homefield Marketing",
  description:
    "A strong marketing strategy is the foundation of everything. We help you define who you are, who you serve, and how to reach them.",
};

export default function StrategyPage() {
  return (
    <main
      className="photo-hero-page"
      style={
        {
          "--hero-img": `url('/images/customer-journey/hero-marketing-strategy.webp')`,
        } as CSSProperties
      }
    >
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="sol__hero" style={{ position: "relative" }}>
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left — Text (original: title → gold tagline order) */}
            <div>
              <h1 className="sol__title">Marketing Strategy</h1>
              <span className="sol__tagline" style={{ paddingBottom: "1rem", paddingTop: "0" }}>The Foundation of Success</span>
              <p className="sol__hero-body">
                Picture this: you&apos;re taking a road trip across Canada. You know you
                want to see Niagara Falls, attend the Calgary Stampede, and hike Whistler
                mountain. So you jump in your car and go. But where to first? Do you take
                a left or a right? How much time do you need? Planning an effective road
                trip isn&apos;t unlike planning a successful marketing strategy. You gotta
                know where you&apos;re starting, where you&apos;re going, and how
                you&apos;re going to get there.
              </p>
              <Button href="/contact" label="I&#39;m Ready to Start" variant="pill-gold" />
            </div>

            {/* Right — Photo */}
            <div className="sol__hero-image">
              <Image
                src="/images/customer-journey/hero-marketing-strategy.webp"
                alt="Marketing Strategy — man with map"
                width={706}
                height={800}
                priority
              />
            </div>

          </div>
        </div>

        {/* icon-map — overlaps at hero bottom center like original */}
        <div className="cj-hero-icon">
          <Image
            src="/images/customer-journey/icon-map.svg"
            alt="Map icon"
            width={192}
            height={192}
          />
        </div>
      </section>

      {/* ── 3-card section ─────────────────────────────────────────────── */}
      <CjCards
        cards={cards}
        style={{
          "--cj-cards-pt-lg": "14rem",
          "--cj-cards-pt-xl": "12rem",
        } as CSSProperties}
      />

      {/* ── Our Customer Journey tabs ──────────────────────────────── */}
      <JourneyTabs />
    </main>
  );
}
