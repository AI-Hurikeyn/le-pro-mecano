// src/components/sections/Testimonials/Testimonials.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import {SectionTitle} from '../../../ui/SectionTitle';

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Jean D.',
      role: t('auto_enthusiast'),
      content: t('testimonial_1_content'),
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah M.',
      role: t('mechanic'),
      content: t('testimonial_2_content'),
      rating: 4
    },
    {
      id: 3,
      name: 'Michel T.',
      role: t('handyman'),
      content: t('testimonial_3_content'),
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-yellow-500 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          subtitle={t('testimonials')}
          title={t('what_clients_say')}
          description={t('client_reviews_desc')}
          center
          light
        />

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2
            }
          }}
          className="mt-12 pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center text-yellow-500 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};