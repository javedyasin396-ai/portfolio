import { Download } from 'lucide-react'
import { site } from '@/config/site'
import { heroBadges } from '@/config/skills'

export default function Hero() {
  return (
    <section id="top" className="glow">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <p className="label fade-up">{site.role} · {site.location}</p>

        <h1 className="fade-up delay-1 mt-8 font-serif text-[clamp(3.4rem,12vw,8rem)] font-black leading-[0.95] tracking-[-0.03em]">
          Javed
          <br />
          <em className="font-serif font-normal italic text-accent">Yasin</em>
        </h1>

        <p className="fade-up delay-2 mt-10 max-w-xl text-lg leading-relaxed text-label sm:text-xl">{site.intro}</p>

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
            See my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
          {site.cvPath && (
            <a href={site.cvPath} download className="btn btn-ghost">
              <Download size={16} aria-hidden /> Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
