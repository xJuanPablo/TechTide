import { useTheme } from "../hooks/useTheme";
import { NavLinks } from "../data/NavLinks";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="pt-4 pb-3 mb-3 shadow">
      <div className="container">
        <div className="d-flex justify-content-around">
          <h1 className="mb-0">TechTide</h1>
          <ul className="d-none d-md-flex list-unstyled mb-0 align-items-center">
            {NavLinks.map((link, index) => (
              <li key={index} className="mx-3">
                <a href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <button onClick={toggleTheme} className="border rounded bg-transparent">
              {theme === 'light' ? '🌙' : '🌤️'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;