import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from '../../lib/ThemeContext'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../shared/ScrollProgress'
import CursorGlow from '../shared/CursorGlow'

export default function PageLayout({ children }: { children: ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ThemeProvider>
      <div id="top">
        <ScrollProgress />
        <CursorGlow />
        <div className="scene">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <Navbar />
        <main className="wrap page-main">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
