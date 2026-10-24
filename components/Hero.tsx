import { Download, ArrowRight, ArrowDown } from 'lucide-react'
import { site } from '@/config/site'
import { heroBadges } from '@/config/skills'

export default function Hero() {
  return (
    <section id="top" className="glow">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <p className="label fade-up">
          <span aria-hidden className="font-mono">&gt;_</span> {site.eyebrow}
        </p>

        <h1 className="fade-up delay-1 mt-8 font-serif text-[clamp(3.6rem,13vw,8.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
          Javed
          <br />
          <em className="font-serif font-normal italic text-accent">Yasin</em>
        </h1>

        <p className="fade-up delay-2 mt-10 max-w-xl text-lg leading-relaxed text-label sm:text-xl">
          I build responsive, reliable web applications with HTML, CSS, JavaScript, React and
          Python-based backends in Django, with a focus on clean code and a smooth user experience.
        </p>

        <ul className="fade-up delay-2 mt-8 flex flex-wrap gap-2.5" aria-label="Main technologies">
          {heroBadges.map((b) => (
            <li
              key={b}
              className="rounded-[3px] border border-border bg-surface px-3 py-1.5 font-mono text-xs text-accent-2"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="fade-up delay-3 mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            View projects <ArrowRight size={16} aria-hidden />
          </a>
          {site.cvPath && (
            <a href={site.cvPath} download className="btn btn-ghost">
              <Download size={16} aria-hidden /> CV / Resume
            </a>
          )}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            GitHub
          </a>
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted hover:text-accent"
        >
          <ArrowDown size={14} aria-hidden /> Scroll down to explore
        </a>
      </div>
    </section>
  )
}
