// src/components/layout/Header.tsx
import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { LoginForm } from '../auth/LoginForm';
import { RegisterForm } from '../auth/RegisterForm';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import '../../i18n';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user, setUser } = useUser();
  const { t, i18n } = useTranslation();

  // Animation variants
  const mobileMenuVariants = {
    open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } }
  };
  const mobileItemVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
    closed: { opacity: 0, y: 20 }
  };

  // Enhanced handleNavClick with scroll padding for fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const headerHeight = document.querySelector('header')?.clientHeight || 0;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: t('home'), href: '/' },
    
    { name: t('about'), href: '#about' },
    { 
      name: t('services'), 
      href: '#',
      dropdown: [
        { name: t('service_installation'), href: '#service-installation' },
        { name: t('service_engine_repair'), href: '#service-engine-repair' },
        { name: t('service_maintenance'), href: '#service-maintenance' },
        { name: t('service_wash', 'Lavage Auto'), href: '#service-wash' },
        { name: t('service_support'), href: '#service-support' },
      ]
    },
    { name: t('testimonials'), href: '#testimonials' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-4">
          {/* Logo with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo1.PNG" 
              alt={t('logo_alt', 'Auto Parts Logo')} 
              className="h-16 w-auto mr-2"
            />
            <span className={`text-xl font-bold text-gray-900 tracking-tight ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>{t('brand_name', 'LE PRO MECANO')}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-700 hover:text-yellow-500 transition"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 rtl:left-auto rtl:right-0"
                        >
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={e => {
                                e.preventDefault();
                                setActiveDropdown(null);
                                // trigger service detail section via custom event
                                window.dispatchEvent(new CustomEvent('serviceSelect', { detail: subItem.href.substring(1) }));
                              }}
                              className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    onClick={e => handleNavClick(e, item.href)}
                    className="text-gray-700 hover:text-yellow-500 transition"
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </nav>

          {/* Contact, Auth, and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 pr-2 border-r border-gray-200 rtl:border-l rtl:border-r-0 rtl:pr-0 rtl:pl-2">
              <LanguageSwitcher />
            </div>
            <div className="hidden md:flex items-center gap-2 pl-2 rtl:pr-2 rtl:pl-0">
              <Phone className="h-5 w-5 text-yellow-500" />
              <span className="font-medium text-gray-700 whitespace-nowrap" dir="ltr">+216 23 994 159</span>
            </div>
            {user ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                {user.photoUrl ? (
                  <img 
                    src={user.photoUrl} 
                    alt={user.username} 
                    className="h-10 w-10 rounded-full object-cover border-2 border-yellow-500"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-yellow-200 flex items-center justify-center text-xl font-bold text-yellow-700 border-2 border-yellow-500">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="font-semibold text-gray-900">{user.username.split(' ')[0]}</span>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setUser(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('logout')}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Button 
                  variant="primary" 
                  className="hidden md:block"
                  onClick={() => { setModalOpen(true); setShowRegister(false); }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('login_register')}
                </Button>
              </motion.div>
            )}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none ml-2 rtl:mr-2 rtl:ml-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 overflow-hidden"
            >
              <motion.div className="flex flex-col space-y-3 pb-4">
                {navItems.map((item) => (
                  <motion.div 
                    key={item.name}
                    variants={mobileItemVariants}
                  >
                    {item.dropdown ? (
                      <div>
                        <button 
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full py-2 text-gray-700"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 mt-1 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={e => {
                                  e.preventDefault();
                                  setActiveDropdown(null);
                                  // trigger service detail section via custom event
                                  window.dispatchEvent(new CustomEvent('serviceSelect', { detail: subItem.href.substring(1) }));
                                }}
                                className="block py-1 text-gray-600 hover:text-yellow-500 transition-colors"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={e => handleNavClick(e, item.href)}
                        className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div 
                  variants={mobileItemVariants}
                  className="flex items-center gap-2 py-2 border-t border-gray-200 mt-2"
                >
                  <LanguageSwitcher />
                  <Phone className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium text-gray-700 whitespace-nowrap" dir="ltr">+216 23 994 159</span>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Button 
                    variant="primary" 
                    className="w-full mt-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('request_quote')}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal for Login/Register */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={showRegister ? 'register' : 'login'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {showRegister ? (
              <RegisterForm onSwitch={() => setShowRegister(false)} />
            ) : (
              <LoginForm 
                onSwitch={() => setShowRegister(true)} 
                onSuccess={() => setModalOpen(false)} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Modal>
    </header>
  );
};