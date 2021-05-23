import React from "react";
import ScrollToTop from "../code/scrollToTop";
import ProgressBar from "../components/course/ProgressBar.jsx";
import Slider from "@material-ui/core/Slider";
import ScatterChart from "../components/charts/ScatterChart.jsx";
import SectionDivider from "../components/dividers/SectionDivider.jsx";
import Questionnaire from "../components/course/Questionnaire.jsx";
import { xVector, yVector } from "../code/Vectors";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

var Latex = require("react-latex");
import "../assets/styles/containers/Course.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "40px auto 10px auto",
  },
}));

const marks = [
  {
    value: -50,
    label: "-50",
  },
  {
    value: 50,
    label: "50",
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

  let x = xVector(-30, 30, 300);
  let y = yVector(x, val, 0);

  return (
    <div className="specific-course">
      <div className="specific-course__container">
        <Link to="/courses" className="course-exit-icon">
          <FaArrowLeft />
          <p>Salir</p>
        </Link>
        <ProgressBar />
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
              Por ejemplo si queremos desplazar la gráfica de una función hacia
              la derecha, hacia la izquierda, hacia arriba o hacia abajo ¿Cómo
              le hacemos?.
            </p>
            <p>
              Empecemos con algo sencillo, si quremos aumentar el valor de una
              variable "y", simplemente le tenemos que sumar una número "c".
            </p>
            <Latex displayMode={true}>$$y = 3, \;c = 2$$</Latex>
            <Latex displayMode={true}>$$y = y + c$$</Latex>
            <Latex displayMode={true}>$$y = 3 + 2$$</Latex>
            <Latex displayMode={true}>$$y = 5$$</Latex>
            <p>
              En el caso de una función, de la misma forma, tenemos que sumar
              una constante a nuestra función y la misma subirá en el eje "y".
              Si queremos bajarla tenemos que restarle una constante "c".
            </p>
            <Latex displayMode={true}>$$f(x) = x^2$$</Latex>
            <Latex displayMode={true}>$$f(x) = x^2 + c$$</Latex>
            <Latex displayMode={true}>$$f(x) = x^2 - c$$</Latex>
          </div>
          <ScatterChart x={x} y={y} />
          <div className={classes.root}>
            <Slider
              min={-50}
              max={50}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={10}
              marks={marks}
              valueLabelDisplay="on"
              onChange={handleChange}
            />
          </div>
          <div className="latex-p">
            <Latex displayMode={true}>$f(x) = x^2 $</Latex>
            <p> {val >= 0 ? ` + ${val}` : ` - ${Math.abs(val)}`}</p>
          </div>
          <SectionDivider heading="pregunta" />
          <div className="course-questionnaire">
            <Questionnaire />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Course;
