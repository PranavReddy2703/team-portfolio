import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'

export function memberPrimary(member) {
  const { portfolio, github, email } = member.links
  if (portfolio) return { href: portfolio, label: 'View Portfolio' }
  if (github) return { href: github, label: 'View GitHub' }
  if (email) return { href: `mailto:${email}`, label: 'Get in Touch' }
  return null
}

export function MemberLinks({ member, className = '' }) {
  const { github, linkedin, email, portfolio } = member.links
  const links = [
    portfolio && { Icon: FiExternalLink, href: portfolio, label: 'Portfolio' },
    github && { Icon: FiGithub, href: github, label: 'GitHub' },
    linkedin && { Icon: FiLinkedin, href: linkedin, label: 'LinkedIn' },
    email && { Icon: FiMail, href: `mailto:${email}`, label: 'Email' },
  ].filter(Boolean)

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={`${member.short} — ${label}`}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-emerald-400/40 hover:text-emerald-300"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  )
}
