import type { Language } from './translations';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'no') return 'no';
  return 'en';
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: Language = lang) {
    const pathWithoutLang = path.replace(/^\/(en|no)/, '');
    if (targetLang === 'en') {
      return pathWithoutLang || '/';
    }
    return `/no${pathWithoutLang || '/'}`;
  };
}
