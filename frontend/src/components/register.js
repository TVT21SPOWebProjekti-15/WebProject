import React, { Component } from "react";
import "../App.css"
import { Link } from 'react-router-dom'


class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.username.value);

    if (!e.target.username.value) {
      alert("Username is required");
    } else if (!e.target.username.value) {
      alert("Valid Username is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.username.value === "asdasdasdasd" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.username.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong username or password combination");
    }
      
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="Login">
      
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="username" name="username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="password2">Password</label>
            <input id="password2" type="password" name="password2" />
          </div>
        </form>
        <button className="primary" onClick={this.handleClick}>
          Register
        </button>
        <Link className="link" to='/'>Back to Login</Link>
      </div>
    );
  }
}

export default Register;


