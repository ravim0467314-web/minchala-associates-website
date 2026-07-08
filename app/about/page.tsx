import type { Metadata } from 'next';
import { AssetImage } from '../../components/AssetImage';
import { Faq } from '../../components/Faq';
import { PageHero } from '../../components/PageHero';
import { ethicsNotes, images, offices, processSteps, values } from '../../lib/content';

export const metadata: Metadata = { title: 'About', description: 'Learn about Minchala & Associates, an independent chartered accountancy firm guided by integrity, confidentiality and technical rigour.' };

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About" title="Professional insight. Responsible advice." description="We help clients maintain reliable finance operations, understand statutory obligations and make decisions with confidence." />
      <section className="section-pad">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow text-[#C9A24A]">Our approach</p>
            <h2 className="section-title">Built around independence, diligence and clarity.</h2>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/5">
              <AssetImage {...images.officeBapatla} width={1200} height={760} className="h-auto w-full rounded-[1.5rem] object-cover" priority />
            </div>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-9 text-slate-700">
              <p>Minchala & Associates serves businesses, institutions and individuals through professional work founded on technical competence and ethical practice.</p>
              <p>Every engagement is scoped with attention to professional eligibility, confidentiality, independence considerations and the client’s specific facts.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {offices.map((office) => (
                <article key={office.city} className="luxury-card overflow-hidden rounded-3xl">
                  <AssetImage {...office.image} width={700} height={440} className="h-32 w-full object-cover" />
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A24A]">{office.region}</p>
                    <h3 className="display mt-2 text-2xl text-[#0B2341]">{office.city}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="container mt-12 grid gap-4 md:grid-cols-2">
          {values.map((value) => <article key={value.title} className="luxury-card rounded-2xl p-6"><h3 className="display text-3xl">{value.title}</h3><p className="mt-3 text-slate-600">{value.text}</p></article>)}
        </div>
      </section>
      <section className="section-pad bg-[#0B2341] text-white">
        <div className="container"><p className="eyebrow text-[#C9A24A]">Method</p><h2 className="section-title max-w-4xl">A disciplined path from facts to action.</h2><div className="mt-10 grid gap-5 md:grid-cols-4">{processSteps.map((step) => <article key={step.title} className="rounded-3xl border border-white/10 p-6"><h3 className="display text-3xl">{step.title}</h3><p className="mt-3 text-sm leading-7 text-white/62">{step.text}</p></article>)}</div></div>
      </section>
      <section className="section-pad bg-white">
        <div className="container"><p className="eyebrow text-[#C9A24A]">ICAI Code of Ethics</p><h2 className="section-title max-w-4xl">Informational, responsible and non-solicitous communication.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{ethicsNotes.map((note) => <article key={note} className="rounded-2xl border border-slate-200 p-6 text-slate-700">{note}</article>)}</div></div>
      </section>
      <Faq />
    </main>
  );
}
