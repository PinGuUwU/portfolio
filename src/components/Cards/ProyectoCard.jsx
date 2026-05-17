import React from 'react';
import Tag from '../Tag';
import { useLanguage } from '../../contexts/LanguageContext';
import ReactGA from "react-ga4";

const ProyectoCard = ({ title, description, tags, image, repoLink, demoLink, status }) => {
  const { t } = useLanguage();
  return (
    <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/60 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
      {/* In-Progress Badge */}
      {status === 'in-progress' && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-yellow-950 text-xs font-bold px-3 py-1.5 rounded-full z-10 backdrop-blur-md shadow-lg flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-100"></span>
          </span>
          {t('proyectos.inProgress')}
        </div>
      )}

      {/* Image Area */}
      {image ? (
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 group-hover:to-slate-900/60 transition-all duration-300"></div>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 w-full relative flex items-center justify-center">
          <div className="text-purple-400/30 text-4xl">💻</div>
        </div>
      )}

      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">{title}</h3>
        <div 
          className="text-gray-400 text-sm leading-relaxed mb-6 grow group-hover:text-gray-300 transition-colors"
          dangerouslySetInnerHTML={{ __html: description }}
        />

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
              className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white text-center text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center gap-2 group/btn"
            >
              <span>{t('proyectos.demo')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
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
              className={`py-3 px-4 rounded-lg text-white text-center text-sm font-bold transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center gap-2 group/btn ${demoLink ? 'flex-1 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30' : 'w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/50'}`}
            >
              <span>{t('proyectos.repo')}</span>
              {demoLink ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/btn:opacity-100 transition-opacity group-hover/btn:translate-x-1">
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
