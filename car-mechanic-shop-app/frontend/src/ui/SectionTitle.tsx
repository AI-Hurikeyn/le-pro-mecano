// src/ui/SectionTitle.tsx
type SectionTitleProps = {
  subtitle: string;
  title: string;
  description: string;
  center?: boolean;
  light?: boolean;
};

export const SectionTitle = ({
  subtitle,
  title,
  description,
  center = false,
  light = false
}: SectionTitleProps) => {
  const textColor = light ? 'text-white' : 'text-gray-900';
  const descColor = light ? 'text-gray-200' : 'text-gray-600';
  const dir = typeof document !== 'undefined' && document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
  const align = dir === 'rtl' ? 'text-right' : (center ? 'text-center' : 'text-left');
  
  return (
    <div className={`${align} max-w-3xl ${center ? 'mx-auto' : ''}`} dir={dir}>
      <span className={`text-sm font-semibold tracking-wider uppercase ${light ? 'text-yellow-300' : 'text-yellow-500'}`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-4 ${textColor}`}>
        {title}
      </h2>
      <p className={`text-lg ${descColor}`}>
        {description}
      </p>
    </div>
  );
};