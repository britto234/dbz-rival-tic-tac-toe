
import React, { useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
      {/* Background energy effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-ping animation-delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-30 animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-red-400 rounded-full opacity-25 animate-ping animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* App Icon/Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center shadow-2xl saiyan-aura">
            <span className="text-6xl font-bold text-white text-shadow-lg">XO</span>
          </div>
        </div>

        {/* App Name */}
        <div className="animate-fade-in animation-delay-500">
          <h1 className="text-7xl font-bold text-yellow-300 mb-2 text-shadow-lg">
            DBZ XO
          </h1>
          <p className="text-2xl text-white font-semibold mb-8">
            SAIYAN BATTLE
          </p>
        </div>

        {/* Loading animation */}
        <div className="animate-fade-in animation-delay-1000">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-500"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-1000"></div>
          </div>
          <p className="text-yellow-200 text-lg font-medium">
            Powering Up...
          </p>
        </div>

        {/* Power level indicator */}
        <div className="mt-8 animate-fade-in animation-delay-2000">
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-yellow-300 mt-2 font-mono">
            POWER LEVEL: OVER 9000!
          </p>
        </div>
      </div>

      {/* Energy particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
