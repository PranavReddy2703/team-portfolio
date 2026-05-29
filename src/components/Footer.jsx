import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { Logo } from './ui/Logo'

const SOCIALS = [
  { Icon: FiGithub, href: socials.github, label: 'GitHub' },
  { Icon: FiLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { Icon: FiMail, href: `mailto:${socials.email}`, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_auto]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {brand.tagline}. Building intelligent solutions for a smarter tomorrow.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 content-start">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-slate-400 transition-colors hover:text-emerald-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <a href="#home" className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white">
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved.</p>
          <p>Designed & built by the collective · B.Tech CSE (Data Science)</p>
        </div>
      </div>
    </footer>
  )
}
