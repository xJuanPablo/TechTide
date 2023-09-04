import NavBar from "./components/navbar";
import Home from "./components/Home";
import { Links } from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
    <NavBar/>
    <Home />
    <About />
    <Portfolio />
    
    <Links />
    </div>
  );
}

export default App;
