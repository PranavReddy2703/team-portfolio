import { FiTarget, FiEye, FiZap, FiGitBranch, FiUsers } from 'react-icons/fi'
import { TbBrain, TbFlask } from 'react-icons/tb'
import { pillars } from '../data/site'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const ICONS = {
  target: FiTarget,
  eye: FiEye,
  bolt: FiZap,
  git: FiGitBranch,
  brain: TbBrain,
  flask: TbFlask,
  users: FiUsers,
}

const SPANS = [
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
]

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        kicker="About Us"
        title="We don't just build software —"
        highlight="we engineer intelligence."
        subtitle="A collective driven by curiosity, research, and a relentless standard for the products we ship."
      />

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = ICONS[p.icon] || FiZap
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.07} className={SPANS[i]}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]">
                {/* corner glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/0 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20" />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
                  <Icon size={22} />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="relative mt-2.5 leading-relaxed text-slate-400">{p.text}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
