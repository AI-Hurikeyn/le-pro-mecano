import { useTranslation } from 'react-i18next';

const ServiceInstallation = () => {
  const { t } = useTranslation();

  return (
    <section id="service-installation" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">{t('service_installation')}</h2>
        <p className="text-gray-700 mb-4">{t('service_installation_details')}</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>{t('service_installation_step1')}</li>
          <li>{t('service_installation_step2')}</li>
          <li>{t('service_installation_step3')}</li>
        </ul>
        <p className="text-gray-700 mt-4">{t('service_installation_cost')}</p>
      </div>
    </section>
  );
};

export default ServiceInstallation;
