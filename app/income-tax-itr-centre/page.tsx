import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'Income Tax & ITR Centre', description: 'Income tax filing information for salaried taxpayers, businesses, professionals, capital gains, TDS, advance tax, notices and due dates in Bapatla.' };

const topics = [
  ['Salaried taxpayers', 'Form 16, deductions, tax regime choice, AIS/TIS review and return preparation documentation.'],
  ['Businesses and professionals', 'Books review, presumptive-tax checks, depreciation, GST/TDS links and audit applicability review.'],
  ['Capital gains', 'Transaction records, holding period, cost details, exemptions and reporting documentation review.'],
  ['TDS and advance tax', 'TDS credit matching, challan review, advance-tax cadence and interest exposure awareness.'],
  ['Notices and responses', 'Facts, records, portal history and response documentation support subject to professional acceptance.'],
  ['Due dates', 'Indicative reminders that must be validated against notifications, audit applicability and taxpayer facts.'],
];

export default function IncomeTaxItrCentrePage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Income Tax / ITR Centre' }]} /><PageHero eyebrow="Income Tax / ITR Centre" title="Income-tax filing and notice-readiness information." description="Educational content for taxpayers and businesses seeking structured return filing, TDS, advance tax and notice-response support." /><section className="section-pad"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{topics.map(([title, text]) => <article key={title} className="luxury-card rounded-[1.75rem] p-7"><h2 className="display text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div><div className="container mt-10 flex flex-wrap gap-4"><Link className="button-primary" href="/services/direct-tax">View direct tax services</Link><Link className="button-secondary" href="/calculators">TDS calculator</Link><Link className="button-secondary" href="/resources/checklists/income-tax-return-filing">ITR checklist</Link><Link className="button-secondary" href="/resources/checklists/tds-return-filing">TDS checklist</Link><Link className="button-secondary" href="/contact">Request appointment</Link></div><p className="container mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">{site.complianceLine} Income-tax outcomes depend on facts, records, law and professional judgement.</p></section></main>;
}
