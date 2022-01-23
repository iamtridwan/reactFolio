import Contact from "./components/Contact";
import Home from "./components/Home";
import Porfolio from "./components/Porfolio";
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";

import { useState } from "react";

function App() {
  // toogling nav height

  let [height, setHeight] = useState(0);
  const handleHieght = () => {
    if (height === 0) {
      setHeight(146);
    } else {
      setHeight(0);
    }
  };

  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <div className="logo"></div>
          <ul style={{ height: window.innerWidth > 768 ? "30px" : height }}>
            <li>
              <NavLink to="/" activeStyle={{ color: "red" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>

          {/* hamburger */}
          <div className="hambuger" onClick={handleHieght}>
            <div className="dash"></div>
            <div className="dash"></div>
            <div className="dash"></div>
          </div>
        </nav>

        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Porfolio} />
          <Route path="/contact" component={Contact} />
        </Routes>

        <footer>
          <div className="footer_left">
            <div className="logo"></div>
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Contact Me</li>
            </ul>
          </div>
          <div className="socials">
            <li>
              <a
                href="https://github.com/iamtridwan"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/iamtridwan"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedIn.com/in/tijani-ridwan"
                target="_blank"
                rel="noreferrer"
              >
                linkedIn
              </a>
            </li>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
