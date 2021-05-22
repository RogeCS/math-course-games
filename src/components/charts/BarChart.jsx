import React from "react";
import { Line } from "react-chartjs-2";
import { FaHourglassEnd } from "react-icons/fa";

const xVector = (min, max, cardinality) => {
  let xVector = [];
  let step = (max - min) / (cardinality - 1);
  for (let i = 0; i < cardinality; i++) {
    xVector.push((min + step * i).toFixed(2));
  }
  //console.log(`xVector: ${xVector}`);
  return xVector;
};

const yVector = (xVector, constant) => {
  let yVector = xVector.map((x) => {
    return (x * x + constant).toFixed(2);
  });
  //console.log(`yVector: ${yVector}`);
  return yVector;
};

const BarChart = ({ c }) => {
  let x = xVector(-5, 5, 100);
  let y = yVector(x, c);
  return (
    <div>
      <Line
        data={{
          labels: x,
          datasets: [
            {
              labels: "Gráfica",
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
          maintainAspectRatio: false,
          showLines: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
