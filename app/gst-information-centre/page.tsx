import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'GST Information Centre', description: 'GST registration, returns, notices, reconciliation, e-invoicing, e-way bill and compliance calendar information for Bapatla businesses.' };

const topics = [
  ['GST registration', 'Applicability review, document readiness and registration workflow guidance based on business facts.'],
  ['GST returns', 'Monthly or QRMP return cadence, GSTR-1 / 3B input review and filing documentation discipline.'],
  ['GST notices', 'Notice facts, portal records, reconciliations and response documentation support subject to scope.'],
  ['Reconciliation', 'GSTR-2B/books matching, vendor follow-up lists, credit exceptions and monthly review routines.'],
  ['E-invoicing / e-way bill', 'Applicability checks and process guidance for invoice and movement documentation where relevant.'],
  ['Compliance calendar', 'Due-date awareness with reminders that must be checked against current notifications and taxpayer profile.'],
];

export default function GstInformationCentrePage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'GST Information Centre' }]} /><PageHero eyebrow="GST information centre" title="GST guidance for registration, returns, notices and reconciliation." description="Educational GST content for Bapatla, Guntur and Hyderabad businesses, subject to records, law and professional scope." /><section className="section-pad"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{topics.map(([title, text]) => <article key={title} className="luxury-card rounded-[1.75rem] p-7"><h2 className="display text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div><div className="container mt-10 flex flex-wrap gap-4"><Link className="button-primary" href="/services/gst-indirect-tax">View GST services</Link><Link className="button-secondary" href="/compliance-calendar">Compliance calendar</Link><Link className="button-secondary" href="/calculators">GST calculator</Link><Link className="button-secondary" href="/resources/checklists/gst-registration">GST registration checklist</Link><Link className="button-secondary" href="/resources/checklists/gst-return-filing">GST return checklist</Link></div><p className="container mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">{site.complianceLine} GST positions depend on facts, turnover, notifications, portal data and documentation.</p></section></main>;
}
