import React from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="http://placehold.it/150x50?text=Logo" alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item"> {/* d-none */}
                <NavLink className="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
