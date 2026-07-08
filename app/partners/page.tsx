import type { Metadata } from 'next';
import Link from 'next/link';
import { AssetImage } from '../../components/AssetImage';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { partners, staffProfiles, teamGroups } from '../../lib/content';

export const metadata: Metadata = { title: 'Partner Profiles', description: 'Approved partner profiles for CA Raviteja Minchala, CA Panchagnula Vijaya and CA Nakkala Gowtham at Minchala & Associates.' };
const toSlug = (name: string) => name.toLowerCase().replace(/ca\s+/g, '').replace(/\s+/g, '-');

export default function PartnersPage() {
  return (
    <main id="main"><Breadcrumbs items={[{ label: 'Partners' }]} /><PageHero eyebrow="Partner profiles" title="Professional leadership with accountable delivery desks." description="Only approved names, qualifications and professional focus areas are published. Engagement responsibility and team allocation are confirmed in writing for each matter." />
      <section className="section-pad"><div className="container grid gap-8 lg:grid-cols-2">{partners.map((partner) => <article key={partner.name} className="luxury-card overflow-hidden rounded-3xl"><AssetImage {...partner.image} width={900} height={600} className="h-72 w-full object-cover" /><div className="p-8"><h2 className="display text-4xl">{partner.name}</h2><p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#C9A24A]">{partner.credentials} · {partner.role}</p><p className="mt-5 font-semibold text-[#0B2341]">{partner.focus}</p><p className="mt-4 leading-8 text-slate-600">{partner.bio}</p><ul className="mt-6 space-y-2 text-sm font-semibold text-slate-700">{partner.strengths.map((strength) => <li key={strength}>✓ {strength}</li>)}</ul><Link className="mt-6 inline-flex font-bold text-[#C9A24A]" href={`/partners/${toSlug(partner.name)}`}>View profile →</Link></div></article>)}</div><div className="container mt-10"><p className="eyebrow text-[#C9A24A]">Professional team</p><div className="mt-6 grid gap-5 md:grid-cols-3">{staffProfiles.map((member) => <article key={member.name} className="luxury-card overflow-hidden rounded-3xl"><AssetImage {...member.image} width={700} height={460} className="h-48 w-full object-cover" /><div className="p-6"><h2 className="display text-3xl">{member.name}</h2><p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A24A]">{member.role}</p><p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p></div></article>)}</div><div className="mt-8 grid gap-4 md:grid-cols-4">{teamGroups.map((group) => <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6"><h2 className="display text-2xl">{group.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{group.text}</p></article>)}</div></div></section>
    </main>
  );
}
