import React from "react";
import "./style.css"

function AboutMe() {
    return (
        <section className="bg-light">
            <div className="container">
                <h2>About Me</h2>
                <div className="row">
                    <div className="col">
                        <img id="profile-img" className="img-thumbnail" src="assets/images/profile-img.jpeg" alt="Profile" />
                        <h4>Stefanie Serpa</h4>
                        <h5>Full-Stack Web Developer</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutMe;