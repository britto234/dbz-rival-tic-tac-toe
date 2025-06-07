
import React from 'react';

const VegjetaSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-16 h-16">
        {/* Vegeta's face */}
        <div className="absolute inset-0 bg-yellow-100 rounded-full border-2 border-gray-600">
          {/* Hair */}
          <div className="absolute -top-4 -left-2 w-8 h-10 bg-black rounded-lg transform rotate-12"></div>
          <div className="absolute -top-3 left-1 w-6 h-8 bg-black rounded-lg transform -rotate-12"></div>
          <div className="absolute -top-4 right-0 w-7 h-9 bg-black rounded-lg transform rotate-45"></div>
          
          {/* Eyes (more angular/serious) */}
          <div className="absolute top-4 left-2 w-3 h-1 bg-black transform rotate-12"></div>
          <div className="absolute top-4 right-2 w-3 h-1 bg-black transform -rotate-12"></div>
          
          {/* Eyebrows (angry) */}
          <div className="absolute top-3 left-2 w-3 h-1 bg-black transform rotate-45"></div>
          <div className="absolute top-3 right-2 w-3 h-1 bg-black transform -rotate-45"></div>
          
          {/* Nose */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
          
          {/* Mouth (frown) */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-700 rounded-full transform rotate-180"></div>
        </div>
        
        {/* Vegeta's armor */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-blue-800 rounded-lg border-2 border-white">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-white rounded"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full"></div>
        </div>
        
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default VegjetaSprite;
