import type { ReactNode } from 'react'
import { Mail, MapPin, MessageCircle, Briefcase } from 'lucide-react'
import Section, { Gold } from './Section'
import ContactForm from './ContactForm'
import { site, whatsappUrl } from '@/config/site'

function Row({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex items-center gap-4">
      <span aria-hidden className="flex size-11 shrink-0 items-center justify-center rounded-[3px] border border-border bg-card text-accent">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">{label}</p>
        <div className="mt-0.5 text-base">{children}</div>
      </div>
    </li>
  )
}

const social =
  'inline-flex size-11 items-center justify-center rounded-full border border-border bg-card font-mono text-xs uppercase text-label transition-colors hover:border-accent hover:text-accent'

export default function Contact() {
  const wa = whatsappUrl()
  return (
    <Section
      id="contact"
      label="Get in touch"
      heading={
        <>
          Let’s build something <Gold>extraordinary</Gold>
        </>
      }
      subtitle="Have a project in mind or looking to hire a web developer? Send a message and I will get back to you."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <ul className="space-y-6">
            <Row icon={<Mail size={18} />} label="Email">
              <a href={`mailto:${site.email}`} className="hover:text-accent-2">
                {site.email}
              </a>
            </Row>
            {wa && (
              <Row icon={<MessageCircle size={18} />} label="WhatsApp">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-2">
                  Click to chat
                </a>
              </Row>
            )}
            <Row icon={<MapPin size={18} />} label="Location">
              {site.location}
            </Row>
            <Row icon={<Briefcase size={18} />} label="Status">
              <span className="text-accent">{site.status}</span>
            </Row>
          </ul>

          <ul className="mt-10 flex gap-3" aria-label="Social profiles">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={social}>
                GH
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={social}>
                in
              </a>
            </li>
            <li>
              <a href={site.upwork} target="_blank" rel="noopener noreferrer" aria-label="Upwork" className={social}>
                Up
              </a>
            </li>
            <li>
              <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="X" className={social}>
                X
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[3px] border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
