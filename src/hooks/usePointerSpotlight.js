import { useEffect } from 'react'

/**
 * Tracks the cursor and writes --mx / --my CSS variables on <html> (throttled
 * via rAF) so a fixed spotlight layer can follow the pointer cheaply.
 */
export function usePointerSpotlight() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    const root = document.documentElement

    const onMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${e.clientX}px`)
        root.style.setProperty('--my', `${e.clientY}px`)
        frame = 0
      })
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
