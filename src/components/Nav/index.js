import React from "react";
import {Link} from "react-router-dom"

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md col-md-7 justify-content-center justify-content-md-end">
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/React-Portfolio/"} className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
          <Link to={"/React-Portfolio/portfolio"} className="nav-link active">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/React-Portfolio/contact"} className="nav-link active">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
