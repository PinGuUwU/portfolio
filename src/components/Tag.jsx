import React from 'react';

const Tag = ({ text }) => {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-purple-900/40 to-pink-900/40 hover:from-purple-900/60 hover:to-pink-900/60 border border-purple-500/30 hover:border-purple-400/70 rounded-full text-sm text-gray-200 hover:text-white transition-all duration-300 cursor-default backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20">
      {text}
    </span>
  );
};

export default Tag;