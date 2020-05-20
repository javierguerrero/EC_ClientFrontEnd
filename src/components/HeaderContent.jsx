import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/HeaderContent.css";

export const HeaderContent = (props) => {
  return (
    <div className="header_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              <div className="logo_container mr-auto">
                <NavLink className="navbar-brand" to="/">
                  <div className="logo_text">Speak!</div>
                </NavLink>
              </div>
              <nav className="main_nav_contaner">
                <ul className="main_nav">
                  <li>
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/courses">
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header_content_right ml-auto text-right">
                <div className="header_search">
                  <div className="search_form_container">
                    <form
                      action="#"
                      id="search_form"
                      className="search_form trans_400"
                    >
                      <input
                        type="search"
                        className="header_search_input trans_400"
                        placeholder="Type for Search"
                        required="required"
                      />
                      <div className="search_button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Hamburger */}

                <div className="user">
                  <a href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="hamburger menu_mm">
                  <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
