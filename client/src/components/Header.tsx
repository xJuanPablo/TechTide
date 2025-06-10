import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { theme, toggleTheme } = context;
  return (
    <header>
      Header
      <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  )
}

export default Header;