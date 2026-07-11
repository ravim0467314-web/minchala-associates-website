import type { Metadata } from 'next';
import { AssetImage } from '../../components/AssetImage';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { images, partners, staffProfiles, teamGroups } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Professional Team',
  description: 'Approved partner and professional support team profiles for Minchala & Associates, including audit, tax and GST support roles.',
};

export default function TeamPage() {
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: 'Team' }]} />
      <PageHero eyebrow="Professional team" title="Partner-supervised support for disciplined execution." description="Approved partner and staff profiles are shown with professional details only. Personal contact details are not published; all communication is through the firm." />
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="luxury-card overflow-hidden rounded-[2rem] lg:sticky lg:top-28">
            <AssetImage {...images.team} width={1200} height={800} className="h-auto w-full object-cover" priority />
            <div className="p-7 md:p-8">
              <p className="eyebrow text-[#b99655]">ICAI-compliant presentation</p>
              <p className="mt-4 leading-8 text-slate-600">The team is presented as professional support capacity under partner supervision. Engagement responsibility, scope, independence and reporting lines are confirmed in writing for each matter.</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[#b99655]">Partners</p>
            <div className="mt-5 grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {partners.map((partner) => (
                <article key={partner.name} className="luxury-card overflow-hidden rounded-3xl">
                  <AssetImage {...partner.image} width={700} height={460} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h2 className="display text-3xl leading-none">{partner.name}</h2>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#b99655]">{partner.credentials}</p>
                    <p className="mt-3 text-sm font-semibold text-[#0b2433]">{partner.role}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{partner.focus}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="eyebrow mt-10 text-[#b99655]">Professional staff</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {staffProfiles.map((member) => (
                <article key={member.name} className="luxury-card overflow-hidden rounded-3xl">
                  <AssetImage {...member.image} width={700} height={460} className="h-52 w-full object-cover" />
                  <div className="p-6">
                    <h2 className="display text-3xl leading-none">{member.name}</h2>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#b99655]">{member.role}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                    {'summary' in member && member.summary && (
                      <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                        {member.summary.map((point) => <li key={point} className="rounded-full border border-slate-200 bg-white px-3 py-2">{point}</li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="container mt-10 grid gap-4 md:grid-cols-4">
          {teamGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="display text-2xl">{group.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{group.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
