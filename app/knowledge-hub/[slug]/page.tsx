import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { JsonLd } from '../../../components/StructuredData';
import { articles, site } from '../../../lib/content';

type ArticleParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: ArticleParams): Promise<Metadata> { const { slug } = await params; const article = articles.find((item) => item.slug === slug); return { title: article?.title ?? 'Article' }; }

export default async function ArticlePage({ params }: ArticleParams) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return notFound();
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.summary, author: { '@type': 'Organization', name: site.name }, publisher: { '@type': 'Organization', name: site.name }, mainEntityOfPage: `${site.url}/knowledge-hub/${article.slug}` };
  return <main id="main"><JsonLd data={articleJsonLd} /><Breadcrumbs items={[{ label: 'Knowledge Hub', href: '/knowledge-hub' }, { label: article.title }]} /><article className="section-pad"><div className="container max-w-3xl"><p className="eyebrow text-[#b99655]">{article.category} · {article.readTime}</p><h1 className="section-title">{article.title}</h1><p className="mt-6 text-xl leading-9 text-slate-600">{article.summary}</p><div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 leading-8 text-slate-700"><p>This article is part of the Minchala & Associates knowledge system. The repository includes matching editorial source files under <code>content/articles</code> for content governance workflows.</p><p className="mt-4">The information is general in nature and should not be treated as professional advice for specific facts.</p></div></div></article></main>;
}
