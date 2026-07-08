import type { Metadata } from 'next';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PortalLogin } from '../../components/PortalLogin';
import { PageHero } from '../../components/PageHero';

export const metadata: Metadata = { title: 'Client Portal', description: 'Secure client access interface for Minchala & Associates document coordination.' };

export default function PortalPage() {
  return <main id="main"><Breadcrumbs items={[{ label: 'Client Portal' }]} /><PageHero eyebrow="Client portal" title="Secure document coordination for active engagements." description="This access interface is designed for verified clients once engagement onboarding, identity verification and document protocols are complete." /><section className="section-pad"><div className="container"><PortalLogin /></div></section></main>;
}
