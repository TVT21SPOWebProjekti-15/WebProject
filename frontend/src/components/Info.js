import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon'
import "chartjs-adapter-luxon";




export default function Info() {

  const dt = DateTime;
  const [infot, setInfot] = useState([])
  const [annualNorthern, setAnnualNorthern] = useState([])
  const [annualSouthern, setAnnualSouthern] = useState([])
  const [monthlyNorthern, setMonthlyNorthern] = useState([])
  const [monthlySouthern, setMonthlySouthern] = useState([])
  const [monthlyGlobal, setMonthlyGlobal] = useState([])

  useEffect(() => {
    async function getMonthlyGlobal() {
      const results = await axios.get('http://localhost:8080/MonthlyGlobal')
      //console.log(results.data)
      setMonthlyGlobal(results.data);
    }
    getMonthlyGlobal();
  }, []);

  useEffect(() => {
    async function getMonthlyNorthern() {
      const results = await axios.get('http://localhost:8080/MonthlyNorthern')
      setMonthlyNorthern(results.data);
    }
    getMonthlyNorthern();
  }, []);

  useEffect(() => {
    async function getMonthlySouthern() {
      const results = await axios.get('http://localhost:8080/MonthlySouthern')
      setMonthlySouthern(results.data);
      console.log(results.data)
    }
    getMonthlySouthern();
  }, []);

  useEffect(() => {
    async function getInfot() {
      const results = await axios.get('http://localhost:8080/Info')
      setInfot(results.data);
    }
    getInfot();

  }, []);

  useEffect(() => {
    async function getAnnualNorthern() {
      const results = await axios.get('http://localhost:8080/AnnualNorthern')
      setAnnualNorthern(results.data);
    }
    getAnnualNorthern();
  }, []);

  useEffect(() => {
    async function getAnnualSouthern() {
      const results = await axios.get('http://localhost:8080/AnnualSouthern')
      setAnnualSouthern(results.data);
      console.log(results.data);
    }
    getAnnualSouthern();
  }, []);
  


  const data = {
    datasets: [

      {
        label: "global monthly",
        data: monthlyGlobal,
        borderColor: "rgb(1, 99, 132)",
        backgroundColor: "rgba(1, 99, 132, 0.5)",
        pointRadius: 0,
        //yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
        // options: {
        //   scales: {
        //     xAxes: [{
        //       offset: true
        //     }]
        //   },
          
        // }

      },
      {
        label: "northern monthly",
        data: monthlyNorthern,
        borderColor: "rgb(255, 99, 1)",
        backgroundColor: "rgba(255, 99, 1, 0.5)",
        pointRadius:0,
        // yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
      },
      {
        label: "southern monthly",
        data: monthlySouthern,
        borderColor: "rgb(255, 1, 132)",
        backgroundColor: "rgba(255, 1, 132, 0.5)",
        pointRadius:0,
        // yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
      },
      {
        label: "global annual",
        data: infot,
        borderColor: "rgb(50, 99, 132)",
        backgroundColor: "rgba(50, 99, 132, 0.5)",
        pointRadius:0,
        // yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
      },
      {
        label: "norhtern annual",
        data: annualNorthern,
        borderColor: "rgb(255, 99, 60)",
        backgroundColor: "rgba(255, 99, 60, 0.5)",
        pointRadius:0,
        // yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
      },
      {
        label: "southern annual",
        data: annualSouthern,
        borderColor: "rgb(255, 50, 132)",
        backgroundColor: "rgba(255, 50, 132, 0.5)",
        pointRadius:0,
        // yAxisID: "anomaly",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
      },
    ],
  };

  const options = {
    borderWidth: 1.5,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "V1",
      },
    },
    scales: {
      anomaly: {
        type: "linear",
        display: true,
        position: "right",
      },
            x:{
        type: 'time',
        time:{
          unit:'year',
          display:false
        }
      },

    },
  };



  return (
    <div>
      <div className="App">
        <div className="Graph"style={{ width: "600px" }}></div>
        <Line options={options} data={data} />
      </div>
      <p>
        <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/' target="_blank">Link</a> to the datasource
      </p>
    </div>


  )
}
