import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  download?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors min-h-11'
const variants = {
  primary: 'bg-accent text-bg hover:bg-accent-strong',
  secondary: 'border border-border bg-surface text-fg hover:border-accent hover:text-accent',
}

export default function Button({ href, children, variant = 'primary', external, download }: Props) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  )
}
