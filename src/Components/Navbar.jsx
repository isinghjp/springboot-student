import React from 'react'
import {Link} from "react-router-dom";

function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Student Dashboard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/findAll">Find all Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/findbyId">Find by Id</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/update">Update Student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/delete">Delete Student</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar