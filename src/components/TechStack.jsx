import { motion } from 'framer-motion'
import { techStack } from '../data/site'
import { SectionHeading } from './ui/SectionHeading'
import { TechIcon } from './ui/TechIcon'

export function TechStack() {
  return (
    <section id="tech" className="section-pad">
      <SectionHeading
        kicker="Our Toolbox"
        title="The stack behind"
        highlight="the magic."
        subtitle="Languages, frameworks, and platforms we reach for to take ideas from notebook to production."
      />

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <div
              className="flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 backdrop-blur-xl transition-colors duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/[0.06]"
              style={{ animationDelay: `${(i % 6) * 0.6}s`, animationDuration: `${6 + (i % 4)}s` }}
            >
              <TechIcon
                name={tech.icon}
                className="text-2xl text-slate-400 transition-colors duration-300 group-hover:text-emerald-300"
              />
              <span className="font-medium text-slate-200 group-hover:text-white">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
