import type { Metadata } from 'next';
import { AdvancedSearch } from '../../components/AdvancedSearch';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageHero } from '../../components/PageHero';

export const metadata: Metadata = { title: 'Search', description: 'Search Minchala & Associates services, resources and knowledge hub.' };

export default function SearchPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Search' }]} /><PageHero eyebrow="Search" title="Find services, resources and professional updates." description="Search across service areas, knowledge hub topics and downloadable resources." /><section className="section-pad"><div className="container"><AdvancedSearch /></div></section></main>;
}
