import React from "react";
import ApexChart from "./ApexChart.jsx";

import "../../assets/styles/components/course-page/ChartHolder.scss";

const ChartHolder = ({ userName }) => {
  return (
    <div className="graph-wrapper">
      <div className="graph-content-wrap">
        <h1 className="graph-content-title">Bienvenido, {userName}</h1>
        <p className="graph-content-description">
          ¡En esta gráfica podrás ver tu progreso para que puedas atacar esas
          áreas de oportunidad!
        </p>
      </div>
      <div className="chart-wrap">
        <ApexChart />
      </div>
    </div>
  );
};

export default ChartHolder;
