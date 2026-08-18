import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}
