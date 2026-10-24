import { ArrowUp } from 'lucide-react'
import { site, whatsappUrl } from '@/config/site'

export default function Footer() {
  const wa = whatsappUrl()
  const link = 'text-sm text-label transition-colors hover:text-accent-2'
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl font-bold text-accent-2">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp</a>}
          <a href="#contact" className={link}>Contact</a>
          <a href="#top" className={`${link} inline-flex items-center gap-1`}>
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </nav>
      </div>
    </footer>
  )
}
