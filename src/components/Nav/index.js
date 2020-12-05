import React from "react";
import { NavLink } from "react-router-dom";
import Resume from "./resume.pdf";
import "./styles.css";

function Nav() {
  return (
    <div className="container p-0" fluid={true}>
      <nav className="navbar navbar-dark fixed-top d-flex" expand="lg">
        <NavLink className="navbar-brand" to="/" style={{ textShadow: "1px 1px black"}} >
          {" "}
          Stefanie Serpa
        </NavLink>

        <div className="navbar navbar-right" aria-controls="navbar-toggle" id="navbar-toggle">
          <ul className="navbar nav d-flex">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/about" style={{color: "white", textShadow: "1px 1px black"}}>
            About
          </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/contact" style={{color: "white", textShadow: "1px 1px black"}}>
            Contact
          </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/portfolio" style={{color: "white", textShadow: "1px 1px black"}}>
            Portfolio
          </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/resume" href={Resume} target="_blank" style={{color: "white", textShadow: "1px 1px black"}} rel="noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
