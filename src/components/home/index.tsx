import React, { useCallback} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  WetProvider,
  DefaultTemplate,
  SplashTemplate,
  useLanguage,
  useLngLinks,
  Language
} from '@arcnovus/wet-boew-react';
import useTranslation from '../../hooks/useTranslation';

const Home = () => {
  const { currentLanguage } = useLanguage(useLocation());

  const translatedPage = currentLanguage === Language.FR ? "/en/" : "/fr/";

  const { lngLinks } = useLngLinks({ currentLanguage, translatedPage });

  const { t } = useTranslation();
  
  return (
    <DefaultTemplate lngLinks={lngLinks}>
      <h1>{t('home.title')}</h1>
      <p>{t('home.content')}</p>
    </DefaultTemplate>
  );
};

export default Home;
