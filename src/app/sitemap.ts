import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SUPPORTED_LOCALES } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: 'how-it-works', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: 'remove-water-from-phone-speaker', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'iphone-speaker-cleaner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'android-speaker-cleaner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'speaker-test', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: 'speaker-cleaning-guide', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'languages', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'about', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'contact', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'privacy-policy', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: 'terms-of-service', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: 'disclaimer', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: 'cookie-policy', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Root URLs
  for (const page of pages) {
    const url = page.path ? `${SITE_URL}/${page.path}/` : `${SITE_URL}/`;
    entries.push({
      url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Localized URLs for 39 non-default languages (English is at root)
  for (const locale of SUPPORTED_LOCALES.filter((l) => l !== 'en')) {
    for (const page of pages) {
      const url = page.path ? `${SITE_URL}/${locale}/${page.path}/` : `${SITE_URL}/${locale}/`;
      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
