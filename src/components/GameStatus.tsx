
import React from 'react';
import { Card } from '@/components/ui/card';
import { Crown, Zap } from 'lucide-react';

interface GameStatusProps {
  currentPlayer: 'goku' | 'vegeta';
  winner: 'goku' | 'vegeta' | null;
  isDraw: boolean;
}

const GameStatus = ({ currentPlayer, winner, isDraw }: GameStatusProps) => {
  if (winner) {
    return (
      <Card className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 border-4 border-yellow-300 text-center animate-pulse">
        <div className="flex items-center justify-center space-x-3">
          <Crown className="w-8 h-8 text-yellow-900" />
          <h2 className="text-3xl font-bold text-yellow-900">
            {winner === 'goku' ? 'GOKU WINS!' : 'VEGETA WINS!'}
          </h2>
          <Crown className="w-8 h-8 text-yellow-900" />
        </div>
        <p className="text-xl text-yellow-800 mt-2">
          {winner === 'goku' 
            ? 'The power of friendship prevails!' 
            : 'The Prince of all Saiyans is victorious!'
          }
        </p>
      </Card>
    );
  }

  if (isDraw) {
    return (
      <Card className="p-6 bg-gradient-to-r from-gray-600 to-gray-800 border-4 border-gray-400 text-center">
        <div className="flex items-center justify-center space-x-3">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl font-bold text-white">
            IT'S A DRAW!
          </h2>
          <Zap className="w-8 h-8 text-yellow-400" />
        </div>
        <p className="text-xl text-gray-300 mt-2">
          Both warriors are equally matched!
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-blue-400 text-center">
      <div className="flex items-center justify-center space-x-3">
        <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
        <h2 className="text-2xl font-bold text-white">
          {currentPlayer === 'goku' ? "GOKU'S TURN" : "VEGETA'S TURN"}
        </h2>
        <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
      </div>
      <p className="text-lg text-blue-200 mt-2">
        {currentPlayer === 'goku' 
          ? 'Choose your move, Kakarot!' 
          : 'Show them your Saiyan pride!'
        }
      </p>
    </Card>
  );
};

export default GameStatus;
