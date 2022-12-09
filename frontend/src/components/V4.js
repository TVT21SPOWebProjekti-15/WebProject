import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon'

export default function V4() {

    const [dss, setDss] = useState([])
    const [de08, setDe08] = useState([])
    const [de082, setDe082] = useState([])

    useEffect(() => {
        async function getDss() {
            const results = await axios.get('http://localhost:8080/Dss')
            //console.log(results.data)
            setDss(results.data);
        }
        getDss();
    }, []);

    useEffect(() => {
        async function getDe08() {
            const results = await axios.get('http://localhost:8080/De08')
            //console.log(results.data)
            setDe08(results.data);
        }
        getDe08();
    }, []);

    useEffect(() => {
        async function getDe082() {
            const results = await axios.get('http://localhost:8080/De082')
            //console.log(results.data)
            setDe082(results.data);
        }
        getDe082();
    }, []);


    const data = {
        datasets: [

            {
                label: "Ice Core DSS Measurements",
                data: dss,
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
            {label: "Ice Core De08 Measurements",
            data: de08,
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
            {label: "Ice Core De08_02 Measurements",
            data: de082,
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
