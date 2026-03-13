import type { CSSProperties } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import ContactForm from "@/components/home/ContactForm";
import "./about.scss";

export const metadata: Metadata = {
  title: "About Us | Homefield Marketing",
  description:
    "Learn about Homefield Marketing — a prairie-grown marketing agency dedicated to helping local businesses thrive.",
};

const HERO_IMAGE = "/images/pages/hero-about.webp";
const WHY_IMAGE  = "/images/pages/image-why-work-with-us.webp";

export default function AboutPage() {
  return (
    <main
      className="about-hero-page"
      style={{ "--hero-img": `url('${HERO_IMAGE}')` } as CSSProperties}
    >
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="sol__hero">
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left — text */}
            <div>
              <h1 className="sol__title">About Us</h1>
              <span className="sol__tagline">Home-grown on the Canadian prairies</span>
              <p className="sol__hero-body">
                Whether you&apos;re a startup just getting off the ground or an
                established business looking to grow, Homefield Marketing has
                the talent, the tools, and the local knowledge to help you
                succeed.
              </p>
              <p className="sol__hero-body">
                We are a full-service marketing agency based in the heart of
                the Canadian prairies, dedicated to helping businesses like
                yours communicate their message, promote their brand, and tell
                their story.
              </p>
              <Button href="#contact" label="Get Started" variant="pill-white" />
            </div>

            {/* Right — hero image */}
            <div className="sol__hero-image">
              <Image
                src={HERO_IMAGE}
                alt="Homefield Marketing team"
                width={704}
                height={720}
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Where we came from ────────────────────────────────────────────── */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__body">
            <h2 className="about-story__heading">Where we came from.</h2>
            <p>
              Homefield Marketing was born out of a desire to bring big-city
              marketing expertise to the prairies. Our founder recognized that
              local businesses were underserved — they had big ambitions but
              lacked access to the kind of strategic, creative marketing support
              that could help them grow.
            </p>
            <p>
              We have a{" "}
              <a href="/our-work">long history</a>{" "}
              of working with prairie businesses across a wide range of
              industries — from agriculture and real estate to retail,
              hospitality, and professional services. Each engagement has
              deepened our understanding of what it takes to connect with local
              audiences in an authentic and meaningful way.
            </p>
            <p>
              Today, Homefield Marketing is proud to be one of the most trusted
              marketing agencies in the region. Our team of strategists,
              creatives, and digital specialists work together to deliver
              results that matter — for businesses that matter to their
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why work with us ──────────────────────────────────────────────── */}
      <section className="about-why">
        <div className="about-why__inner">
          <div className="about-why__grid">

            {/* Left — text */}
            <div>
              <h2 className="about-why__heading">Why work with us?</h2>
              <p className="about-why__subtitle">
                There are a lot of marketing agencies out there. Here&apos;s
                what makes Homefield different:
              </p>
              <ul className="about-why__list">
                <li className="about-why__list-item">
                  <strong>We know the prairies.</strong> We live and work here
                  too. That local knowledge gives us an edge when it comes to
                  crafting messages that resonate with your audience.
                </li>
                <li className="about-why__list-item">
                  <strong>We are a full-service agency.</strong> From brand
                  strategy and logo design to websites, video, SEO, and social
                  media — we do it all under one roof.
                </li>
                <li className="about-why__list-item">
                  <strong>We are invested in your success.</strong> We
                  don&apos;t just deliver a product and walk away. We build
                  long-term partnerships with our clients and measure our
                  success by yours.
                </li>
                <li className="about-why__list-item">
                  <strong>We are transparent and accountable.</strong> No
                  jargon, no runaround. We tell you what we&apos;re doing, why
                  we&apos;re doing it, and what results you can expect.
                </li>
                <li className="about-why__list-item">
                  <strong>We are a team of passionate people.</strong> Every
                  member of the Homefield team genuinely cares about the work
                  they do and the clients they serve.
                </li>
              </ul>
              <p className="about-why__closing">
                If you&apos;re ready to take your marketing to the next level,
                we&apos;d love to hear from you. Let&apos;s build something
                great together.
              </p>
            </div>

            {/* Right — image */}
            <div className="about-why__image-wrap">
              <Image
                src={WHY_IMAGE}
                alt="Why work with Homefield Marketing"
                width={706}
                height={948}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Get Started ────────────────────────────────────────────────────── */}
      <div id="contact" style={{ scrollMarginTop: "112px" }}>
        <ContactForm />
      </div>
    </main>
  );
}
