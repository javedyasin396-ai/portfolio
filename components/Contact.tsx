import { Mail, MapPin, MessageCircle } from 'lucide-react'
import Section from './Section'
import ContactForm from './ContactForm'
import { site, whatsappUrl } from '@/config/site'

const linkClass = 'inline-flex min-h-11 items-center gap-3 text-muted hover:text-accent'

export default function Contact() {
  const wa = whatsappUrl()
  return (
    <Section
      id="contact"
      label="Get in touch"
      heading="Let’s build something great together."
      subtitle="Have a project idea or an opportunity to discuss? Send a message and I will get back to you."
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-1">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              <Mail size={18} aria-hidden /> {site.email}
            </a>
          </li>
          {wa && (
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <MessageCircle size={18} aria-hidden /> WhatsApp
              </a>
            </li>
          )}
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.upwork} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Upwork
            </a>
          </li>
          <li className="flex min-h-11 items-center gap-3 text-muted">
            <MapPin size={18} aria-hidden /> {site.location}
          </li>
        </ul>
        <ContactForm />
      </div>
    </Section>
  )
}
