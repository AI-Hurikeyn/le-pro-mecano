import { Card } from '../../../ui/Card'
import { Wrench, Truck, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next';

export const WhyChoose = () => {
  const { t } = useTranslation();

  const items = [
    { icon: <Truck size={32}/>, title: t('great_experience'), desc: t('great_experience_desc') },
    { icon: <Wrench size={32}/>, title: t('rare_parts'), desc: t('rare_parts_desc') },
    { icon: <Users size={32}/>, title: t('individual_approach'), desc: t('individual_approach_desc') },
  ];

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">{t('why_choose_us')}</h2>
        <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {items.map((i, idx) => (
          <Card key={idx} className="flex flex-col items-center text-center hover:shadow-xl">
            <div className="text-brand mb-4">{i.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
            <p className="text-gray-700">{i.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
