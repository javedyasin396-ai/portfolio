export type SkillLevel = 'Core' | 'Working Knowledge' | 'Currently Exploring'

export type Skill = {
  name: string
  level: SkillLevel
  /** Set to true only for technologies you have confirmed. Disabled skills are never published. */
  enabled: boolean
}

export type SkillGroup = { title: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 'Core', enabled: true },
      { name: 'CSS3', level: 'Core', enabled: true },
      { name: 'JavaScript', level: 'Core', enabled: true },
      { name: 'React', level: 'Core', enabled: true },
      { name: 'Responsive design', level: 'Core', enabled: true },
      { name: 'Next.js', level: 'Currently Exploring', enabled: false },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', level: 'Core', enabled: true },
      { name: 'Django', level: 'Core', enabled: true },
      { name: 'REST APIs', level: 'Working Knowledge', enabled: true },
      { name: 'FastAPI', level: 'Currently Exploring', enabled: false },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Working Knowledge', enabled: true },
      { name: 'GitHub', level: 'Working Knowledge', enabled: true },
      { name: 'GitLab', level: 'Working Knowledge', enabled: true },
      { name: 'Docker', level: 'Working Knowledge', enabled: true },
      { name: 'Linux / Bash', level: 'Working Knowledge', enabled: true },
      { name: 'PostgreSQL', level: 'Currently Exploring', enabled: false },
      { name: 'Redis', level: 'Currently Exploring', enabled: false },
    ],
  },
]

export const heroBadges = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Python', 'Django']
