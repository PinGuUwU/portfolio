import React from 'react';
import { FaUniversity, FaCode, FaMicroscope, FaSalesforce, FaArrowRight } from 'react-icons/fa';

const iconMap = {
    FaUniversity: FaUniversity,
    FaCode: FaCode,
    FaMicroscope: FaMicroscope,
    FaSalesforce: FaSalesforce
};

import { useLanguage } from '../contexts/LanguageContext';

const SobreMiCard = ({ institution, title, description, icon, url }) => {
    const { t } = useLanguage();
    const IconComponent = iconMap[icon] || FaUniversity;
    const CardWrapper = url ? 'a' : 'div';
    const wrapperProps = url ? {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};

    return (
        <CardWrapper
            {...wrapperProps}
            className="bg-gradient-to-br from-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-purple-500/30 p-6 rounded-2xl hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group block overflow-hidden"
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg text-purple-300 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                    <IconComponent size={28} />
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-1">{institution}</h3>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-purple-200 transition-colors">{title}</h4>
                    <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors leading-relaxed">{description}</p>
                    {url && (
                        <span className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors font-medium inline-flex items-center gap-2 group-hover:gap-3">
                            {t('sobremi.moreInfo')} <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    )}
                </div>
            </div>
        </CardWrapper>
    );
};

export default SobreMiCard;
