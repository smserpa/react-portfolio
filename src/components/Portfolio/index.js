import React from "react";
import projects from "../../projects.json";

function Portfolio() {
  return (
    <div id="porfolio-container" className="container">
      <div className="row p-2">
        {projects.map((project) => {
          return (
            <div className="col-md-4 col-xs-8">
              <div
                className="card"
                id={project.id}
                tableIndex={-1}
                key={project.id}
              >
                <div className="card-header" id="heading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    ></button>
                  </h5>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body"></div>
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
