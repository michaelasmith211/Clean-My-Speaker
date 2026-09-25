import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // Canonical host signals to Googlebot that HTTPS non-www is the canonical domain.
    // This helps resolve www / HTTP duplicate URL issues in Search Console.
    host: 'https://cleanmyspeaker.net',
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
