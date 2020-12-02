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

        <div className="navbar navbar-right" aria-controls="navbar-toggle" id="navbar-toggle">
          <ul className="navbar nav d-flex">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/about">
            About
          </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="assets/images/resume.pdf" target="blank">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
