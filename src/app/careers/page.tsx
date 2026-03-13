import type { CSSProperties } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import "./careers.scss";

export const metadata: Metadata = {
  title: "Careers | Homefield Marketing",
  description:
    "Join the Homefield Marketing team. We're looking for talented people who are passionate about helping businesses grow.",
};

const HERO_IMAGE = "/images/pages/hero-careers.webp";

export default function CareersPage() {
  return (
    <main
      className="careers-hero-page"
      style={{ "--hero-img": `url('${HERO_IMAGE}')` } as CSSProperties}
    >
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="sol__hero">
        <div className="sol__hero-inner">
          <div className="sol__hero-grid">

            {/* 좌 — 텍스트 */}
            <AnimatedSection>
              <h1 className="sol__title">Careers</h1>
              <span className="sol__tagline">One of us. One of us.</span>
              <p className="sol__hero-body">
                We might be a little biased, but for good reason. The Homefield
                team not only consists of phenomenally talented people but we
                have found the secret sauce to having a great working culture
                as well.
              </p>
              <p className="sol__hero-body">
                What&apos;s the secret? Check out our open positions and get
                that resume in. We will be happy to show you.
              </p>
              <Button href="#careers-jobs" label="See Open Positions" variant="pill-white" />
            </AnimatedSection>

            {/* Right — Team photo */}
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

      {/* ── Job Filter + Listings ─────────────────────────────────────── */}
      <section className="careers-jobs">
        <div className="careers-jobs__inner">

          {/* Filter bar */}
          <ul className="careers-jobs__filter">
            <li>
              <button className="careers-jobs__filter-btn" type="button" aria-pressed="true">
                All
              </button>
            </li>
          </ul>

          {/* Job list — currently no posts */}
          <ul className="careers-jobs__list">
            <li className="careers-jobs__empty">No post</li>
          </ul>

        </div>
      </section>

      {/* ── Don't see anything right now? ─────────────────────────────── */}
      <section className="careers-apply">
        <div className="careers-apply__inner">
          <div className="careers-apply__grid">

            {/* Left — Text */}
            <AnimatedSection>
              <h2 className="careers-apply__heading">
                Don&apos;t see anything right now?
              </h2>
              <p className="careers-apply__desc">
                Send us your resume anyway. We&apos;re always on the lookout
                for great teammates.
              </p>
            </AnimatedSection>

            {/* Right — Application form */}
            <form
              className="careers-apply__form-grid"
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              encType="multipart/form-data"
            >
              {/* First name */}
              <div className="careers-apply__field">
                <label className="careers-apply__label">First name</label>
                <input
                  type="text"
                  name="first-name"
                  className="careers-apply__input"
                  autoComplete="given-name"
                />
              </div>

              {/* Email */}
              <div className="careers-apply__field">
                <label className="careers-apply__label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="careers-apply__input"
                  autoComplete="email"
                />
              </div>

              {/* City */}
              <div className="careers-apply__field">
                <label className="careers-apply__label">City</label>
                <input
                  type="text"
                  name="city"
                  className="careers-apply__input"
                  autoComplete="address-level2"
                />
              </div>

              {/* Province */}
              <div className="careers-apply__field">
                <label className="careers-apply__label">Province</label>
                <input
                  type="text"
                  name="province"
                  className="careers-apply__input"
                  autoComplete="address-level1"
                />
              </div>

              {/* Resume upload */}
              <div className="careers-apply__field careers-apply__field--full">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="careers-apply__file-input"
                />
              </div>

              {/* Consider position selection */}
              <div className="careers-apply__field careers-apply__field--full">
                <p className="careers-apply__radio-heading">
                  I would like to be considered for:
                </p>
                <ul className="careers-apply__radio-list">
                  <li>
                    <label className="careers-apply__radio-item">
                      <input
                        type="radio"
                        name="considered"
                        value="Marketing Advisor/Coordinator"
                        defaultChecked
                      />
                      Marketing Advisor/Coordinator
                    </label>
                  </li>
                  <li>
                    <label className="careers-apply__radio-item">
                      <input
                        type="radio"
                        name="considered"
                        value="Creative Department (Designer, Writer, Developer)"
                      />
                      Creative Department (Designer, Writer, Developer)
                    </label>
                  </li>
                </ul>
              </div>

              {/* Submit + reCAPTCHA note */}
              <div className="careers-apply__field careers-apply__field--full careers-apply__submit-row">
                <button type="submit" className="careers-apply__submit">
                  Submit Application
                </button>
                <p className="careers-apply__recaptcha">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
