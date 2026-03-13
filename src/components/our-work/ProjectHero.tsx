import "./ProjectHero.scss";
import type { Project } from "@/types";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  // Split description text into paragraphs (separated by blank lines)
  const paragraphs = project.description
    ? project.description
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  return (
    // ── Text section (dark bg) ────────────────────────────────────────────
    // Images are handled in ProjectGallery
    <section className="project-hero">
      <div className="project-hero__inner">
        <h1 className="project-hero__title">{project.name}</h1>

        <div className="project-hero__badge">{project.category}</div>

        {paragraphs.length > 0 && (
          <div className="project-hero__description">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
