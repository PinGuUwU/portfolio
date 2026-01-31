import React, { useState } from 'react';
import { FaUsers, FaComments, FaChartLine, FaCalendarCheck } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const iconMap = {
  FaUsers: FaUsers,
  FaComments: FaComments,
  FaChartLine: FaChartLine,
  FaCalendarCheck: FaCalendarCheck
};

const ValoresCard = ({ title, description, icon }) => {
  const { t } = useLanguage();
  const IconComponent = iconMap[icon] || FaUsers;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-72 w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

        {/* Front Face */}
        <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] hover:bg-white/10 transition-colors">
          <div className="p-4 bg-purple-500/20 rounded-full text-purple-400 mb-6 group-hover:bg-purple-500/30 transition-colors">
            <IconComponent size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-purple-400/60 text-xs mt-2">{t('valores.click')}</p>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full bg-white/10 backdrop-blur-md border border-purple-500/30 p-8 rounded-xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-lg font-bold text-purple-400 mb-4">{title}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
        </div>

      </div>
    </div>
  );
};

export default ValoresCard;