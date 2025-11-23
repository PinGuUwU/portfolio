import React from 'react';
import Tag from '../Tag';

const ProyectoCard = ({ title, description, tags, image }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
      {/* Image Area */}
      {image ? (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-48 bg-linear-to-br from-purple-900/50 to-pink-900/50 w-full"></div>
      )}

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-purple-400 mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectoCard;
