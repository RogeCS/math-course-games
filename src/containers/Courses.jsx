import React from "react";
import ScrollToTop from "../code/scrollToTop";
import HeaderUser from "../components/HeaderUser.jsx";
import ChartHolder from "../components/course-page/ChartHolder.jsx";
import SectionDivider from "../components/dividers/SectionDivider.jsx";
import Card from "../components/course-page/Card.jsx";
import { courseCardsData as data } from "../code/courseCardsData";

import "../assets/styles/containers/Courses.scss";
const Course = () => {
  ScrollToTop();
  return (
    <div className="courses">
      <HeaderUser />
      <div className="courses__container">
        <ChartHolder userName="Guillermo" />
        <SectionDivider heading="Añadidos recientemente" />
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
