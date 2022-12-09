import React from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import tempData from "../data/testData.json";
import tempData2 from "../data/testData2.json";
import "chartjs-adapter-luxon";


export default function V1() {
  
  const data = {
    //labels: (tempData, tempData2).map(y=> y.year),
            
    datasets: [
      {
        label: "temp",
        data: tempData,
        borderColor:  "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "temp",
        xAxisID: "year",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "temp",
        },
        pointRadius: 1,
        
      }, 
      {
        label: "temp2",
        data: tempData2,
        borderColor:  "rgb(53, 162, 1)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "temp",
        xAxisID: "year",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "temp",
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
        x:{
          type: 'time',
          time:{
            unit:'year',
          }
        } ,
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