import React from 'react';
import Tag from '../Tag';
import { useLanguage } from '../../contexts/LanguageContext';
import ReactGA from "react-ga4";

const ProyectoCard = ({ title, description, tags, image, repoLink, demoLink, status }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full flex flex-col relative">
      {/* In-Progress Badge */}
      {status === 'in-progress' && (
        <div className="absolute top-4 right-4 bg-yellow-500/90 text-yellow-950 text-xs font-bold px-3 py-1.5 rounded-full z-10 backdrop-blur-md shadow-lg flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-100"></span>
          </span>
          {t('proyectos.inProgress')}
        </div>
      )}

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
        <div className="h-48 bg-linear-to-br from-purple-900/50 to-pink-900/50 w-full relative"></div>
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

        <div className="flex flex-col sm:flex-row gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => ReactGA.event('ver_proyecto', { tipo: 'Demo', proyecto: title })}
              className="flex-1 py-3 px-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white text-center text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
            >
              <span>{t('proyectos.demo')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => ReactGA.event('ver_proyecto', { tipo: 'Repositorio', proyecto: title })}
              className={`py-3 px-4 rounded-lg text-white text-center text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn ${demoLink ? 'flex-1 bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5' : 'w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25'}`}
            >
              <span>{t('proyectos.repo')}</span>
              {demoLink ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/btn:opacity-100 transition-opacity">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProyectoCard;
