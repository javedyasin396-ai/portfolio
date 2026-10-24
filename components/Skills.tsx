import Section from './Section'
import { skillGroups } from '@/config/skills'

export default function Skills() {
  const groups = skillGroups
    .map((g) => ({ ...g, skills: g.skills.filter((s) => s.enabled) }))
    .filter((g) => g.skills.length > 0)

  return (
    <Section
      id="skills"
      label="Skills"
      heading="Technical expertise"
      subtitle="Technologies and tools I use to build modern web applications."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold">{g.title}</h3>
            <ul className="mt-4 space-y-3">
              {g.skills.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-3 text-sm">
                  <span>{s.name}</span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {s.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
