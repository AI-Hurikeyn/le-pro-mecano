// src/components/sections/Parts/Parts.tsx
import { Button } from '../../../ui/Button';
import {SectionTitle} from '../../../ui/SectionTitle';
import { PartsCarousel } from './PartsCarousel';
import { useTranslation } from 'react-i18next';

export const Parts = () => {
  const { t } = useTranslation();

  const categories = [
    t('all'),
    t('engine_parts'),
    t('transmission'),
    t('brake_system'),
    t('suspension'),
    t('electrical')
  ];

  return (
    <section id="parts" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          subtitle={t('our_products')}
          title={t('popular_parts')}
          description={t('browse_selection')}
          center
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${index === 0 ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Parts Carousel */}
        <PartsCarousel />

        <div className="text-center mt-8">
          <Button variant="primary">{t('view_all_parts')}</Button>
        </div>
      </div>
    </section>
  );
};