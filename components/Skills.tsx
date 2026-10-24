import Section from './Section'
import { skillGroups } from '@/config/skills'

export default function Skills() {
  const groups = skillGroups
    .map((g) => ({ ...g, skills: g.skills.filter((s) => s.enabled) }))
    .filter((g) => g.skills.length > 0)

  return (
    <Section id="skills" label="Skills" heading="What I work with" subtitle="The tools I use most often.">
      <div className="grid gap-px overflow-hidden rounded-[3px] border border-border bg-border md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="bg-card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-accent-2">{g.title}</h3>
            <ul className="mt-5 space-y-3">
              {g.skills.map((s) => (
                <li key={s.name} className="border-b border-border/60 pb-3 last:border-b-0">
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
