// src/components/sections/About/About.tsx
import { Check } from 'lucide-react';
import { Button } from '../../../ui/Button';
import { SectionTitle } from '../../../ui/SectionTitle';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <img
                src="/images/123.jpg"
                alt="À propos de nous"
                className="w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg">
                <span className="block text-3xl font-bold">15+</span>
                <span className="text-sm">{t('years_experience')}</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`md:w-1/2 ${i18n.language === 'ar' ? 'md:pr-8' : 'md:pl-8'}${
              i18n.language === 'ar' ? ' text-right' : ''
            }`}
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
          >
            <SectionTitle
              subtitle={t('about_us')}
              title={t('about_quality_parts')}
              description={t('about_company_desc')}
            />

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <p
                  className="text-gray-700"
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                >
                  {t('about_large_choice')}
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <p
                  className="text-gray-700"
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                >
                  {t('about_competitive_prices')}
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                <p
                  className="text-gray-700"
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                >
                  {t('about_fast_shipping')}
                </p>
              </div>
            </div>

            <Button
              variant="primary"
              onClick={() => {
                try {
                  document.getElementById('our-shop')?.scrollIntoView({ behavior: 'smooth' });
                } catch (e) {
                  console.warn('Smooth scroll to Our Shop failed', e);
                }
              }}
            >
              {t('learn_more')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;