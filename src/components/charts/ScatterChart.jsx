import React from "react";
import { Scatter } from "react-chartjs-2";

const xVector = (min, max, cardinality) => {
  let xVector = [];
  let step = (max - min) / (cardinality - 1);
  for (let i = 0; i < cardinality; i++) {
    let x = min + step * i;
    xVector.push(x);
  }
  return xVector;
};

const yVector = (xVector, constant) => {
  let yVector = xVector.map((x) => {
    return Math.pow(x, 2) + constant;
  });
  return yVector;
};

const ScatterChart = ({ c }) => {
  let x = xVector(-30, 30, 300);
  let y = yVector(x, c);
  return (
    <div>
      <Scatter
        data={{
          datasets: [
            {
              data: y,
              borderColor: "rgb(75, 192, 192)",
              fill: false,
              tension: 0.6,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          animation: false,
          maintainAspectRatio: false,
          showLines: false,
          scales: {
            y: {
              min: -60,
              max: 80,
              title: {
                display: true,
                text: "f(x)",
                font: {
                  size: 16,
                  lineHeight: 1.2,
                },
              },
            },
            x: {
              labels: x,
              min: -20,
              max: 20,
              title: {
                display: true,
                text: "x",
                font: {
                  size: 16,
                  lineHeight: 1.2,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ScatterChart;
