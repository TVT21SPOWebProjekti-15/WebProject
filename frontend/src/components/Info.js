import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import {DateTime} from 'luxon'




export default function Info() {


  // const [infot, setInfot] = useState([])
  // const [annualNorthern, setAnnualNorthern] = useState([])
  // const [annualSouthern, setAnnualSouthern] = useState([])
  // const [monthlyNorthern, setMonthlyNorthern] = useState([])
  // const [monthlySouthern, setMonthlySouthern] = useState([])
  const [reconstruction, setReconstruction] = useState([])
  const [monthlyGlobal, setMonthlyGlobal] = useState([])
  useEffect(() => {
    async function getMonthlyGlobal() {
      const results = await axios.get('http://localhost:8080/MonthlyGlobal')
      console.log(results.data)
      setMonthlyGlobal(results.data);
    }
    getMonthlyGlobal();
  }, []);

  // useEffect(() => {
  //   async function getMonthlyNorthern() {
  //     const results = await axios.get('http://localhost:8080/MonthlyNorthern')
  //     setMonthlyNorthern(results.data);
  //   }
  //   getMonthlyNorthern();
  // }, []);

  // useEffect(() => {
  //   async function getMonthlySouthern() {
  //     const results = await axios.get('http://localhost:8080/MonthlySouthern')
  //     setMonthlySouthern(results.data);
  //     console.log(results.data)
  //   }
  //   getMonthlySouthern();
  // }, []);

  // useEffect(() => {
  //   async function getInfot() {
  //     const results = await axios.get('http://localhost:8080/Info')
  //     setInfot(results.data);
  //   }
  //   getInfot();

  // }, []);

  // useEffect(() => {
  //   async function getAnnualNorthern() {
  //     const results = await axios.get('http://localhost:8080/AnnualNorthern')
  //     setAnnualNorthern(results.data);
  //   }
  //   getAnnualNorthern();
  // }, []);

  // useEffect(() => {
  //   async function getAnnualSouthern() {
  //     const results = await axios.get('http://localhost:8080/AnnualSouthern')
  //     setAnnualSouthern(results.data);
  //   }
  //   getAnnualSouthern();
  // }, []);
  useEffect(() => {
    async function getReconstruction() {
      const results = await axios.get('http://localhost:8080/Reconstruction')
      setReconstruction(results.data);
      console.log(results.data)
    }
    getReconstruction();
  }, []);






  const data = {
    labels: (monthlyGlobal, reconstruction).map(y => y.time),

    datasets: [

      {
        label: "global monthly",
        data: monthlyGlobal.map(y => y.anomaly),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
        options: {
          scales: {
            xAxes: [{
              offset: true
            }]
          }
        }

      },
      // {
      //   label: "northern monthly",
      //   data: monthlyNorthern.map(y => y.anomaly),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   yAxisID: "anomaly",
      //   parsing: {
      //     xAxisKey: "Time",
      //     yAxisKey: "anomaly",
      //   },
      // },
      // {
      //   label: "southern monthly",
      //   data: monthlySouthern.map(y => y.anomaly),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   yAxisID: "anomaly",
      //   parsing: {
      //     xAxisKey: "Time",
      //     yAxisKey: "anomaly",
      //   },
      // },
      // {
      //   label: "global annual",
      //   data: infot.map(y => y.anomaly),
      //   borderColor: "rgb(1, 99, 132)",
      //   backgroundColor: "rgba(1, 99, 132, 0.5)",
      //   yAxisID: "anomaly",
      //   parsing: {
      //     xAxisKey: "Time",
      //     yAxisKey: "anomaly",
      //   },
      // },
      // {
      //   label: "norhtern annual",
      //   data: annualNorthern.map(y => y.anomaly),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   yAxisID: "anomaly",
      //   parsing: {
      //     xAxisKey: "Time",
      //     yAxisKey: "anomaly",
      //   },
      // },
      // {
      //   label: "southern annual",
      //   data: annualSouthern.map(y => y.anomaly),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   yAxisID: "anomaly",
      //   parsing: {
      //     xAxisKey: "Time",
      //     yAxisKey: "anomaly",
      //   },
      // },
      {
        label: "2000 year anomalyeratures",
        data: reconstruction.map(y => y.anomaly),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "anomaly",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "anomaly",
        },
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
        text: "Hieno graafi",
      },
    },
    scales: {
      anomaly: {
        type: "linear",
        display: true,
        position: "right",
      },
      // x: {
      //   type: "time",
      //   time: {
      //     unit: "year",
      //   },
      //   min: '1850_1',
      //   max: '2030_1'
      // },
      
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
