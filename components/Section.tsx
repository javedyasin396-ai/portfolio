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
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-border/70 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label">{label}</p>
        <h2
          id={`${id}-heading`}
          className="mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
        >
          {heading}
        </h2>
        {subtitle && <p className="mt-4 max-w-xl text-lg leading-relaxed text-label">{subtitle}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
