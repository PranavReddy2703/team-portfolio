import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { hero } from '../data/site'
import { FloatingShapes } from './background/FloatingShapes'

const easing = [0.22, 1, 0.36, 1]
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20"
    >
      <FloatingShapes />

      {/* Dynamic glowing logo orb */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-[30rem] w-[30rem]">
          <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-[100px] animate-glow" />
          <div className="absolute inset-12 rounded-full border border-emerald-400/10 animate-spin-slow" />
          <div className="absolute inset-24 rounded-full border border-emerald-400/[0.07] animate-spin-slow [animation-direction:reverse]" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.span variants={item} className="kicker">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-glow-sm" />
          AI · Data Science · Full Stack Engineering
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 max-w-4xl text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          {hero.heading[0]}{' '}
          <span className="text-gradient">{hero.heading[1]}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {hero.subheading}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#team" className="btn-primary group">
            View Team
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={item}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl sm:grid-cols-4"
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="bg-ink-950/40 px-5 py-6 text-center">
              <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-slate-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
