import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

export default function V3() {

  const [maunaLoa, setMaunaLoa] = useState([])

  useEffect(() => {
    async function getMaunaLoa() {
      const results = await axios.get('http://localhost:8080/MaunaLoa')
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
        <p>
          <a href='https://gml.noaa.gov/ccgg/trends/' target="_blank">Link</a> to the datasource
        </p>
        <p>
          <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html' target="_blank">Link</a> to the data measurement description
        </p>
        <p>
          The graphs show monthly mean carbon dioxide measured at Mauna Loa Observatory, Hawaii. The carbon dioxide data on Mauna Loa
          constitute the longest record of direct measurements of CO2 in the atmosphere.
        </p>
      </div>


    </div>
  )
}
