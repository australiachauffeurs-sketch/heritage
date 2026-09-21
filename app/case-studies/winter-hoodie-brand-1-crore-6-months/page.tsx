import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.heritageappreals.com';
const slug = 'winter-hoodie-brand-1-crore-6-months';

// Set to a real, client-approved quote to show the testimonial block.
const testimonial: { quote: string; name: string; role: string } | null = null;

const stats = [
  { value: '₹1 Cr', label: 'Revenue in 6 Months' },
  { value: '20', label: 'Hoodie Styles' },
  { value: '100%', label: 'Direct-to-Consumer' },
  { value: 'Day 0', label: 'No Brand, No Stock' },
];

const phases = [
  {
    week: 'Brand & Range Planning',
    detail: 'We positioned the brand as a hoodie specialist rather than a general clothing label. Together with the founder, we planned a focused range of 20 hoodie styles, defined the target customer and price point, and built the name, visual identity and packaging so the whole range read as one clear brand.',
  },
  {
    week: 'Manufacturing & Sampling',
    detail: 'We sourced production from a specialist winterwear manufacturer and ran sampling across all 20 styles — checking fabric, fleece hand-feel, fit and finish on every design before approving bulk. Getting samples right upfront protected the brand from quality complaints and fit-related returns at scale.',
  },
  {
    week: 'Photography & D2C Store',
    detail: 'We shot catalogue and on-model lifestyle imagery for the full range and built the D2C store around conversion: easy browsing across 20 styles, clear size guidance, and tracking installed from day one so every sale could be attributed.',
  },
  {
    week: 'Pre-Launch Audience',
    detail: 'Before launch, Instagram Reels built an audience around the range — fabric close-ups, fit and styling. By launch day, the brand was selling to people who already knew it instead of starting from cold traffic.',
  },
  {
    week: 'Scaling Through the Season',
    detail: 'With 20 styles live, the data quickly showed which designs customers wanted most. We put ad spend and restocks behind the best-sellers, used the wider range to raise order values, and timed marketing around the winter season when hoodie demand peaks.',
  },
  {
    week: 'Closing the Season',
    detail: 'As winter demand eased, the focus moved to existing customers and warm audiences through bundles and retargeting, clearing slower-moving styles so stock was not carried into summer.',
  },
];

const lessons = [
  { title: 'Own one category before expanding', detail: 'A hoodies-only range made the brand easy to understand and remember. Depth in one category beat spreading a new brand across many product types.' },
  { title: 'Let customers pick the winners', detail: 'Twenty styles gave enough range to learn what sells. Doubling down on best-sellers with ad spend and restocks is where growth came from.' },
  { title: 'Seasonality is a plan, not a risk', detail: 'Winterwear sells in a short window. Timing production, restocks and marketing to the season is what turned six months into ₹1 crore.' },
  { title: 'Build demand before launch', detail: 'A pre-launch audience meant sales from day one and early signals on which styles and creatives worked.' },
];

export const metadata: Metadata = {
  title: 'Case Study: Hoodie D2C Brand, ₹0 to ₹1 Crore in 6 Months',
  description:
    'How Heritage Apparels took a new hoodies-only D2C brand from zero to ₹1 crore in sales in its first six months with a range of 20 hoodie styles: brand, manufacturing, D2C store, Reels and ads.',
  keywords: [
    'fashion brand case study India',
    'D2C clothing brand 1 crore',
    'hoodie brand launch India',
    'D2C brand launch success story India',
    'Heritage Apparels case study',
  ],
  alternates: { canonical: `${siteUrl}/case-studies/${slug}` },
  openGraph: {
    title: 'Hoodie D2C Brand: ₹0 to ₹1 Crore in 6 Months',
    description: 'One category, 20 styles, ₹1 crore. How a new hoodies-only D2C brand launched and scaled in its first season.',
    type: 'article',
    url: `${siteUrl}/case-studies/${slug}`,
  },
};

export default function HoodieBrandCaseStudyPage() {
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hoodie D2C Brand: ₹0 to ₹1 Crore in 6 Months',
    description: 'How Heritage Apparels took a new hoodies-only D2C brand from zero to ₹1 crore in sales in six months with a range of 20 hoodie styles.',
    author: { '@type': 'Organization', name: 'Heritage Apparels', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Heritage Apparels', url: siteUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/case-studies/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />

      <section className="py-28 bg-[#16213e] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm mb-8 transition-colors">← Back to Case Studies</Link>
          <p className="section-label mb-4">Case Study</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight">
            ₹0 to <span className="gradient-text italic">₹1 Crore</span> in 6 Months<br />A Hoodies-Only D2C Brand
          </h1>
          <div className="gold-divider mb-8" />
          <div className="flex flex-wrap gap-3">
            {['D2C Brand Launch', 'Winterwear', '20 Hoodie Styles', 'Instagram Reels', 'Performance Marketing'].map((tag) => (
              <span key={tag} className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full border border-gold/20">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-charcoal border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-cream/70 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Challenge</h2>
            <p className="text-cream/70 leading-relaxed text-lg mb-4">
              The founder came to us with an idea and nothing else: no brand name, no manufacturer, no photography, no website and no audience. The goal was to launch a clothing brand direct-to-consumer and reach real revenue quickly.
            </p>
            <p className="text-cream/70 leading-relaxed text-lg">
              Winterwear added a hard deadline. Hoodie demand is concentrated into the cold months. Launch late, or run out of the right styles at the peak, and the season is gone. Over-produce the wrong ones, and the stock waits in a warehouse until next winter.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Strategy: One Category, Twenty Styles</h2>
            <p className="text-cream/70 leading-relaxed text-lg">
              Instead of launching a general clothing label, we built a hoodie specialist. The brand sold hoodies and only hoodies — a range of 20 styles. One category meant one clear message for every ad, one production specialism to perfect, and a brand customers could instantly understand. The range gave buyers real choice while keeping the brand focused.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">What Heritage Apparels Did</h2>
            <div className="space-y-6">
              {phases.map((item) => (
                <div key={item.week} className="bg-[#16213e] border border-gold/15 rounded-xl p-6">
                  <div className="text-gold font-semibold text-sm mb-2">{item.week}</div>
                  <p className="text-cream/70 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">The Result</h2>
            <p className="text-cream/70 leading-relaxed text-lg">
              From a standing start — no brand, no stock, no audience — the brand crossed <strong className="text-cream">₹1 crore in sales within its first six months</strong>, selling entirely direct-to-consumer with a range of 20 hoodie styles.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-cream mb-6">What Other Founders Can Learn</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {lessons.map((l) => (
                <div key={l.title} className="bg-[#16213e] border border-gold/15 rounded-xl p-6">
                  <div className="text-cream font-semibold mb-2">{l.title}</div>
                  <p className="text-cream/60 text-sm leading-relaxed">{l.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {testimonial && (
            <div className="bg-[#16213e] border border-gold/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">&ldquo;</div>
              <p className="text-cream/80 text-lg leading-relaxed italic mb-6">{testimonial.quote}</p>
              <div className="text-gold font-semibold">{testimonial.name}</div>
              <div className="text-cream/50 text-sm">{testimonial.role}</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to Build Your <span className="gradient-text italic">Category?</span></h2>
          <p className="text-cream/60 mb-8 text-lg">You don&apos;t need to sell everything to build a brand. Tell us about your idea and we&apos;ll show you how to launch it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold py-4 px-8">Start My Brand →</Link>
            <Link href="/services/brand-launch" className="btn-outline py-4 px-8">Our Brand Launch Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
