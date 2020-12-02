import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutMe from "../AboutMe";
import HomePage from "../HomePage";
import Portfolio from "../Portfolio";
import "./styles.css";

class Nav extends Component {

  
  render() {
    return (
      <Router>
        <div className="container p-0" fluid={true}>
          <div className="navbar navbar-dark border-bottom " expand="lg">
          <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  Stefanie Serpa
                </Link>
              </div>
            <div className="navbar" aria-controls="navbar-toggle" />
            <div className="navbar navbar-right" id="navbar-toggle">
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
