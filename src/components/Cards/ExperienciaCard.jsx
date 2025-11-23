import React from 'react';

const ExperienciaCard = ({ title, institution, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group h-full">
      <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
      <h4 className="text-white font-semibold mb-4 text-sm">{institution}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ExperienciaCard;