import { craftPrinciples, skills } from '../data/craft'
import Reveal from '../components/shared/Reveal'

export default function Craft() {
  return (
    <>
      <Reveal>
        <div className="section-head">
          <h2>Craft</h2>
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
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <div className="about-card neu-in">
            <p>
              <strong>I'm a Software Engineer and full-stack builder</strong> working across Python and the web —
              from backend APIs and databases to the interfaces people actually touch. My projects range from a
              multi-language online compiler to a real e-commerce storefront and a full league-management platform,
              each one built, deployed, and running in production rather than left as a demo.
            </p>
            <p>
              I'm especially drawn to <strong>AI and machine learning</strong>, and I build with an eye toward the
              cloud — deploying on Cloudflare, Vercel, Railway, Render, and Google Cloud depending on what a project
              needs. I care about shipping things that work end-to-end: real auth, real payments, real data, not
              just a polished front page.
            </p>
          </div>
          <div className="skill-cloud">
            {[...skills.languages, ...skills.backend, ...skills.tooling, ...skills.cloud].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  )
}
