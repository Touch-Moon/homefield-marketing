import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import CjCards from "@/components/shared/CjCards";
import type { CjCardItem } from "@/components/shared/CjCards";
import JourneyTabs from "./JourneyTabs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import "./customer-journey.scss";

export const metadata: Metadata = {
  title: "Customer Journey | Homefield Marketing",
  description:
    "Understand the modern customer journey and how Homefield Marketing helps you connect at every stage.",
};

const REPORTING_IMAGE =
  "/images/pages/image-transparent-reporting.webp";

const cards: CjCardItem[] = [
  {
    tag: null,
    heading: null,
    body:
      "The customer journey is fluid, and you will have customers at every stage at any given time. We take different tactics within each stage and make them work together for one unified purpose: to build your business.\n\nWe live and breathe this customer journey, let us show you how to use it to your advantage.",
    dark: true,
    href: null,
  },
  {
    tag: "Strategy",
    heading: "Do you have a plan?",
    body: "Our integrated marketing approach involves developing a strategy—the overall plan that defines who your company is and its goals.",
    dark: false,
    href: "/customer-journey/strategy",
  },
  {
    tag: "Awareness",
    heading: "Build it and they will come? Nope. Market it and they will buy.",
    body: "You're in business! Great. But where are the customers? Awareness engages your audience and builds trust in your brand. What does your awareness game look like?",
    dark: false,
    href: "/customer-journey/awareness",
  },
  {
    tag: "Findability",
    heading: "Marco? Polo! Can your customers find information on you?",
    body: "Findability makes your business easy to… well, find. It's an essential building block of any marketing plan, and it's what makes sure you are seen and considered.",
    dark: false,
    href: "/customer-journey/findability",
  },
  {
    tag: "Reputation",
    heading:
      "Of course, you're likeable. But can potential customers see and read how likeable?",
    body: "Reviews are not just a way for people to tell each other about their experiences with you; they're also a way for you to connect and build relationships.",
    dark: false,
    href: "/customer-journey/reputation",
  },
  {
    tag: "Conversion",
    heading: "Do you have a plan?",
    body: "Conversions are the lifeblood of a business. All major actions taken towards purchase is a conversion. It's your customer's way of saying: 'take my money.'",
    dark: false,
    href: "/customer-journey/conversion",
  },
];

export default function CustomerJourneyPage() {
  return (
    <main
      className="photo-hero-page"
      style={{ "--hero-img": "url('/images/pages/hero-customer-journey.webp')" } as CSSProperties}
    >

      {/* ── Hero — photo-hero structure (same as Websites / Reputation) ──────── */}
      <section className="sol__hero">
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left — Text */}
            <AnimatedSection>
              <h1 className="sol__title">The Modern Customer Journey</h1>
              <span className="sol__tagline">Understanding</span>
              <p className="sol__hero-body">
                Today&apos;s customers move through multiple touchpoints before
                making a purchase decision. We help you show up — and stand out —
                at every stage.
              </p>
              <Button href="/contact" label="Get Started" variant="pill-white" />
            </AnimatedSection>

            {/* Right — Hero image (desktop bleed) */}
            <div className="sol__hero-image">
              <Image
                src="/images/pages/hero-customer-journey.webp"
                alt="The Modern Customer Journey"
                width={600}
                height={880}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── TYPE 1 — full-width card grid ───────────────────────────── */}
      <AnimatedSection y={30}>
        <CjCards
          cards={cards}
          style={{
            "--cj-cards-pt-lg": "14rem",
            "--cj-cards-pt-xl": "12rem",
          } as CSSProperties}
        />
      </AnimatedSection>

      {/* ── TYPE 2 — Our Customer Journey tabs (content-wrap) ──────────── */}
      <AnimatedSection y={30}>
        <JourneyTabs />
      </AnimatedSection>

      {/* ── TYPE 2 — Transparent Reporting (content-wrap) ────────────── */}
      <section className="cj-reporting">
        <div className="cj-reporting__inner">
          <div className="cj-reporting__grid">
            <AnimatedSection className="cj-reporting__content-wrap">
              <h2 className="cj-reporting__heading">Transparent Reporting</h2>
              <p className="cj-reporting__body">
                It&apos;s what makes us different. We want to let you look
                behind the curtain—in fact, we don&apos;t even have a curtain.
                We&apos;re proud of our work, and we want you to see the impact
                it&apos;s having. You&apos;ll have access to campaign
                analytics, website analytics, and insights to understand how
                your investments are performing and where to go next.
              </p>
            </AnimatedSection>
            <div className="cj-reporting__image">
              <Image
                src={REPORTING_IMAGE}
                alt="Transparent Reporting"
                width={480}
                height={400}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
