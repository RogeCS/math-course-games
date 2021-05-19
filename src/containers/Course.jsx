import React from "react";
import ScrollToTop from "../code/scrollToTop";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import eq1 from "../assets/static/equations/equation.svg";
import eq2 from "../assets/static/equations/equation2.svg";
import eq3 from "../assets/static/equations/equation3.svg";
import eq4 from "../assets/static/equations/equation4.svg";
import eq5 from "../assets/static/equations/equation5.svg";

import "../assets/styles/containers/Course.scss";

const Course = () => {
  ScrollToTop();
  return (
    <div className="specific-course">
      <div className="specific-course__container">
        <Link to="/courses" className="course-exit-icon">
          <FaArrowLeft />
          <p>Salir</p>
        </Link>
        <section className="course-content__container">
          <div className="course-content-wrap">
            <h2>Cálculo básico</h2>
            <h1>Traslación de funciones</h1>
            <p>
              En muchas ocasiones será necesario generar nuevas funciones a
              partir de alguna que ya conocemos. Es aquí donde el tema de
              traslación de funciones toma lugar.
            </p>
            <p>
              Por ejemplo si queremos desplazar la gráfica de una ecuación hacia
              la derecha, hacia la izquierda, hacia arriba o hacia abajo ¿Cómo
              le hacemos?.
            </p>
            <p>
              Empecemos con algo sencillo, si quremos aumentar el valor de una
              variable 'y' simplemente le tenemos que sumar una constante 'c'.
            </p>
            <div className="equation-wrap">
              <img src={eq1} alt="" />
              <img src={eq2} alt="" />
            </div>
            <p>
              En el caso de una función, simplemente tenemos que sumar una
              constante a nuestra función y la misma subirá en el eje 'y'. Lo
              mismo sería si queremos bajarla, en este caso tendríamos que
              restarle una constante 'c'.
            </p>
            <div className="equation-wrap">
              <img src={eq3} alt="" />
              <img src={eq4} alt="" />
              <img src={eq5} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Course;
