import React from 'react';
import { DefaultTemplate } from '@arcnovus/wet-boew-react';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import useTranslation from '../../hooks/useTranslation';

const FireRisk = () => {
  const { t } = useTranslation(); 
  const breadcrumbs = useBreadcrumbs();
  console.log('bc: ', breadcrumbs);

  return (
    <DefaultTemplate>
      <h1>{t('firerisk.title')}</h1>
      <p>{t('firerisk.content')}</p>
    </DefaultTemplate>
  );
};

export default FireRisk;
