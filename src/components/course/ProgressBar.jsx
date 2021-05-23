import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/course-preview/ProgressBar.scss";
const ProgressBar = () => {
  return (
    <div className="progressBar__container">
      <div className="progressBar-wrapper">
        <div className="progressBar"> </div>
        <Link to="/course" className="circle active"></Link>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
