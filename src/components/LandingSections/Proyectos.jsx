import React from 'react';
import ProyectoCard from '../Cards/ProyectoCard';
import { proyectosData } from '../../constants/proyectosData';
import { useLanguage } from '../../contexts/LanguageContext';

const Proyectos = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {t('proyectos.title')}
          </span>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectosData.map((item) => (
            <ProyectoCard
              key={item.id}
              title={item.titleKey ? t(item.titleKey) : item.title}
              description={t(item.descriptionKey)}
              tags={item.tags.map(tag => tag.startsWith('proyectos.') ? t(tag) : tag)}
              image={item.image}
              repoLink={item.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos