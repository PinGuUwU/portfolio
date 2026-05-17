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
      className="group h-80 w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-500/30 p-8 rounded-2xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:translateZ(1px)] hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
        >
          <div className="p-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full text-purple-300 mb-6 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all duration-300 group-hover:scale-110">
            <IconComponent size={40} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-xs mt-4 font-medium uppercase tracking-widest opacity-75 group-hover:opacity-100 transition-opacity">{t('valores.click')}</p>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/40 to-slate-900/60 backdrop-blur-xl border border-purple-500/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)]"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">{title}</h3>
          <p className="text-gray-200 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValoresCard;