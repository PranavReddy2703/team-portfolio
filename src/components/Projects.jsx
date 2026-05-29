import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { projects, team } from '../data/site'
import { SectionHeading } from './ui/SectionHeading'

const memberMap = Object.fromEntries(team.map((m) => [m.id, m]))

const filters = [{ id: 'all', label: 'All' }, ...team.map((m) => ({ id: m.id, label: m.short }))]

export function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.member === filter)),
    [filter],
  )

  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        kicker="Selected Work"
        title="Projects that"
        highlight="ship & scale."
        subtitle="From real-time telemetry dashboards to multimodal AI — a cross-section of what the collective builds."
      />

      {/* Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              filter === f.id
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <motion.div
        key={filter}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        <AnimatePresence>
          {visible.map((p, i) => {
            const m = memberMap[p.member]
            return (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                className="group relative block break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/30"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-emerald-500/0 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/15" />

                <div className="relative flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                  {p.featured && (
                    <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                      <FiStar size={10} /> Featured
                    </span>
                  )}
                </div>

                <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                    <span
                      className="grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold text-ink-950"
                      style={{ background: m.accent }}
                    >
                      {m.initials}
                    </span>
                    {m.short}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {m.links.github && (
                      <a
                        href={m.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} code`}
                        className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                      >
                        <FiGithub size={14} />
                      </a>
                    )}
                    {m.links.portfolio && (
                      <a
                        href={m.links.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} live demo`}
                        className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                      >
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
