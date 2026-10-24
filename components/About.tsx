import Section from './Section'
import { site } from '@/config/site'

export default function About() {
  return (
    <Section id="about" label="About" heading="A little about me">
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-label">
          {site.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="self-start rounded-[3px] border border-border bg-card">
          {site.about.facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 border-b border-border p-5 last:border-b-0 sm:flex-row sm:gap-6">
              <dt className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted sm:w-28 sm:pt-1">
                {f.label}
              </dt>
              <dd className="text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
