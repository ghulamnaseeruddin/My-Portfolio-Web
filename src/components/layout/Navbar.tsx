import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import ThemeToggle from '../shared/ThemeToggle'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-mark">
          <span className="pulse-dot" /> OPEN TO WORK
        </div>
        <nav className="links">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
