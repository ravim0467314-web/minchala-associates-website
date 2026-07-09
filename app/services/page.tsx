import type { Metadata } from 'next';
import Link from 'next/link';
import { AssetImage } from '../../components/AssetImage';
import { Faq } from '../../components/Faq';
import { PageHero } from '../../components/PageHero';
import { ServiceGrid } from '../../components/ServiceGrid';
import { images, locationPages, processSteps, services, site } from '../../lib/content';

export const metadata: Metadata = {
  title: 'CA Services in Bapatla',
  description:
    'Audit, income tax, GST, ROC filing, MCA compliance, accounting, bookkeeping, payroll, MSME, PMEGP project reports and advisory services for Bapatla, Guntur and Hyderabad.',
  keywords: site.serviceKeywords,
  alternates: { canonical: '/services' },
  openGraph: { title: 'CA Services in Bapatla | Minchala & Associates', description: 'ICAI-compliant professional services across audit, taxation, GST, MCA, accounting and advisory.', images: [{ url: images.professionalServiceSuite.src, alt: 'Professional CA services visual' }] },
  twitter: { card: 'summary_large_image', title: 'CA Services in Bapatla', description: 'Audit, tax, GST and compliance services in Bapatla with Guntur and Hyderabad coordination.', images: [images.professionalServiceSuite.src] },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Integrated services for the finance and compliance lifecycle."
        description="Service scopes are tailored to facts, professional standards and applicable statutory requirements. No result, saving, approval or outcome is guaranteed."
      />
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="luxury-card rounded-[2rem] p-5">
              <AssetImage {...images.professionalServiceSuite} width={1200} height={760} className="h-auto w-full rounded-[1.5rem] object-cover" priority />
            </div>
            <div className="rounded-[2rem] bg-[#061724] p-7 text-white">
              <p className="eyebrow text-[#d0ad68]">Local professional scope</p>
              <p className="mt-4 leading-7 text-white/65">Chartered Accountant near Bapatla, CA in Bapatla, CA near me Bapatla, Tax consultant Bapatla, GST consultant Bapatla and Audit firm Bapatla search intent is addressed through factual service pages.</p>
            </div>
          </div>
          <ServiceGrid />
        </div>
      </section>
      <section className="section-pad bg-white"><div className="container"><p className="eyebrow text-[#b99655]">Practice expertise</p><h2 className="section-title max-w-4xl">Professional desks organized around recurring compliance and decision support.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.slug} className="luxury-card rounded-3xl p-7"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b99655]">{service.title}</p><h3 className="display mt-3 text-3xl">{service.outcome}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p><Link className="mt-5 inline-flex font-bold text-[#b99655]" href={`/services/${service.slug}`}>View service scope →</Link></article>)}</div></div></section>
      <section className="section-pad bg-white">
        <div className="container">
          <p className="eyebrow text-[#b99655]">Local SEO service areas</p>
          <h2 className="section-title max-w-4xl">Service coverage for Bapatla, Guntur and Hyderabad.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {locationPages.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="luxury-card rounded-3xl p-6">
                <h2 className="display text-3xl">{location.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{location.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#061724] text-white">
        <div className="container">
          <p className="eyebrow text-[#d0ad68]">Engagement flow</p>
          <h2 className="section-title max-w-4xl">Clarity from first conversation to final deliverable.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <span className="text-[#d0ad68]">0{index + 1}</span>
                <h3 className="display mt-4 text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
