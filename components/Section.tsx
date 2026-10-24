import type { ReactNode } from 'react'

type Props = {
  id: string
  label: string
  heading: string
  subtitle?: string
  children: ReactNode
}

export default function Section({ id, label, heading, subtitle, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{label}</p>
        <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
