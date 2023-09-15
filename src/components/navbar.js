import * as React from "react";
import { Link } from "gatsby";
import "./navbar.css";

const NavBar = () => {
  return (
    <div class="navbar-container">
      <div class="left">
        <Link to="/">ita futran</Link>
      </div>
      <div class="right">
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <button>resume</button>
      </div>
    </div>
  );
};

export default NavBar;
