import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Lógica",
            "Álgebra",
            "Cálculo",
            "Estadística",
            "Aritmética",
            "Geometría",
            "Trigonometría",
            "Multivariable",
          ],
        },
      },
      responsive: [
        {
          breakpoint: undefined,
          options: {},
        },
      ],
      series: [
        {
          name: "series-1",
          data: [30, 90, 45, 50, 49, 60, 70, 10],
        },
      ],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="radar"
        height="100%"
      />
    );
  }
}

export default ApexChart;
