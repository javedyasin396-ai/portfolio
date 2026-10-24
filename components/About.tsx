import Section, { Gold } from './Section'
import { site } from '@/config/site'

const codeLines: [string, string?][] = [
  ['// developer.config.js'],
  ['const developer = {'],
  [`  name: "${site.name}",`],
  [`  role: "${site.role}",`],
  ['  stack: ["React", "Django", "JS"],'],
  ['  location: "Pakistan",'],
  ['  education: "MSCS",'],
  ['  openToWork: true,'],
  ['}'],
]

export default function About() {
  return (
    <Section
      id="about"
      label="About me"
      heading={
        <>
          Engineering web solutions with <Gold>care &amp; clarity</Gold>
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <div className="space-y-5 text-lg leading-relaxed text-label">
            {site.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-4">
            {site.about.stats.map((s) => (
              <div key={s.label} className="bg-card p-5">
                <dt className="order-2 mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </dt>
                <dd className="font-serif text-3xl font-bold text-accent-2">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <span aria-hidden className="absolute -left-2 -top-2 size-10 border-l border-t border-fg/70" />
          <div className="rounded-[3px] border border-border bg-card p-6 sm:p-8">
            <div className="mb-5 flex gap-2" aria-hidden>
              <span className="size-3 rounded-full bg-border" />
              <span className="size-3 rounded-full bg-border" />
              <span className="size-3 rounded-full bg-border" />
            </div>
            <pre
              className="overflow-x-auto font-mono text-[0.85rem] leading-7 text-fg"
              aria-label="Developer profile shown as code"
            >
              {codeLines.map(([line], i) => (
                <code key={i} className={`block ${line.startsWith('//') ? 'text-muted' : ''}`}>
                  {line}
                </code>
              ))}
              <span aria-hidden className="cursor text-accent">▌</span>
            </pre>
          </div>
        </div>
      </div>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {site.about.cards.map((c) => (
          <li key={c.title} className="bg-card p-6">
            <h3 className="font-serif text-xl font-bold text-accent-2">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-label">{c.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
