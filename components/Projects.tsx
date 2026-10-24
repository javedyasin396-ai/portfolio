'use client'

import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Section from './Section'
import { categories, type Project } from '@/config/projects'

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<'All' | string>('All')

  const filters = useMemo(
    () => ['All', ...categories.filter((c) => projects.some((p) => p.category === c))],
    [projects],
  )
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <Section
      id="projects"
      label="Selected work"
      heading="Web development projects"
      subtitle="A selection of projects that show how I build and structure web applications."
    >
      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`min-h-10 rounded-full border px-4 text-sm transition-colors ${
              active === f
                ? 'border-accent bg-accent text-bg font-semibold'
                : 'border-border bg-surface text-muted hover:border-accent hover:text-fg'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2">
        {visible.map((p) => (
          <li key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
            <div
              aria-hidden
              className="flex aspect-[16/8] items-center justify-center bg-gradient-to-br from-surface-2 to-bg text-2xl font-bold tracking-tight text-accent/80"
            >
              {p.title}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs uppercase tracking-widest text-muted">
                {p.category}
                {p.year ? ` • ${p.year}` : ''}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-5 text-sm font-semibold">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline"
                  >
                    Live demo <ExternalLink size={14} aria-hidden />
                    <span className="sr-only">for {p.title} (opens in a new tab)</span>
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline"
                  >
                    Source code <ExternalLink size={14} aria-hidden />
                    <span className="sr-only">for {p.title} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
