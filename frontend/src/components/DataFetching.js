import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  
    
        const [Data1,setData1] = useState([])
        useEffect(()=>{
            axios
            .get('http://localhost:8080/anomalies_annual_global')
            .then(res =>{
                console.log(res)
                setData1(res.Data)
            })
            .catch(err =>{
                console.log(err)
            })
        })
    
    return (
        <div>
            {Data1.map(post => <li key={post.Year}>{post.Anomaly}</li>)}
        </div>
  )
}

export default DataFetching
