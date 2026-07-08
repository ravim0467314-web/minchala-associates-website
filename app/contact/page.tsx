import type { Metadata } from 'next';
import { AssetImage } from '../../components/AssetImage';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ContactForm } from '../../components/ContactForm';
import { EnquiryTracker } from '../../components/EnquiryTracker';
import { PageHero } from '../../components/PageHero';
import { images, site } from '../../lib/content';

export const metadata: Metadata = { title: 'Contact', description: 'Contact Minchala & Associates for professional chartered accountancy services.' };

export default function ContactPage() {
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <PageHero eyebrow="Contact" title="Request a consultation or appointment." description="Share a brief note and the firm will coordinate the appropriate next step after professional conflict and scope checks." />
      <section className="section-pad">
        <div className="container grid gap-10 rounded-[2rem] bg-[#0B2341] p-8 text-white md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow text-[#C9A24A]">Get in touch</p>
            <h2 className="section-title">A professional starting point for your appointment request.</h2>
            <p className="mt-6 leading-8 text-white/65">Email: <a className="text-[#C9A24A]" href={`mailto:${site.email}`}>{site.email}</a><br />Phone / WhatsApp: <a className="text-[#C9A24A]" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a><br />Hours: {site.businessHours}<br />Offices: {site.locations.join(' · ')}</p>
            <div className="mt-6 flex flex-wrap gap-3"><a className="button-primary" href={`mailto:${site.email}`}>Email the firm</a><a className="button-secondary" href={site.googleBusinessProfileHref} target="_blank" rel="noopener noreferrer">View on Google</a><a className="button-secondary" href={site.directionsHref} target="_blank" rel="noopener noreferrer">Get directions</a><a className="button-secondary" href={`tel:${site.phone.replace(/\s/g, '')}`}>Click to call</a><a className="button-secondary" href="/offices">Office locations</a></div>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3">
              <AssetImage {...images.officeBapatla} width={900} height={560} className="h-auto w-full rounded-[1.35rem] object-cover" />
            </div>
            <p className="mt-6 rounded-2xl border border-white/10 p-5 text-sm leading-7 text-white/55">Contacting the firm does not create a professional engagement. Work begins only after scope, eligibility, independence and documentation checks.</p>
          </div>
          <ContactForm />
        </div>
        <div className="container mt-10 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/5"><iframe title="Google Maps location for Minchala & Associates" src={site.googleMapsEmbedSrc} className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <EnquiryTracker />
        </div>
      </section>
    </main>
  );
}
