import { useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useMemo } from 'react';
import useTranslation, { ID } from './useTranslation';

const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const breadcrumbs = useMemo(() => {  
    const currentPath = ROUTES[pathname] ? ROUTES[pathname] : [];

    const breadcrumbs = currentPath.map(pageName => {
      const routeId = `routes.${pageName}`;
      const titleId = `${pageName}.title`;

      return {
        href: t(routeId as ID),
        title: t(titleId as ID)
      };
    });

    return breadcrumbs;
  }, [pathname, t]);

  return breadcrumbs;
};

export default useBreadcrumbs;
