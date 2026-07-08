import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'Business Startup & MCA Compliance', description: 'Company registration, LLP registration, ROC filing, MCA compliance, director KYC and startup compliance information for Bapatla founders.' };

const topics = [
  ['Company / LLP registration', 'Entity-structure discussion, name/document readiness and incorporation coordination subject to eligibility.'],
  ['ROC annual filing', 'Annual return, financial-statement filing and statutory record readiness workflows.'],
  ['MCA event compliance', 'Director changes, registered-office changes, share capital events and event-based filing awareness.'],
  ['Director KYC', 'DIR-3 KYC and related identity/document workflow reminders where applicable.'],
  ['Startup / MSME readiness', 'Registration documentation, accounting setup, GST/TDS applicability and compliance cadence planning.'],
  ['Board documentation', 'Minutes, resolutions, statutory registers and documentation support based on scope.'],
];

export default function BusinessStartupMcaCompliancePage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Business Startup & MCA Compliance' }]} /><PageHero eyebrow="Startup & MCA compliance" title="Entity setup and ROC compliance information for founders." description="Professional, factual guidance for businesses evaluating company, LLP, ROC and MCA compliance workflows." /><section className="section-pad"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{topics.map(([title, text]) => <article key={title} className="luxury-card rounded-[1.75rem] p-7"><h2 className="display text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div><div className="container mt-10 flex flex-wrap gap-4"><Link className="button-primary" href="/services/corporate-compliance">View MCA services</Link><Link className="button-secondary" href="/client-journey">Client journey</Link><Link className="button-secondary" href="/resources/checklists/roc-mca-annual-filing">ROC checklist</Link><Link className="button-secondary" href="/resources/checklists/startup-company-incorporation">Startup checklist</Link><Link className="button-secondary" href="/resources/checklists/llp-compliance">LLP checklist</Link><Link className="button-secondary" href="/resources/checklists/msme-business-compliance">MSME checklist</Link><Link className="button-secondary" href="/contact">Request consultation</Link></div><p className="container mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">{site.complianceLine} Entity and MCA compliance requirements depend on facts, filings, approvals and current statutory requirements.</p></section></main>;
}
