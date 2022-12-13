import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon'

export default function V7() {

    // const [gastReconstruction, setGastReconstruction] = useState([])
    const [evolution_Co2, setEvolution_Co2] = useState([])

    // useEffect(() => {
    //     async function getGastReconstruction() {
    //         const results = await axios.get('http://localhost:8080/GastReconstruction')
    //         console.log(results.data)
    //         //console.log(results.request.year)
    //         setGastReconstruction(results.data);
    //     }
    //     getGastReconstruction();

    // }, []);

    useEffect(() => {
        async function getEvolution_Co2() {
            const results = await axios.get('http://localhost:8080/Evolution_Co2')
            console.log(results.data)
            //console.log(results.request.year)
            setEvolution_Co2(results.data);
        }
        getEvolution_Co2();


    }, []);
    const data = {
        datasets: [

            // {

            //     label: "Temperature Change",
            //     data: gastReconstruction,
            //     borderColor: "rgb(1, 99, 132)",
            //     backgroundColor: "rgba(1, 99, 132, 0.5)",
            //     pointRadius: 1,
            //     yAxisID: "temp",
            //     parsing: {
            //         xAxisKey: "time",
            //         yAxisKey: "temp",
            //     },
            //     // options: {
            //     //     scales: {
            //     //         xAxes: [{
            //     //             offset: true
            //     //         }]
            //     //     },

            //     // }

            // },
            {

                label: "C02 ppm",
                data: evolution_Co2,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                pointRadius: 1,
                yAxisID: "co2_ppm",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "co2_ppm",
                },
                // options: {
                //     scales: {
                //         xAxes: [{
                //             offset: true
                //         }]
                //     },

                // }

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
                text: "V7",
            },
        },
        scales: {
            // mean: {
            //     type: "linear",
            //     display: true,
            //     position: "right",
            // },
            x: {
                type: 'linear',
                max: 2022,
                title: {
                    display: true,
                    text: 'Time in years',
                }
            },
            temp: {
                
                type: 'linear',
                position: 'right',
                title:{
                    display: true,
                    text: 'temp'
                    }
            },
            co2_ppm: {
                
                type: 'linear',
                position: 'left',
                
                title:{
                display: true,
                text: 'Co2'
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

