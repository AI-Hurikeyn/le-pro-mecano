// src/components/sections/Services/Services.tsx
import { Wrench, Cog, Car, Headphones } from 'lucide-react';
import { SectionTitle } from '../../../ui/SectionTitle';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          subtitle={t('our_services')}
          title={t('what_we_offer')}
          description={t('services_desc')}
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Wrench className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Installation de pièces</h3>
            <p className="text-gray-600">Installation rapide et professionnelle de toutes vos pièces.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Cog className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Réparation moteur</h3>
            <p className="text-gray-600">Diagnostic et réparation de moteurs toutes marques.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Car className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entretien</h3>
            <p className="text-gray-600">Service d'entretien complet pour votre véhicule.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Headphones className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">Assistance et conseils pour tous vos besoins automobiles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;