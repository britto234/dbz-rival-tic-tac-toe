
import React from 'react';

const VegjetaSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-16 h-16">
        <img 
          src="/lovable-uploads/dfff2a2f-26df-42c4-8d57-077d2f39a362.png"
          alt="Vegeta"
          className="w-full h-full object-contain"
        />
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default VegjetaSprite;
