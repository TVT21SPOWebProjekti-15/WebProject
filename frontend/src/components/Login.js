import React from "react";
import { Link } from "react-router-dom";

export default function Login(){

    return(
        <>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <Link to={'/register'}>Register</Link>
            </div>
        </>
    );
}