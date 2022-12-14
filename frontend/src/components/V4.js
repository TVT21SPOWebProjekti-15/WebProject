import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

export default function V4() {

    const [dss, setDss] = useState([])
    const [de08, setDe08] = useState([])
    const [de082, setDe082] = useState([])
    const [maunaLoa, setMaunaLoa] = useState([])

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
            setDe08(results.data);
        }
        getDe08();
    }, []);

    useEffect(() => {
        async function getDe082() {
            const results = await axios.get('http://localhost:8080/De082')
            setDe082(results.data);
        }
        getDe082();
    }, []);

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
                label: "Ice Core DSS Measurements",
                data: dss,
                borderColor: "rgb(255, 99, 1)",
                backgroundColor: "rgba(255, 99, 1, 0.5)",
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
            {
                label: "Ice Core De08 Measurements",
                data: de08,
                borderColor: "rgb(255, 1, 132)",
                backgroundColor: "rgba(255, 1, 132, 0.5)",
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
            {
                label: "Ice Core De08_02 Measurements",
                data: de082,
                borderColor: "rgb(1, 99, 132)",
                backgroundColor: "rgba(1, 99, 132, 0.5)",
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
                text: "V3 V4",
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
                    display: false
                }
            },


        },
    };

    return (
        <div>
            <div className="App">
                <div style={{ width: "600px" }}></div>
                <Line options={options} data={data} />
                <p>
                    <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat' target="_blank">Link</a> to the datasource
                </p>
                <p>
                    <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html' target="_blank">Link</a> to the data description
                </p>

                <p>
                    The three ice cores collected at Law Dome, East Antarctica between 1987 and 1993 are the source of the CO2 records provided here.
                </p>
            </div>


        </div>
    )
}
