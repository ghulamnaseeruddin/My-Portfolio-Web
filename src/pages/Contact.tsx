import { personal } from '../data/personal'
import { faq } from '../data/faq'
import Reveal from '../components/shared/Reveal'
import Accordion from '../components/shared/Accordion'

export default function Contact() {
  return (
    <Reveal>
      <div className="section-head">
        <h2>Connect</h2>
      </div>
      <p className="section-intro">{personal.availability}</p>

      <div className="connect-grid">
        <a className="connect-card neu-out" href={personal.github} target="_blank" rel="noopener noreferrer">
          <div className="connect-label">Code</div>
          <div className="connect-title">GitHub</div>
          <div className="connect-sub">Every repo — live, in-progress, and forked — with commit history and READMEs.</div>
          <div className="connect-cta">{personal.githubHandle} ↗</div>
        </a>
        <a className="connect-card neu-out" href={personal.instagram} target="_blank" rel="noopener noreferrer">
          <div className="connect-label">Elsewhere</div>
          <div className="connect-title">Instagram</div>
          <div className="connect-sub">Behind the scenes and day-to-day updates.</div>
          <div className="connect-cta">{personal.instagramHandle} ↗</div>
        </a>
      </div>

      <div className="contact-buttons">
        <a className="btn btn-primary" href={`mailto:${personal.email}`}>
          Send an Email ↗
        </a>
        <a className="btn" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn ↗
        </a>
        <a className="btn" href={personal.whatsapp} target="_blank" rel="noopener noreferrer">
          Message on WhatsApp ↗
        </a>
      </div>

      <Accordion items={faq} />
    </Reveal>
  )
}
