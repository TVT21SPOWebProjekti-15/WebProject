import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

export default function V6() {
    const [iceCore800k, setIceCore800k] = useState([])

    useEffect(() => {
        async function getIceCore800k() {
            const results = await axios.get('http://localhost:8080/IceCore800k')
            setIceCore800k(results.data);
        }
        getIceCore800k();


    }, []);
    const data = {
        datasets: [

            {

                label: "C02 measurements",
                data: iceCore800k,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                pointRadius: 0,
                parsing: {
                    xAxisKey: "age_gas_calBP",
                    yAxisKey: "co2_ppm",
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
                text: "V6",
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
                    <a href='https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt' target="_blank">Link</a> to the datasource
                </p>
                <p>
                    <a href='https://www.ncei.noaa.gov/access/paleo-search/study/17975' target="_blank">Link</a> to the data description
                </p>
                <p>
                    The European Project for Antarctic Ice Coring The last 800,000 years of atmospheric CO2 concentrations can be reconstructed thanks to the Dome C (EDC) ice core.
                </p>
            </div>


        </div>
    )
}

