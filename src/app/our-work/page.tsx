import WorkGrid from "@/components/our-work/WorkGrid";
import { supabase } from "@/lib/supabase";
import { projects as staticProjects } from "@/data/projects";
import type { Project } from "@/types";

export const revalidate = 3600;

export const metadata = {
  title: "Our Work | Homefield Marketing",
  description:
    "Explore Homefield Marketing's portfolio of design, branding, marketing, and web projects.",
};

async function getAllProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("homefield_projects")
      .select("*")
      .order("display_order", { ascending: true });
    if (error || !data || data.length === 0) return staticProjects;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((row: any) => ({
      ...row,
      description: row.description ?? "",
      short_description: row.short_description ?? "",
      hero_image: row.hero_image ?? "",
      thumbnail_image: row.thumbnail_image ?? "",
      categories: Array.isArray(row.categories) && row.categories.length > 0
        ? row.categories
        : undefined,
    }));
  } catch {
    return staticProjects;
  }
}

export default async function OurWorkPage() {
  const projects = await getAllProjects();

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1 className="page-hero__heading">Our Work</h1>
          <p className="page-hero__sub">
            A showcase of our projects across design, branding, marketing,
            and more — all created for clients right here on the prairies.
          </p>
        </div>
      </section>

      <WorkGrid projects={projects} />
    </main>
  );
}
