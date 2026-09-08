import { DEFAULT_LOCALE, isLocaleSupported } from './config';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import pt from '@/locales/pt.json';
import it from '@/locales/it.json';
import hi from '@/locales/hi.json';
import mr from '@/locales/mr.json';
import bn from '@/locales/bn.json';
import ar from '@/locales/ar.json';
import ru from '@/locales/ru.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import zh from '@/locales/zh.json';
import tr from '@/locales/tr.json';
import id from '@/locales/id.json';
import nl from '@/locales/nl.json';
import pl from '@/locales/pl.json';
import sv from '@/locales/sv.json';
import da from '@/locales/da.json';
import fi from '@/locales/fi.json';
import no from '@/locales/no.json';
import cs from '@/locales/cs.json';
import el from '@/locales/el.json';
import he from '@/locales/he.json';
import fa from '@/locales/fa.json';
import ur from '@/locales/ur.json';

export type TranslationDictionary = Record<string, unknown>;

// Static mapping for all 27 locales
const dictionaries: Record<string, TranslationDictionary> = {
  en,
  es,
  fr,
  de,
  pt,
  it,
  hi,
  mr,
  bn,
  ar,
  ru,
  ja,
  ko,
  zh,
  tr,
  id,
  nl,
  pl,
  sv,
  da,
  fi,
  no,
  cs,
  el,
  he,
  fa,
  ur,
};

/**
 * Load dictionary for a locale statically
 */
export function getLocaleDictionary(locale: string): TranslationDictionary {
  const targetLocale = isLocaleSupported(locale) ? locale : DEFAULT_LOCALE;
  return dictionaries[targetLocale] || en;
}

/**
 * Nested key accessor: getNestedValue(dict, 'tool.badge')
 */
function getNestedValue(obj: TranslationDictionary, keyPath: string): string | undefined {
  if (!obj || !keyPath) return undefined;
  const parts = keyPath.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
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

  const t: TranslationFunction = (key: string, params?: Record<string, string | number>): string => {
    let text = getNestedValue(dict, key);

    // Fallback to English if missing in current locale
    if (text === undefined && dict !== en) {
      text = getNestedValue(en, key);
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
