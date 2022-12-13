import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/Home">Climate change charts</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/Info">V1</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/V2">V2</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/V3">V3</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/V4">V4</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/V5">V5</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/V6">V6</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/UserView">UserView</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/delete">Delete user</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/">Log Out</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
