import React from "react";
import "./style.css"
import profile from "./profile.jpeg";

function AboutMe() {
    return (
            <div className="container" id="aboutme">
                <h2 id="about-header" >About Me</h2>
                <div className="row">
                    <div className="col">
                        <img id="profile-img" className="img-thumbnail" src={profile} alt="Profile" />
                        <h4 id="about-name" >Stefanie Serpa</h4> <br />
                        <h5 id="about-title" >Full-Stack Web Developer</h5> <br />
                        <div className="col-md-8 mx-auto text-center">
                        <p>Full-Stack web developer educated at UC San Diego Extension Coding Bootcamp that is passionate about problem-solving, data-analysis, and design. Continuously expanding my technical skills, I enjoy tackling challenges with innovative ideas and collaborating with other developers. My aptitude in dynamic web technologies, in conjunction with a determination for quality assurance and effective communication skills, has positioned me well to produce engaging, user-friendly platforms and web applications.</p>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default AboutMe;