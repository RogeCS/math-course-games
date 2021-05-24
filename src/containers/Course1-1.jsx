import React from "react";
import ScrollToTop from "../code/scrollToTop";
import ProgressBar from "../components/course/ProgressBar.jsx";
import Slider from "@material-ui/core/Slider";
import ScatterChart from "../components/charts/ScatterChart.jsx";
import SectionDivider from "../components/dividers/SectionDivider.jsx";
import Questionnaire1 from "../components/course/Questionnaire1-1.jsx";
import { xVector, yVector } from "../code/Vectors";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { table3, table4 } from "../code/TableContents";

var Latex = require("react-latex");
import "../assets/styles/containers/Course.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "40px auto 0px auto",
  },
}));

const marks = [
  {
    value: -25,
    label: "-25",
  },
  {
    value: 25,
    label: "25",
  },
];

const marks2 = [
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

const Course1 = () => {
  ScrollToTop();
  const classes = useStyles();
  const [val, setVal] = React.useState(0);
  const [val2, setVal2] = React.useState(0);

  const handleChange = (event, value) => {
    setVal(value);
  };

  const handleChange2 = (event, value) => {
    setVal2(value);
  };

  let x = xVector(-30, 30, 300);
  let y = yVector(x, val2, val);

  return (
    <div className="specific-course">
      <div className="specific-course__container">
        <Link to="/courses" className="course-exit-icon">
          <FaArrowLeft />
          <p>Salir</p>
        </Link>
        <ProgressBar num={1} />
        <section className="course-content__container">
          <div className="course-content-wrap">
            <h2>Cálculo básico</h2>
            <h1>Traslación en el eje X</h1>
            <p>
              Ya hemos observado el movimiento de la gráfica en el eje "y".
              Ahora analizaremos eje "x"
            </p>
            <p>
              A diferencia del eje "y" en el eje "x" tendremos que sumar o
              restar una constante a la variable x antes de enviarla por la
              función.
            </p>
            <p>
              Si nosotros le restamos una constante a x antes de enviarla por la
              función entonces desplazaremos la misma a la derecha. Por el
              contrario, si le sumamos una constante la desplazaremos a la
              izquierda
            </p>
            <p></p>
            <Latex displayMode={true}>$$f(x) = x^2$$</Latex>
            <Latex displayMode={true}>$$f(x + c) = x^2$$</Latex>
            <Latex displayMode={true}>$$f(x - c) = x^2$$</Latex>
          </div>
          <div className="interactive-content-wrapper">
            <ScatterChart x={x} y={y} color="rgb(255, 0, 0)" />
            <div className="slider-wrap">
              <div className={classes.root}>
                <Slider
                  min={-25}
                  max={25}
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-always"
                  step={5}
                  marks={marks}
                  valueLabelDisplay="on"
                  onChange={handleChange}
                />
              </div>
              <div className="latex-p-wrap">
                <div className="latex-p">
                  <div>
                    f(x {val >= 0 ? `+${val}` : val}) = <Latex>$x^2$</Latex>
                  </div>
                  <p> {val2 >= 0 ? ` + ${val2}` : ` - ${Math.abs(val2)}`}</p>
                </div>
              </div>
              <div className={classes.root}>
                <Slider
                  min={-50}
                  max={50}
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-always"
                  step={10}
                  marks={marks2}
                  valueLabelDisplay="on"
                  onChange={handleChange2}
                />
              </div>
            </div>
          </div>
          <SectionDivider heading="pregunta" />
          <div className="course-questionnaire">
            <Questionnaire1
              prev="/course"
              next="/in-development"
              table1={table3}
              table2={table4}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Course1;
