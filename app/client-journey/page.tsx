import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'Client Journey', description: 'Understand the professional enquiry, consultation, document collection, compliance review, filing/advisory and follow-up process at Minchala & Associates.' };

const steps = [
  ['01', 'Enquiry', 'Share a brief note through the consultation form, phone, WhatsApp or firm email. A website enquiry does not create an engagement.'],
  ['02', 'Consultation', 'The firm reviews the broad facts, eligibility, independence, conflict considerations and professional scope before advising next steps.'],
  ['03', 'Document collection', 'Relevant records, prior filings, notices, books, invoices, bank statements or statutory documents are requested through firm-approved channels.'],
  ['04', 'Compliance review', 'The team reviews documents against applicable law, due dates, reconciliations, evidence requirements and engagement scope.'],
  ['05', 'Filing / advisory', 'Filings, schedules, responses, certificates or advisory notes are prepared only after records and scope are reviewed.'],
  ['06', 'Follow-up support', 'Open items, acknowledgements, challans, due-date reminders and future compliance cadence are communicated professionally.'],
];

export default function ClientJourneyPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Client Journey' }]} /><PageHero eyebrow="Client journey" title="A structured path from enquiry to professional follow-through." description="The process is designed for clarity, confidentiality and ICAI-compliant engagement acceptance without solicitation or guaranteed outcomes." /><section className="section-pad"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map(([count, title, text]) => <article key={title} className="luxury-card rounded-[1.75rem] p-7"><span className="text-sm font-black tracking-[0.2em] text-[#b99655]">{count}</span><h2 className="display mt-4 text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div><div className="container mt-10 rounded-[2rem] bg-[#061724] p-8 text-white md:p-12"><h2 className="display text-4xl">Start with an appointment request.</h2><p className="mt-4 max-w-3xl leading-8 text-white/65">{site.complianceLine}</p><div className="mt-7 flex flex-wrap gap-4"><Link className="button-primary inline-flex" href="/contact">Request a consultation</Link><Link className="button-secondary inline-flex" href="/resources">Preparation checklists</Link></div></div></section></main>;
}
