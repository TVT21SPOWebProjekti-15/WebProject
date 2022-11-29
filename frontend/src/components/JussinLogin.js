import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function JussinLogin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [access, setAccess] = useState(null)
    const navigate = useNavigate()

    function credentialsAsRequestParams() {

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        //Save response token in localstorage
        axios.post('http://localhost:8080/login', formData)
            .then(response => setAccess(response.data))
            .catch(response => setAccess(response.data))
    }

    credentialsAsRequestParams();

    function login(e) {
        e.preventDefault();
        
        if (access != null) {
            console.log("Success!")
            navigate('/main', {replace: true})
        }
        else {
            console.log("Invalid credentials")
        }
    }

    return (
        <div>
            <form>
                <div>
                    <input id='usernameInput' value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <input id='passwordInput' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button onClick={login}>k</button>
            </form>
        </div>
    )
}