import { Card } from '../../../ui/Card'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const brands = {
  American: ['Jeep','Chevrolet','Chrysler'],
  Japanese: ['Toyota','Nissan','Honda'],
  European: ['BMW','Mercedes','Audi'],
}

export const BrandSelect = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<'American'|'Japanese'|'European'>('American');
  return (
    <section id="brands" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">{t('select_by_brand')}</h2>
        <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>
      </div>
      <div className="container mx-auto flex">
        <aside className="w-1/4 space-y-2">
          {Object.keys(brands).map(b => (
            <button
              key={b}
              className={`w-full text-left p-3 rounded ${tab===b? 'bg-brand text-black' : 'hover:bg-gray-800'}`}
              onClick={() => setTab(b as 'American' | 'Japanese' | 'European')}
            >{t(b)}</button>
          ))}
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {brands[tab].map(name => (
            <Card key={name} className="bg-gray-800 text-white hover:shadow-xl">
              <div className="h-32 mb-4 bg-gray-700 flex items-center justify-center">
                <span className="text-2xl font-bold">{name}</span>
              </div>
              <p>{t('find_best_parts', { brand: name })}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
