import Link from 'next/link';
import { AssetImage } from './AssetImage';
import { ContactForm } from './ContactForm';
import { Newsletter } from './Newsletter';
import { ethicsNotes, images, navItems, site } from '../lib/content';

export function Footer() {
  return (
    <footer className="bg-[#03111b] py-12 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_.8fr_1fr]">
        <div>
          <AssetImage {...images.logo} width={220} height={54} className="h-12 w-auto max-w-[220px]" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">{site.descriptor}. Head office: {site.headOffice}. Branch offices: {site.branchOffices.join(' · ')}. Serving businesses, institutions and individuals with assurance, taxation, compliance and advisory support.</p>
          <p className="mt-4 text-sm leading-7 text-white/62">Email: <a className="text-[#d0ad68]" href={`mailto:${site.email}`}>{site.email}</a><br />Phone / WhatsApp: <a className="text-[#d0ad68]" href={`https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`}>{site.phone}</a><br />Click to call: <a className="text-[#d0ad68]" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a><br />Hours: {site.businessHours}</p>
        </div>
        <div>
          <p className="footer-title">Navigate</p>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-[#d0ad68]">{item.label}</Link>)}
            <Link href="/privacy-policy" className="hover:text-[#d0ad68]">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-[#d0ad68]">Disclaimer</Link>
            <a href="/sitemap.xml" className="hover:text-[#d0ad68]">Sitemap</a>
            <a href={site.googleBusinessProfileHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#d0ad68]">Google Business Profile</a>
            <a href={`https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#d0ad68]">WhatsApp</a>
          </div>
        </div>
        <div>
          <p className="footer-title">ICAI compliance note</p>
          <ul className="mt-4 space-y-2 text-xs leading-6 text-white/55">
            {ethicsNotes.map((note) => <li key={note}>• {note}</li>)}
          </ul>
        </div>
      </div>
      <div className="container mt-10 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="footer-title">Request an appointment</p>
          <h2 className="display mt-4 text-4xl leading-tight">Share your requirement with the firm.</h2>
          <p className="mt-4 text-sm leading-7 text-white/58">This form appears sitewide so every page provides firm contact information and a professional appointment request path. Submission opens your email client and does not create an engagement.</p>
          <div className="mt-6"><Newsletter /></div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><ContactForm /></div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
        © 2026 {site.name}. All rights reserved. Offices: {site.locations.join(' · ')} · {site.email}
      </div>
    </footer>
  );
}
