/**
 * Renders a member portrait.
 * - If `member.image` is set, shows the real photo (object-cover).
 * - Otherwise renders a premium monogram placeholder tinted with the member accent.
 */
export function Portrait({ member, className = '' }) {
  const accent = member.accent || '#10b981'

  if (member.image) {
    return (
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className={`h-full w-full object-cover object-center ${className}`}
      />
    )
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 50% 0%, ${accent}22, transparent 55%), linear-gradient(180deg, #0a1013 0%, #05080a 100%)`,
      }}
      aria-label={member.name}
      role="img"
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      {/* glow orb */}
      <div
        className="absolute left-1/2 top-[18%] h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.28 }}
      />
      {/* silhouette */}
      <svg
        viewBox="0 0 200 240"
        className="absolute bottom-0 left-1/2 h-[62%] w-auto -translate-x-1/2"
        fill="none"
      >
        <defs>
          <linearGradient id={`sil-${member.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.55" />
            <stop offset="1" stopColor={accent} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="70" r="42" fill={`url(#sil-${member.id})`} />
        <path
          d="M18 240c0-49 37-86 82-86s82 37 82 86z"
          fill={`url(#sil-${member.id})`}
        />
      </svg>
      {/* initials */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-6xl font-bold tracking-tight text-white/90 sm:text-7xl"
          style={{ textShadow: `0 0 32px ${accent}88` }}
        >
          {member.initials}
        </span>
      </div>
      {/* vignette + bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
    </div>
  )
}
