import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function credentialsAsRequested(){

    setUsername(document.getElementById("usernameInput").value)
    setPassword(document.getElementById("passwordInput").value)

    const formData = new FormData();
    formData.append('username', username)
    formData.append('password', password)

    axios.post('http://localhost:8080/register', formData)
      .then(response => localStorage.setItem("token", response.data))
      .catch(e=>console.log(e.message))
  }

  function registerUser(e){
    e.preventDefault()
    credentialsAsRequested()
  }
  
  return (
    <div className="App">
      <form action="" onSubmit={registerUser}>
        <div>
        <label>Nimi</label>
        <input id='usernameInput' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
        <label>Salasana</label>
        <input id='passwordInput' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={registerUser}>k</button>
      </form>
    </div>
  );
}

export default App;