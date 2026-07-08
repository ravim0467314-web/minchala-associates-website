import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Faq } from '../../components/Faq';
import { PageHero } from '../../components/PageHero';
import { articles, insights } from '../../lib/content';

export const metadata: Metadata = { title: 'Knowledge Hub', description: 'Professional updates and practical compliance perspectives from Minchala & Associates.' };

export default function KnowledgeHubPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Knowledge Hub' }]} /><PageHero eyebrow="Knowledge Hub" title="Current thinking, clearly structured." description="Educational resources for businesses and institutions. Content is general in nature and should not be treated as professional advice for specific facts." /><section className="section-pad"><div className="container grid gap-5">{articles.map((item) => <Link href={`/knowledge-hub/${item.slug}`} key={item.title} className="luxury-card rounded-3xl p-8"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C9A24A]">{item.category} · {item.readTime}</p><h2 className="display mt-3 text-4xl">{item.title}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">{item.summary}</p></Link>)}{insights.map((item) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C9A24A]">{item.category}</p><h2 className="display mt-3 text-4xl">{item.title}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">{item.summary}</p></article>)}</div></section><Faq /></main>;
}
