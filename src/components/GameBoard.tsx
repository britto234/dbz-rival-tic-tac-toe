
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import GokuSprite from './GokuSprite';
import VegjetaSprite from './VegjetaSprite';
import GameStatus from './GameStatus';
import { RotateCcw, Zap } from 'lucide-react';

type Player = 'goku' | 'vegeta' | null;
type Board = Player[];

const GameBoard = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'goku' | 'vegeta'>('goku');
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  const checkWinner = useCallback((newBoard: Board) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningLine(combination);
        return true;
      }
    }

    if (newBoard.every(cell => cell !== null)) {
      setIsDraw(true);
      return true;
    }

    return false;
  }, [winningCombinations]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (!checkWinner(newBoard)) {
      setCurrentPlayer(currentPlayer === 'goku' ? 'vegeta' : 'goku');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('goku');
    setWinner(null);
    setIsDraw(false);
    setWinningLine([]);
  };

  const renderCell = (index: number) => {
    const isWinningCell = winningLine.includes(index);
    const cellPlayer = board[index];

    return (
      <button
        key={index}
        onClick={() => handleCellClick(index)}
        className={`
          aspect-square bg-gradient-to-br from-blue-900 to-purple-900 
          border-4 border-yellow-400 rounded-lg relative overflow-hidden
          transition-all duration-300 hover:scale-105 hover:border-yellow-300
          ${isWinningCell ? 'animate-pulse border-green-400 bg-green-900' : ''}
          ${!cellPlayer && !winner && !isDraw ? 'hover:bg-gradient-to-br hover:from-blue-800 hover:to-purple-800' : ''}
        `}
        disabled={!!cellPlayer || !!winner || isDraw}
      >
        {cellPlayer === 'goku' && (
          <div className="w-full h-full flex items-center justify-center p-2">
            <GokuSprite />
          </div>
        )}
        {cellPlayer === 'vegeta' && (
          <div className="w-full h-full flex items-center justify-center p-2">
            <VegjetaSprite />
          </div>
        )}
        {!cellPlayer && !winner && !isDraw && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-8 h-8 text-yellow-400 opacity-30" />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <GameStatus 
        currentPlayer={currentPlayer}
        winner={winner}
        isDraw={isDraw}
      />
      
      <Card className="p-6 bg-black/20 backdrop-blur-sm border-yellow-400 border-2">
        <div className="grid grid-cols-3 gap-4 w-80 h-80">
          {Array.from({ length: 9 }, (_, index) => renderCell(index))}
        </div>
      </Card>

      <Button
        onClick={resetGame}
        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-3 text-lg border-2 border-yellow-400"
      >
        <RotateCcw className="w-5 h-5 mr-2" />
        NEW BATTLE
      </Button>
    </div>
  );
};

export default GameBoard;
