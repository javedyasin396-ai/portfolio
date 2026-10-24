import { ArrowUp } from 'lucide-react'
import { site, whatsappUrl } from '@/config/site'

export default function Footer() {
  const wa = whatsappUrl()
  const link = 'text-sm text-muted hover:text-accent'
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
          <p className="mt-3 text-xs text-muted">© {new Date().getFullYear()} {site.name}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp</a>}
          <a href="#contact" className={link}>Contact</a>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted hover:border-accent hover:text-accent"
          >
            <ArrowUp size={18} aria-hidden />
          </a>
        </nav>
      </div>
    </footer>
  )
}
