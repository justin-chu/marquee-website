import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home"
import Documentation from "./pages/Documentation/Documentation"
import Demo from "./pages/Demo/Demo"

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <nav style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 100}}>
          <ul className="nav">
            <li className="logo">
              <Link to="/" className="links">React <span style={{fontStyle: "italic"}}>FAST</span> Marquee</Link>
            </li>
            <li>
              <Link to="/documentation" className="links">Documentation</Link>
            </li>
            <li>
              <Link to="/demo" className="links">Demo</Link>
            </li>
            
            <li style={{float: "right"}}>
              <a className="website-links" href="https://yarnpkg.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                Yarn
              </a>
            </li>
            <li style={{float: "right"}}>
              <a className="website-links" href="http://npmjs.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                npm
              </a>
            </li>
            <li style={{float: "right"}}>
              <a className="website-links" href="https://github.com/justin-chu/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/documentation">
            <Documentation />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <p className="footer-text">© 2020 Justin Chu. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}