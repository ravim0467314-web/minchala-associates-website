import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AssetImage } from '../../../components/AssetImage';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { ContactForm } from '../../../components/ContactForm';
import { PageHero } from '../../../components/PageHero';
import { images, services, site } from '../../../lib/content';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.localTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.localTitle} | ${site.name}`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: images.socialPreview.src, alt: `${service.title} at ${site.name}` }],
    },
    twitter: { card: 'summary_large_image', title: service.localTitle, description: service.metaDescription, images: [images.socialPreview.src] },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 5);
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: { '@type': 'AccountingService', name: site.name, url: site.url, telephone: site.phone, email: site.email },
    areaServed: ['Bapatla', 'Guntur', 'Hyderabad', 'Andhra Pradesh', 'Telangana'],
    url: `${site.url}/services/${service.slug}`,
    hasOfferCatalog: { '@type': 'OfferCatalog', name: `${service.title} scope areas`, itemListElement: service.details.map((detail) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: detail } })) },
  };
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }} />
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} />
      <PageHero eyebrow="Local service focus" title={service.localTitle} description={service.metaDescription} />
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <aside className="luxury-card overflow-hidden rounded-[2rem] p-4 lg:sticky lg:top-28">
            <AssetImage {...images.service} width={1200} height={760} className="h-auto w-full rounded-[1.5rem] object-cover" />
            <div className="p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b99655]">Serving Bapatla, Guntur & Hyderabad</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">Scope is finalized only after records review, professional eligibility checks and written engagement acceptance.</p>
            </div>
          </aside>
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.details.map((detail) => <article key={detail} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><span className="text-[#b99655]">◆</span><h2 className="display mt-3 text-3xl">{detail}</h2></article>)}
            </div>
            <article className="mt-8 rounded-[2rem] bg-[#061724] p-8 text-white">
              <p className="eyebrow text-[#d0ad68]">Professional outcome</p>
              <h2 className="display mt-4 text-4xl">{service.outcome}</h2>
              <p className="mt-5 leading-8 text-white/65">This page is optimized for users researching {service.keywords.join(', ')} while preserving ICAI-compliant, informational wording.</p>
            </article>
            <section className="mt-10">
              <p className="eyebrow text-[#b99655]">Service FAQs</p>
              <div className="mt-5 grid gap-4">
                {service.faqs.map((faq) => <details key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6"><summary className="cursor-pointer font-bold text-[#061724]">{faq.question}</summary><p className="mt-4 leading-7 text-slate-600">{faq.answer}</p></details>)}
              </div>
            </section>
            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7">
              <p className="eyebrow text-[#b99655]">Related services</p>
              <div className="mt-5 flex flex-wrap gap-3">{relatedServices.map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-[#0b2433] transition hover:border-[#b99655]">{item.title}</Link>)}</div>
            </section>
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#061724] text-white"><div className="container grid gap-8 lg:grid-cols-2"><div><p className="eyebrow text-[#d0ad68]">Request a consultation / appointment</p><h2 className="section-title">Start with a professional scope review.</h2><p className="mt-5 text-white/65">Use firm contact channels only. An enquiry does not create a professional engagement.</p></div><ContactForm /></div></section>
    </main>
  );
}
