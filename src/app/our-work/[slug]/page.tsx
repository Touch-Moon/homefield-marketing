import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getProjectBySlug, projects as staticProjects } from "@/data/projects";
import { getProjectImage } from "@/lib/utils";
import type { Metadata } from "next";
import type { Project } from "@/types";
import ProjectHero from "@/components/our-work/ProjectHero";
import ProjectGallery from "@/components/our-work/ProjectGallery";
import ProjectNav from "@/components/our-work/ProjectNav";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const { data } = await supabase.from("homefield_projects").select("slug");
    if (data && data.length > 0) return data.map(({ slug }) => ({ slug }));
  } catch {
    // fall through to static
  }
  return staticProjects.map(({ slug }) => ({ slug }));
}

async function getAllProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("homefield_projects")
      .select("*")
      .order("display_order", { ascending: true });
    if (!error && data && data.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data.map((row: any) => ({
        id: row.id,
        slug: row.slug,
        name: row.name,
        category: row.category,
        categories: Array.isArray(row.categories) && row.categories.length > 0
          ? row.categories
          : undefined,
        description: row.description ?? "",
        short_description: row.short_description ?? "",
        hero_image: row.hero_image ?? "",
        thumbnail_image: row.thumbnail_image ?? "",
        featured: row.featured,
        display_order: row.display_order,
      }));
    }
  } catch {
    // fall through
  }
  return [...staticProjects].sort((a, b) => a.display_order - b.display_order);
}

async function getProject(slug: string): Promise<Project | null> {
  // static data always ready (fallback for merging images[])
  const staticProject = getProjectBySlug(slug) ?? null;

  try {
    const { data, error } = await supabase
      .from("homefield_projects")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error || !data) return staticProject;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const row = data as any;
    return {
      id: row.id,
      slug: row.slug,
      name: row.name,
      category: row.category,
      categories: Array.isArray(row.categories) && row.categories.length > 0
        ? row.categories
        : undefined,
      description: row.description ?? "",
      short_description: row.short_description ?? "",
      hero_image: row.hero_image ?? "",
      thumbnail_image: row.thumbnail_image ?? "",
      // If DB has no images column, use static data's images array
      images: (Array.isArray(row.images) && row.images.length > 0)
        ? row.images
        : staticProject?.images,
      featured: row.featured,
      display_order: row.display_order,
    };
  } catch {
    return staticProject;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project | Homefield Marketing" };
  const heroImage = getProjectImage(project, "hero");
  return {
    title: `${project.name} | Homefield Marketing`,
    description: project.short_description || undefined,
    alternates: {
      canonical: `https://homefieldmarketing.ca/our-work/${slug}`,
    },
    openGraph: {
      title: `${project.name} | Homefield Marketing`,
      description: project.short_description || undefined,
      url: `https://homefieldmarketing.ca/our-work/${slug}`,
      type: "article",
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: project.name }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Parallel query of current project + full list
  const [project, allProjects] = await Promise.all([
    getProject(slug),
    getAllProjects(),
  ]);

  if (!project) notFound();

  // Calculate Prev / Next (based on display_order)
  const idx = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = idx > 0 ? allProjects[idx - 1] : null;
  const nextProject = idx < allProjects.length - 1 ? allProjects[idx + 1] : null;

  // Gallery images array (hero_image only if project.images absent)
  const galleryImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : [getProjectImage(project, "hero")];

  return (
    <main>
      {/* 1. Hero: dark bg — H1 + category badge + description */}
      <ProjectHero project={project} />

      {/* 2. Gallery: white bg — 16:9 images stacked vertically */}
      <ProjectGallery images={galleryImages} projectName={project.name} />

      {/* 3. Nav: white bg — ← Prev / Next → */}
      <ProjectNav
        prevSlug={prevProject?.slug}
        prevName={prevProject?.name}
        nextSlug={nextProject?.slug}
        nextName={nextProject?.name}
      />
    </main>
  );
}
