
import React from 'react';
import SobreMiCard from '../SobreMiCard';
import { educationData, aboutText } from '../../constants/sobreMiData';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaUser, FaGraduationCap } from 'react-icons/fa';

const SobreMi = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-0">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaUser className="text-purple-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {t('sobremi.title')}
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            {aboutText.map((paragraphKey, index) => (
              <p 
                key={index} 
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 hover:text-gray-100"
              >
                {t(paragraphKey)}
              </p>
            ))}
          </div>

          {/* Right Side - Education & Experience */}
          <div className="space-y-4">
            {educationData.map((item) => (
              <SobreMiCard
                key={item.id}
                institution={t(item.institutionKey)}
                title={t(item.titleKey)}
                description={t(item.descriptionKey)}
                icon={item.icon}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi