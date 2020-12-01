import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
        {title: "Portfolio", path: "/portfolio"}
      ],
    }
  }
  render() {
    return (

        <div className="container-wrap p-0">
          <Nav />
          <Home />
          <AboutMe />
          <Portfolio />
        </div>
    )
  }
}

export default App;
