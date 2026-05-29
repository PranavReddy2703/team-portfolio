import { motion } from 'framer-motion'

/** Decorative floating geometric elements (rings, polygons) with parallax drift. */
export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-[8%] top-[18%] h-24 w-24 rounded-2xl border border-emerald-400/20"
        animate={{ y: [0, -22, 0], rotate: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 40px -10px rgba(16,185,129,0.35)' }}
      />
      <motion.div
        className="absolute right-[10%] top-[26%] h-16 w-16 rounded-full border border-emerald-300/25"
        animate={{ y: [0, 26, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[22%] bottom-[16%] h-28 w-28 rounded-full border border-emerald-400/10"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[16%] bottom-[20%] h-0 w-0"
        style={{
          borderLeft: '22px solid transparent',
          borderRight: '22px solid transparent',
          borderBottom: '38px solid rgba(16,185,129,0.12)',
        }}
        animate={{ y: [0, 20, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
