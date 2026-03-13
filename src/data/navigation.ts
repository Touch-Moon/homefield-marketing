import type { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Brand Strategy', href: '/solutions/brand-strategy' },
      { label: 'Marketing Strategy', href: '/solutions/marketing-strategy' },
      { label: 'Websites', href: '/solutions/websites' },
      { label: 'Video & Photography', href: '/solutions/video-photography' },
      { label: 'Display Ads', href: '/solutions/display-ads' },
      { label: 'SEO', href: '/solutions/seo' },
      { label: 'Logo Design', href: '/solutions/logo-design' },
      { label: 'Media Planning & Buying', href: '/solutions/media-planning-buying' },
      { label: 'Reputation Management', href: '/solutions/reputation-management' },
      { label: 'Social Media', href: '/solutions/social-media' },
    ],
  },
  { label: 'Customer Journey', href: '/customer-journey' },
  { label: 'Our Work', href: '/our-work' },
];

export const headerCTA: NavItem[] = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Locations', href: '/locations' },
];

export const footerNav = {
  solutions: [
    { label: 'Brand Strategy', href: '/solutions/brand-strategy' },
    { label: 'Marketing Strategy', href: '/solutions/marketing-strategy' },
    { label: 'Websites', href: '/solutions/websites' },
    { label: 'Video & Photography', href: '/solutions/video-photography' },
    { label: 'Display Ads', href: '/solutions/display-ads' },
    { label: 'SEO', href: '/solutions/seo' },
    { label: 'Logo Design', href: '/solutions/logo-design' },
    { label: 'Media Planning & Buying', href: '/solutions/media-planning-buying' },
    { label: 'Reputation Management', href: '/solutions/reputation-management' },
    { label: 'Social Media', href: '/solutions/social-media' },
  ],
  company: [
    { label: 'Customer Journey', href: '/customer-journey' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'About Us', href: '/about' },
  ],
  contact: [
    { label: 'Locations', href: '/locations' },
    { label: 'Careers', href: '/careers' },
  ],
};
