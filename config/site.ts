/**
 * Central place for personal information. Edit values here, not in components.
 * Empty strings or null hide the related feature.
 */
export const site = {
  name: 'Javed Yasin',
  role: 'Full Stack Developer',
  eyebrow: 'Full Stack Developer • Web Engineer',
  location: 'Pakistan',
  tagline: 'Building useful software with clean code and modern technology.',
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
      'Portfolio of Javed Yasin, a Full Stack Developer from Pakistan. Explore web development projects built with Python, Django and React.',
  },

  about: {
    heading: 'Engineering web solutions with care.',
    paragraphs: [
      'I am a Full Stack Developer with 3+ years of experience building websites and web applications. I work across the front end and the back end, mainly with React and Django, and I hold a Master’s degree in Computer Science from the University of Okara.',
      'I care about clean, maintainable code, responsive interfaces and a smooth user experience. I enjoy turning real requirements into working software, and I am open to freelance projects and full-time opportunities in web development.',
    ],
    cards: [
      { title: 'Web Development', text: 'Responsive websites and interfaces with HTML, CSS, JavaScript and React.' },
      { title: 'Backend Development', text: 'Python and Django applications with databases, admin tools and REST APIs.' },
      { title: 'Education', text: 'MSCS, University of Okara.' },
      { title: 'Languages', text: 'Urdu, Punjabi and English. Learning basic German.' },
    ],
  },
}

export function whatsappUrl(): string | null {
  const digits = site.whatsappNumber.replace(/\D/g, '')
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}`
}
