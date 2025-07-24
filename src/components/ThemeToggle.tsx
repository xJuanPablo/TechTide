import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="border rounded bg-transparent">
      {theme === 'light' ? '🌙' : '🌤️'}
    </button>
  )
}

export default ThemeToggle;