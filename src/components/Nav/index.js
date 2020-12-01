import { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="container p-0" fluid={true}>
          <div className="navbar border-bottom" bg="transparent" expand="lg">
            <div className="navbar" aria-controls="navbar-toggle" />
            <div className="navbar" id="navbar-toggle">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Nav;
