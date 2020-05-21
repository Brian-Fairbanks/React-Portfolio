import React from "react";

function Project() {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4 p-3">
      <div className="card h-100 shadow">
        <div className="port-card card-img-top p-0 m-0">
          <div style={ {height:"200px"} } className="w-100 verflow-hidden">
            <img className="img-fluid w-100" src="./Assets/Projects/procTerGen.jpg"
              alt="Single chhunk of terrain, meshed, and shaded" />
          </div>
          <div className="port-text position-relative text-center text-light shadow-sm">
            Endless Terrain Generator
                              </div>
        </div>
        <div className="card-body">
          A Unity project, developed in c#, to generate a land mass mesh based on multiple passes
          of perlin noise, which will grab new chunks as needed to generate an endless terrain.
        </div>
        <div className="card-footer text-center brown text-light">
          <a target="_blank" href="https://github.com/Brian-Fairbanks/Procedural-Terrain-Test">GitHub Repository</a>
        </div>
      </div>
    </div>
  )
}

export default Project;