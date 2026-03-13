import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import { supabase } from "@/lib/supabase";
import { featuredProjects as staticFeatured } from "@/data/projects";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: "Homefield Marketing — Grow Your Business",
  description:
    "Home-grown on the Canadian prairies, Homefield Marketing delivers proven marketing solutions — brand strategy, websites, SEO, video, and more — to help local prairie businesses grow.",
  alternates: {
    canonical: "https://homefieldmarketing.ca",
  },
  openGraph: {
    title: "Homefield Marketing — Grow Your Business",
    description:
      "Home-grown on the Canadian prairies. Proven marketing solutions for local prairie businesses.",
    url: "https://homefieldmarketing.ca",
    type: "website",
  },
};

// Below-fold components loaded lazily to reduce initial JS bundle
const IntroText        = dynamic(() => import("@/components/home/IntroText"));
const FeaturedWork     = dynamic(() => import("@/components/home/FeaturedWork"));
const MarketingSolutions = dynamic(() => import("@/components/home/MarketingSolutions"));
const ContactForm      = dynamic(() => import("@/components/home/ContactForm"));

export const revalidate = 3600; // ISR — re-fetch every hour

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("homefield_projects")
      .select("*")
      .eq("featured", true)
      .order("display_order", { ascending: true })
      .limit(3);

    if (error || !data || data.length === 0) return staticFeatured;

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
  } catch {
    return staticFeatured;
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Homefield Marketing",
  "url": "https://homefieldmarketing.ca",
  "logo": "https://homefieldmarketing.ca/logo.svg",
  "description":
    "Home-grown on the Canadian prairies, Homefield Marketing helps local prairie businesses grow with proven marketing solutions.",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Canadian Prairies",
  },
  "sameAs": [
    "https://www.facebook.com/myHomefieldMarketing",
    "https://www.instagram.com/homefieldmarketing/",
    "https://www.linkedin.com/company/homefield-marketing",
  ],
};

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <IntroText />
      <FeaturedWork projects={featuredProjects} />
      <MarketingSolutions />
      <div id="contact" style={{ scrollMarginTop: "112px" }}>
        <ContactForm />
      </div>
    </>
  );
}
