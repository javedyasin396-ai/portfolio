export type TimelineItem = {
  period: string
  title: string
  place: string
  points?: string[]
}

/** Source: CV. Edit here to update the Experience section. */
export const experience: TimelineItem[] = [
  {
    period: 'Mar 2023 – Mar 2026',
    title: 'Full Stack Developer',
    place: 'Itians Company, Pakistan',
    points: [
      'Designed, developed and maintained full-stack web applications with Python, Django, React.js and JavaScript.',
      'Built and integrated RESTful APIs and connected front-end and back-end components.',
      'Managed application databases and applied clean-code practices and modern development workflows.',
    ],
  },
]

export const education: TimelineItem[] = [
  {
    period: '2020 – 2023',
    title: 'Master of Science in Computer Science (MSCS)',
    place: 'University of Okara, Pakistan',
  },
  {
    period: '2015 – 2019',
    title: 'Bachelor of Science in Computer Science (BSCS)',
    place: 'Government College University Faisalabad, Sahiwal Campus',
  },
]

export const services = [
  {
    title: 'Responsive websites',
    text: 'Fast, mobile-friendly business and portfolio websites built with HTML, CSS, JavaScript and React.',
  },
  {
    title: 'Full-stack web apps',
    text: 'Complete applications with a Django back end, a React or template-based front end and a database.',
  },
  {
    title: 'REST API development',
    text: 'Clean, documented APIs, and integration of third-party services into your application.',
  },
  {
    title: 'Fixes and improvements',
    text: 'Bug fixing, performance and layout improvements, and new features for existing web projects.',
  },
]

export const process = [
  { step: '01', title: 'Discuss', text: 'We talk through your goals, users and deadline.' },
  { step: '02', title: 'Plan', text: 'I outline the pages, features and technology before building.' },
  { step: '03', title: 'Build', text: 'I develop in small steps and share progress for feedback.' },
  { step: '04', title: 'Launch', text: 'I test, deploy and stay available for fixes afterwards.' },
]
