
import React from 'react';

const GokuSprite = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-bounce">
      <div className="relative w-16 h-16">
        {/* Goku's face */}
        <div className="absolute inset-0 bg-yellow-200 rounded-full border-2 border-orange-400">
          {/* Hair */}
          <div className="absolute -top-2 -left-1 w-6 h-6 bg-orange-500 rounded-full"></div>
          <div className="absolute -top-3 left-2 w-8 h-8 bg-orange-500 rounded-full"></div>
          <div className="absolute -top-2 right-0 w-5 h-5 bg-orange-500 rounded-full"></div>
          
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
          
          {/* Nose */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
          
          {/* Mouth */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-red-500 rounded-full"></div>
        </div>
        
        {/* Goku's gi */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-orange-600 rounded-lg border-2 border-blue-600">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
        
        {/* Power aura effect */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
};

export default GokuSprite;
