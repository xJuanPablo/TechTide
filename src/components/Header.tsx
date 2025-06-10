import { useTheme } from "../hooks/useTheme";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '🌤️'}
      </button>
    </header>
  )
}

export default Header;