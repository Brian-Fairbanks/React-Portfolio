import React from "react";

function Project({imglink, name, description, repoLink, deployLink, alt}) {

  return (
    <div className="col-sm-12 col-md-6 col-xl-4 p-3">
      <div className="card h-100 shadow">
        <div className="port-card card-img-top p-0 m-0">
          <div style={ {height:"200px"} } className="w-100 verflow-hidden">
            <img className="img-fluid w-100" src={imglink}
              alt={alt}/>
          </div>
          <div className="port-text position-relative text-center text-light shadow-sm">
            {name}
          </div>
        </div>
        <div className="card-body">
          {description}
        </div>
        <div className="card-footer text-center brown text-light">
          <a target="_blank" href={repoLink}>GitHub Repository</a> | 
          <a target="_blank" href={deployLink}> Deployed Link</a>
        </div>
      </div>
    </div>
  )
}

export default Project;