import type { MetadataRoute } from 'next';
import { site } from '../lib/content';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | ${site.descriptor}`,
    short_name: site.name,
    description: site.tagline,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f7f3ea',
    theme_color: '#061724',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { src: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
  };
}
