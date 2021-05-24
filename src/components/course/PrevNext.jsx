import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../../assets/styles/components/course-preview/PrevNext.scss";

const PrevNext = ({ prev, next }) => {
  return (
    <div className="prev-next__container">
      <div className="prev-next-wrapper">
        <Link className="div" to={prev}>
          <FaAngleLeft />
          <p>Anterior</p>
        </Link>
        <Link className="div" to={next}>
          <p>Siguiente</p>
          <FaAngleRight />
        </Link>
      </div>
    </div>
  );
};

export default PrevNext;
