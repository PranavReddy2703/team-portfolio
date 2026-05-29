import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiBriefcase } from 'react-icons/fi'
import { team } from '../data/site'
import { SectionHeading } from './ui/SectionHeading'
import { Portrait } from './ui/Portrait'
import { Reveal } from './ui/Reveal'
import { MemberLinks, memberPrimary } from './team/MemberLinks'

const spring = { type: 'spring', stiffness: 260, damping: 26 }

function stateFor(active, i) {
  if (active === null) return { scale: 1, y: 0, z: 0, opacity: 1, filter: 'blur(0px)' }
  if (active === i) return { scale: 1.16, y: -14, z: 80, opacity: 1, filter: 'blur(0px)' }
  return { scale: 0.9, y: 10, z: -70, opacity: 0.4, filter: 'blur(5px)' }
}

/* ── Desktop: cinematic interactive row ─────────────────────────────────── */
function DesktopShowcase() {
  const [active, setActive] = useState(null)
  const current = active !== null ? team[active] : null

  return (
    <div
      className="hidden lg:block"
      onMouseLeave={() => setActive(null)}
    >
      <div className="perspective flex items-end justify-center gap-6 px-4">
        {team.map((m, i) => {
          const isActive = active === i
          return (
            <motion.button
              key={m.id}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => {
                const p = memberPrimary(m)
                if (p) window.open(p.href, p.href.startsWith('mailto') ? '_self' : '_blank')
              }}
              className="preserve-3d group relative w-56 flex-shrink-0 rounded-[1.75rem] outline-none"
              animate={stateFor(active, i)}
              transition={spring}
              style={{ zIndex: isActive ? 30 : 10 }}
            >
              {/* emerald spotlight behind active */}
              <motion.span
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-full bg-emerald-500/30 blur-3xl"
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
              <div
                className={`relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] border transition-colors duration-300 ${
                  isActive ? 'border-emerald-400/50' : 'border-white/10'
                }`}
                style={isActive ? { boxShadow: '0 0 60px -12px rgba(16,185,129,0.55)' } : undefined}
              >
                <Portrait member={m} />
                {/* glass reflection sweep */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="mt-4 text-center">
                <p className={`font-display text-base font-semibold transition-colors ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {m.short}
                </p>
                <p className="mt-0.5 text-xs leading-tight text-slate-500">{m.role}</p>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Reveal / hint panel */}
      <div className="relative mt-12 min-h-[300px]">
        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong overflow-hidden rounded-3xl p-8 shadow-glow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">
                {/* left */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-bold text-white">{current.name}</h3>
                      <p className="mt-1 text-emerald-300">{current.role}</p>
                    </div>
                    <span className="font-display text-5xl font-bold text-white/5">0{active + 1}</span>
                  </div>
                  <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{current.bio}</p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2.5 text-sm">
                    <FiBriefcase className="text-emerald-300" />
                    <span className="text-slate-300">Internship</span>
                    <span className="text-white">·</span>
                    <span className="font-medium text-emerald-200">{current.internship}</span>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {(() => {
                      const p = memberPrimary(current)
                      return p ? (
                        <a
                          href={p.href}
                          target={p.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noreferrer"
                          className="btn-primary group"
                        >
                          {p.label}
                          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : null
                    })()}
                    <MemberLinks member={current} />
                  </div>
                </div>

                {/* right */}
                <div className="md:border-l md:border-white/10 md:pl-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Skills</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {current.skills.map((s) => (
                      <span key={s} className="chip chip-accent">{s}</span>
                    ))}
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Featured Projects
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {current.featured.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 text-center"
            >
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-3xl"
              >
                ✦
              </motion.span>
              <p className="mt-3 max-w-sm text-slate-400">
                Hover a portrait to reveal their profile, skills, and featured work.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ── Mobile / tablet: stacked detail cards ──────────────────────────────── */
function MobileCard({ member, index }) {
  const p = memberPrimary(member)
  return (
    <Reveal delay={index * 0.05}>
      <article className="glass overflow-hidden rounded-3xl p-5">
        <div className="flex gap-4">
          <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10">
            <Portrait member={member} />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold leading-tight text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-emerald-300">{member.role}</p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
              <FiBriefcase className="text-emerald-400" size={12} />
              {member.internship}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{member.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.skills.map((s) => (
            <span key={s} className="chip chip-accent">{s}</span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {p && (
            <a href={p.href} target={p.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="btn-primary group text-xs">
              {p.label}
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
          <MemberLinks member={member} />
        </div>
      </article>
    </Reveal>
  )
}

export function TeamShowcase() {
  return (
    <section id="team" className="section-pad">
      <SectionHeading
        kicker="The Collective"
        title="Four minds,"
        highlight="one mission."
        subtitle="A tight-knit team of engineers and researchers building the future of intelligent software."
      />

      <div className="mt-16">
        <DesktopShowcase />
        <div className="flex flex-col gap-5 lg:hidden">
          {team.map((m, i) => (
            <MobileCard key={m.id} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
