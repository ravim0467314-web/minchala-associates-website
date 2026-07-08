'use client';

import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import { searchIndex } from '../lib/content';

type SearchItem = (typeof searchIndex)[number];

export function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return searchIndex;
    return searchIndex.filter((item) => `${item.title} ${item.category} ${item.summary}`.toLowerCase().includes(value));
  }, [query]);
  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><label className="grid gap-2"><span className="font-bold text-[#061724]">Search services, resources and insights</span><input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b99655]" value={query} onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} aria-label="Search services, resources and insights" /></label><div className="mt-6 grid gap-3">{results.map((item: SearchItem) => <Link key={`${item.href}-${item.title}`} href={item.href} className="rounded-2xl border border-slate-200 p-4 transition hover:border-[#b99655]"><span className="text-xs font-bold uppercase tracking-[0.16em] text-[#b99655]">{item.category}</span><h2 className="display mt-2 text-2xl">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p></Link>)}</div></div>;
}
