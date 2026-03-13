"use client";
import "./FeaturedWork.scss";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import ProjectCard from "@/components/shared/ProjectCard";
import type { Project } from "@/types";

interface FeaturedWorkProps {
  projects: Project[];
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
    });
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(Array.from(gridRef.current.children), { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
      });
    }
  });

  return (
    <section className="featured-work">
      <div className="featured-work__inner">
        <h2 ref={headingRef} className="featured-work__heading opacity-0">
          Some of our work
        </h2>
        <div ref={gridRef} className="featured-work__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
