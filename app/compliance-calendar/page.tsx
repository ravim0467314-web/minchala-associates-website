import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CalendarFilter } from '../../components/CalendarFilter';
import { PageHero } from '../../components/PageHero';

export const metadata: Metadata = { title: 'Compliance Calendar', description: 'Indicative statutory compliance reminders for tax, GST, MCA and assurance workflows.' };

export default function ComplianceCalendarPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Compliance Calendar' }]} /><PageHero eyebrow="Compliance Calendar" title="Dynamic statutory reminders for disciplined planning." description="Filter by desk. Dates are indicative and subject to amendments, notifications, entity profile and client-specific applicability." /><section className="section-pad"><div className="container"><CalendarFilter /><p className="mt-5 text-sm text-slate-500">This calendar is for general awareness and should be verified against current statutory notifications.</p></div></section></main>;
}
