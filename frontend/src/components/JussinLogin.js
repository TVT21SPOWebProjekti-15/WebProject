import React, { useState } from 'react'
import axios from 'axios';

export default function JussinLogin() {

    const [id, setId] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function credentialsAsRequested() {

        setUsername(document.getElementById("idInput").value)

        const formData = new FormData();
        formData.append('id', id)
        formData.append('username', username)
        formData.append('password', password)

        axios.post('http://localhost:8080/login', formData)
            .then(response => localStorage.setItem("token", response.data))
            .catch(e => console.log(e.message))
    }

    function showData(e) {
        e.preventDefault();
        credentialsAsRequested();
    }

    return (
        <>
            <div>
                <form>
                    <input id='idInput' />
                    <button onClick={showData}>k</button>
                </form>
            </div>
        </>
    )
}
