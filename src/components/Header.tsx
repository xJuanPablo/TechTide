import { useTheme } from "../hooks/useTheme";
import { NavLinks } from "../data/NavLinks";
import { useToggle } from "../hooks/useToggle";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const {isOpen: isMenuActive, toggle: toggleMenu} = useToggle()

  return (
    <header className="pt-3 pb-2 mb-3 shadow fixed-top">
      <div className="container">
        <div className="d-flex justify-content-around">
          <h1 className="mb-0 caprasimo-regular">TechTide</h1>
          <nav className="d-none d-md-flex">
            <ul className=" d-flex list-unstyled mb-0 align-items-center">
              {NavLinks.map((link, index) => (
                <li key={index} className="mx-3">
                  <a href={link.url} className="text-decoration-none fw-bold">
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
          </nav>
          <div className="d-flex d-md-none justify-content-end">
            <button className="bg-transparent border-0 d-flex align-items-center" onClick={toggleMenu}>
              <div id="TT-menu-icon" className={`${isMenuActive ? "active" : ""}`}>
                <div className="TT-bar-1"></div>
                <div className="TT-bar-2"></div>
                <div className="TT-bar-3"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      { isMenuActive && <MobileMenu/>}
    </header>
  )
}

export default Header;