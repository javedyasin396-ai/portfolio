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
      'Built and maintained web applications with Python, Django, React.js and JavaScript.',
      'Developed REST APIs and connected them to the front end.',
      'Worked with application databases and followed clean-code practices.',
    ],
  },
]

export const education: TimelineItem[] = [
  {
    period: '2020 – 2023',
    title: 'MSCS, Computer Science',
    place: 'University of Okara',
  },
  {
    period: '2015 – 2019',
    title: 'BSCS, Computer Science',
    place: 'Government College University Faisalabad, Sahiwal Campus',
  },
]

export const services = [
  {
    title: 'Websites',
    text: 'Responsive business and portfolio websites that load quickly and look right on phones.',
  },
  {
    title: 'Web applications',
    text: 'Django back ends with a React or template-based front end, including login, forms and admin pages.',
  },
  {
    title: 'APIs',
    text: 'REST APIs for your own apps, and connecting your site to other services.',
  },
  {
    title: 'Fixes and new features',
    text: 'Bugs, slow pages and layout problems on an existing project, or a new feature added to it.',
  },
]
