import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="cyber-shell corner-brackets scanline-frame w-full max-w-md rounded-[1.8rem] p-3 sm:max-w-lg sm:p-4">
      <div className="relative z-10 mb-3 flex items-center justify-between px-1">
        <p className="hud-label text-[10px] sm:text-xs">Neon matrix</p>
        <p className="text-[10px] uppercase tracking-[0.26em] text-[color:var(--text-muted)] sm:text-xs">5 x 5 board</p>
      </div>

      <div className="relative z-10 grid aspect-square grid-cols-5 gap-1.5 sm:gap-2">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
