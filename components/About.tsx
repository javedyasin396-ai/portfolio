import { Code2, Server, GraduationCap, Languages } from 'lucide-react'
import Section from './Section'
import { site } from '@/config/site'

const icons = [Code2, Server, GraduationCap, Languages]

export default function About() {
  return (
    <Section id="about" label="About me" heading={site.about.heading}>
      <div className="grid gap-10 md:grid-cols-[auto_1fr]">
        <div
          role="img"
          aria-label="Initials JY"
          className="flex size-32 items-center justify-center rounded-2xl border border-border bg-surface-2 text-4xl font-bold text-accent"
        >
          JY
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {site.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.about.cards.map((c, i) => {
          const Icon = icons[i]
          return (
            <li key={c.title} className="rounded-2xl border border-border bg-surface p-5">
              <Icon size={22} className="text-accent" aria-hidden />
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.text}</p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
