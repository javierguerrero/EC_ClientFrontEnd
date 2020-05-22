import React from "react";
import { Link } from "react-router-dom";
import "./styles/WellcomeHome.css";

const WellcomeHome = (props) => {
  const { title } = props;
  return (
    <div className="home">
      <div className="home_background"></div>
      <div className="home_content">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="home_title">{title}</h1>
              <div className="home_button trans_200">
              <Link to={`/courses`}>get started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellcomeHome;
