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
    title: 'TaskFlow',
    description:
      'A task manager with a Django REST Framework API and a React front end. Users sign up, add tasks with a priority and due date, search and filter them, and see a summary.',
    category: 'Full Stack',
    stack: ['Django', 'REST Framework', 'React', 'Vite', 'SQLite'],
    year: 2026,
    featured: true,
  },
  {
    title: 'ClientDesk',
    description:
      'A Django app for freelancers to manage clients and invoices. It supports line items, a dashboard of paid and overdue amounts, status filters and CSV export.',
    category: 'Full Stack',
    stack: ['Python', 'Django', 'Bootstrap', 'SQLite'],
    year: 2026,
    featured: true,
  },
  {
    title: 'Nexora',
    description:
      'A landing page for a customer support SaaS product, built with React and Vite. It has features, pricing and FAQ sections and works on phones.',
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
      'A Django app for collecting and managing leads. It sends email notifications, uses the Django admin and can export leads to CSV.',
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
