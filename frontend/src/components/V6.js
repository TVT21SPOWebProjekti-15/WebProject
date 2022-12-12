import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon'

export default function V6() {
    const [iceCore800k, setIceCore800k] = useState([])

    useEffect(() => {
        async function getIceCore800k() {
            const results = await axios.get('http://localhost:8080/IceCore800k')
            console.log(results.data)
            //console.log(results.request.year)
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
                //yAxisID: "mean",
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
                text: "V3",
            },
        },
        scales: {
            mean: {
                type: "linear",
                display: true,
                position: "right",
            },
            x: {
                type: 'time',
                time: {
                    unit: 'year',
                    display: true
                }
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

