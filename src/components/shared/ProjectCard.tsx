import type { Project } from '../../data/projects'
import StatusBadge from './StatusBadge'
import TechChip from './TechChip'

export default function ProjectCard({ project }: { project: Project }) {
  const arrowLabel = project.status === 'live' ? 'visit →' : 'on GitHub →'
  return (
    <a className="row" href={project.url} target="_blank" rel="noopener noreferrer">
      <StatusBadge status={project.status} />
      <div>
        <div className="proj-name">{project.name}</div>
        <div className="proj-desc">{project.description}</div>
      </div>
      <div className="tech-tags">
        {project.tags.map((t) => (
          <TechChip key={t} label={t} />
        ))}
      </div>
      <div className="row-arrow">{arrowLabel}</div>
    </a>
  )
}
