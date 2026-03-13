import Link from "next/link";
import "./ProjectNav.scss";

interface ProjectNavProps {
  prevSlug?: string | null;
  prevName?: string | null;
  nextSlug?: string | null;
  nextName?: string | null;
}

export default function ProjectNav({
  prevSlug,
  prevName,
  nextSlug,
  nextName,
}: ProjectNavProps) {
  const hasPrev = Boolean(prevSlug);
  const hasNext = Boolean(nextSlug);

  if (!hasPrev && !hasNext) return null;

  return (
    <section className="project-nav">
      <div className="project-nav__inner">
        {/* ← Prev */}
        {hasPrev ? (
          <Link
            href={`/our-work/${prevSlug}`}
            className="project-nav__btn"
            aria-label={`Previous project: ${prevName}`}
          >
            <span className="project-nav__arrow">←</span>
            Prev project
          </Link>
        ) : (
          /* Maintains layout when only right button exists */
          <span className="project-nav__btn project-nav__btn--placeholder" aria-hidden>
            ← Prev project
          </span>
        )}

        {/* Next → */}
        {hasNext ? (
          <Link
            href={`/our-work/${nextSlug}`}
            className="project-nav__btn"
            aria-label={`Next project: ${nextName}`}
          >
            Next project
            <span className="project-nav__arrow">→</span>
          </Link>
        ) : (
          <span className="project-nav__btn project-nav__btn--placeholder" aria-hidden>
            Next project →
          </span>
        )}
      </div>
    </section>
  );
}
