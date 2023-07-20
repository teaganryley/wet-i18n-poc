import { useLocation } from "react-router-dom";
import { ROUTE_BREADCRUMBS } from "../constants/routes";
import { useMemo } from 'react';
import useTranslation, { ID } from './useTranslation';

const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const breadcrumbs = useMemo(() => {  
    const currentPath = ROUTE_BREADCRUMBS[pathname] ? ROUTE_BREADCRUMBS[pathname] : [];

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
