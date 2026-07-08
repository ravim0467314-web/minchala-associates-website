import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AssetImage } from '../../../components/AssetImage';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { ContactForm } from '../../../components/ContactForm';
import { PageHero } from '../../../components/PageHero';
import { locationPages, services, site } from '../../../lib/content';

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPages.find((item) => item.slug === slug);
  if (!location) return {};
  return {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: { title: `${location.title} | ${site.name}`, description: location.description, url: `/locations/${location.slug}`, images: [{ url: location.image.src, alt: location.title }] },
    twitter: { card: 'summary_large_image', title: location.title, description: location.description, images: [location.image.src] },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationPages.find((item) => item.slug === slug);
  if (!location) return notFound();
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AccountingService'],
    name: `${site.name} - ${location.city}`,
    url: `${site.url}/locations/${location.slug}`,
    image: `${site.url}${location.image.src}`,
    email: site.email,
    telephone: site.phone,
    openingHours: 'Mo-Sa 10:00-18:00',
    address: { '@type': 'PostalAddress', addressLocality: location.city, addressRegion: location.region, addressCountry: 'IN' },
    areaServed: [location.city, 'Bapatla', 'Guntur', 'Hyderabad'],
    hasMap: site.googleBusinessProfileHref,
    priceRange: 'Engagement-specific',
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Locations', href: '/offices' }, { label: location.city }]} />
      <PageHero eyebrow={`${location.region} service area`} title={location.title} description={location.description} />
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <AssetImage {...location.image} width={1200} height={760} className="w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-950/10" priority />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {location.serviceFocus.map((item) => <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6"><span className="text-[#b99655]">◆</span><h2 className="display mt-3 text-3xl">{item}</h2></article>)}
            </div>
          </div>
          <aside className="rounded-[2rem] bg-[#061724] p-8 text-white lg:sticky lg:top-28">
            <p className="eyebrow text-[#d0ad68]">Contact and directions</p>
            <p className="mt-5 leading-8 text-white/70">Email: <a className="text-[#d0ad68]" href={`mailto:${site.email}`}>{site.email}</a><br />Phone / WhatsApp: <a className="text-[#d0ad68]" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a><br />Hours: {site.businessHours}</p>
            <div className="mt-6 flex flex-wrap gap-3"><a className="button-primary" href={site.directionsHref} target="_blank" rel="noopener noreferrer">Driving directions</a><a className="button-secondary" href={`https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`}>WhatsApp</a></div>
            <p className="mt-6 text-sm leading-7 text-white/55">The firm uses consistent business information across website, Google Maps and appointment communications.</p>
          </aside>
        </div>
      </section>
      <section className="section-pad bg-white"><div className="container"><p className="eyebrow text-[#b99655]">Practice areas</p><h2 className="section-title max-w-4xl">Integrated service pages for {location.city} and nearby areas.</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className="luxury-card rounded-3xl p-6"><h3 className="display text-3xl">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p></Link>)}</div></div></section>
      <section className="section-pad bg-[#061724] text-white"><div className="container grid gap-8 lg:grid-cols-2"><div><p className="eyebrow text-[#d0ad68]">Appointment request</p><h2 className="section-title">Discuss a {location.city} service requirement.</h2><p className="mt-5 text-white/65">Professional engagement begins only after scope, eligibility and documentation review.</p></div><ContactForm /></div></section>
    </main>
  );
}
