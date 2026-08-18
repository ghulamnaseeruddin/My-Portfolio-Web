import { Link } from 'react-router-dom'
import { personal } from '../data/personal'
import { deployedProjects, developmentProjects } from '../data/projects'
import { craftPrinciples } from '../data/craft'
import Reveal from '../components/shared/Reveal'
import Portrait from '../components/shared/Portrait'
import ProjectCard from '../components/shared/ProjectCard'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow neu-in">Portfolio — 2026</div>
          <h1 className="name">
            Ghulam
            <br />
            Naseeruddin
            <br />
            <em>builds &amp; ships things.</em>
          </h1>
          <p className="role-line">
            <strong>{personal.title} — Full-Stack Python &amp; Web Developer</strong>, AI &amp; Machine Learning
            Developer, and Google Cloud enthusiast. {personal.tagline}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View live projects →
            </Link>
            <a className="btn" href={personal.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <Link className="btn" to="/resume">
              Résumé ↓
            </Link>
          </div>
          <div className="stat-row">
            <div className="stat neu-in">
              <div className="num">03</div>
              <div className="label">Live in prod</div>
            </div>
            <div className="stat neu-in">
              <div className="num">03</div>
              <div className="label">In development</div>
            </div>
            <div className="stat neu-in">
              <div className="num">18+</div>
              <div className="label">Tools &amp; platforms</div>
            </div>
          </div>
        </div>
        <Portrait />
      </section>

      <Reveal>
        <div className="section-head">
          <h2>What I do</h2>
        </div>
        <div className="services-grid">
          {craftPrinciples.map((p) => (
            <div className="service-card neu-out" key={p.title}>
              <div className="service-icon neu-in">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

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
