export interface Project {
  name: string
  description: string
  tags: string[]
  status: 'live' | 'building' | 'forked'
  url: string
}

export const deployedProjects: Project[] = [
  {
    name: 'Atheris Online Compiler',
    description:
      'Write, run, and share code in any language — instantly, in the browser. Supports every major high-level and low-level language.',
    tags: ['Online IDE', 'Multi-Language', 'Railway'],
    status: 'live',
    url: 'https://atheris-online-compiler-by-naseer-production.up.railway.app',
  },
  {
    name: 'Ludhiana VCC',
    description:
      'A full village cricket league platform — team registration, online fee payments, live fixtures, standings, and results for Season 2026.',
    tags: ['Auth', 'Payments', 'Cloudflare Workers'],
    status: 'live',
    url: 'https://ludhiana-vcc-by-ghulam-naseeruddin.ghulam-naseeruddin.workers.dev',
  },
  {
    name: "Naseer's E-commerce Store",
    description:
      'A full storefront for home & lifestyle goods — category browsing, product pages, ratings, and a working cart, built for real checkout flow.',
    tags: ['E-Commerce', 'TypeScript', 'Cloudflare Workers'],
    status: 'live',
    url: 'https://naseer-s-ecommerce-store.ghulamnaseeruddin555.workers.dev',
  },
]

export const developmentProjects: Project[] = [
  {
    name: 'TaskFlow',
    description:
      'A to-do / task management app for organizing day-to-day work — pushed to GitHub, deployment in progress.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'building',
    url: 'https://github.com/ghulamnaseeruddin/taskflow',
  },
  {
    name: 'Calculator (GUI)',
    description: 'A desktop calculator with a graphical interface — the project that started it all.',
    tags: ['Python', 'GUI'],
    status: 'building',
    url: 'https://github.com/ghulamnaseeruddin/Calculator',
  },
  {
    name: 'OmniRoute',
    description:
      'Forked and explored — a free MIT-licensed AI gateway routing one endpoint across 290+ providers and 500+ models.',
    tags: ['AI Gateway', 'MCP'],
    status: 'forked',
    url: 'https://github.com/ghulamnaseeruddin/OmniRoute',
  },
]
