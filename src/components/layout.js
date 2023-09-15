import * as React from "react";
import { Link } from "gatsby";
import NavBar from "./navbar.js";
import "./layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      {/* <NavBar /> */}
      <div class="layout-container">
        <NavBar />
        <h1>{pageTitle}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
