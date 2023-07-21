import { DefaultTemplate } from '@arcnovus/wet-boew-react';
import useTranslation from '../../hooks/useTranslation';
import useWetTemplateLinks from '../../hooks/useWetTemplateLinks';

const FireRisk = () => {
  const { t } = useTranslation(); 
  const { lngLinks, breadcrumbs } = useWetTemplateLinks();

  return (
    <DefaultTemplate lngLinks={lngLinks} breadcrumbs={breadcrumbs}>
      <h1>{t('firerisk.title')}</h1>
      <p>{t('firerisk.content')}</p>
    </DefaultTemplate>
  );
};

export default FireRisk;
