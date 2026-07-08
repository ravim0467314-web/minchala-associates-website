import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { careerRoles, site } from '../../lib/content';

export const metadata: Metadata = { title: 'Careers', description: 'Career opportunities and article assistant roles at Minchala & Associates.' };

export default function CareersPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Careers' }]} /><PageHero eyebrow="Careers" title="Build disciplined professional judgement." description="Join a partner-led practice focused on assurance quality, compliance discipline and responsible client service." /><section className="section-pad"><div className="container grid gap-5">{careerRoles.map((role) => <article key={role.title} className="luxury-card rounded-3xl p-7"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C9A24A]">{role.type} · {role.location}</p><h2 className="display mt-3 text-4xl">{role.title}</h2><p className="mt-3 leading-7 text-slate-600">{role.summary}</p><a className="mt-5 inline-flex font-bold text-[#C9A24A]" href={`mailto:${site.email}?subject=Career enquiry: ${role.title}`}>Express interest →</a></article>)}</div></section></main>;
}
