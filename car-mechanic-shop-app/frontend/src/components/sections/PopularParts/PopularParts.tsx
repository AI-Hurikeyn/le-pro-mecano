import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from '../../../ui/Card'
import { useTranslation } from 'react-i18next'

export const PopularParts = () => {
  const { t } = useTranslation()

  const parts = [
    { img: 'https://via.placeholder.com/300', title: t('custom_rims'), desc: t('custom_rims_desc') },
    { img: 'https://via.placeholder.com/300', title: t('engine_parts'), desc: t('engine_parts_desc') },
    { img: 'https://via.placeholder.com/300', title: t('headlights'), desc: t('headlights_desc') },
  ]

  return (
    <section id="parts" className="py-20 bg-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">{t('popular_parts')}</h2>
        <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full"></div>
      </div>

      <Swiper slidesPerView={1} spaceBetween={24} breakpoints={{
        768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }
      }}>
        {parts.map((p,i) => (
          <SwiperSlide key={i}>
            <Card className="overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.desc}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
