import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="hero-image" style={{backgroundImage: "url(/images/bg-img.jpg)"}}>
            <div className="container-fluid">
              <div className="row">
                <h1>Stefanie Serpa</h1>
                <h2>Full-Stack Web Developer</h2> 
              </div>
            </div>
      </div>
    );
  }
}
