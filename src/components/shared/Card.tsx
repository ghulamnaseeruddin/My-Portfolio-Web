import type { ReactNode } from 'react'

export default function Card({ children, className = '', inset = false }: { children: ReactNode; className?: string; inset?: boolean }) {
  return <div className={`${inset ? 'neu-in' : 'neu-out'} ${className}`}>{children}</div>
}
