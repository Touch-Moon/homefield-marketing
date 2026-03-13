import type { Solution } from '@/types';

/**
 * Static solution data crawled from https://homefieldmarketing.ca/solutions/
 * Layout: Dark hero (H1 + gold H5 tagline + body + CTA + right illustration)
 *         → White 3-col benefits → Gray content section
 */
export const solutions: Solution[] = [
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    tagline: 'Building Blocks for Success',
    heroBody:
      "Just like an architect draws out a building plan before they start building, brand strategy helps to build customer loyalty by setting your business apart. Brand Strategy is more than just a product, logo, and website. It's a well-defined strategy to connect to consumers needs, emotions, and competitive environments.",
    heroImage:
      '/images/solutions/ico-brand-strategy.webp',
    ctaText: 'Make a Lasting Impression',
    benefits: [
      'Build Value For Your Company',
      'Improve Customer Recognition & Loyalty',
      'Stay Ahead of the Competition',
    ],
    contentHeading: 'Stay Relevant with Effective Branding',
    contentBody:
      'Whether building a brand from the ground up or strengthening your existing one, our in-house branding and design experts will create a memorable corporate identity for your business, product, or organization.',
    description:
      'We help you define who you are, what you stand for, and how to communicate it clearly to your audience.',
  },
  {
    slug: 'marketing-strategy',
    name: 'Marketing Strategy',
    tagline: 'Connecting with Your Customers',
    heroBody:
      "A well-planned marketing strategy helps you direct your advertising dollars to where they will have the most impact. By understanding your company's goals and your customer's needs, we'll create a distinct, sustainable competitive advantage. Knowing who your customers are and how to reach them is essential to the success of any business.",
    heroImage:
      '/images/solutions/ico-marketing-strategy.svg',
    ctaText: 'Get a Competitive Advantage',
    benefits: [
      'Competitive Advantage Over Your Competition',
      'Stimulate Demand for Your Products & Services',
      'Acquire New Customers',
    ],
    contentHeading: 'Avoid Budget Waste & Missed Marketing Goals',
    contentBody:
      "We'll work with you to identify your short- and long-term business goals, and recommend tactics that focus on efforts that will drive results.",
    description:
      'From awareness to conversion, we develop data-driven marketing plans tailored to your market and goals.',
  },
  {
    slug: 'websites',
    heroType: 'photo',
    name: 'Website Design',
    tagline: 'Homefield Can Help',
    heroBody:
      "A website is your best employee. It works 24/7 giving your potential customers information, it gets you that late-night sale, and it makes sure you're always open. A resource like that is invaluable. Whether you're looking to improve your existing website or build a new one—we've got you covered.",
    heroImage:
      '/images/solutions/hero-websites.webp',
    ctaText: "I'm Ready to Start",
    benefits: [
      'Add eCommerce and Start Selling Online',
      'Custom Design That Represents Your Brand',
      'Quarterly Reporting & Analytics',
    ],
    contentHeading: 'Quarterly Reporting',
    contentBody:
      "Knowledge is power! We want to give you that knowledge to make important business decisions. We want you to see, and understand, how well your website is working for you. Our quarterly reporting is something that sets us apart. Not \u2018hip and with it\u2019 when it comes to understanding website analytics? Don\u2019t sweat it. We may not be super hip either, but we are definitely \u2018with it\u2019 when it comes to analytics. We\u2019ll walk you through it each time.",
    description:
      'Modern, fast, and conversion-focused websites designed to represent your business and drive results.',
  },
  {
    slug: 'video-photography',
    name: 'Video & Photography',
    tagline: 'See Your Business on the Big (and Small) Screen',
    heroBody:
      'Video and photography are powerful, with many uses to help boost your business. High quality production can communicate a level of excellence and professionalism. We craft your video and photograph projects with your business goals in mind – whether to provide extra information on your website, deliver a powerful advertising campaign, or tell a great story that represents your brand.',
    heroImage:
      '/images/solutions/ico-video-photography.svg',
    ctaText: 'Bring Your Vision to Life',
    benefits: [
      'Tell Your Story',
      'Engage & Inform Your Audience',
      'Increase Conversions',
    ],
    contentHeading: 'Boost Your Brand Visability & Growth',
    contentBody:
      'Because they engage the audience and trigger an emotional response, video is an incredibly effective way to showcase your brand. Videos are also versatile and can be used on multiple platforms for a variety of purposes: Social Media, Digital Advertising, Testimonials, Informative/Educational, Product Demonstrations, and much, MUCH more.',
    description:
      'Professional video and photography that captures the essence of your brand and connects with your audience.',
  },
  {
    slug: 'display-ads',
    name: 'Display Ads',
    tagline: 'Boost Awareness & Results',
    heroBody:
      "Consistent visibility against a highly engaged local audience helps build familiarity with your brand – keeping you top of mind during each phase of the customer journey. Layering in a highly-targeted search component helps drive conversions – capturing customers when they're ready to buy.",
    heroImage:
      '/images/solutions/ico-display-ads.svg',
    ctaText: 'Show The World Who You Are',
    benefits: [
      'Cost Effective Way to Get Noticed',
      'Reach a Larger, More Targeted Audience',
      'Measurable Results',
    ],
    contentHeading: 'Paying to Play',
    contentBody:
      'Digital advertising is one of the most effective and cost-efficient ways to expand your reach, find new customers, and diversify your revenue streams.',
    description:
      "Eye-catching display advertising that puts your brand in front of the right people at the right time.",
  },
  {
    slug: 'seo',
    name: 'SEO',
    tagline: 'The Backbone of Your Website',
    heroBody:
      "Display campaigns are great for building awareness with your target customers. We leverage the Google Display network to ensure your message reaches the right audience. Our team will work with you to define targeting strategy, develop creative, manage, and optimize your campaign for the best results, alongside monthly reporting.",
    heroImage:
      '/images/solutions/ico-seo.svg',
    ctaText: 'Take Your Website to the Next Level',
    benefits: [
      'Increase Brand Awareness & Credibility',
      'Drive Quality Traffic to Your Website',
      'Gain a Competitive Advantage',
    ],
    contentHeading: 'Get Noticed',
    contentBody:
      "Why is it important to rank well on sites like Google and Bing? Over 80% of consumers search online before making a buying decision. SEO helps your website rank higher, get noticed, and drive more sales.",
    description:
      'Search engine optimization strategies that increase your visibility and drive organic traffic to your business.',
  },
  {
    slug: 'logo-design',
    name: 'Logo Design',
    tagline: 'Turn Heads with an Eyecatching Logo',
    heroBody:
      "A logo is the face of your business. Ensure you stand out with a logo built by a team with years of experience in developing successful brands. We will work with you to fill out a creative brief that determines what you need and where you want to go. From there, we'll help you select the right logo design package.",
    heroImage:
      '/images/solutions/ico-logo-design.svg',
    ctaText: 'Get Started',
    benefits: [
      'Make a Strong First Impression',
      'Establish Your Brand Identity',
      'Stand Out in the Crowd',
    ],
    contentHeading: 'Be Memorable',
    contentBody:
      "Your logo doesn't need to say a lot, but it should convey a distinctive picture of your brand that allows people to connect to it, and remember it.",
    description:
      'A strong logo is the foundation of your brand. We create logos that are memorable, versatile, and uniquely yours.',
  },
  {
    slug: 'media-planning-buying',
    name: 'Media Planning & Buying',
    tagline: 'Your Business, Everywhere',
    heroBody:
      "By purchasing advertising media on platforms not owned by Golden West, we can increase your brand's awareness and reach. Our team can also help write, create, and advertise for your business, hassle-free. With one team and one contact, we will create one successful marketing campaign.",
    heroImage:
      '/images/solutions/ico-media-planning-buying.svg',
    ctaText: 'Make an Impact',
    benefits: [
      'Capture Consumer Attention',
      'Increase Brand Recognition',
      'Reach a Limitless Audience',
    ],
    contentHeading: 'Be Seen Through the Right Channels',
    contentBody:
      "At Homefield, we have an intimate understanding of the marketplace and a long list of contacts and relationships with media vendors, to get you the best prices. Our media planners will work with you to establish a clear target audience and deliver the most bang for limited marketing bucks. We'll strategically choose the most effective channels, and determine the media vehicles, content types, and engagement frequency to garner the best results.",
    description:
      'Strategic media planning and buying to ensure your message reaches the right audience at the best value.',
  },
  {
    slug: 'reputation-management',
    heroType: 'photo',
    hideContactForm: true,
    name: 'Reputation',
    tagline: 'They Like You, They Really Like You.',
    heroBody:
      "Your business\u2019 reputation helps your potential customers know about the amazing way you treat your customers. Or that amazing dish you make. Or how you provided them with the best service in town.\n\nIt\u2019s word-of-mouth, social media conversations, and online reviews\u2014anywhere your customers spend time talking to each other is an opportunity for them to contribute to your good name.",
    heroImage:
      '/images/solutions/hero-reputation-management.webp',
    ctaText: 'Ramp Up Your Reputation',
    benefits: [
      'Build Trust with Your Customers',
      'Increase Customer Confidence',
      'Generate More Positive Reviews',
    ],
    contentHeading: 'Homefield can help.',
    contentBody:
      "We have great DIY solutions that allow you to take control of your online reputation. Or, we can give you time back in your day and do the heavy lifting for you.\n\nSo, if no one has told you today, you\u2019re doing a great job. Now, let\u2019s get all of your happy customers telling everyone about you.",
    description:
      'Monitor, manage, and improve your online reputation to build trust with customers and prospects.',
  },
  {
    slug: 'social-media',
    name: 'Social Media',
    tagline: 'Impacting Your Audience',
    heroBody:
      "Social media is more like a telephone than a television. It's not about your business — it's about people. Social media is a great way to share experiences, information, and educational posts that entice a consumer to engage with your company, your products, and your services. We know you're busy! We can help by posting valuable content for you.",
    heroImage:
      '/images/solutions/ico-social-media.svg',
    ctaText: 'Make a Lasting Impression',
    benefits: [
      'Increase Your Visibility',
      'Build Your Brand',
      'Inform & Engage Your Audience',
    ],
    contentHeading: 'Engage With Your Clientele',
    contentBody:
      "If you're not on social media for your business, what are you waiting for? In today's world, it's an essential way to reach your customers and grow your brand. Not all social channels are the same. Many businesses feel they need to be everywhere. We'll help steer you in the right direction to ensure the channels you choose actually hit your target demographic, and deliver the right content.",
    description:
      'Strategic social media management that grows your following, engages your audience, and drives results.',
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
