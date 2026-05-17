import React from 'react';
import ValoresCard from '../Cards/ValoresCard';
import { valoresData } from '../../constants/valoresData';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaStar } from 'react-icons/fa';

const Valores = () => {
  const { t } = useLanguage();

  return (
    <section id="valores" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaStar className="text-purple-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {t('valores.title')}
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valoresData.map((item) => (
            <ValoresCard
              key={item.id}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Valores