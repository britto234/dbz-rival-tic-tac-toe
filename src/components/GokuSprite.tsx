
import React from 'react';

const GokuSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-12 h-12">
        <img 
          src="/lovable-uploads/8ced7b0c-fb30-4c22-9f0d-c66fcf228b9f.png"
          alt="Goku"
          className="w-full h-full object-contain drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
          }}
        />
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 animate-ping scale-110"></div>
      </div>
    </div>
  );
};

export default GokuSprite;
