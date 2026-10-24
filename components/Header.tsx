'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/config/site'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const navLink = 'text-[0.8rem] uppercase tracking-[0.16em] text-label transition-colors hover:text-accent-2'

export default function Header() {
  const [open, setOpen] = useState(false)
  const wa = whatsappUrl()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const ctaHref = wa ?? '#contact'
  const ctaProps = wa ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-2xl font-bold tracking-tight text-accent-2">
          Javed<em className="italic text-accent">Yasin</em>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={navLink}>
              {n.label}
            </a>
          ))}
          <a href={ctaHref} {...ctaProps} className="btn btn-primary !min-h-10 !px-5 !text-[0.75rem]">
            {wa ? <MessageCircle size={15} aria-hidden /> : null}
            {wa ? 'WhatsApp' : 'Hire me'}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 bg-bg lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className={`block min-h-11 py-3 ${navLink}`}>
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={ctaHref} onClick={() => setOpen(false)} {...ctaProps} className="btn btn-primary w-full">
                {wa ? 'WhatsApp' : 'Hire me'}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
