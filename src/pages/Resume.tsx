import Reveal from '../components/shared/Reveal'

export default function Resume() {
  return (
    <Reveal>
      <div className="resume-head">
        <h2>Résumé</h2>
        <button className="btn btn-primary" onClick={() => window.print()}>
          Download PDF ↓
        </button>
      </div>
      <div className="resume-card neu-out" id="resume">
        <div className="resume-inner">
          <div className="resume-col">
            <h3>Profile</h3>
            <ul>
              <li>
                <strong>Ghulam Naseeruddin</strong>Software Engineer · Full-Stack Python &amp; Web Developer · AI
                &amp; ML Developer
              </li>
              <li>
                <strong>Based in</strong>Punjab, Pakistan — open to remote work
              </li>
              <li>
                <strong>Focus</strong>Shipping real, deployed software — not demos
              </li>
            </ul>
          </div>
          <div className="resume-col">
            <h3>Skills</h3>
            <ul>
              <li>
                <strong>Languages</strong>Python, C++, Java, JavaScript, HTML/CSS
              </li>
              <li>
                <strong>Backend</strong>REST APIs, FastAPI, .NET, PostgreSQL
              </li>
              <li>
                <strong>Tooling</strong>Git, GitHub, Docker, Flutter
              </li>
              <li>
                <strong>Cloud &amp; Deploy</strong>Cloudflare, Vercel, Railway, Render, Google Cloud
              </li>
            </ul>
          </div>
          <div className="resume-col">
            <h3>Selected Work</h3>
            <ul>
              <li>
                <strong>Atheris Online Compiler</strong>Multi-language browser IDE — live on Railway
              </li>
              <li>
                <strong>Ludhiana VCC</strong>League platform with registration &amp; payments — live on Cloudflare
              </li>
              <li>
                <strong>Naseer's E-commerce Store</strong>Full storefront with cart — live on Cloudflare
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
