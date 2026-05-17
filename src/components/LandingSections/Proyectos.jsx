import React from 'react';
import ProyectoCard from '../Cards/ProyectoCard';
import { proyectosData } from '../../constants/proyectosData';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaLaptopCode } from 'react-icons/fa';

const Proyectos = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaLaptopCode className="text-purple-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {t('proyectos.title')}
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {proyectosData.map((item) => (
            <ProyectoCard
              key={item.id}
              title={item.titleKey ? t(item.titleKey) : item.title}
              description={t(item.descriptionKey)}
              tags={item.tags.map(tag => tag.startsWith('proyectos.') ? t(tag) : tag)}
              image={item.image}
              repoLink={item.repoLink}
              demoLink={item.demoLink}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos