export interface CraftPrinciple {
  icon: string
  title: string
  description: string
}

export const craftPrinciples: CraftPrinciple[] = [
  {
    icon: '◆',
    title: 'Full-Stack Web Development',
    description:
      'End-to-end builds — Python & JavaScript backends, REST/FastAPI services, and the interfaces on top. From database to deployed URL.',
  },
  {
    icon: '◇',
    title: 'AI & Machine Learning',
    description:
      'Building real-world AI-driven tools and exploring the model-serving landscape — from gateways to applied ML features inside products.',
  },
  {
    icon: '○',
    title: 'Cloud & Deployment',
    description:
      'Shipping to Cloudflare, Vercel, Railway, Render, and Google Cloud — comfortable owning a project from code to production.',
  },
]

export const skills = {
  languages: ['Python', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript'],
  backend: ['REST API', 'FastAPI', '.NET', 'PostgreSQL'],
  tooling: ['Git', 'GitHub', 'Docker', 'Flutter'],
  cloud: ['Cloudflare', 'Vercel', 'Railway', 'Render', 'Google Cloud'],
}
