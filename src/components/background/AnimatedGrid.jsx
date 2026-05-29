/** Slowly drifting perspective grid, masked to fade at the edges. */
export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-move mask-radial opacity-70" />
      {/* horizon glow */}
      <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
    </div>
  )
}
