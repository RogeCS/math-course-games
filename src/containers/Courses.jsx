import React from "react";
import ScrollToTop from "../code/scrollToTop";
import HeaderUser from "../components/HeaderUser.jsx";
import Card from "../components/course-page/Card.jsx";
import { courseCardsData as data } from "../code/courseCardsData";

import "../assets/styles/containers/Courses.scss";
const Course = () => {
  ScrollToTop();
  return (
    <div className="courses">
      <HeaderUser />
      <div className="courses__container">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
