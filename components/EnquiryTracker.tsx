'use client';

import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';

const stages = ['Received', 'Conflict check', 'Scope review', 'Partner response'];

export function EnquiryTracker() {
  const [reference, setReference] = useState('MA-2026-001');
  const active = useMemo(() => Math.min(reference.length % stages.length, stages.length - 1), [reference]);
  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><label className="grid gap-2"><span className="font-bold">Enquiry reference</span><input className="rounded-2xl border border-slate-200 px-4 py-3" value={reference} onChange={(event: ChangeEvent<HTMLInputElement>) => setReference(event.target.value)} /></label><div className="mt-6 grid gap-3 md:grid-cols-4">{stages.map((stage, index) => <div key={stage} className={`rounded-2xl p-4 text-sm font-bold ${index <= active ? 'bg-[#061724] text-white' : 'bg-slate-100 text-slate-500'}`}>{stage}</div>)}</div><p className="mt-4 text-sm text-slate-500">Reference tracking is for client convenience. Formal engagement status is confirmed only by written communication from the firm.</p></div>;
}
