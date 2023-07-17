import { useLanguage } from '@arcnovus/wet-boew-react';
import { useLocation } from 'react-router-dom';
import englishLocale from '../locales/en.json';
import frenchLocale from '../locales/fr.json';

const LOCALES = {
  en: englishLocale,
  fr: frenchLocale
};

type ID = keyof typeof englishLocale | keyof typeof frenchLocale;

const useTranslation = () => {
  const { currentLanguage } = useLanguage(useLocation());

  const t = (id: ID) => {
    if (!id || !currentLanguage) return null;
    
    if (!LOCALES[currentLanguage]) {
      console.warn(`locale ${currentLanguage} is not a valid key`);
      return null;
    }
  
    if (!LOCALES[currentLanguage]?.[id]) {
      console.warn('Invalid string provided');
      return null;
    }

    return LOCALES[currentLanguage][id];
  };
  
  return { t };
};

export default useTranslation;
