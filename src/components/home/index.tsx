import { DefaultTemplate } from '@arcnovus/wet-boew-react';
import useTranslation from '../../hooks/useTranslation';
import useWetTemplateLinks from '../../hooks/useWetTemplateLinks';

const Home = () => {
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
