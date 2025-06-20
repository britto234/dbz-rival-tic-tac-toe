
import React from 'react';

const VegjetaSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-16 h-16">
        <img 
          src="/lovable-uploads/68442a17-f2fa-48f8-85a5-b9ad9c7689ae.png"
          alt="Vegeta"
          className="w-full h-full object-contain drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.8))'
          }}
        />
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-purple-500 opacity-25 animate-ping scale-125"></div>
      </div>
    </div>
  );
};

export default VegjetaSprite;
