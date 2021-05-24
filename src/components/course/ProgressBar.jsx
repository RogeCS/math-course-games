import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/course-preview/ProgressBar.scss";
const ProgressBar = ({ num }) => {
  return (
    <div className="progressBar__container">
      <div className="progressBar-wrapper">
        <div className="progressBar"> </div>
        <Link
          to="/course"
          className={num == 0 ? "circle active" : "circle"}
        ></Link>
        <Link
          to="/course1-1"
          className={num == 1 ? "circle active" : "circle"}
        ></Link>
        <Link to="/in-development" className="circle"></Link>
        <Link to="/in-development" className="circle"></Link>
        <Link to="/in-development" className="circle"></Link>
        <Link to="/in-development" className="circle"></Link>
        <Link to="/in-development" className="circle"></Link>
        <Link to="/in-development" className="circle"></Link>
      </div>
    </div>
  );
};

export default ProgressBar;
