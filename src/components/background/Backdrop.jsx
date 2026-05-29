import { AnimatedGrid } from './AnimatedGrid'
import { Particles } from './Particles'

/** Global fixed background layer that sits behind all content. */
export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <AnimatedGrid />
      <Particles />
      {/* ambient corner glows */}
      <div className="absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-600/[0.07] blur-[140px]" />
    </div>
  )
}
