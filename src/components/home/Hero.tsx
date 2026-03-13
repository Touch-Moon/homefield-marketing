"use client";
import "./Hero.scss";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import Button from "@/components/shared/Button";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
      .fromTo(subRef.current,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(ctaRef.current,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
  });

  return (
    <section className="hero">

      {/* Decorative background video — hidden from assistive technology */}
      <div className="hero__video-wrap" aria-hidden="true">
        <div className="hero__video-frame">
          <video className="hero__video" autoPlay muted loop playsInline preload="metadata">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
        </div>
      </div>

      {/* Text */}
      <div className="hero__text">
        <div className="hero__text-inner">
          <h1 ref={headingRef} className="hero__heading opacity-0">
            Grow your<br />business
          </h1>
          <p ref={subRef} className="hero__sub opacity-0">
            LET US HELP YOU WITH PROVEN MARKETING SOLUTIONS GEARED TOWARDS
            LOCAL PRAIRIE BUSINESSES.
          </p>
          <div ref={ctaRef} className="hero__cta opacity-0">
            <Button href="#contact" label="Get Started" variant="pill-white" size="md" />
          </div>
        </div>
      </div>

    </section>
  );
}
