import type { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  primary?: boolean
  external?: boolean
  children: ReactNode
}

export default function Button({ href, onClick, primary, external, children }: ButtonProps) {
  const className = `btn ${primary ? 'btn-primary' : ''}`
  if (href) {
    return (
      <a className={className} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
