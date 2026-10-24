import Section, { Gold } from './Section'
import { services, process } from '@/config/profile'

export default function Services() {
  return (
    <Section
      id="services"
      label="What I do"
      heading={
        <>
          Services for your <Gold>web projects</Gold>
        </>
      }
      subtitle="From a single landing page to a complete web application, I can help you plan, build and launch."
    >
      <ul className="grid gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-2">
        {services.map((s, i) => (
          <li key={s.title} className="bg-card p-8 transition-colors hover:bg-surface">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-3 font-serif text-2xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-label">{s.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-muted">How I work</h3>
      <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <li key={p.step} className="border-t border-accent/60 pt-4">
            <span className="font-mono text-xs text-accent">{p.step}</span>
            <h4 className="mt-2 font-serif text-xl font-bold">{p.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-label">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
