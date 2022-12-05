import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Info() {

  // const [Data1, setData1]= useState ([]);
  // useEffect(() => {
  //   const getData1=async()=>{
  //   const res = await fetch ('http://localhost:8080/Info');
  //   const getdata= await res.json();
  //   setData1(getdata);
  //   console.log(getdata);
  //   }
  //   getA();
  // },[])
  const [Data1,setData1] = useState([])
    useEffect(()=>{
        axios
        .get('http://localhost:8080/info')
        .then(res =>{
            console.log(res)
            setData1(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
  

  return (
    <div>
      <p>
        moi
      </p>
    </div>

  )
}
