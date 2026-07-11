import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'Disclaimer', description: 'ICAI-compliant website disclaimer for Minchala & Associates.' };

export default function DisclaimerPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Disclaimer' }]} /><PageHero eyebrow="Disclaimer" title="Professional website disclaimer." description="This website provides factual firm information and general educational resources." /><section className="section-pad"><div className="container max-w-4xl space-y-6 rounded-[2rem] bg-white p-8 leading-8 text-slate-700 shadow-sm md:p-10"><p>{site.complianceLine}</p><p>Content on this website is general information and does not constitute professional advice, a client engagement, a guarantee of outcome or a solicitation. Professional work begins only after scope, eligibility, independence and records review.</p><p>References to services, offices, partners and staff are factual and intended to help visitors identify appropriate firm contact channels. All communication should use firm-only contact details published on this website.</p><p>Tax, audit, GST, MCA and other regulatory positions depend on applicable law, notifications, facts, records and professional judgement at the time of engagement.</p></div></section></main>;
}
