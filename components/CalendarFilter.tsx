'use client';

import { useMemo, useState } from 'react';
import { complianceCalendar } from '../lib/content';

export function CalendarFilter() {
  const [owner, setOwner] = useState('All');
  const owners = ['All', ...Array.from(new Set(complianceCalendar.map((item) => item.owner)))];
  const items = useMemo(() => owner === 'All' ? complianceCalendar : complianceCalendar.filter((item) => item.owner === owner), [owner]);
  return <div><div className="mb-5 flex flex-wrap gap-2">{owners.map((item) => <button key={item} type="button" onClick={() => setOwner(item)} className={`rounded-full px-4 py-2 text-sm font-bold ${owner === item ? 'bg-[#061724] text-white' : 'bg-white text-[#061724]'}`}>{item}</button>)}</div><div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">{items.map((item) => <div key={`${item.date}-${item.task}`} className="grid gap-3 border-b border-slate-200 p-6 last:border-b-0 md:grid-cols-[240px_1fr_180px]"><strong className="text-[#0b2433]">{item.date}</strong><span className="text-slate-600">{item.task}</span><span className="text-sm font-semibold text-[#b99655]">{item.owner}</span></div>)}</div></div>;
}
