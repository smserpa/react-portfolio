import React from "react";
import projects from "../../projects.json";
import "./styles.css";

function Portfolio() {
  return (
    <div id="porfolio" className="container p-5 mt-5">
      <h2 className="portfolio-header">Portfolio</h2>
      <div className="row align-items-center p-4">
        {projects.map((project) => {
          
          let collapseId = `#collapse${project.id}-collapsed`;
          let controlId = `collapse${project.id}-collapsed`;
          let headingId = `heading${project.id}-collapsed`;

          return (
            <div className="col-md-4 col-xs-12">
              <div
                className="card mt-3"
                id="image-card"
                tableIndex={-1}
                key={project.id}
              >
                <img
                  className="card-img-top"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div
                className="card mt-3"
                id="body-card"
                tableIndex={-1}
                key={project.id}
              >
                <h5 className="card-header">
                  <a
                    className="collapsed d-block"
                    data-toggle="collapse"
                    href={collapseId}
                    aria-expanded="true"
                    aria-controls={controlId}
                    id={headingId}
                  >{project.title}
                    <i className="fa fa-chevron-down pull-right"></i>
                  </a>
                </h5>
                <div
                  id={controlId}
                  className="collapse"
                  aria-labelledby={headingId}
                >
                  <div className="card-body">
                    <p className="card-text"><h4 className="project-name">Description:</h4>{project.description}</p>
                    <p className="card-text"><h4 className="project-name">Technologies Used:</h4> {project.technology} </p>
                    <a
                      href={project.deployed}
                      className="btn btn-primary m-2"
                      target="blank"
                    >
                      {" "}
                      Deployed Application{" "}
                    </a>
                    <a
                      href={project.repo}
                      className="btn btn-primary m-2"
                      target="blank"
                    >
                      {" "}
                      GitHub Repository{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
