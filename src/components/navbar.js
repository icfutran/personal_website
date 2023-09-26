import * as React from "react";
import { useEffect } from "react";
import { Link } from "gatsby";
import ProjectContext from "../store.js";
import "./navbar.css";

const NavBar = () => {
  const { filter, setFilter } = React.useContext(ProjectContext);

  useEffect(() => {
    let windowScrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
      clearTimeout(windowScrollTimeout);
    }, 1);
  }, []);

  return (
    <div class="navbar-container">
      <div class="navbar-left">
        <Link to="/">ita futran</Link>
      </div>
      <div class="navbar-right">
        <Link to="/" class="nav-link">
          home
        </Link>
        <Link to="/about" class="nav-link" onClick={() => setFilter("all")}>
          about
        </Link>
        <Link to="/projects" class="nav-link" onClick={() => setFilter("all")}>
          projects
        </Link>
        <button class="resume-button">resume</button>
      </div>
    </div>
  );
};

export default NavBar;
