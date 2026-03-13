import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/shared/Button";
import ContactForm from "@/components/home/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedGrid from "@/components/shared/AnimatedGrid";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import type { Metadata } from "next";
import "./solution-detail.scss";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution | Homefield Marketing" };
  return {
    title: `${solution.name} | Homefield Marketing`,
    description: solution.description,
    alternates: {
      canonical: `https://homefieldmarketing.ca/solutions/${slug}`,
    },
    openGraph: {
      title: `${solution.name} | Homefield Marketing`,
      description: solution.description,
      url: `https://homefieldmarketing.ca/solutions/${slug}`,
      type: "website",
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  const isPhoto = solution.heroType === "photo";

  // Split heroBody paragraphs by \n\n (standard type has a single paragraph)
  const heroParagraphs = solution.heroBody.split("\n\n");

  return (
    <main
      className={isPhoto ? "photo-hero-page" : undefined}
      style={
        isPhoto
          ? ({ "--hero-img": `url('${solution.heroImage}')` } as CSSProperties)
          : undefined
      }
    >

      {/* ── Hero — shared structure for all solution types ─────────────── */}
      <section className="sol__hero">
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* Left — text */}
            <AnimatedSection>
              <h1 className="sol__title">{solution.name}</h1>
              <span className="sol__tagline">{solution.tagline}</span>
              {heroParagraphs.map((para, i) => (
                <p key={i} className="sol__hero-body">{para}</p>
              ))}
              <Button
                href="#contact"
                label={solution.ctaText}
                variant="pill-white"
              />
            </AnimatedSection>

            {/* Right — illustration or photo */}
            <div className="sol__hero-image">
              <Image
                src={solution.heroImage}
                alt={solution.name}
                width={600}
                height={600}
                unoptimized={solution.heroImage.startsWith("https://placehold.co")}
              />
            </div>

          </div>
        </div>

        {/* Reputation only — hero boundary badge (half above/below / aligned to left edge of right column) */}
        {solution.slug === "reputation-management" && (
          <div className="sol-rep__badge">
            <Image
              src="/images/rep/icon-thumbup.svg"
              alt=""
              width={192}
              height={192}
              unoptimized
            />
          </div>
        )}

      </section>

      {/* ── Benefits — standard type only ─────────────────────────────── */}
      {!isPhoto && (
        <section className="sol__benefits">
          <div className="sol__benefits-inner">
            <AnimatedGrid className="sol__benefits-grid" stagger={0.08} y={24}>
              {solution.benefits.map((benefit) => (
                <div key={benefit} className="sol__benefit">
                  <h3 className="sol__benefit-title">{benefit}</h3>
                </div>
              ))}
            </AnimatedGrid>
          </div>
        </section>
      )}

      {/* ── Content — standard type only ──────────────────────────────── */}
      {!isPhoto && (
        <section className="sol__content">
          <div className="sol__content-inner">
            <AnimatedSection className="sol__content-wrap">
              <h2 className="sol__content-heading">{solution.contentHeading}</h2>
              <p className="sol__content-body">{solution.contentBody}</p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── Websites-only section ──────────────────────────────────────── */}
      {solution.slug === "websites" && (
        <>
          <section className="sol-web__ecommerce">
            <div className="sol-web__ecommerce-inner">
              <div className="sol-web__ecommerce-wrap">
                <h2 className="sol-web__ecommerce-heading">
                  Add eCommerce and start selling online
                </h2>
                <p className="sol-web__ecommerce-body">
                  Buying and selling online has taken off over the last couple
                  of years—is your store online yet? With a custom online store,
                  you can extend your reach as far as your heart desires.
                </p>
                <p className="sol-web__ecommerce-body">
                  Whether you want WooCommerce or Shopify, we can create your
                  online store to house as many products as you want to sell.
                  With easy updating you can do yourself or have us do it for
                  you, you&apos;ll be online selling in no time.
                </p>
                <div className="sol-web__ecommerce-cta">
                  <Button href="#contact" label="Get Me Online" variant="pill-dark" />
                </div>
              </div>
            </div>
          </section>

          <section className="sol-web__quarterly">
            <div className="sol-web__quarterly-inner">
              <div className="sol-web__quarterly-wrap">
                <h2 className="sol-web__quarterly-heading">Quarterly Reporting</h2>
                <p className="sol-web__quarterly-body">{solution.contentBody}</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Reputation-only section ───────────────────────────────────── */}
      {solution.slug === "reputation-management" && (
        <section className="sol-rep__content">

          {/* Right deco — talk bubble + wave as one unit, half extends beyond viewport */}
          <div className="sol-rep__talk-icon">
            <Image
              src="/images/rep/icon-talk.svg"
              alt=""
              width={356}
              height={356}
              unoptimized
            />
            {/* wave — absolutely positioned on top of talk bubble */}
            <Image
              className="sol-rep__wave"
              src="/images/rep/ico-wave.svg"
              alt=""
              width={254}
              height={32}
              unoptimized
            />
          </div>

          <div className="sol-rep__content-inner">
            <div className="sol-rep__content-wrap">
              <Image
                src="/images/rep/icon-stars.svg"
                alt="5-star rating"
                width={344}
                height={56}
                className="sol-rep__stars"
              />
              <h2 className="sol-rep__heading">{solution.contentHeading}</h2>
              {solution.contentBody.split("\n\n").map((para, i) => (
                <p key={i} className="sol-rep__body">{para}</p>
              ))}
              <div className="sol-rep__cta">
                <Button
                  href="#contact"
                  label={solution.ctaText}
                  variant="pill-dark"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Contact Form ────────────────────────────────────────────────── */}
      {!solution.hideContactForm && (
        <div id="contact" style={{ scrollMarginTop: "112px" }}>
          <ContactForm />
        </div>
      )}

    </main>
  );
}
