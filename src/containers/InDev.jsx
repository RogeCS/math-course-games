import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../assets/styles/containers/InDev.scss";
const InDev = () => {
  return (
    <div className="in-dev">
      <Link to="/courses" className="course-exit-icon">
        <FaArrowLeft />
        <p>Salir</p>
      </Link>
      <p className="in-dev-desc">Gracias por probar el preview del curso!</p>
    </div>
  );
};

export default InDev;
