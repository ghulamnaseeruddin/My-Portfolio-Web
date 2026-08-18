import { personal } from '../../data/personal'

export default function Footer() {
  return (
    <footer className="wrap">
      <span>© 2026 {personal.name}. Built with intent.</span>
      <a className="to-top neu-in" href="#top">
        back to top ↑
      </a>
    </footer>
  )
}
