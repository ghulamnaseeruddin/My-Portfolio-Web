import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import Journey from './pages/Journey'
import Projects from './pages/Projects'
import Craft from './pages/Craft'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  )
}

export default App
