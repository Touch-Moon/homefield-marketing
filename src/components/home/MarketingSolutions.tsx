"use client";
import "./MarketingSolutions.scss";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import SolutionCard from "@/components/shared/SolutionCard";
import { solutions } from "@/data/solutions";

export default function MarketingSolutions() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
    });
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(Array.from(gridRef.current.children), { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
        stagger: 0.07,
        scrollTrigger: { trigger: gridRef.current, start: "top 78%" },
      });
    }
  });

  return (
    <section className="marketing-solutions">
      <div className="marketing-solutions__inner">
        <h2 ref={headingRef} className="marketing-solutions__heading opacity-0">
          Marketing Solutions
        </h2>
        <div ref={gridRef} className="marketing-solutions__grid">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
