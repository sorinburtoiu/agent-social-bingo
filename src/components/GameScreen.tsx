import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const markedCount = board.filter((square) => square.isMarked).length;

  return (
    <div className="flex min-h-full flex-col px-3 py-3 sm:px-4 sm:py-4">
      <header className="cyber-shell corner-brackets rounded-[1.6rem] px-4 py-4 sm:px-5">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onReset}
              className="cyber-focus rounded-full border border-[rgba(87,243,255,0.28)] bg-[rgba(87,243,255,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-soft)] transition-colors hover:bg-[rgba(87,243,255,0.14)]"
            >
              Exit
            </button>

            <div className="text-center">
              <p className="hud-label text-[10px] sm:text-xs">Soc Ops</p>
              <h1 className="font-display text-2xl font-bold uppercase text-glow-cyan sm:text-3xl">
                Social Bingo
              </h1>
            </div>

            <div className="rounded-full border border-[rgba(255,79,216,0.35)] bg-[rgba(255,79,216,0.08)] px-3 py-2 text-right">
              <p className="hud-label text-[9px]">Grid status</p>
              <p className="text-sm font-semibold text-[color:var(--color-signal-soft)]">{markedCount}/25 lit</p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div className="cyber-shell rounded-2xl px-4 py-3">
              <p className="hud-label text-[10px]">Field brief</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-base">
                Tap a square when you find someone who matches it. Keep scanning the room until a full row, column, or diagonal is online.
              </p>
            </div>

            <div className="cyber-shell rounded-2xl px-4 py-3">
              <p className="hud-label text-[10px]">Center tile</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-base">
                The free space is already active. Build outward from the center for the fastest route to bingo.
              </p>
            </div>
          </div>
        </div>
      </header>

      {hasBingo && (
        <div className="mt-3 animate-[signal-pulse_2.4s_ease-in-out_infinite] rounded-[1.35rem] border border-[rgba(255,228,92,0.55)] bg-[linear-gradient(90deg,rgba(255,228,92,0.18),rgba(255,79,216,0.14))] px-4 py-3 text-center shadow-[0_0_30px_rgba(255,228,92,0.15)]">
          <p className="hud-label text-[10px] text-[color:var(--color-bingo)]">Winning signal</p>
          <p className="mt-1 font-display text-xl font-semibold uppercase text-[color:var(--color-bingo)] sm:text-2xl">
            Bingo! You locked a line.
          </p>
        </div>
      )}

      <div className="flex flex-1 items-center justify-center py-4 sm:py-5">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
