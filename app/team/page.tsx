import type { Metadata } from 'next';
import { AssetImage } from '../../components/AssetImage';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';
import { images, staffProfiles, teamGroups } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Professional Team',
  description: 'Approved professional support team profiles for Minchala & Associates, including audit and tax support roles.',
};

export default function TeamPage() {
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: 'Team' }]} />
      <PageHero eyebrow="Professional team" title="Partner-supervised support for disciplined execution." description="Approved staff profiles are shown with their correct support roles only. Personal contact details are not published; all communication is through the firm." />
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="luxury-card overflow-hidden rounded-[2rem]">
            <AssetImage {...images.team} width={1200} height={800} className="h-auto w-full object-cover" priority />
            <div className="p-7">
              <p className="eyebrow text-[#C9A24A]">ICAI-compliant presentation</p>
              <p className="mt-4 leading-8 text-slate-600">The team is presented as professional support capacity under partner supervision. Engagement responsibility, scope and reporting lines are confirmed in writing for each matter.</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {staffProfiles.map((member) => (
              <article key={member.name} className="luxury-card overflow-hidden rounded-3xl">
                <AssetImage {...member.image} width={700} height={460} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h2 className="display text-3xl">{member.name}</h2>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A24A]">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container mt-10 grid gap-4 md:grid-cols-4">
          {teamGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="display text-2xl">{group.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{group.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
