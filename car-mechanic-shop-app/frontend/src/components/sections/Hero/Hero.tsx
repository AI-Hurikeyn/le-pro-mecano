// src/components/sections/Hero/Hero.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../ui/Button';
import HeroCard from './HeroCard';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative pt-24 pb-16 md:pb-24 bg-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-20 -left-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-96 h-96 bg-yellow-600 rounded-full opacity-10 blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
              {t('hero_title')}
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-lg">
              {t('hero_desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button 
                variant="primary"
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('buy_now')}
              </Button>
              <Button 
                variant="secondary"
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  try {
                    const el = document.getElementById('our-shop');
                    if (el) {
                      const headerHeight = document.querySelector('header')?.clientHeight || 0;
                      const offset = el.offsetTop - headerHeight - 20;
                      window.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                  } catch (error) {
                    console.warn('Scroll to Our Shop failed', error);
                  }
                }}
              >
                {t('learn_more')}
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <img 
              src="/images/kanikk.jpg" 
              alt={t('car_parts_img_alt')}
              className="w-full h-auto rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-500"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="block text-3xl font-bold">15+</span>
              <span className="text-sm">{t('years_experience')}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Card Overlay */}
        <HeroCard />
      </div>
    </section>
  );
};