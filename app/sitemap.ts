import type { MetadataRoute } from 'next';
import { articles, checklistLibrary, locationPages, navItems, partners, services, site } from '../lib/content';

const partnerSlug = (name: string) => name.toLowerCase().replace(/ca\s+/g, '').replace(/\s+/g, '-');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [...new Set([...navItems.map((item) => item.href), '/careers', '/offices', '/offline'])];
  const articleRoutes = articles.map((item) => `/knowledge-hub/${item.slug}`);
  const partnerRoutes = partners.map((item) => `/partners/${partnerSlug(item.name)}`);
  const serviceRoutes = services.map((item) => `/services/${item.slug}`);
  const locationRoutes = locationPages.map((item) => `/locations/${item.slug}`);
  const checklistRoutes = checklistLibrary.map((item) => `/resources/checklists/${item.slug}`);
  return [...staticRoutes, ...articleRoutes, ...partnerRoutes, ...serviceRoutes, ...locationRoutes, ...checklistRoutes].map((href) => ({
    url: `${site.url}${href === '/' ? '' : href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: href === '/' ? 1 : 0.78,
  }));
}
