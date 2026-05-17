import React from 'react';

const ExperienciaCard = ({ title, institution, description }) => {
  return (
    <div className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-500/30 p-8 rounded-2xl h-full overflow-hidden transition-all duration-300 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-1 group-hover:h-10 transition-all duration-300"></div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">{title}</h3>
            <h4 className="text-purple-400/80 font-semibold text-sm mt-1 group-hover:text-purple-300 transition-colors">{institution}</h4>
          </div>
        </div>
        <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors">{description}</p>
      </div>
    </div>
  );
};

export default ExperienciaCard;