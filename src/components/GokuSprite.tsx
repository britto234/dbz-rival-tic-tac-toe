
import React from 'react';

const GokuSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-16 h-16">
        <img 
          src="/lovable-uploads/86bb0ade-b147-49f3-9a9d-4998803ccba2.png"
          alt="Goku"
          className="w-full h-full object-contain drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.8))'
          }}
        />
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-25 animate-ping scale-125"></div>
      </div>
    </div>
  );
};

export default GokuSprite;
