import React from 'react';
import Tag from '../Tag';
import { useLanguage } from '../../contexts/LanguageContext';

const ProyectoCard = ({ title, description, tags, image, repoLink }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
      {/* Image Area */}
      {image ? (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-48 bg-linear-to-br from-purple-900/50 to-pink-900/50 w-full"></div>
      )}

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-purple-400 mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>

        <a
          href={repoLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white text-center text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
        >
          <span>{t('proyectos.repo')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProyectoCard;
