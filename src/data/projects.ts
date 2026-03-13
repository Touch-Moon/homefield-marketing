import type { Project } from '@/types';

/**
 * Static project data crawled from https://homefieldmarketing.ca/our-work/
 * images[] : CDN image URLs crawled from the original website
 * Used as fallback when Supabase is unavailable, and for generateStaticParams.
 */
export const projects: Project[] = [
  {
    slug: 'caribou-falls-lodge',
    name: 'Caribou Falls Lodge',
    category: 'Design',
    categories: ['Design'],
    short_description: 'Design work for Caribou Falls Lodge.',
    description:
      "Escape the busy-ness of daily life and unwind in Caribou Falls' rustic accommodations with homestyle meals and good company. Hook a master angler on the picturesque English River system or shoot a black bear in some of Northwestern Ontario's best hunting territory.\n\nWe had the pleasure of redesigning the logo and website for Caribou Falls Lodge. Working together with them to align the new identity with the welcoming, outdoor lifestyle that they offer was a lot of fun and a great experience.",
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/08/Caribou_Falls-Lodge-website_banner.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/08/Caribou_Falls-Lodge-website_banner.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/08/Caribou_Falls-Lodge-website_banner.webp',
    ],
    featured: true,
    display_order: 1,
  },
  {
    slug: '55-north-community-centre',
    name: '55 North Community Centre',
    category: 'Branding',
    categories: ['Branding'],
    short_description: 'Branding for 55 North Community Centre.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/3-55North-Mission.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/3-55North-Mission.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/3-55North-Mission.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/4-55North-components.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/5-55North-phone-scaled.webp',
    ],
    featured: true,
    display_order: 2,
  },
  {
    slug: 'accel-women-in-leadership-conference',
    name: 'ACCEL – Women in Leadership Conference',
    category: 'Branding',
    categories: ['Branding'],
    short_description: 'Branding for the ACCEL Women in Leadership Conference.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/2025-01-20-ACCEL-FeaturedWork-Website-01.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/2025-01-20-ACCEL-FeaturedWork-Website-01.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/2025-01-20-ACCEL-FeaturedWork-Website-01.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/2025-01-20-ACCEL-FeaturedWork-Website-02.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/2025-01-20-ACCEL-FeaturedWork-Website-03.webp',
    ],
    featured: true,
    display_order: 3,
  },
  {
    slug: 'municipality-of-pembina',
    name: 'Municipality of Pembina',
    category: 'Design',
    categories: ['Design', 'Web Design'],
    short_description: 'Design and web design for the Municipality of Pembina.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/Homefield-potfolio-post.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/Homefield-potfolio-post.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/Homefield-potfolio-post.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/07/Homefield-potfolio-Landing_page-post.webp',
    ],
    featured: false,
    display_order: 4,
  },
  {
    slug: 'southeast-cancer-support-services',
    name: 'Southeast Cancer Support Services',
    category: 'Design',
    categories: ['Design', 'Web Design'],
    short_description: 'Design and web design for Southeast Cancer Support Services.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2024-10-17_Southeast_Cancer_Support_Services_Portal__01.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2024-10-17_Southeast_Cancer_Support_Services_Portal__01.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2024-10-17_Southeast_Cancer_Support_Services_Portal__01.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2024-10-17_Southeast_Cancer_Support_Services_Portal__02.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2024-10-17_Southeast_Cancer_Support_Services_Portal__03.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2024-10-17_Southeast_Cancer_Support_Services_Portal__04.webp',
    ],
    featured: false,
    display_order: 5,
  },
  {
    slug: 'southeast-event-centre-farmers-market',
    name: 'SEC Farmers Market',
    category: 'Branding',
    categories: ['Branding', 'Design'],
    short_description: 'Branding and design for the Southeast Event Centre Farmers Market.',
    description: '',
    hero_image:
      'https://homefieldmarketing.ca/wp-content/uploads/2025/06/farmers-market.webp',
    thumbnail_image:
      'https://homefieldmarketing.ca/wp-content/uploads/2025/06/farmers-market.webp',
    images: [
      'https://homefieldmarketing.ca/wp-content/uploads/2025/06/farmers-market.webp',
    ],
    featured: false,
    display_order: 6,
  },
  {
    slug: 'millers-hockey',
    name: 'Millers Hockey',
    category: 'Branding',
    categories: ['Branding', 'Design'],
    short_description: 'Branding and design for Millers Hockey.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S1.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S1.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S1.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S2.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S3.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S4.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/06/2025-SteinbachMillers-FeatureWork-S5.webp',
    ],
    featured: false,
    display_order: 7,
  },
  {
    slug: 'langill-farm',
    name: 'Langill Farm',
    category: 'Branding',
    categories: ['Branding', 'Design', 'Print', 'Web Design'],
    short_description: 'Full-service branding, design, print, and web design for Langill Farm.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/04/2025-01_HFPortfolio-LangillFarm_Website-1.webp',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/04/2025-01_HFPortfolio-LangillFarm_Website-1.webp',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/04/2025-01_HFPortfolio-LangillFarm_Website-1.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/04/2025-01_HFPortfolio-LangillFarm_Website-2.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/04/2025-01_HFPortfolio-LangillFarm_Website-3.webp',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/04/2025-01_HFPortfolio-LangillFarm_Website-5.webp',
    ],
    featured: false,
    display_order: 8,
  },
  {
    slug: 'signex',
    name: 'Signex',
    category: 'Web Design',
    categories: ['Web Design'],
    short_description: 'Web design for Signex.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/02/Sign-Ex-Website-scaled.jpg',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/02/Sign-Ex-Website-scaled.jpg',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2025/02/Sign-Ex-Website-scaled.jpg',
    ],
    featured: false,
    display_order: 9,
  },
  {
    slug: 'sk-wildlife-federation',
    name: 'SK Wildlife Federation',
    category: 'Web Design',
    categories: ['Web Design'],
    short_description: 'Web design for the Saskatchewan Wildlife Federation.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/11/SWF-website-banner-scaled-2.jpg',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/11/SWF-website-banner-scaled-2.jpg',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/11/SWF-website-banner-scaled-2.jpg',
    ],
    featured: false,
    display_order: 10,
  },
  {
    slug: 'oasis-manitou',
    name: 'Oasis Manitou',
    category: 'Web Design',
    categories: ['Web Design'],
    short_description: 'Web design for Oasis Manitou.',
    description: '',
    hero_image:
      'https://homefieldmarketing.ca/wp-content/uploads/2024/11/OasisManitou-portfolio-web-1.png',
    thumbnail_image:
      'https://homefieldmarketing.ca/wp-content/uploads/2024/11/OasisManitou-portfolio-web-1.png',
    images: [
      'https://homefieldmarketing.ca/wp-content/uploads/2024/11/OasisManitou-portfolio-web-1.png',
    ],
    featured: false,
    display_order: 11,
  },
  {
    slug: 'summer-in-the-city-2',
    name: 'Summer in the City',
    category: 'Branding',
    categories: ['Branding', 'Design', 'Web Design'],
    short_description: 'Branding, design, and web design for Summer in the City.',
    description: '',
    hero_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/07/2024-SITC-HFWebsite-01-1.jpg',
    thumbnail_image:
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/07/2024-SITC-HFWebsite-01-1.jpg',
    images: [
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/07/2024-SITC-HFWebsite-01-1.jpg',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/07/2024-SITC-HFWebsite-02-1.jpg',
      'https://homefieldmarketing-v1770048921.websitepro-cdn.com/wp-content/uploads/2024/07/2024-SITC-HFWebsite-03-1.jpg',
    ],
    featured: false,
    display_order: 12,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
