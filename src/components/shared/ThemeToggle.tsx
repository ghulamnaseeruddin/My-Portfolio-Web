import { useTheme } from '../../lib/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="theme-toggle" role="group" aria-label="Theme switch">
      <button
        className={theme === 'dark' ? 'active' : ''}
        onClick={() => setTheme('dark')}
        aria-label="Dark theme"
        title="Dark theme"
      >
        ●
      </button>
      <button
        className={theme === 'light' ? 'active' : ''}
        onClick={() => setTheme('light')}
        aria-label="Light theme"
        title="Light theme"
      >
        ○
      </button>
    </div>
  )
}
