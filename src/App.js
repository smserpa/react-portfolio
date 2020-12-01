import React, { Component } from "react";
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio";


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <AboutMe />
            <Portfolio />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
