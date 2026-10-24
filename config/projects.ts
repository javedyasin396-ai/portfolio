export type ProjectCategory = 'Frontend' | 'Full Stack' | 'Python / Backend' | 'AI / Automation'

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  stack: string[]
  /** Optional links. A missing link hides its button. */
  live?: string
  repo?: string
  /** Path inside /public, for example '/projects/nexora.jpg'. Missing image shows a typographic cover. */
  image?: string
  year?: number
  featured?: boolean
  /** Placeholder entries are never shown on the published site. */
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    title: 'Nexora',
    description:
      'A responsive landing page for a customer support SaaS product, built as a React and Vite single-page app.',
    category: 'Frontend',
    stack: ['React', 'Vite', 'CSS'],
    live: 'https://nexora-ai-support.netlify.app/',
    repo: 'https://github.com/javedyasin396-ai/nexora-ai-saas-landing',
    image: '/projects/nexora.jpg',
    featured: true,
  },
  {
    title: 'Django Lead Management System',
    description:
      'A Django web application for managing leads, with email notifications, the Django admin and CSV export.',
    category: 'Python / Backend',
    stack: ['Python', 'Django'],
    repo: 'https://github.com/javedyasin396-ai/Django-lead-management-system',
    image: '/projects/django-leads.png',
    featured: true,
  },
  {
    title: 'To-do App',
    description: 'A to-do list with a built-in calculator and calendar, written in plain JavaScript.',
    category: 'Frontend',
    stack: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/javedyasin396-ai/todo-app',
  },
]

export const categories: ProjectCategory[] = ['Frontend', 'Full Stack', 'Python / Backend', 'AI / Automation']
