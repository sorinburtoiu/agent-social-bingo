import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses = [
    'cyber-focus group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[1.1rem] border px-1.5 py-2 text-center transition-all duration-200 select-none',
    'font-medium leading-[1.08] text-[10px] sm:text-[11px]',
    'before:absolute before:inset-x-2 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(87,243,255,0.55),transparent)] before:content-[""]',
    'after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(255,79,216,0.35),transparent)] after:content-[""]',
  ].join(' ');

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-[rgba(255,228,92,0.8)] bg-[linear-gradient(180deg,rgba(58,47,8,0.95),rgba(38,24,6,0.92))] text-[color:var(--color-bingo)] shadow-[0_0_22px_rgba(255,228,92,0.28)]'
      : 'border-[rgba(87,243,255,0.68)] bg-[linear-gradient(180deg,rgba(12,46,72,0.95),rgba(7,24,38,0.95))] text-[color:var(--color-accent-soft)] shadow-[0_0_18px_rgba(87,243,255,0.18)]'
    : 'border-[rgba(87,243,255,0.18)] bg-[linear-gradient(180deg,rgba(10,19,35,0.96),rgba(6,12,24,0.98))] text-[color:var(--text-strong)] hover:border-[rgba(87,243,255,0.42)] hover:bg-[linear-gradient(180deg,rgba(13,26,46,0.98),rgba(8,15,28,1))] active:scale-[0.98]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'border-[rgba(255,79,216,0.62)] bg-[linear-gradient(180deg,rgba(59,15,53,0.94),rgba(29,8,31,0.96))] font-display text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-signal-soft)] shadow-[0_0_20px_rgba(255,79,216,0.24)] sm:text-xs'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isFreeSpace ? undefined : square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="relative z-10 break-words hyphens-auto px-1">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1.5 top-1.5 z-10 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
          ON
        </span>
      )}
    </button>
  );
}
