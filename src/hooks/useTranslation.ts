import { useLanguage, Language } from '@arcnovus/wet-boew-react';
import { useLocation } from 'react-router-dom';
import englishLocale from '../locales/en.json';
import frenchLocale from '../locales/fr.json';

const LOCALES = {
  en: englishLocale,
  fr: frenchLocale
};

type ID = string | number;

/* 
  API:
  const { t } = useTranslation;

  Usage:
  t(id);
*/

const useTranslation = () => {
  const { currentLanguage } = useLanguage(useLocation());

  const t = id => LOCALES?.currentLanguage?.id;
};