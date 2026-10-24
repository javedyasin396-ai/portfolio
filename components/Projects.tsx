'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Code2 } from 'lucide-react'
import Section from './Section'
import { categories, type Project } from '@/config/projects'

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>('All')

  const filters = useMemo(
    () => ['All', ...categories.filter((c) => projects.some((p) => p.category === c))],
    [projects],
  )
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <Section
      id="projects"
      label="Projects"
      heading="Things I’ve built"
      subtitle="A few projects with the code on GitHub."
    >
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`min-h-10 rounded-[3px] border px-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-colors ${
              active === f
                ? 'border-accent bg-accent text-[#0a0a0a]'
                : 'border-border bg-surface text-label hover:border-accent hover:text-accent-2'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.title} className="flex flex-col overflow-hidden rounded-[3px] border border-border bg-card">
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} project`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-bg text-2xl font-bold text-accent/70"
                >
                  {p.title}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-accent">{p.category}</p>
              <h3 className="mt-3 font-serif text-2xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-label">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                {p.stack.map((s) => (
                  <li key={s} className="rounded-[3px] border border-border px-2 py-1 font-mono text-[0.68rem] text-muted">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-muted">{p.year ?? ''}</span>
                <div className="flex gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary !min-h-10 !px-4 !text-[0.7rem]"
                    >
                      <ExternalLink size={14} aria-hidden /> Visit web
                      <span className="sr-only"> for {p.title} (opens in a new tab)</span>
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost !min-h-10 !px-4 !text-[0.7rem]"
                    >
                      <Code2 size={14} aria-hidden /> Code
                      <span className="sr-only"> for {p.title} (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
