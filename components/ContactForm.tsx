'use client'

import { useRef, useState } from 'react'
import { site } from '@/config/site'

type Fields = { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: Fields): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!emailPattern.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.subject.trim()) e.subject = 'Please enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.'
  return e
}

const field =
  'mt-2 w-full rounded-[3px] border border-border bg-bg px-4 py-3 text-base text-fg placeholder:text-muted/60 focus:border-accent'
const labelClass = 'font-mono text-[0.68rem] uppercase tracking-[0.2em] text-label'

export default function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const honeypot = useRef<HTMLInputElement>(null)
  const configured = Boolean(site.formEndpoint)

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((p) => ({ ...p, [k]: e.target.value }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return
    if (honeypot.current?.value) return // bots fill hidden fields

    if (!configured) {
      const body = `${values.message}\n\n${values.name} (${values.email})`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `Portfolio message: ${values.subject}`,
          _replyto: values.email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { success?: boolean | string }
      if (!res.ok || String(data.success) === 'false') throw new Error(`Request failed with status ${res.status}`)
      setStatus('success')
      setValues({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-[3px] border border-success/40 bg-card p-6">
        <h3 className="font-semibold text-success">Message sent</h3>
        <p className="mt-2 text-sm text-muted">Thank you. I will reply to your email address soon.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-4 text-sm font-semibold text-accent hover:underline">
          Send another message
        </button>
      </div>
    )
  }

  const describe = (k: keyof Fields) => (errors[k] ? `${k}-error` : undefined)

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Your name *</label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={set('name')}
            aria-invalid={Boolean(errors.name)} aria-describedby={describe('name')} className={field} />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-danger">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Your email *</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')}
            aria-invalid={Boolean(errors.email)} aria-describedby={describe('email')} className={field} />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-danger">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>Subject *</label>
        <input id="subject" name="subject" value={values.subject} onChange={set('subject')}
          aria-invalid={Boolean(errors.subject)} aria-describedby={describe('subject')} className={field} />
        {errors.subject && <p id="subject-error" className="mt-1 text-sm text-danger">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={set('message')}
          aria-invalid={Boolean(errors.message)} aria-describedby={describe('message')} className={field} />
        {errors.message && <p id="message-error" className="mt-1 text-sm text-danger">{errors.message}</p>}
      </div>

      <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : configured ? 'Send message' : 'Open in email app'}
      </button>

      {!configured && (
        <p className="text-sm text-muted">
          This button opens your email app with the message filled in, addressed to {site.email}.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-sm text-danger">
          The message could not be sent. Please try again, or email me directly at{' '}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
        </p>
      )}
    </form>
  )
}
