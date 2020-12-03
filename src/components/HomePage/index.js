import React from "react";
import Portfolio from "../Portfolio";
import "./styles.css";

function HomePage() {
  return (
    <header className="home-page">
      <div className="container">
      <h2 className="heading">Stefanie Serpa</h2>
      <h5 className="heading-text">Full-Stack Web Developer</h5>
      <div className="btn btn-primary" id="home-button">
      <a href="portfolio" component={Portfolio} style={{color: "black"}}>Check Out My Work</a>
        </div> 
    </div>
    </header>
    
  );
}

export default HomePage;
