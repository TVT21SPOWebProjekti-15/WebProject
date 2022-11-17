import React, { Component } from "react";
import "../App.css"
import { Link } from 'react-router-dom'


class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value)
    console.log(e.target.password2.value);

    if (!e.target.username.value) {
      alert("Username is required");
    } else if (!e.target.username.value) {
      alert("Valid Username is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    }else if (e.target.password2.value!==e.target.password.value){
      alert("Passwords dont match")
      } else if (
      e.target.username.value === "asdasdasdasd" &&
      e.target.password.value === "123456" &&
      e.target.password2.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.username.value = "";
      e.target.password.value = "";
      e.target.password2.value = "";
    } 
      
  };



  render() {
    return (
      <div className="Register">
      
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="password2">Password</label>
            <input id="password2" type="password" name="password2" />
          </div>
          <button className="primary">Register</button>
        </form>
        <Link className="link" to='/'>Back to Login</Link>
      </div>
    );
  }
}

export default Register;