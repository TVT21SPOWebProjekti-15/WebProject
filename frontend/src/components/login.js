import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {

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

    function handleSubmit(e) {
        e.preventDefault();

        if (!e.target.username.value) {
            alert("Username is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else {
            if (access != null) {
                console.log("Success!")
                alert("Succesfully logged in");
                navigate('/main', { replace: true })
            }
            else {
                console.log("Invalid credentials")
            }
        }
    };

    return (
        <div className="Login">
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className="primary">Login</button>
            </form>
            <Link className="link" to='/register'>Register</Link>
        </div>
    );
}