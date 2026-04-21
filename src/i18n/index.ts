import { en } from './en';
import { ptBr } from './pt-br';

export type Lang = 'en' | 'pt-br';

export const languages: Record<Lang, typeof en> = {
  en,
  'pt-br': ptBr as unknown as typeof en,
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'pt-br') return 'pt-br';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return languages[lang] ?? languages['en'];
}
