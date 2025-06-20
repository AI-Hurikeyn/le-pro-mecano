import { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const changeLanguage = (lng: string) => {
    const lang = LANGUAGES.find(l => l.code === lng) || LANGUAGES[0];
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lang.dir;
    document.body.classList.toggle('rtl', lang.dir === 'rtl');
    localStorage.setItem('i18nextLng', lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') || 'fr';
    const lang = LANGUAGES.find(l => l.code === savedLang) || LANGUAGES[0];
    document.documentElement.lang = savedLang;
    document.documentElement.dir = lang.dir;
    document.body.classList.toggle('rtl', lang.dir === 'rtl');
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button 
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
          aria-label="Change language"
        >
          <span className="text-xl">{current.flag}</span>
          <span className="font-medium hidden sm:inline">{current.label}</span>
          <ChevronDown className="w-4 h-4" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50 rtl:right-auto rtl:left-0">
          {LANGUAGES.map(lang => (
            <Menu.Item key={lang.code}>
              {({ active }) => (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center w-full px-4 py-3 text-sm gap-3 ${
                    active ? 'bg-yellow-50 text-yellow-700' : 'text-gray-700'
                  } transition-colors duration-200`}
                  aria-checked={i18n.language === lang.code}
                  role="menuitemradio"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="flex-1 text-start font-medium">{lang.label}</span>
                  {i18n.language === lang.code && (
                    <Check className="w-4 h-4 text-yellow-500" />
                  )}
                </motion.button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
