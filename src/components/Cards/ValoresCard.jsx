import React from 'react';
import { FaUsers, FaComments, FaChartLine, FaCalendarCheck } from 'react-icons/fa';

const iconMap = {
  FaUsers: FaUsers,
  FaComments: FaComments,
  FaChartLine: FaChartLine,
  FaCalendarCheck: FaCalendarCheck
};

const ValoresCard = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon] || FaUsers;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center h-full">
      <div className="p-4 bg-purple-500/20 rounded-full text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/30 transition-colors mb-6">
        <IconComponent size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ValoresCard;