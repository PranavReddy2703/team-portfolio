import { Reveal } from './Reveal'

export function SectionHeading({ kicker, title, highlight, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col ${alignment} gap-5`}>
      {kicker && (
        <Reveal>
          <span className="kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-glow-sm" />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}{' '}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
