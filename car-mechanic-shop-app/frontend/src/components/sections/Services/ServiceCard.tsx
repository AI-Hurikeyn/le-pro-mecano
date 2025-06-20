import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  serviceId: string;
  onClick?: (serviceId: string) => void;
}

export const ServiceCard = ({ icon, title, description, serviceId, onClick }: ServiceCardProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(serviceId);
    }
    
    // Smooth scroll to the corresponding section
    try {
      const element = document.getElementById(serviceId);
      if (element) {
        const headerHeight = document.querySelector('header')?.clientHeight || 0;
        const offsetPosition = element.offsetTop - headerHeight - 20;
        window.scrollTo({ 
          top: offsetPosition, 
          behavior: 'smooth' 
        });
      }
    } catch (error) {
      console.warn(`Failed to scroll to section ${serviceId}:`, error);
    }
  };

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-lg p-6 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-8 flex-1">
        {/* Icon container with animated background */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
            <div className="text-white text-3xl transform group-hover:rotate-12 transition-transform duration-300">
              {icon}
            </div>
          </div>
          {/* Pulse animation */}
          <div className="absolute inset-0 w-20 h-20 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500" />
        </div>

        {/* Title with gradient text */}
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-8 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        {/* Interactive button with arrow */}
        <div className="flex items-center justify-center mt-auto space-x-2 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
          <span 
            className={`font-semibold text-lg transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            {t('learn_more')}
          </span>
          <ChevronRight 
            className={`w-6 h-6 transition-all duration-300 ${
              isHovered ? 'rotate-90 translate-x-1' : 'rotate-0'
            }`}
          />
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </div>
  );
};
