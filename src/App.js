import Contact from "./components/Contact";
import Home from "./components/Home";
import Porfolio from "./components/Porfolio";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg>
          </li>
        </Link>
        <Link to="portfolio">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
          </li>
        </Link>
        <Link to="contact">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
            </svg>
          </li>
        </Link>
      </nav>

      <section>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
