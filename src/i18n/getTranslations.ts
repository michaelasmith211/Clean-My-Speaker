import { DEFAULT_LOCALE, isLocaleSupported } from './config';
import { dictionaries } from '@/locales/dictionaries';

export type TranslationDictionary = Record<string, any>;

/**
 * Load dictionary for a locale statically
 */
export function getLocaleDictionary(locale: string): TranslationDictionary {
  const targetLocale = isLocaleSupported(locale) ? locale : DEFAULT_LOCALE;
  return dictionaries[targetLocale] || dictionaries[DEFAULT_LOCALE] || {};
}

/**
 * Nested key accessor: getNestedValue(dict, 'tool.badge')
 */
function getNestedValue(obj: TranslationDictionary, keyPath: string): string | undefined {
  if (!obj || !keyPath) return undefined;
  const parts = keyPath.split('.');
  let current: any = obj;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return typeof current === 'string' ? current : undefined;
}

export type TranslationFunction = (key: string, params?: Record<string, string | number>) => string;

/**
 * Returns a translation function `t(key, params)` for the given locale.
 */
export function getTranslations(locale: string = DEFAULT_LOCALE): {
  t: TranslationFunction;
  locale: string;
  dict: TranslationDictionary;
} {
  const dict = getLocaleDictionary(locale);
  const defaultDict = dictionaries[DEFAULT_LOCALE] || {};

  const t: TranslationFunction = (key: string, params?: Record<string, string | number>): string => {
    let text = getNestedValue(dict, key);

    // Fallback to English if missing in current locale
    if (text === undefined && dict !== defaultDict) {
      text = getNestedValue(defaultDict, key);
    }

    if (text === undefined) {
      return key;
    }

    // Replace {paramName} placeholders
    if (params) {
      for (const [paramKey, paramVal] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
      }
    }

    return text;
  };

  return { t, locale, dict };
}

