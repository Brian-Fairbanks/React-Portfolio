import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";

function Portfolio() {
  return (
    <article className="m-0 mt-sm-3 mb-sm-3">
      <div className="container bg-light content pt-3 pb-3">
        <h2>Portfolio</h2>
        <hr />
        <div id="portfolio-well" className="row m-auto">
          {projects.map( (project, index) => {return (
            <Project
              key={index}
              imglink={project.imglink}
              alt = {project.alt}
              name={project.name}
              description={project.description}
              repoLink={project.repoLink}
              deployLink = {project.deployLink}
            />)}
          )}
        </div>
      </div>
    </article>
  )
}

export default Portfolio;