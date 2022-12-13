import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import tempData from "../data/testData.json";
import tempData2 from "../data/testData2.json";
import "chartjs-adapter-luxon";


export default function V1() {

  const data = {
    //labels: (tempData, tempData2).map(y=> y.year),

    datasets: [
      {
        label: "temp",
        key: "T1",
        data: tempData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
         yAxisID: "temp",
        // xAxisID: "year",
        parsing: {
          yAxisKey: "temp",
          xAxisKey: "year"
        },
        pointRadius: 1,

      },
      {
        label: "tamp",
        key: "T2",
        data: tempData2,
        borderColor: "rgb(53, 162, 1)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
         yAxisID: "tamp",
        // xAxisID: "year",
        parsing: {
          yAxisKey: "tamp",
          xAxisKey: "year"
        },
        pointRadius: 1,

      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Test temp",
      },
    },
    scales: {
      // temp: {
      //   type: "linear",
      //   display: true,
      //   position: "right",
      //   beginAtZero: true,
      //   xAxes:[{
      //     type:'time',
      //   }]   
      // }, 
      x: {
        type: 'time',
        time: {
          unit: 'year',
          display: false
        }
      },
      temp: {
        
        type: 'linear',
        position: 'left',
        title:{
        display: true,
        text:"temp"
        }
      },
      tamp: {
        
        type: 'linear',
        position: 'right',
        title:{
        display: true,
        text:"tamp"
        }
      }
      
    },

  };

  return (
    <div className="chart">
      <div style={{ width: "600px" }}>
        <Line options={options} data={data} />
        <p>
          <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Link</a> to the data sources.
        </p>
      </div>
    </div >
  );
}