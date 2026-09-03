import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const routes = [
    { url: `${SITE_URL}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/how-it-works/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/remove-water-from-phone-speaker/`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/iphone-speaker-cleaner/`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/android-speaker-cleaner/`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/speaker-test/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/speaker-cleaning-guide/`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/faq/`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/about/`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/contact/`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/privacy-policy/`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/terms-of-service/`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/disclaimer/`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/cookie-policy/`, priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
