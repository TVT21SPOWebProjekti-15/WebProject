import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

export default function V5() {

  const [vostok, setVostok] = useState([])

  useEffect(() => {
    async function getVostok() {
      const results = await axios.get('http://localhost:8080/Vostok')
      setVostok(results.data);
    }
    getVostok();


  }, []);
  const data = {
    datasets: [

      {
        label: "C02 Measurements (years BC)",
        data: vostok,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 0,
        yAxisID: "co2_concentration",
        parsing: {
          xAxisKey: "mean_age_of_the_air",
          yAxisKey: "co2_concentration",
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
        text: "V5",
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
          <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2' target="_blank">Link</a> to the datasource
        </p>
        <p>
          <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html' target="_blank">Link</a> to the data description
        </p>
        <p>
          This line chart shows CO2 concentration in the atmosphere from the period of 400 000 years. CO2 measurements were taken
          from the ice core in East Antractica at the vostok station.
        </p>
      </div>


    </div>
  )
}
