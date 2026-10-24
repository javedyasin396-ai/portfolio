import { Download, ArrowDown } from 'lucide-react'
import Button from './Button'
import { site } from '@/config/site'
import { heroBadges } from '@/config/skills'

export default function Hero() {
  return (
    <section id="top" className="glow">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-20 sm:pt-28">
        <p className="fade-up mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {site.eyebrow}
        </p>
        <h1 className="fade-up delay-1 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          Building modern web experiences.
        </h1>
        <p className="fade-up delay-2 mt-6 text-lg font-medium">Hi, I’m {site.name}.</p>
        <p className="fade-up delay-2 mt-3 max-w-2xl text-lg leading-relaxed text-muted">
          I build responsive websites and practical web applications with React and Python-based
          backends. I focus on clean code, usability and software that is easy to maintain.
        </p>

        <ul className="fade-up delay-3 mt-8 flex flex-wrap gap-2" aria-label="Main technologies">
          {heroBadges.map((b) => (
            <li key={b} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
              {b}
            </li>
          ))}
        </ul>

        <div className="fade-up delay-3 mt-10 flex flex-wrap gap-3">
          <Button href="#projects">View projects</Button>
          <Button href="#contact" variant="secondary">
            Contact me
          </Button>
          {site.cvPath && (
            <Button href={site.cvPath} variant="secondary" download>
              <Download size={16} aria-hidden /> Download CV
            </Button>
          )}
          {site.github && (
            <Button href={site.github} variant="secondary" external>
              GitHub
            </Button>
          )}
        </div>

        <a href="#about" aria-label="Scroll to About section" className="mt-16 inline-flex text-muted hover:text-accent">
          <ArrowDown size={22} aria-hidden />
        </a>
      </div>
    </section>
  )
}
