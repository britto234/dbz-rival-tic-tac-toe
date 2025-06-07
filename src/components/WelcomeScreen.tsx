
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Zap, Swords } from 'lucide-react';

interface WelcomeScreenProps {
  onStartGame: () => void;
}

const WelcomeScreen = ({ onStartGame }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        {/* Main Title */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-8xl font-bold text-yellow-300 mb-6 text-shadow-lg animate-pulse">
            DBZ
          </h1>
          <div className="relative">
            <h2 className="text-6xl font-bold text-white mb-4 text-shadow-lg">
              TIC TAC TOE
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
            <p className="text-3xl text-yellow-200 font-bold">
              GOKU vs VEGETA
            </p>
            <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Character Preview */}
        <Card className="p-8 bg-black/30 backdrop-blur-sm border-yellow-400 border-4 mb-8 animate-scale-in">
          <div className="flex justify-around items-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <img 
                  src="/lovable-uploads/86bb0ade-b147-49f3-9a9d-4998803ccba2.png"
                  alt="Goku"
                  className="w-full h-full object-contain drop-shadow-lg animate-bounce"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))'
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 animate-ping scale-150"></div>
              </div>
              <h3 className="text-2xl font-bold text-yellow-300">GOKU</h3>
              <p className="text-yellow-200">The Pure-Hearted Warrior</p>
            </div>

            <div className="flex flex-col items-center">
              <Swords className="w-16 h-16 text-red-500 animate-spin" />
              <p className="text-2xl font-bold text-white mt-4">VS</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <img 
                  src="/lovable-uploads/68442a17-f2fa-48f8-85a5-b9ad9c7689ae.png"
                  alt="Vegeta"
                  className="w-full h-full object-contain drop-shadow-lg animate-bounce"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.8))'
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping scale-150"></div>
              </div>
              <h3 className="text-2xl font-bold text-purple-300">VEGETA</h3>
              <p className="text-purple-200">The Prince of All Saiyans</p>
            </div>
          </div>
        </Card>

        {/* Game Description */}
        <div className="mb-8 animate-fade-in">
          <p className="text-xl text-white mb-4">
            The ultimate Saiyan battle begins! Choose your warrior and prove your supremacy!
          </p>
          <p className="text-lg text-yellow-200">
            First to align three symbols wins the battle!
          </p>
        </div>

        {/* Start Button */}
        <Button
          onClick={onStartGame}
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-12 py-6 text-2xl border-4 border-yellow-400 hover:border-yellow-300 transition-all duration-300 hover:scale-105 animate-pulse"
        >
          <Zap className="w-8 h-8 mr-3" />
          START BATTLE
          <Zap className="w-8 h-8 ml-3" />
        </Button>

        {/* Power-up effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-60 animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60 animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-60 animation-delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
