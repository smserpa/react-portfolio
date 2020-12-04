import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
    <div className="container p-0" fluid={true}>
      <nav className="navbar navbar-dark fixed-top d-flex" expand="lg">
        <NavLink className="navbar-brand" to="/">
          {" "}
          Stefanie Serpa
        </NavLink>

        <div className="navbar navbar-right" aria-controls="navbar-toggle" id="navbar-toggle">
          <ul className="navbar nav d-flex">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/about" style={{color: "white"}}>
            About
          </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/contact" style={{color: "white"}}>
            Contact
          </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/portfolio" style={{color: "white"}}>
            Portfolio
          </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/resume.pdf" href={process.env.PUBLIC_URL + "/resume.pdf"} target="blank" style={{color: "white"}} rel="noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
