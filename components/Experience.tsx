import Section from './Section'
import { experience, education, type TimelineItem } from '@/config/profile'

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-muted">{title}</h3>
      <ol className="mt-6 space-y-8 border-l border-border pl-7">
        {items.map((it) => (
          <li key={it.title} className="relative">
            <span aria-hidden className="absolute -left-[2.05rem] top-1.5 size-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-accent">{it.period}</p>
            <h4 className="mt-2 font-serif text-xl font-bold leading-snug">{it.title}</h4>
            <p className="mt-1 text-label">{it.place}</p>
            {it.points && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-label marker:text-accent">
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" label="Background" heading="Experience and education">
      <div className="grid gap-14 lg:grid-cols-2">
        <Timeline title="Experience" items={experience} />
        <Timeline title="Education" items={education} />
      </div>
    </Section>
  )
}
