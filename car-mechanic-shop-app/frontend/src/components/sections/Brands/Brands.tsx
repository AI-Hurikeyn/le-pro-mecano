// src/components/sections/Brands/Brands.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {SectionTitle} from '../../../ui/SectionTitle';

const brandCategories = {
  American: ['Ford', 'Chevrolet', 'Dodge', 'Jeep', 'Chrysler'],
  Japanese: ['Toyota', 'Honda', 'Nissan', 'Subaru', 'Mazda'],
  European: ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Volvo']
};

export const Brands = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'American' | 'Japanese' | 'European'>('American');

  return (
    <section id="brands" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          subtitle={t('our_brands')}
          title={t('shop_by_vehicle_make')}
          description={t('carry_parts_desc')}
          center
        />

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {Object.keys(brandCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as 'American' | 'Japanese' | 'European')}
                className={`px-6 py-2 text-sm font-medium rounded-md ${activeTab === category ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {brandCategories[activeTab].map((brand) => (
            <div key={brand} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="h-16 mb-3 flex items-center justify-center">
                <img 
                  src={`/assets/images/brands/${brand.toLowerCase()}.png`} 
                  alt={brand} 
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-medium">{brand}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};