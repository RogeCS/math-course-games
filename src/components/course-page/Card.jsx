import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/course-page/Card.scss";

const Card = ({ theme, title, desc, img, url }) => (
  <div to="/courses" className="courseCard">
    <Link to={url} className="courseCardLink">
      <div className="courseCard__container">
        <div className="courseCard-content">
          <p className="courseCard--topline">{theme}</p>
          <h1 className="courseCard--title">{title}</h1>
          <p className="courseCard--description">{desc}</p>
        </div>
        <div className="courseCard-img__wrap">
          <img className="courseCard-img" src={img} alt="" />
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
