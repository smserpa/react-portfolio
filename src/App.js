import React, { Component } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container p-0">
        <Nav />
        <HomePage />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
      
    );
  }
}

export default App;
