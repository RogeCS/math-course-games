import React from "react";
import ScrollToTop from "../code/scrollToTop";
import Slider from "@material-ui/core/Slider";
import BarChart from "../components/charts/BarChart.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import eq1 from "../assets/static/equations/equation.svg";
import eq2 from "../assets/static/equations/equation2.svg";
import eq3 from "../assets/static/equations/equation3.svg";
import eq4 from "../assets/static/equations/equation4.svg";
import eq5 from "../assets/static/equations/equation5.svg";

import "../assets/styles/containers/Course.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "98%",
    margin: "40px auto 10px auto",
  },
}));

const marks = [
  {
    value: -5,
    label: "-5",
  },
  {
    value: 5,
    label: "5",
  },
];

function valuetext(value) {
  return `${value}`;
}

const Course = () => {
  ScrollToTop();
  const classes = useStyles();
  const [val, setVal] = React.useState(0);

  const handleChange = (event, value) => {
    setVal(value);
  };

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
          <BarChart c={val} />
          <div className={classes.root}>
            <Slider
              min={-5}
              max={5}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={1}
              marks={marks}
              valueLabelDisplay="on"
              onChange={handleChange}
            />
          </div>
          <p>c={val}</p>
        </section>
      </div>
    </div>
  );
};

export default Course;
