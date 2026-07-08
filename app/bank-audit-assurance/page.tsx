import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'Bank Audit, Audit & Assurance', description: 'Bank audit, statutory audit, internal audit, tax audit and assurance documentation information from Minchala & Associates.' };

const topics = [
  ['Bank audit readiness', 'Schedules, confirmations, advances review, documentation and branch-level checklist discipline.'],
  ['Statutory audit', 'Audit planning, evidence, working papers, management representations and reporting support.'],
  ['Internal audit', 'Process walkthroughs, controls observations, exception reporting and improvement follow-up.'],
  ['Tax audit', 'Clause-wise records, reconciliations, GST/TDS links and reporting documentation.'],
  ['Assurance documentation', 'Certificates, confirmations and review notes subject to records and engagement acceptance.'],
  ['Follow-up actions', 'Open points, management responses, recurring controls and compliance calendar alignment.'],
];

export default function BankAuditAssurancePage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Bank Audit / Audit & Assurance' }]} /><PageHero eyebrow="Audit & assurance" title="Audit readiness and assurance documentation with professional discipline." description="Educational overview of audit workflows, evidence, documentation and follow-up without guarantees or promotional claims." /><section className="section-pad"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{topics.map(([title, text]) => <article key={title} className="luxury-card rounded-[1.75rem] p-7"><h2 className="display text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div><div className="container mt-10 flex flex-wrap gap-4"><Link className="button-primary" href="/services/audit-assurance">View audit services</Link><Link className="button-secondary" href="/resources/checklists/tax-audit-documents">Tax audit checklist</Link><Link className="button-secondary" href="/resources/checklists/bank-audit-readiness">Bank audit checklist</Link><Link className="button-secondary" href="/contact">Request appointment</Link></div><p className="container mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">{site.complianceLine} Audit conclusions depend on evidence, standards, records, independence and professional judgement.</p></section></main>;
}
