import React from "react";
import { Line } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
          datasets: [
            {
              labels: "Gráfica",
              data: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
              borderColor: "rgb(75, 192, 192)",
              fill: false,
              tension: 0.1,
              indexAxis: "x",
            },
          ],
        }}
        height={400}
        width={600}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
