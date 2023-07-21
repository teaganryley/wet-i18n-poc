import { useLocation } from "react-router-dom";
import { useMemo } from 'react';
import { Language, useLngLinks, Href } from "@arcnovus/wet-boew-react";
import useTranslation, { ID } from "./useTranslation";
import { ROUTES, ROUTE_BREADCRUMBS } from '../constants/routes';

const useWetTemplateLinks = () => {
  const { t, currentLanguage } = useTranslation();
  const { pathname } = useLocation();

  const [breadcrumbs, translatedPage] = useMemo(() => {  
    const currentPath = ROUTE_BREADCRUMBS[pathname] ? ROUTE_BREADCRUMBS[pathname] : [];

    const breadcrumbs = currentPath.map(pageName => {
      const href = (t(`routes.${pageName}` as ID) ?? '') as Href;
      const title = t(`${pageName}.title` as ID) ?? '';
      
      return {
        href,
        title
      };
    });

    const translatedLocale = currentLanguage === Language.FR ? Language.EN : Language.FR;
    const translatedPage = t(`routes.${ROUTES[pathname]}` as ID, translatedLocale) as Href;

    return [breadcrumbs, translatedPage];
  }, [currentLanguage, pathname, t]);

  const { lngLinks } = useLngLinks({ currentLanguage, translatedPage });

  return { lngLinks, breadcrumbs };
};

export default useWetTemplateLinks;
