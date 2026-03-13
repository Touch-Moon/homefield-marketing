"use client";
import "./IntroText.scss";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";

export default function IntroText() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 80%", toggleActions: "play none none none" },
    });
    gsap.fromTo(bodyRef.current, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
      scrollTrigger: { trigger: bodyRef.current, start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <section className="intro-text">
      <div className="intro-text__inner">
        <div className="intro-text__content">
          <h2 ref={headingRef} className="intro-text__heading opacity-0">
            Communicate your message.{" "}
            Promote your brand.{" "}
            Tell your story.
          </h2>
          <p ref={bodyRef} className="intro-text__body opacity-0">
            Home-grown on the Canadian prairies, Homefield Marketing has the unique
            advantage of knowing how to help you connect to more people… with a message
            that hits home.
          </p>
        </div>
      </div>
    </section>
  );
}
