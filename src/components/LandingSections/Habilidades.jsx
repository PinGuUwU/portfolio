import React from 'react';
import Tag from '../Tag';
import { habilidadesData } from '../../constants/habilidadesData';

const Habilidades = () => {
  return (
    <section id="habilidades" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Habilidades
          </span>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Habilidades Técnicas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400">
              {habilidadesData.tecnicas.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {habilidadesData.tecnicas.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {habilidadesData.tecnicas.skills.map((skill, index) => (
                <Tag key={index} text={skill} />
              ))}
            </div>
          </div>

          {/* Habilidades Blandas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400">
              {habilidadesData.blandas.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {habilidadesData.blandas.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {habilidadesData.blandas.skills.map((skill, index) => (
                <Tag key={index} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades