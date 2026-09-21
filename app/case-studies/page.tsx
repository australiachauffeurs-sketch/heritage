import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageappreals.com';

export const metadata: Metadata = {
  title: 'Fashion Brand Case Studies India',
  description:
    'Results from Indian D2C fashion brands Heritage Apparels has launched and scaled — from manufacturing and branding to Reels, Meta Ads and marketplaces.',
  keywords: ['fashion brand case studies India', 'D2C brand success stories India', 'Heritage Apparels results'],
  alternates: { canonical: `${siteUrl}/case-studies` },
};

const caseStudies = [
  {
    title: '₹0 to ₹1 Crore in 6 Months',
    slug: 'winter-hoodie-brand-1-crore-6-months',
    brandType: 'Hoodies-Only D2C Brand',
    tag: 'D2C Launch',
    challenge: 'A founder with an idea and nothing else: no brand, no manufacturer, no photos, no store and no audience, launching into a short winter season.',
    solution: 'A hoodies-only brand with 20 styles, a conversion-focused D2C store, a pre-launch Reels audience, and ads scaled behind the best-sellers through winter.',
    services: ['Brand Identity', 'Manufacturing', 'D2C Store', 'Reels', 'Performance Marketing'],
    keyResult: '₹1 crore in sales in the first 6 months',
    stats: [
      { value: '₹1 Cr', label: 'Revenue' },
      { value: '6 Months', label: 'Timeline' },
      { value: '20', label: 'Hoodie Styles' },
    ],
  },
];

export default function CaseStudiesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((cs, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteUrl}/case-studies/${cs.slug}`,
      name: cs.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="py-24 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="section-label mb-4">Client Results</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-cream mb-6 leading-tight">
            Brands We&apos;ve Built.
            <br />
            <span className="gradient-text italic">Results They&apos;ve Earned.</span>
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            How Indian D2C fashion brands went from idea to real revenue with Heritage Apparels — manufacturing, brand, content and marketing under one roof.
          </p>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="group bg-[#16213e] rounded-2xl border border-gold/10 overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 flex flex-col"
              >
                <div className="p-6 border-b border-gold/10">
                  <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20">{cs.tag}</span>
                  <h2 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors leading-snug mb-1">{cs.title}</h2>
                  <p className="text-cream/50 text-sm">{cs.brandType}</p>
                </div>

                <div className="grid grid-cols-3 divide-x divide-gold/10 border-b border-gold/10">
                  {cs.stats.map((stat) => (
                    <div key={stat.label} className="py-4 px-3 text-center">
                      <div className="font-serif font-bold text-lg gradient-text leading-tight">{stat.value}</div>
                      <div className="text-cream/40 text-xs mt-0.5 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1.5">Challenge</h3>
                    <p className="text-cream/70 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1.5">Solution</h3>
                    <p className="text-cream/70 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="rounded-xl p-4 mb-5 mt-auto bg-gold/5 border border-gold/20">
                    <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-0.5">Key Result</p>
                    <p className="text-sm font-semibold text-gold">★ {cs.keyResult}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cs.services.map((svc) => (
                      <span key={svc} className="px-2.5 py-0.5 bg-white/5 text-cream/50 text-xs rounded-full border border-white/8">{svc}</span>
                    ))}
                  </div>
                  <Link href={`/case-studies/${cs.slug}`} className="btn-gold w-full text-center text-sm py-3 block">View Case Study</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Your Brand Could Be <span className="gradient-text italic">Next</span></h2>
          <p className="text-cream/60 mb-8 text-lg">Tell us about your idea and we&apos;ll map out how to launch it.</p>
          <Link href="/contact" className="btn-gold py-4 px-8">Start My Brand →</Link>
        </div>
      </section>
    </>
  );
}
