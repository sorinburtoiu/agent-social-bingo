interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(87,243,255,0.16),transparent_30%),rgba(2,4,11,0.86)] p-4 backdrop-blur-sm">
      <div className="cyber-shell corner-brackets scanline-frame w-full max-w-sm animate-[float-in_360ms_ease-out] rounded-[1.9rem] p-6 text-center sm:p-8">
        <div className="relative z-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(255,228,92,0.55)] bg-[radial-gradient(circle,rgba(255,228,92,0.2),rgba(255,79,216,0.16)_65%,transparent_70%)] shadow-[0_0_30px_rgba(255,228,92,0.22)]">
            <span className="font-display text-3xl font-bold uppercase text-[color:var(--color-bingo)]">5X</span>
          </div>

          <p className="hud-label mt-5 text-[11px] text-[color:var(--color-bingo)]">Signal confirmed</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-[color:var(--color-bingo)] text-glow-pink">
            Bingo!
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-base">
            You completed a line and lit the board. Keep going if you want to claim more squares.
          </p>

          <button
            onClick={onDismiss}
            className="neon-button cyber-focus mt-6 w-full rounded-2xl px-6 py-4 text-base font-semibold uppercase tracking-[0.22em] text-[color:var(--text-strong)]"
          >
            Keep Playing
          </button>
        </div>
      </div>
    </div>
  );
}
