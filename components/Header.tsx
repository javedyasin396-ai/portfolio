'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { site, whatsappUrl } from '@/config/site'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const wa = whatsappUrl()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="text-lg font-bold tracking-tight">
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted transition-colors hover:text-fg">
              {n.label}
            </a>
          ))}
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-bg hover:bg-accent-strong"
            >
              <MessageCircle size={16} aria-hidden /> WhatsApp
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex min-h-10 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-bg hover:bg-accent-strong"
            >
              Hire me
            </a>
          )}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 bg-bg md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 py-3 text-base text-muted hover:text-fg"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={wa ?? '#contact'}
                onClick={() => setOpen(false)}
                {...(wa ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center font-semibold text-bg"
              >
                {wa ? 'WhatsApp' : 'Hire me'}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
