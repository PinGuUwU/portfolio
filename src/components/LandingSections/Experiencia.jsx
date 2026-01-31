import React from 'react';
import ExperienciaCard from '../Cards/ExperienciaCard';
import { experienciaData } from '../../constants/experienciaData';
import { useLanguage } from '../../contexts/LanguageContext';

const Experiencia = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {t('experiencia.title')}
          </span>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienciaData.map((item) => (
            <ExperienciaCard
              key={item.id}
              title={t(item.titleKey)}
              institution={t(item.institutionKey)}
              description={t(item.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiencia