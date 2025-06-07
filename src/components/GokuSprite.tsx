
import React from 'react';

const GokuSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-16 h-16">
        <img 
          src="/lovable-uploads/fa6ddaa2-7285-4bc1-9df3-fc016da57ea2.png"
          alt="Goku"
          className="w-full h-full object-contain"
        />
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default GokuSprite;
