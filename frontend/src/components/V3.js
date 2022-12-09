import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon'

export default function V3() {

  const [maunaLoa, setMaunaLoa] = useState([])

  useEffect(() => {
    async function getMaunaLoa() {
      const results = await axios.get('http://localhost:8080/MaunaLoa')
      console.log(results.data)
      setMaunaLoa(results.data);
    }
    getMaunaLoa();


  }, []);
  const data = {
    datasets: [

      {
        label: "Annual C02 measurements",
        data: maunaLoa,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 0,
        yAxisID: "mean",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "mean",
        },
        options: {
          scales: {
            xAxes: [{
              offset: true
            }]
          },

        }

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
        text: "V3",
      },
    },
    scales: {
      mean: {
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


    </div>
  )
}
