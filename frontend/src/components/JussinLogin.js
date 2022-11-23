import React, { useState } from 'react'
import axios from 'axios';

export default function JussinLogin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function credentialsAsRequestParams() {

        setUsername(document.getElementById("usernameInput").value)
        setPassword(document.getElementById("passwordInput").value)

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        //Save response token in localstorage
        axios.post('http://localhost:8080/login', formData)
            .then(response => localStorage.setItem("token", response.data))
            .catch(e => console.log(e.message))

        console.log(axios.response.data)
    }

    function login(e) {
        e.preventDefault();
        credentialsAsRequestParams();
    }

    return (
        <>
            <div>
                <form>
                    <div>
                        <input id='usernameInput' />
                    </div>
                    <div>
                        <input id='passwordInput' />
                    </div>
                    <button onClick={login}>k</button>
                </form>
            </div>
        </>
    )
}
