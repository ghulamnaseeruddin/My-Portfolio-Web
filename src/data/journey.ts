export interface JourneyItem {
  tag: string
  title: string
  description: string
}

export const journey: JourneyItem[] = [
  {
    tag: 'Getting started',
    title: 'First lines of code',
    description:
      'Started with Python fundamentals and built a GUI Calculator — a small project, but the one that proved code could become something you actually use.',
  },
  {
    tag: 'Building habits',
    title: 'TaskFlow — first real app',
    description:
      'Moved into full front-end territory with a to-do list app, learning how state, UI, and user interaction actually fit together in a browser.',
  },
  {
    tag: 'Going full-stack',
    title: 'Databases, APIs, and the backend',
    description:
      'Picked up PostgreSQL, REST APIs, and FastAPI — the layer that turns a front-end into a real product with real data behind it.',
  },
  {
    tag: 'Shipping to production',
    title: 'Atheris, Ludhiana VCC & the e-commerce store',
    description:
      'Took three projects all the way to production — a multi-language online compiler, a full league-management platform with payments, and a working storefront with cart — deployed on Cloudflare and Railway.',
  },
  {
    tag: 'Right now',
    title: 'AI, ML & the cloud',
    description:
      'Exploring AI/ML tooling (including forking and studying projects like OmniRoute) while deepening cloud deployment skills across Vercel, Render, and Google Cloud.',
  },
]
