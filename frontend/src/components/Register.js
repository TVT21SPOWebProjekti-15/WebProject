import React, {useState} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function credentialsAsRequested() {

      setUsername(document.getElementById("usernameInput").value)
      setPassword(document.getElementById("passwordInput").value)

      const formData = new FormData();
      formData.append('username', username)
      formData.append('password', password)

      axios.post('http://localhost:8080/register', formData)
          .then(response => localStorage.setItem("token", response.data))
          .catch(e => console.log(e.message))
  }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.password.value)
        console.log(e.target.password2.value);
    
        if (!e.target.username.value) {
          alert("Username is required")
        } else if (!e.target.username.value) {
          alert("Valid Username is required")
        } else if (!e.target.password.value) {
          alert("Password is required")
        }else if (e.target.password2.value!==e.target.password.value){
          alert("Passwords dont match")
          } else if (
          e.target.password.value === e.target.password2.value
        ) {
          credentialsAsRequested()
          alert("Successfully registered user")
          e.target.username.value = ""
          e.target.password.value = ""
          e.target.password2.value = ""
        } 
      };

  return (
      <div className="Register">
          <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <input id='usernameInput' type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input id='passwordInput' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="input-group">
                  <label htmlFor="password2">Password</label>
                  <input id="password2" type="password" name="password2"/>
              </div>
              <button className="primary">Register</button>
          </form>
          <Link className="link" to='/login'>Back to Login</Link>
      </div>
  )
}