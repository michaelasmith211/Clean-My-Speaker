import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SUPPORTED_LOCALES } from '@/i18n/config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // All indexable pages (shared between root English and locale URLs)
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: 'remove-water-from-phone-speaker', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: 'airpods-water-eject', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: 'speaker-cleaning-guide', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'about', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'privacy-policy', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'how-it-works', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'iphone-speaker-cleaner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'android-speaker-cleaner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'speaker-test', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'faq', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: 'terms-of-service', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: 'disclaimer', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: 'cookie-policy', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  // Root English-only pages (utility pages with no locale variants in sitemap)
  // contact and languages locale variants are noindexed — only root English in sitemap
  const rootOnlyPages = [
    { path: 'languages', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: 'contact', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Root English URLs (all pages including utility ones)
  for (const page of [...pages, ...rootOnlyPages]) {
    const url = page.path ? `${SITE_URL}/${page.path}/` : `${SITE_URL}/`;
    entries.push({
      url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Localized URLs for 39 non-default languages — exclude thin utility pages
  // (contact, languages locale variants are noindexed so excluded from sitemap)
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
