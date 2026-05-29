import { brand } from '../../data/site'

export function Logo({ className = '', withText = true }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label={`${brand.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center">
        <svg viewBox="0 0 32 32" className="h-9 w-9 transition-transform duration-500 group-hover:rotate-180">
          <circle cx="16" cy="16" r="11" fill="none" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1.4" />
          <circle cx="16" cy="5" r="2.6" fill="#6ee7b7" />
          <circle cx="25.5" cy="21" r="2.6" fill="#10b981" />
          <circle cx="6.5" cy="21" r="2.6" fill="#34d399" />
          <circle cx="16" cy="16" r="2.4" fill="#a7f3d0" />
        </svg>
        <span className="absolute inset-0 -z-10 rounded-full bg-emerald-500/30 blur-md transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
      </span>
      {withText && (
        <span className="font-display text-lg font-bold tracking-tight text-white">
          {brand.name}
          <span className="text-emerald-400">.</span>
        </span>
      )}
    </a>
  )
}
