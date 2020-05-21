import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <article className="m-0 mt-sm-3 mb-sm-3">
      <div className="container bg-light content pt-3 pb-3">
        <h2>Portfolio</h2>
        <hr />
        <div id="portfolio-well" className="row m-auto">
          <Project/>
        </div>
      </div>
    </article>
  )
}

export default Portfolio;