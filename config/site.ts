/**
 * Central place for personal information. Edit values here, not in components.
 * Empty strings or null hide the related feature.
 */
export const site = {
  name: 'Javed Yasin',
  role: 'Full Stack Developer',
  location: 'Pakistan',
  status: 'Open to freelance and full-time work',
  /** Production domain, for example https://javedyasin.dev. Set via NEXT_PUBLIC_SITE_URL. */
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? '',

  email: 'javedyasin396@gmail.com',
  github: 'https://github.com/javedyasin396-ai',
  linkedin: 'https://www.linkedin.com/in/javed-yasin-9170621a8',
  upwork: 'https://www.upwork.com/freelancers/~01ba557eb80abf554b',
  x: 'https://x.com/JavedDeveloper',

  /** Path inside /public, for example '/Javed-Yasin-CV.pdf'. Null hides the Download CV button. */
  cvPath: null as string | null,

  /** International digits only, for example '923001234567'. Empty hides WhatsApp everywhere. */
  whatsappNumber: '',
  whatsappMessage: 'Hi Javed, I found your portfolio and would like to talk.',

  /** Formspree endpoint. Empty falls back to opening the visitor's email app. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '',

  seo: {
    title: 'Javed Yasin | Full Stack Developer (Python, Django, React)',
    description:
      'Javed Yasin is a full stack developer from Pakistan. He builds websites and web applications with React and Django. See his projects and get in touch.',
  },

  intro:
    'I’m a full stack developer from Pakistan. I build websites and web applications with React and Django, from the pages you see to the database behind them.',

  about: {
    paragraphs: [
      'I’ve spent the last three years building web applications: first as a full stack developer at Itians Company, where I worked on Django back ends, REST APIs and React front ends, and alongside that on my own projects.',
      'I have a master’s degree in computer science from the University of Okara. These days I enjoy turning a rough idea into a site or app that is simple to use and easy to maintain.',
      'I’m open to freelance projects and full-time roles. If you have something in mind, I’d be happy to hear about it.',
    ],
    facts: [
      { label: 'Based in', value: 'Pakistan' },
      { label: 'Main stack', value: 'React, Django, Python, JavaScript' },
      { label: 'Education', value: 'MSCS, University of Okara' },
      { label: 'Languages', value: 'Urdu, Punjabi, English (C1), basic German' },
      { label: 'Availability', value: 'Freelance and full-time' },
    ],
  },
}

export function whatsappUrl(): string | null {
  const digits = site.whatsappNumber.replace(/\D/g, '')
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}`
}
