
import React from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import tempData from "./data/testData.json";
import tempData2 from "./data/testData2.json";
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import DataFetching from './components/DataFetching';
import JussinLogin from './components/JussinLogin';
import MainSite from './components/MainSite';
import Navbar from './components/NavBar';
import Info from './components/Info';

function App() {
  
  const data = {
    labels: (tempData, tempData2).map(y=> y.time),
            
    datasets: [
      {
        label: "temp",
        data: tempData.map(y=> y.temp),
        borderColor:  "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "temp",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "temp",
        },
      }, 
      {
        label: "temp2",
        data: tempData2.map(y=> y.temp),
        borderColor:  "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "temp",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "temp",
      },  
        pointRadius: 1,
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
        text: "Test temp1",
      },
    },
    scales: {
      temp: {
        type: "linear",
        display: true,
        position: "right",
      },      
    },
  };

  return (

    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/JussinLogin" element={<JussinLogin />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/DataFetcing" element={<DataFetching />}/>
        <Route path="/Info" element={<Info />}/>
        
      </Routes>

    </div>
    </> 

      //  <div className="App">
      // <div style={{ width: "600px" }}>

         //<Line options={options} data={data} /> 
        
        
        //  <Route path='/DataFetching' element={<DataFetching/>}/>
        // <Route path='/login' element={<JussinLogin/>}/> 
        
        

      //  <div className="App">
      //   <Routes>
      //     <Route path='/login' element={<JussinLogin/>}/>
      //     <Route path='/Register' element={<Register/>}/>
      //     <Route path='/main' element={<MainSite/>}/>
      //   </Routes> 
    //   </div>
    // </div>
// issue 1 login esimerkki 29.11
//       <div className="App">
//         <Routes>
//           <Route path='/' element={<Login/>}/>
//           <Route path='/Register' element={<Register/>}/>
//         </Routes>
//       </div>
// >>>>>>> origin/issue#1
  );
}

export default App;