"use client";
import "./WorkGrid.scss";

import { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import ProjectCard from "@/components/shared/ProjectCard";
import type { Project, ProjectCategory } from "@/types";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Branding",
  "Design",
  "Print",
  "Video",
  "Web Design",
];

interface WorkGridProps {
  projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.categories
            ? p.categories.includes(activeFilter as ProjectCategory)
            : p.category === activeFilter
        );

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
    });
  });

  return (
    <section ref={sectionRef} className="work-grid opacity-0">
      <div className="work-grid__inner">
        <div className="work-grid__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={[
                "work-grid__filter-btn",
                activeFilter === cat ? "work-grid__filter-btn--active" : "",
              ].filter(Boolean).join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="work-grid__empty">No projects found.</p>
        ) : (
          <div className="work-grid__grid">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
