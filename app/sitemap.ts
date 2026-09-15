import { MetadataRoute } from 'next';
import { indiaMarketplaces } from '@/lib/india-marketplace-data';
import { usMarketplaces } from '@/lib/us-marketplace-data';
import { indiaCities } from '@/lib/india-cities-data';
import { usCities } from '@/lib/us-cities-data';
import { usBlogPosts } from '@/lib/us-blog-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://heritage.orbilox.com';

const indiaServiceSlugs = [
  'manufacturing-sourcing',
  'brand-launch',
  'performance-marketing',
  'fashion-photoshoot',
  'digital-cataloging',
  'brand-strategy',
  'social-media-reels',
  'ecommerce-content',
  'marketplace-onboarding',
];

const usServiceSlugs = [
  'manufacturing-sourcing',
  'brand-launch',
  'performance-marketing',
  'fashion-photoshoot',
  'digital-cataloging',
  'brand-strategy',
  'social-media-reels',
  'marketplace-onboarding',
  'compliance',
];

const indiaBlogSlugs = [
  'myntra-seller-onboarding-guide-2025',
  'd2c-fashion-brand-launch-cost-india',
  'myntra-vs-ajio-fashion-brands-india',
  'meta-ads-fashion-brand-india-guide',
  'private-label-clothing-manufacturing-india',
  'nykaa-fashion-brand-onboarding-guide',
  'fashion-photography-trends-d2c-2025',
  'complete-guide-digital-cataloging-fashion-ecommerce',
  'how-to-brief-fashion-photographer-d2c-brand-checklist',
  'instagram-reels-fashion-brands-2025',
  'roi-professional-fashion-photography-data',
  'building-d2c-fashion-brand-visual-identity',
];


const usIndustrySlugs = [
  'clothing-brands',
  'activewear-brands',
  'footwear-brands',
  'accessories-brands',
  'kidswear-brands',
  'luxury-fashion',
  'sustainable-fashion',
];

const usToolSlugs = [
  'roas-calculator',
  'manufacturing-cost-calculator',
  'brand-launch-checklist',
  'amazon-readiness-checker',
];

const usCaseStudySlugs = [
  'amazon-roas-4x',
  'brand-launch-0-to-100k',
];

const usLandingSlugs = [
  'amazon-fashion-brand-agency',
  'amazon-fba-fashion-guide',
  'd2c-fashion-brand-launch',
  'fashion-brand-consultant',
  'free-brand-audit',
  'how-to-launch-fashion-brand-usa',
  'how-to-source-clothing-from-india',
  'india-manufacturing-for-us-brands',
  'india-vs-china-manufacturing',
  'private-label-clothing-india',
  'private-label-vs-dropshipping',
  'shopify-fashion-agency',
  'testimonials',
  'tiktok-shop-fashion-agency',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // India pages
  const indiaCore: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const indiaServices: MetadataRoute.Sitemap = indiaServiceSlugs.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const indiaBlog: MetadataRoute.Sitemap = indiaBlogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const usBlog: MetadataRoute.Sitemap = usBlogPosts.map((post) => ({
    url: `${siteUrl}/us/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // USA pages
  const usCore: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/us`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${siteUrl}/us/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/us/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/us/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/us/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/us/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const usServices: MetadataRoute.Sitemap = usServiceSlugs.map((slug) => ({
    url: `${siteUrl}/us/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const indiaMarketplacePages: MetadataRoute.Sitemap = indiaMarketplaces.map((m) => ({
    url: `${siteUrl}/services/marketplace/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const usMarketplacePages: MetadataRoute.Sitemap = usMarketplaces.map((m) => ({
    url: `${siteUrl}/us/services/marketplace/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const indiaCityPages: MetadataRoute.Sitemap = indiaCities.map((c) => ({
    url: `${siteUrl}/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const usCityPages: MetadataRoute.Sitemap = usCities.map((c) => ({
    url: `${siteUrl}/us/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const usIndustryPages: MetadataRoute.Sitemap = usIndustrySlugs.map((slug) => ({
    url: `${siteUrl}/us/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const usToolPages: MetadataRoute.Sitemap = usToolSlugs.map((slug) => ({
    url: `${siteUrl}/us/tools/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const usCaseStudyPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/us/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...usCaseStudySlugs.map((slug) => ({
      url: `${siteUrl}/us/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];

  const usLandingPages: MetadataRoute.Sitemap = usLandingSlugs.map((slug) => ({
    url: `${siteUrl}/us/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const utilityPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/sitemap-html`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  return [
    ...indiaCore,
    ...indiaServices,
    ...indiaBlog,
    ...indiaMarketplacePages,
    ...indiaCityPages,
    ...usCore,
    ...usServices,
    ...usBlog,
    ...usMarketplacePages,
    ...usCityPages,
    ...usIndustryPages,
    ...usToolPages,
    ...usCaseStudyPages,
    ...usLandingPages,
    ...utilityPages,
  ];
}
