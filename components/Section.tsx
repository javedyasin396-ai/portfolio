import type { ReactNode } from 'react'

type Props = {
  id: string
  label: string
  /** Heading as nodes so a phrase can be set in gold italics. */
  heading: ReactNode
  subtitle?: string
  children: ReactNode
}

export default function Section({ id, label, heading, subtitle, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-border/70 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label">{label}</p>
        <h2
          id={`${id}-heading`}
          className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
        >
          {heading}
        </h2>
        {subtitle && <p className="mt-5 max-w-xl text-lg leading-relaxed text-label">{subtitle}</p>}
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}

export function Gold({ children }: { children: ReactNode }) {
  return <em className="font-serif italic text-accent">{children}</em>
}
