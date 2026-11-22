import type { MetadataRoute } from 'next';
import { basePath } from '@/src/content/unifiAssets';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // A base path means a preview deployment, which carries noindex in its page metadata.
  // Keep robots.txt saying the same thing, and do not point crawlers at the live
  // sitemap from a preview host.
  if (basePath) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://unifi.id/sitemap.xml',
  };
}
