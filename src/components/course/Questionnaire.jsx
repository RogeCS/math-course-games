import React from "react";
import SectionDivider from "../dividers/SectionDivider.jsx";
import Table from "./Table.jsx";
import { table1, table2 } from "../../code/TableContents";
var Latex = require("react-latex");

import "../../assets/styles/components/course-preview/Questionnaire.scss";

const Questionnaire = () => {
  const [answer, setAnswer] = React.useState(0);
  const [styles, setStyles] = React.useState(false);
  const [why, setWhy] = React.useState(false);

  function checkAnswer() {
    console.log(answer);
    setStyles(true);
  }
  function handleWhyClick() {
    setWhy(true);
  }
  return (
    <div className="questionnaire">
      <h2 className="question">
        Recordando la función f(x) = x^2.
        <br /> Si queremos desplazarla 3 unidades hacia abajo ¿cuál sería la
        función resultante?
      </h2>
      <div
        tabIndex="0"
        className={styles && answer === 1 ? "answer wrong" : "answer"}
        onClick={() => setAnswer(1)}
      >
        <Latex>$f(x) = x^2 + 3$</Latex>
      </div>
      <div
        tabIndex="1"
        className={styles && answer === 4 ? "answer correct" : "answer"}
        onClick={() => setAnswer(4)}
      >
        <Latex>$f(x) = x^2 - 3$</Latex>
      </div>
      <div
        tabIndex="2"
        className={styles && answer === 2 ? "answer wrong" : "answer"}
        onClick={() => setAnswer(2)}
      >
        <Latex>$f(x) = x^3$</Latex>
      </div>
      <div
        tabIndex="3"
        className={styles && answer === 3 ? "answer wrong" : "answer"}
        onClick={() => setAnswer(3)}
      >
        <Latex>$f(x) = (x-3)^2 - 3$</Latex>
      </div>
      <div className="questionnaire__buttons-wrapper">
        <button className="dark-button" onClick={checkAnswer}>
          Checar
        </button>
        <button className="dark-button" onClick={handleWhyClick}>
          Por qué
        </button>
      </div>
      {why && (
        <div className="why-correct-answer">
          <div className="why-text-content">
            <SectionDivider heading="" />
            <p>
              Vamos a tabular ambas funciones. Si tomamos cualquier punto como
              referencia, ejemplo: <Latex>$x=0$</Latex> podemos observar que en
              la función original <Latex>$f(0)=0^2 = 0$</Latex>.
            </p>
            <p>
              En <Latex>$f(x)=x^2 -3$</Latex> podemos evaluar el misimo punto
              <Latex>$x=0$</Latex> y observamos que
              <Latex>$f(0)=0^2 -3 = -3$</Latex>.
            </p>
            <p>
              Si realizamos el análisis anterior para cada punto observamos que
              todos disminuyeron 3 unidades en el eje <Latex>$y$</Latex>, por lo
              tanto podemos decir que la gráfica bajo en este eje.
            </p>
          </div>
          <div className="why-table-wrap">
            <Table table={table1} />
            <Table table={table2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
