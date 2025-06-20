// src/components/layout/Footer.tsx
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const footerLinks = [
    {
      title: t('quick_links'),
      links: [
        { name: t('home'), href: '/' },
        { name: t('about'), href: '#about' },
        { name: t('services'), href: '#services' },
        { name: t('parts'), href: '#parts' },
        { name: t('testimonials'), href: '#testimonials' }
      ]
    },
    {
      title: t('auto_parts'),
      links: [
        { name: t('engine_parts'), href: '/parts/engine' },
        { name: t('transmission'), href: '/parts/transmission' },
        { name: t('brake_system'), href: '/parts/brakes' },
        { name: t('suspension'), href: '/parts/suspension' },
        { name: t('electrical'), href: '/parts/electrical' }
      ]
    },
    {
      title: t('support'),
      links: [
        { name: t('contact'), href: '#contact' },
        { name: t('faqs'), href: '/faq' },
        { name: t('shipping_policy'), href: '/shipping' },
        { name: t('returns_warranty'), href: '/returns' },
        { name: t('privacy_policy'), href: '/privacy' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-yellow-600 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img 
                src="/assets/images/logo-white.png" 
                alt={t('logo_alt', 'Auto Parts Logo')} 
                className="h-8 mr-2"
              />
              <span className="text-xl font-bold tracking-tight">{t('brand_name', 'LE PRO MECANO')}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer_about_desc', 'Your trusted source for quality auto parts and accessories since 2005.')}
            </p>
            <div className="flex space-x-4 mb-4 rtl:space-x-reverse">
              {['Facebook', 'Twitter', 'Instagram', 'Linkedin'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition-colors transform hover:-translate-y-1 active:scale-95 duration-200"
                >
                  {social === 'Facebook' && <Facebook className="h-5 w-5" />}
                  {social === 'Twitter' && <Twitter className="h-5 w-5" />}
                  {social === 'Instagram' && <Instagram className="h-5 w-5" />}
                  {social === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: i18n.language === 'ar' ? -5 : 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
                    >
                      {i18n.language === 'ar' ? (
                        <>
                          <span>{link.name}</span>
                          <ChevronLeft className="w-4 h-4 mr-1" />
                        </>
                      ) : (
                        <>
                          <ChevronRight className="w-4 h-4 mr-1" />
                          <span>{link.name}</span>
                        </>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('newsletter')}</h3>
            <p className="text-gray-400 mb-4">
              {t('subscribe_updates')}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('your_email')}
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 w-full"
                required
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              />
              <motion.button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('subscribe')}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} {t('brand_name', 'LE PRO MECANO')}. {t('all_rights_reserved')}</p>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <LanguageSwitcher />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};