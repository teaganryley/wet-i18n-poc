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
  const history = useHistory();

  const handleClick = useCallback(
    (a: { href: string; }) => {
      history.push(a.href.replace(window.location.origin, ""));
    },
    [history]
  );

  const translatedPage = currentLanguage === Language.FR ? "/en/" : "/fr/";

  const { lngLinks } = useLngLinks({ currentLanguage, translatedPage });

  const { t } = useTranslation();
  
  return (
    <WetProvider linkHandler={handleClick}>
      {currentLanguage == null ? (
        <SplashTemplate
          nameEng="Canadian Wildland Fire Information System"
          nameFra="Système canadien d'information sur les feux de végétation"
        />
      ) : (
        <DefaultTemplate
          lngLinks={lngLinks}
        >
          <h1>{t('home.title')}</h1>
          <p>{t('home.content')}</p>
        </DefaultTemplate>
      )}
    </WetProvider>
  );
};

export default Home;
