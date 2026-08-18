import { deployedProjects, developmentProjects } from '../data/projects'
import Reveal from '../components/shared/Reveal'
import ProjectCard from '../components/shared/ProjectCard'

export default function Projects() {
  return (
    <>
      <Reveal>
        <div className="section-head">
          <h2>Deployed — live</h2>
          <div className="count neu-in">{deployedProjects.length} services running</div>
        </div>
        <div className="board">
          {deployedProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="section-head">
          <h2>In development</h2>
          <div className="count neu-in">{developmentProjects.length} on GitHub</div>
        </div>
        <p className="section-intro">Shipped to GitHub, not deployed yet — actively being built or explored.</p>
        <div className="board">
          {developmentProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </Reveal>
    </>
  )
}
