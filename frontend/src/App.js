import './App.css';
import React, { useState } from 'react';

function App() {

  const [output, setOutput] = useState("")

  function setText(e){
    e.preventDefault()
    setOutput(document.getElementById("username").value)
  }
  
  return (
    <div className="App">
      <form action="" onSubmit={setText}>
        <input id='username' type="text"/>
        <button onClick={setText}>ok</button>
        <label htmlFor="">{output}</label>
      </form>
    </div>
  );
}

export default App;
