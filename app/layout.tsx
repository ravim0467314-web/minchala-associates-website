import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InstallPrompt } from '../components/InstallPrompt';
import { faqs, images, offices, services, site } from '../lib/content';
import './globals.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.descriptor}`, template: `%s | ${site.name}` },
  description: 'Minchala & Associates is a chartered accountancy firm providing audit, taxation, GST, corporate compliance, accounting and advisory coordination across Bapatla, Guntur and Hyderabad.',
  keywords: site.serviceKeywords,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/icon.svg' },
  openGraph: {
    title: `${site.name} | ${site.descriptor}`,
    description: 'Assurance, taxation, compliance and advisory services delivered with rigour, independence and discretion.',
    url: site.url,
    siteName: site.name,
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/assets/images/premium-full-website-mockup.svg', width: 1200, height: 630, alt: `${site.name} social preview` }],
  },
  twitter: { card: 'summary_large_image', title: `${site.name} | ${site.descriptor}`, description: site.tagline, images: ['/assets/images/premium-full-website-mockup.svg'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'AccountingService'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.name,
    identifier: site.firmRegistrationNumber,
    taxID: site.firmRegistrationNumber,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: ['Bapatla', 'Guntur', 'Hyderabad', 'Andhra Pradesh', 'Telangana'],
    description: site.intro,
    logo: `${site.url}${images.logo.src}`,
    image: `${site.url}${images.socialPreview.src}`,
    knowsAbout: site.serviceKeywords,
    serviceType: services.map((service) => service.title),
    openingHours: 'Mo-Sa 10:00-18:00',
    sameAs: [site.googleBusinessProfileHref],
    hasMap: site.googleBusinessProfileHref,
    potentialAction: { '@type': 'ViewAction', target: site.directionsHref, name: 'Get directions' },
    contactPoint: [{ '@type': 'ContactPoint', telephone: site.phone, email: site.email, contactType: 'appointments and professional enquiries', areaServed: 'IN', availableLanguage: ['English', 'Telugu'] }],
  };
  const websiteJsonLd = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.name, inLanguage: 'en-IN', publisher: { '@id': `${site.url}/#organization` }, potentialAction: { '@type': 'SearchAction', target: `${site.url}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } };
  const serviceJsonLd = services.map((service) => ({ '@context': 'https://schema.org', '@type': 'Service', '@id': `${site.url}/services/${service.slug}#service`, name: service.title, provider: { '@id': `${site.url}/#organization` }, areaServed: ['Bapatla', 'Guntur', 'Hyderabad', 'Andhra Pradesh', 'Telangana'], description: service.metaDescription, serviceType: service.title, url: `${site.url}/services/${service.slug}`, keywords: service.keywords.join(', ') }));
  const localBusinessJsonLd = offices.map((office) => ({ '@context': 'https://schema.org', '@type': ['LocalBusiness', 'AccountingService'], name: `${site.name} - ${office.city}`, url: site.url, email: site.email, telephone: site.phone, image: `${site.url}${office.image.src}`, openingHours: 'Mo-Sa 10:00-18:00', address: { '@type': 'PostalAddress', addressLocality: office.city, addressRegion: office.region, addressCountry: 'IN' }, areaServed: [office.city, office.region], hasMap: office.mapHref, sameAs: site.googleBusinessProfileHref, potentialAction: { '@type': 'ViewAction', target: site.directionsHref, name: 'Get directions' } }));
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <html lang="en-IN">
      <body className={`${serif.variable} ${sans.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd, faqJsonLd, ...localBusinessJsonLd, ...serviceJsonLd]) }} />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <InstallPrompt />
      </body>
    </html>
  );
}
