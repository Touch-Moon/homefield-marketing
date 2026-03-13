// ─── Project ──────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'Design'
  | 'Branding'
  | 'Print'
  | 'Video'
  | 'Web Design';

export interface Project {
  id?: string;
  slug: string;
  name: string;
  /** Primary display category */
  category: ProjectCategory;
  /** All categories this project belongs to (for multi-category filtering) */
  categories?: ProjectCategory[];
  description: string;
  short_description: string;
  hero_image: string;
  thumbnail_image: string;
  /** Gallery image array — if absent, hero_image is used alone */
  images?: string[];
  featured: boolean;
  display_order: number;
}

// ─── Solution ─────────────────────────────────────────────────────────────────

/** 'standard' = SVG icon hero + benefits + content
 *  'photo'    = real photo hero (grayscale bg mobile / bleed desktop) + custom content */
export type SolutionHeroType = 'standard' | 'photo';

export interface Solution {
  slug: string;
  name: string;
  /** Gold H5 tagline shown in hero (uppercase) */
  tagline: string;
  /** Hero body paragraph(s) — multiple paragraphs separated by \n\n */
  heroBody: string;
  /** Right-side illustration/icon URL */
  heroImage: string;
  /** CTA button label in hero */
  ctaText: string;
  /** Three benefit headings (H3, white bg section) */
  benefits: [string, string, string];
  /** Content section H3 heading (gray bg section) */
  contentHeading: string;
  /** Content section paragraph */
  contentBody: string;
  /** Short description for SolutionCard / meta */
  description: string;
  /** Hero layout type — defaults to 'standard' if omitted */
  heroType?: SolutionHeroType;
  /** If true, hides the ContactForm section at the bottom of the page */
  hideContactForm?: boolean;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Site Config ──────────────────────────────────────────────────────────────

export interface SiteConfig {
  companyName: string;
  tagline: string;
  slogan: string;
  email: string;
  phone: string;
}

// ─── Supabase Database types ──────────────────────────────────────────────────

export interface Database {
  public: {
    Tables: {
      homefield_projects: {
        Row: {
          id: string;
          slug: string;
          name: string;
          category: ProjectCategory;
          description: string | null;
          short_description: string | null;
          hero_image: string | null;
          thumbnail_image: string | null;
          featured: boolean;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['homefield_projects']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['homefield_projects']['Insert']>;
      };
    };
  };
}
