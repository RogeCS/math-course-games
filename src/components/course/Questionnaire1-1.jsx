import React from "react";
import SectionDivider from "../dividers/SectionDivider.jsx";
import Table from "./Table.jsx";
import PrevNext from "./PrevNext.jsx";
var Latex = require("react-latex");

import "../../assets/styles/components/course-preview/Questionnaire.scss";

const Questionnaire1 = ({ prev, next, table1, table2 }) => {
  const [answer, setAnswer] = React.useState(0);
  const [styles, setStyles] = React.useState(false);
  const [why, setWhy] = React.useState(false);

  function checkAnswer() {
    setStyles(true);
  }
  function handleWhyClick() {
    setWhy(true);
  }
  return (
    <div className="questionnaire">
      <h2 className="question">
        recordando la función f(x) = x^2
        <br /> Si queremos desplazarla 5 unidades a la derecha ¿cuál sería la
        función resultante??
      </h2>
      <div
        tabIndex="0"
        className={styles && answer === 1 ? "answer wrong" : "answer"}
        onClick={() => setAnswer(1)}
      >
        <Latex>$f(x) = x^2 + 5$</Latex>
      </div>
      <div
        tabIndex="1"
        className={styles && answer === 4 ? "answer wrong" : "answer"}
        onClick={() => setAnswer(4)}
      >
        <Latex>$f(x) = (x+5)^2$</Latex>
      </div>
      <div
        tabIndex="2"
        className={styles && answer === 2 ? "answer wrong" : "answer"}
        onClick={() => setAnswer(2)}
      >
        <Latex>$f(x) = x^2 - 5$</Latex>
      </div>
      <div
        tabIndex="3"
        className={styles && answer === 3 ? "answer correct" : "answer"}
        onClick={() => setAnswer(3)}
      >
        <Latex>$f(x) = (x-5)^2$</Latex>
      </div>
      <div className="questionnaire__buttons-wrapper">
        <button className="dark-button" onClick={checkAnswer}>
          Checar
        </button>
        <button className="dark-button" onClick={handleWhyClick}>
          Por qué
        </button>
      </div>
      <PrevNext prev={prev} next={next} />
      {why && (
        <div className="why-correct-answer">
          <div className="why-text-content">
            <SectionDivider heading="" />
            <p>
              Volvamos a tabular. Si tomamos cualquier punto como referencia,
              ejemplo: <Latex>$x=0$</Latex> podemos observar que en la función
              original <Latex>$f(0)=0^2 = 0$</Latex>.
            </p>
            <p>
              Si queremos que nuestro punto <Latex>$0$</Latex> se encuentre{" "}
              <Latex>$5$</Latex> unidades a la derecha, <Latex>$x$</Latex>{" "}
              tendrá que valer 5 para que, cuando le restemos la constate{" "}
              <Latex>$c=5$</Latex>, obtengamos <Latex>$0$</Latex>. <br />
              <Latex>$f(x-c)=x^2$, $f(5-5)=0^2=0$</Latex>
            </p>
            <p>
              Si te das cuenta se mueve a la derecha cuando restamos c porque x
              tiene que incrementar para obtener el resultado en y que
              esperaríamos de la función original. A continuación puedes
              observar la tabulación.
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

export default Questionnaire1;
