import React from 'react';
import ExperienciaCard from '../Cards/ExperienciaCard';
import { experienciaData } from '../../constants/experienciaData';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaBriefcase } from 'react-icons/fa';

const Experiencia = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaBriefcase className="text-purple-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {t('experiencia.title')}
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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