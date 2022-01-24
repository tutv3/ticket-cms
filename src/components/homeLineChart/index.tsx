import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";


const HomeLineChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Doanh Thu ",
        data: [0, 178, 158, 240, 42, 210, 220, 170],
      },
    ],
    options: {
      chart: {
        // height: 350,
        // type: 'area'
      },
      dataLabels: {
        // enabled: false
      },
      stroke: {
        // curve: 'smooth'
      },
      xaxis: {
        // type: 'datetime',
        // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val + ' tr';
          }
        }
      }
    },
  })
  return (
    <div>
      <ReactApexCharts
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default HomeLineChart;
