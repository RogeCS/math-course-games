import React from "react";
import { Scatter } from "react-chartjs-2";

const ScatterChart = ({ x, y, color }) => {
  return (
    <div>
      <Scatter
        data={{
          datasets: [
            {
              label: "f(x) = x^2",
              data: y,
              borderColor: color,
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
                display: false,
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
                display: false,
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
