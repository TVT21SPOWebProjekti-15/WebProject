import React, { useState } from 'react'
import axios from 'axios';
import {Buffer} from 'buffer';

export default function JussinLogin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function credentialsAsRequestParams() {

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        //Save response token in localstorage
        axios.post('http://localhost:8080/login', formData)
            .then(response => localStorage.setItem("token", response.data))
            .catch(e => console.log(e.message))

        //console.log(axios.response.data)
    }

    function requestWithBearerToken(){

        //Bearer token from localstorage for the request
        const config = {
          headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          withCredentials: true
        }
    
        axios.get('http://localhost:8080/private', config)
          .then(response => console.log(response.data))
          .catch( e => console.log(e.message))
      }
    
      /**
       * Sends credentials as base 64 coded basic authorization header
       */
      const credentialsAsBasicAuth = ()=>{
    
        //Base64 coding the string username:password
        const base64credentials =  Buffer.from(`${username}:${password}`).toString('base64');
       
        const config = {
          headers:{
            'Authorization': `Basic ${base64credentials}`
          },
          withCredentials: true
        }
    
        axios.post('http://localhost:8080/private', {}, config)
          .then(response => console.log(response.data))
          .catch( e => console.log(e.message))
      }

    function login(e) {
        e.preventDefault();
        credentialsAsRequestParams();
        requestWithBearerToken();
        credentialsAsBasicAuth();
    }

    return (
        <>
            <div>
                <form>
                    <div>
                        <input id='usernameInput' value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <input id='passwordInput' value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button onClick={login}>k</button>
                </form>
            </div>
        </>
    )
}