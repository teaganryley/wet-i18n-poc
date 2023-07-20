import { useLocation } from "react-router-dom";
import { Language, useLngLinks, Href } from "@arcnovus/wet-boew-react";
import useTranslation, { ID } from "./useTranslation";
import { ROUTES } from '../constants/routes';

const useWetLinks = () => {
  const { t, currentLanguage } = useTranslation();
  const { pathname } = useLocation();

  const translatedLocale =
    currentLanguage === Language.FR ? Language.EN : Language.FR;
  const pageName = ROUTES[pathname];

  const translatedPage = t(`routes.${pageName}` as ID, translatedLocale) as Href;
  console.log('translate path: ', translatedPage);
  // const { lngLinks } = useLngLinks({ currentLanguage, translatedPage });
};

export default useWetLinks;
