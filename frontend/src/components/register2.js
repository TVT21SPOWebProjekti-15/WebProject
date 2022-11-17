import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Register2() {

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

    function registerUser(e) {
        e.preventDefault()
        credentialsAsRequested()
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(e.target.username.value);

    //     if (!e.target.username.value) {
    //         alert("Username is required");
    //     } else if (!e.target.username.value) {
    //         alert("Valid Username is required");
    //     } else if (!e.target.password.value) {
    //         alert("Password is required");
    //     } else if (
    //         e.target.username.value === "asdasdasdasd" &&
    //         e.target.password.value === "123456"
    //     ) {
    //         alert("Successfully logged in");
    //         e.target.username.value = "";
    //         e.target.password.value = "";
    //     } else {
    //         alert("Wrong username or password combination");
    //     }

    //};


    return (
        <div className="Login">

            <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input id="usernameInput" type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input id="passwordInput" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password2">Password</label>
                    <input id="password2" type="password" name="password2" />
                </div>
            </form>
            <button className="primary" onClick={this.registerUser()}>
                Register
            </button>
            <Link className="link" to='/'>Back to Login</Link>
        </div>
    )
}
