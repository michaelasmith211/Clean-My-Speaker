import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './config';
import { SITE_URL } from '@/lib/constants';

/**
 * Format date using native Intl.DateTimeFormat
 */
export function formatLocalizedDate(
  date: Date | string | number,
  locale: string = DEFAULT_LOCALE,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
): string {
  try {
    const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, options).format(d);
  } catch {
    return new Date(date).toLocaleDateString();
  }
}

/**
 * Format numbers using native Intl.NumberFormat
 */
export function formatLocalizedNumber(
  num: number,
  locale: string = DEFAULT_LOCALE,
  options?: Intl.NumberFormatOptions
): string {
  try {
    return new Intl.NumberFormat(locale, options).format(num);
  } catch {
    return num.toString();
  }
}

/**
 * Clean path helper: removes leading/trailing slashes and any leading locale prefix
 */
export function getCleanPath(pathname: string): string {
  if (!pathname) return '';
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0])) {
    return segments.slice(1).join('/');
  }
  return segments.join('/');
}

/**
 * Constructs a localized pathname for a target locale.
 * For default English: returns root paths like '/' or '/how-it-works/'
 * For other languages: returns '/es/', '/es/how-it-works/', etc.
 */
export function getLocalizedPath(pathname: string, targetLocale: string = DEFAULT_LOCALE): string {
  const clean = getCleanPath(pathname);
  if (targetLocale === DEFAULT_LOCALE) {
    return clean ? `/${clean}/` : '/';
  }
  if (!clean) {
    return `/${targetLocale}/`;
  }
  return `/${targetLocale}/${clean}/`;
}

/**
 * Generates full absolute URL for a localized route
 */
export function getLocalizedUrl(pathname: string, targetLocale: string): string {
  const localizedPath = getLocalizedPath(pathname, targetLocale);
  return `${SITE_URL}${localizedPath}`;
}

/**
 * Generates alternate hreflang tags for all 40 locales + x-default (pointing to English default)
 */
export function getHreflangAlternates(pathname: string): Record<string, string> {
  const clean = getCleanPath(pathname);
  const alternates: Record<string, string> = {};

  for (const code of SUPPORTED_LOCALES) {
    alternates[code] = getLocalizedUrl(clean, code);
  }

  // x-default points to default English version at root
  alternates['x-default'] = getLocalizedUrl(clean, DEFAULT_LOCALE);

  return alternates;
}

/**
 * Generates canonical URL for a specific page and locale
 */
export function getCanonicalUrl(pathname: string, locale: string): string {
  return getLocalizedUrl(pathname, locale);
}
