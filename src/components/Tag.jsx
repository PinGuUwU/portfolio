import React from 'react';

const Tag = ({ text }) => {
  return (
    <span className="px-4 py-2 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-default">
      {text}
    </span>
  );
};

export default Tag;