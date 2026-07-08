import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '../../../../components/Breadcrumbs';
import { PageHero } from '../../../../components/PageHero';
import { checklistLibrary, site } from '../../../../lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return checklistLibrary.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const checklist = checklistLibrary.find((item) => item.slug === slug);
  if (!checklist) return {};
  return { title: checklist.title, description: checklist.summary, alternates: { canonical: `/resources/checklists/${checklist.slug}` }, openGraph: { title: checklist.title, description: checklist.summary, url: `/resources/checklists/${checklist.slug}` }, twitter: { card: 'summary_large_image', title: checklist.title, description: checklist.summary } };
}

export default async function ChecklistPage({ params }: Props) {
  const { slug } = await params;
  const checklist = checklistLibrary.find((item) => item.slug === slug);
  if (!checklist) return notFound();
  return <main id="main"><Breadcrumbs items={[{ label: 'Resources', href: '/resources' }, { label: checklist.title }]} /><PageHero eyebrow={checklist.category} title={checklist.title} description={checklist.summary} /><section className="section-pad"><div className="container grid gap-8 lg:grid-cols-[1fr_22rem]"><article className="luxury-card rounded-[2rem] p-7 md:p-10"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C9A24A]">Viewable checklist</p><h2 className="display mt-2 text-4xl">Preparation points</h2></div><a className="button-primary" href={checklist.downloadHref} download>Download text checklist</a></div><ol className="mt-8 space-y-4">{checklist.items.map((item, index) => <li key={item} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B2341] text-sm font-black text-[#C9A24A]">{String(index + 1).padStart(2, '0')}</span><p className="leading-7 text-slate-700">{item}</p></div></li>)}</ol><div className="mt-8 rounded-3xl border border-[#e8dcc4] bg-[#fffaf0] p-6 text-sm leading-7 text-slate-700"><strong className="text-[#0B2341]">Disclaimer:</strong> This checklist is general educational guidance only and is not professional advice. Requirements depend on facts, current law, portal records, due dates, notifications and engagement scope. {site.complianceLine}</div></article><aside className="space-y-5"><div className="rounded-[2rem] bg-[#0B2341] p-7 text-white"><h2 className="display text-3xl">Need a scoped review?</h2><p className="mt-3 leading-7 text-white/65">A professional engagement begins only after appointment, scope acceptance, conflict checks and document review.</p><Link className="button-primary mt-6 inline-flex" href="/contact">Request appointment</Link></div><div className="luxury-card rounded-[2rem] p-7"><h2 className="display text-3xl">Related resources</h2><div className="mt-5 flex flex-col gap-3"><Link className="font-bold text-[#C9A24A]" href="/resources">All resources</Link><Link className="font-bold text-[#C9A24A]" href="/compliance-calendar">Compliance calendar</Link><Link className="font-bold text-[#C9A24A]" href="/client-journey">Client journey</Link></div></div></aside></div></section></main>;
}
