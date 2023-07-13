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

const Home = () => {
  const { currentLanguage } = useLanguage(useLocation());
  const history = useHistory();

  const handleClick = useCallback(
    (a: { href: string; }) => {
      history.push(a.href.replace(window.location.origin, ""));
    },
    [history]
  );

  const translatedPage =
    currentLanguage === Language.FR ? "/en/fire-risk/" : "/fr/risque-de-feu/";

  const { lngLinks } = useLngLinks({ currentLanguage, translatedPage });
  
  return (
    <WetProvider linkHandler={handleClick}>
      {currentLanguage == null ? (
        <SplashTemplate
          //nameEng={labels.en.appName}
          //nameFra={labels.fr.appName}
        />
      ) : (
        <DefaultTemplate
          lngLinks={lngLinks}
        >
          <h1>Page Title</h1>
          <p>Page content</p>
        </DefaultTemplate>
      )}
    </WetProvider>
  );
};

export default Home;
