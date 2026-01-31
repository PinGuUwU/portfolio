import React from 'react';
import { FaUniversity, FaCode, FaMicroscope } from 'react-icons/fa';

const iconMap = {
    FaUniversity: FaUniversity,
    FaCode: FaCode,
    FaMicroscope: FaMicroscope
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
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group block"
        >
            <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/30 transition-colors">
                    <IconComponent size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">{institution}</h3>
                    <h4 className="text-purple-400 font-semibold mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{description}</p>
                    {url && (
                        <span className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors font-medium inline-flex items-center gap-1">
                            {t('sobremi.moreInfo')}
                        </span>
                    )}
                </div>
            </div>
        </CardWrapper>
    );
};

export default SobreMiCard;
