import { useLanguage, Language } from '@arcnovus/wet-boew-react';
import { useLocation } from 'react-router-dom';
import englishLocale from '../locales/en.json';
import frenchLocale from '../locales/fr.json';

const LOCALES = {
  en: englishLocale,
  fr: frenchLocale
};

export type ID = keyof typeof englishLocale | keyof typeof frenchLocale;

const useTranslation = () => {
  const { currentLanguage } = useLanguage(useLocation());

  const t = (id: ID, selectedLocale?: Language) => {
    const locale = selectedLocale ? selectedLocale : currentLanguage;
    
    if (!id || !locale) return null;
    
    if (!LOCALES[locale]) {
      console.warn(`locale ${currentLanguage} is not a valid key`);
      return null;
    }
  
    if (!LOCALES[locale]?.[id]) {
      console.warn('Invalid string provided');
      return null;
    }

    return LOCALES[locale][id];
  };

  return { t, currentLanguage };
};

export default useTranslation;
