import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'Privacy policy for Minchala & Associates website and firm contact channels.' };

export default function PrivacyPolicyPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Privacy Policy' }]} /><PageHero eyebrow="Privacy" title="Privacy Policy." description="How firm contact details, appointment requests and professional enquiries are handled." /><section className="section-pad"><div className="container max-w-4xl space-y-6 rounded-[2rem] bg-white p-8 leading-8 text-slate-700 shadow-sm md:p-10"><p>{site.name} uses information submitted through this website only to review and coordinate professional enquiries, appointment requests and related communication.</p><p>Please do not submit confidential documents until an engagement scope, eligibility, independence and documentation process is confirmed by the firm.</p><p>Firm communication is conducted through official channels: <a className="font-bold text-[#b99655]" href={`mailto:${site.email}`}>{site.email}</a>, <a className="font-bold text-[#b99655]" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>, WhatsApp and appointment-based office coordination.</p><p>Website analytics, if enabled by the hosting environment, should be used only for service quality, security and accessibility review. The firm does not publish personal staff contact details on this website.</p></div></section></main>;
}
