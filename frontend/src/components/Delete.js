import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Delete.css'

export default function Delete() {

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

    function deleteUser() {

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        //Save response token in localstorage
        axios.post('http://localhost:8080/delete', formData)
            .then(response => setAccess(response.data))
            .catch(response => setAccess(response.data))
    }

    credentialsAsRequestParams()

    function handleSubmit(e) {
        e.preventDefault();
        if (!e.target.username.value) {
            alert("Username is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else {
            if (access != null) {
                console.log("Success!")
                deleteUser();
                navigate('/login', { replace: true })
                alert("User deleted")
            }
            else {
                alert("Invalid credentials")
            }
        }
    };

    return (
        <body className="Deletebody">
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <form className="group">
                        <form>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                        </form>
                        <form>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </form>
                    </form>
                    <div>
                        <button className="primary">Delete user</button>
                        <Link className="link" to='/main'>Back to homepage</Link>
                    </div>
                </form>
            </div>
        </body>
    );
}