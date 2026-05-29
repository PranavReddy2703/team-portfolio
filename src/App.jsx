import { motion } from 'framer-motion'
import { usePointerSpotlight } from './hooks/usePointerSpotlight'
import { Backdrop } from './components/background/Backdrop'
import { Spotlight } from './components/background/Spotlight'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TeamShowcase } from './components/TeamShowcase'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Footer } from './components/Footer'

export default function App() {
  usePointerSpotlight()

  return (
    <>
      <Backdrop />
      <Spotlight />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Hero />
        <TeamShowcase />
        <About />
        <Projects />
        <TechStack />
      </motion.main>

      <Footer />
    </>
  )
}
