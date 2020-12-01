import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutMe from "../AboutMe";
import HomePage from "../HomePage";
import Portfolio from "../Portfolio";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="container p-0" fluid={true}>
          <div className="navbar border-bottom" bg="transparent" expand="lg">
          <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  Stefanie Serpa
                </Link>
              </div>
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
        <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/about" exact render={() => <AboutMe />} />
        <Route path="/portfolio" exact render={() => <Portfolio/>} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
