import Image from "next/image";
import "./ProjectGallery.scss";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="project-gallery">
      <div className="project-gallery__inner">
        <ul className="project-gallery__list">
          {images.map((src, i) => {
            const isPlaceholder = src.startsWith("https://placehold.co");
            return (
              <li key={i} className="project-gallery__item">
                <div className="project-gallery__img-wrap">
                  <Image
                    src={src}
                    alt={`${projectName} — ${i + 1}`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    unoptimized={isPlaceholder}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
