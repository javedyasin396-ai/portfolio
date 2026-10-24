import Section from './Section'
import { services } from '@/config/profile'

export default function Services() {
  return (
    <Section id="services" label="Services" heading="How I can help">
      <ul className="grid gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-2">
        {services.map((s) => (
          <li key={s.title} className="bg-card p-7 sm:p-8">
            <h3 className="font-serif text-xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-label">{s.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
