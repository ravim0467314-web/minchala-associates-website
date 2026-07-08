import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AssetImage } from '../../../components/AssetImage';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { JsonLd } from '../../../components/StructuredData';
import { partners, partnerTimelines, site } from '../../../lib/content';

type PartnerParams = { params: Promise<{ slug: string }> };
function toSlug(name: string) { return name.toLowerCase().replace(/ca\s+/g, '').replace(/\s+/g, '-'); }
export function generateStaticParams() { return partners.map((partner) => ({ slug: toSlug(partner.name) })); }
export async function generateMetadata({ params }: PartnerParams): Promise<Metadata> { const { slug } = await params; const partner = partners.find((item) => toSlug(item.name) === slug); return { title: partner ? `${partner.name}, ${partner.credentials}` : 'Partner Profile', description: partner?.focus }; }

export default async function PartnerProfilePage({ params }: PartnerParams) {
  const { slug } = await params;
  const partner = partners.find((item) => toSlug(item.name) === slug);
  if (!partner) return notFound();
  const personJsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: partner.name, honorificPrefix: 'CA', jobTitle: `${partner.role}, ${partner.credentials}`, worksFor: { '@type': 'Organization', name: site.name, url: site.url }, description: partner.focus, knowsAbout: partner.strengths };
  return <main id="main"><JsonLd data={personJsonLd} /><Breadcrumbs items={[{ label: 'Partners', href: '/partners' }, { label: partner.name }]} /><section className="section-pad"><div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="luxury-card overflow-hidden rounded-3xl"><AssetImage {...partner.image} width={900} height={700} className="h-80 w-full object-cover" /><div className="p-8"><h1 className="display text-5xl">{partner.name}</h1><p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-[#b99655]">{partner.credentials} · {partner.role}</p><p className="mt-6 font-semibold">{partner.focus}</p><p className="mt-4 leading-8 text-slate-600">{partner.bio}</p></div></div><div><p className="eyebrow text-[#b99655]">Qualifications & journey</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{partner.qualifications.map((item) => <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6 font-semibold text-[#0b2433]">{item}</article>)}</div><div className="mt-8 space-y-4">{partnerTimelines.map((item) => <article key={item.year} className="rounded-3xl border border-slate-200 bg-white p-6"><strong className="text-[#b99655]">{item.year}</strong><p className="mt-2 text-slate-600">{item.text}</p></article>)}</div><p className="mt-6 rounded-2xl bg-[#061724] p-5 text-sm leading-7 text-white/70">Published information is limited to approved public professional details. Specific signing authority, engagement team and scope are confirmed only through written engagement communication.</p></div></div></section></main>;
}
