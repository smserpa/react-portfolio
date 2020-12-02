import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
    <div className="container p-0" fluid={true}>
      <nav className="navbar navbar-dark border-bottom " expand="lg">
        <NavLink className="navbar-brand" to="/">
          {" "}
          Stefanie Serpa
        </NavLink>

        <div className="navbar" aria-controls="navbar-toggle" />
        <div className="navbar navbar-right" id="navbar-toggle">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
