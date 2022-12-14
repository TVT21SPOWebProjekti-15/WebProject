import React, { useState, useEffect } from 'react'
import axios from 'axios'
import tempData from "../data/testData.json";
import tempData2 from "../data/testData2.json";
import {Line} from "react-chartjs-2";

function DataFetching() {


    // This is purely for testing purposes.
    const data = {
        labels: (tempData, tempData2).map(y=> y.time),
                
        datasets: [
          {
            label: "temp",
            data: tempData.map(y=> y.temp),
            borderColor:  "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "temp",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "temp",
            },
          }, 
          {
            label: "temp2",
            data: tempData2.map(y=> y.temp),
            borderColor:  "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "temp",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "temp",
          },  
            pointRadius: 1,
          },    
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Test temp1",
          },
        },
        scales: {
          temp: {
            type: "linear",
            display: true,
            position: "right",
          },      
        },
      };

    return (
        <div className="App">
       <div style={{ width: "600px" }}></div>
        <Line options={options} data={data} /> 
        
          </div>
         
        
        // <div>
        //     <p>
        //         <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Link</a> to the data sources.
        //     </p>

        //     {Data1.map(post => <li key={post.Year}>{post.Anomaly}</li>)}
        // </div>

    )
}

export default DataFetching
