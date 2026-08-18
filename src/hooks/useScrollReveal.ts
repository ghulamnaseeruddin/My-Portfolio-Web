import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setInView(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  return { ref, inView }
}
