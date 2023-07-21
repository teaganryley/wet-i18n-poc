import React, { useCallback} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  WetProvider,
  DefaultTemplate,
  SplashTemplate,
  useLanguage,
  useLngLinks,
  Language,
  useWetComponent
} from '@arcnovus/wet-boew-react';
import useTranslation from '../../hooks/useTranslation';
import useWetLinks from '../../hooks/useWetTemplateLinks';
import useWetTemplateLinks from '../../hooks/useWetTemplateLinks';

// TODO: remove trailing slashes in routing?
const Home = () => {
  /*
  const location = useLocation();
  const { currentLanguage } = useLanguage(location);
  const translatedPage = currentLanguage === Language.FR ? "/en/" : "/fr/";
  const { lngLinks } = useLngLinks({ currentLanguage, translatedPage });
  */

  const { t } = useTranslation();
  const { lngLinks, breadcrumbs } = useWetTemplateLinks();

  return (
    <DefaultTemplate lngLinks={lngLinks} breadcrumbs={breadcrumbs}>
      <h1>{t('home.title')}</h1>
      <p>{t('home.content')}</p>
      <a href={`${t('routes.firerisk')}`}>{t('firerisk.title')}</a>
    </DefaultTemplate>
  );
};

export default Home;
