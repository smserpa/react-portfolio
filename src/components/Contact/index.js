import React from "react";
import "./styles.css";

function Contact() {
  return (
    <div className="container pt-5 pb-5 mt-5">
      <h2 id="contact-header">Contact</h2>
      <div id="contact-body" className="row justify-content-center pt-5 pb-5 mt-5 mb-5">
      <div className="col-md-2 col-sm-1">
      <p>Name:</p>
      <p>Location:</p>
      <p>Education:</p>
      <p>Email:</p>
      <p>GitHub:</p>
      <p>LinkedIn:</p>
      </div>
      <div className="col-md-8 col-sm-9 text-left">
        <p>Stefanie Serpa</p>
        <p>San Diego, CA</p>
        <p>Full Stack Web Development Bootcamp, UCSD Extension</p>
        <address><a className="contact-links" href="mailto:smserpa@gmail.com">smserpa@gmail.com</a></address>
        <p><a className="contact-links" href="https://github.com/smserpa">GitHub</a></p>
        <p><a className="contact-links" href="https://www.linkedin.com/in/stefanie-serpa-57993610b/">LinkedIn</a></p>
      </div>
      </div>
    </div>
  )

}

export default Contact;