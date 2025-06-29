
import React, { useState } from 'react';
import GameBoard from '../components/GameBoard';
import WelcomeScreen from '../components/WelcomeScreen';
import SplashScreen from '../components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showGame, setShowGame] = useState(false);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (!showGame) {
    return <WelcomeScreen onStartGame={() => setShowGame(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-yellow-300 mb-4 text-shadow-lg animate-pulse">
            DBZ TIC TAC TOE
          </h1>
          <p className="text-2xl text-white font-semibold">
            GOKU vs VEGETA
          </p>
          <p className="text-lg text-yellow-200 mt-2">
            The ultimate Saiyan battle!
          </p>
        </div>
        <GameBoard />
      </div>
    </div>
  );
};

export default Index;
