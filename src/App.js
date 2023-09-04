import NavBar from "./components/navbar";
import Home from "./components/Home";
import { Links } from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <NavBar/>
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />

    <Links />
    </div>
  );
}

export default App;
