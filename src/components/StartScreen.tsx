interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      <div className="absolute inset-x-0 top-10 h-32 bg-[radial-gradient(circle_at_center,rgba(87,243,255,0.14),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_68%)] blur-3xl" />

      <section className="relative z-10 w-full max-w-5xl animate-[float-in_550ms_ease-out]">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="cyber-shell corner-brackets scanline-frame rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
            <div className="relative z-10 space-y-6">
              <div className="space-y-3">
                <p className="hud-label text-xs sm:text-sm">Mixer protocol // live board</p>
                <div className="space-y-2">
                  <h1 className="font-display text-5xl font-bold uppercase leading-none text-glow-cyan sm:text-6xl lg:text-7xl">
                    Soc Ops
                  </h1>
                  <p className="max-w-xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
                    Social Bingo reimagined as a neon contact trace. Scan the room, mark your matches, and light up a full line before anyone else does.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="cyber-shell rounded-2xl p-4">
                  <p className="hud-label text-[11px]">01 // Detect</p>
                  <p className="mt-2 text-sm text-[color:var(--text-strong)]">Find people who match the prompts on your board.</p>
                </div>
                <div className="cyber-shell rounded-2xl p-4">
                  <p className="hud-label text-[11px]">02 // Mark</p>
                  <p className="mt-2 text-sm text-[color:var(--text-strong)]">Tap a square each time you confirm a match in the crowd.</p>
                </div>
                <div className="cyber-shell rounded-2xl p-4">
                  <p className="hud-label text-[11px]">03 // Win</p>
                  <p className="mt-2 text-sm text-[color:var(--text-strong)]">Get 5 in a row to trigger the bingo signal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-shell corner-brackets rounded-[1.75rem] p-6 sm:p-8 lg:p-9">
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,79,216,0.35)] bg-[rgba(255,79,216,0.08)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--color-signal-soft)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-signal)] shadow-[0_0_12px_rgba(255,79,216,0.85)]" />
                  Terminal Noir
                </div>

                <div>
                  <p className="hud-label text-xs">Board rules</p>
                  <h2 className="mt-2 font-display text-3xl font-semibold uppercase text-[color:var(--text-strong)]">
                    How to play
                  </h2>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-base">
                  <p>Each board is unique. The center tile is already lit as your free space.</p>
                  <p>Keep moving and talking. The faster you verify people, the faster your grid starts to glow.</p>
                  <p>Once a line locks in, the board will flash the winning signal automatically.</p>
                </div>
              </div>

              <button
                onClick={onStart}
                className="neon-button cyber-focus w-full rounded-2xl px-6 py-4 text-lg font-semibold uppercase tracking-[0.22em] text-[color:var(--text-strong)]"
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
