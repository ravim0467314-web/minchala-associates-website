import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Calculators } from '../../components/Calculators';
import { PageHero } from '../../components/PageHero';
import { site } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Calculators',
  description: 'Educational GST, TDS and compliance planning calculators from Minchala & Associates for Bapatla, Guntur and Hyderabad users.',
};

export default function CalculatorsPage() {
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: 'Calculators' }]} />
      <PageHero eyebrow="Educational calculators" title="Simple planning tools for GST, TDS and compliance cadence." description="Use these tools for awareness only. Final tax, GST, TDS or compliance positions require records review, applicable-law checks and professional engagement acceptance." />
      <section className="section-pad">
        <div className="container">
          <Calculators />
          <p className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
            {site.complianceLine} These calculators are illustrative and should not be treated as professional advice, certification, assurance or a substitute for engagement-specific review.
          </p>
        </div>
      </section>
    </main>
  );
}
