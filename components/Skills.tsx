import Section, { Gold } from './Section'
import { skillGroups, type SkillLevel } from '@/config/skills'

const dots: Record<SkillLevel, number> = { Core: 3, 'Working Knowledge': 2, 'Currently Exploring': 1 }

export default function Skills() {
  const skills = skillGroups.flatMap((g) =>
    g.skills.filter((s) => s.enabled).map((s) => ({ ...s, group: g.title })),
  )

  return (
    <Section
      id="skills"
      label="Technical expertise"
      heading={
        <>
          Tech stack &amp; <Gold>skills</Gold>
        </>
      }
      subtitle="Core technologies, frameworks and tools I use to build web applications."
    >
      <ul className="grid gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((s) => (
          <li key={s.name} className="flex flex-col justify-between bg-card p-5 transition-colors hover:bg-surface">
            <h3 className="font-sans text-base font-semibold leading-snug">{s.name}</h3>
            <div className="mt-6 flex items-center justify-between gap-3 text-xs">
              <span className="text-muted">{s.group}</span>
              <span className="flex items-center gap-2 font-medium text-accent">
                {s.level}
                <span aria-hidden className="flex gap-1">
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 w-3 rounded-full ${n <= dots[s.level] ? 'bg-accent' : 'bg-border'}`}
                    />
                  ))}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
