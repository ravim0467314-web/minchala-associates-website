import Link from 'next/link';
import { site } from '../lib/content';
import { JsonLd } from './StructuredData';

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ label: 'Home', href: '/' }, ...items];
  const data = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.label, item: `${site.url}${item.href ?? ''}` })) };
  return <><JsonLd data={data} /><nav className="container py-4 text-sm text-slate-500" aria-label="Breadcrumb"><ol className="flex flex-wrap gap-2"><li><Link href="/" className="hover:text-[#b99655]">Home</Link></li>{items.map((item) => <li key={item.label} className="flex gap-2"><span>/</span>{item.href ? <Link href={item.href} className="hover:text-[#b99655]">{item.label}</Link> : <span>{item.label}</span>}</li>)}</ol></nav></>;
}
