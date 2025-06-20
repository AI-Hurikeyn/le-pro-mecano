// src/components/sections/CtaBanner/CtaBanner.tsx
import { Button } from '../../../ui/Button';
import { useTranslation } from 'react-i18next';

export const CtaBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {t('cta_desc')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg">{t('contact_specialists')}</Button>
          <Button variant="secondary" size="lg">{t('call_us')}</Button>
        </div>
      </div>
    </section>
  );
};