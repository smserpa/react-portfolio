import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
        <Nav />
        <Route exact path="/">
          <HomePage />
          <AboutMe />
          <Contact />
          <Portfolio />
        </Route>
        <Route exact path="/about">
          <AboutMe />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Footer />
    </HashRouter>
  );
}

export default App;
