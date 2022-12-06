import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Line,Pie } from 'react-chartjs-2';

export default function Info() {

  
  const [infot, setInfot] = useState([])
  
    useEffect(()=>{
      async function getInfot(){
        const results = await axios.get('http://localhost:8080/Info')
        
        console.log(results);
       
        console.log(results.data);
        setInfot(results.data);
      }
      getInfot();
      
    },[]);
    
    const data = {
        labels: infot.map(y=> y.year),
                
        datasets: [
          {
            label: "Anomaly",
            data: infot.map(y=> y.anomaly),
            borderColor:  "rgb(1, 99, 132)",
            backgroundColor: "rgba(1, 99, 132, 0.5)",
            yAxisID: "temp",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "temp",
            },
          }, 
          {
            label: "Lower",
            data: infot.map(y=> y.lower_confidence_limit),
            borderColor:  "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "temp",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "temp",
            },
          },
          {
            label: "Upper",
            data: infot.map(y=> y.upper_confidence_limit),
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
    <div>
       <div className="App">
       <div style={{ width: "600px" }}></div>
        <Line options={options} data={data} /> 
        
          </div>
      {/* <ul>
        {infot.map(info =>{
          return <tr>
            <td>
              {info.year} /
              {info.anomaly}/
              {info.upper_confidence_limit}/
              {info.lower_confidence_limit}
            </td>
          </tr>
        })}
      </ul> */}
      
    </div>
    

  )
}
