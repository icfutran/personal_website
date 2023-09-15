import * as React from "react";
import NavBar from "./navbar.js";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div class="layout-container">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
