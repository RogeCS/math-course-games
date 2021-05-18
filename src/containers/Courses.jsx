import React from "react";
import ScrollToTop from "../code/scrollToTop";
import HeaderUser from "../components/HeaderUser.jsx";
import ApexChart from "../components/course-page/ApexChart.jsx";
import Card from "../components/course-page/Card.jsx";
import { courseCardsData as data } from "../code/courseCardsData";

import "../assets/styles/containers/Courses.scss";
const Course = () => {
  ScrollToTop();
  return (
    <div className="courses">
      <HeaderUser />
      <div className="courses__container">
        <div className="graph-wrapper">
          <div className="graph-content-wrap">
            <h1 className="graph-content-title">Bienvenido Nombre</h1>
            <p className="graph-content-description">
              ¡En esta gráfica podrás ver tu progreso para que puedas atacar
              esas áreas de oportunidad!
            </p>
          </div>
          <div className="chart-wrap">
            <ApexChart />
          </div>
        </div>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
