import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class LoginAdmin extends Component {
  render() {
    return (
        <div className="container">
        <form className="form-signin">
            <h2 className="form-signin-heading">TOEIC Web System</h2>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox">
                <label>
                <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="form-text text-center">
                <small><Link to="/login">Login as Tester</Link></small>
            </p>
        </form>
        </div>
    );
  }
}

export default LoginAdmin;
