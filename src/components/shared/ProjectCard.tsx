import "./ProjectCard.scss";
import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import { getProjectImage } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const thumbSrc = getProjectImage(project, "thumbnail");

  return (
    <Link href={`/our-work/${project.slug}`} className="project-card">
      <div className="project-card__image-wrap">
        <Badge label={project.category} className="project-card__badge" />
        <Image
          src={thumbSrc}
          alt={project.name}
          fill
          className="project-card__image"
          sizes="(max-width: 833px) 100vw, (max-width: 1193px) 50vw, 33vw"
          unoptimized={thumbSrc.startsWith("https://placehold.co")}
        />
      </div>
      <div className="project-card__info">
        <h3 className="project-card__title">{project.name}</h3>
        <span className="project-card__cta">View project</span>
      </div>
    </Link>
  );
}
