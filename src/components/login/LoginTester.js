import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class LoginTester extends Component {
  render() {
    return (
        <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading">TOEIC Web System</h2>
                <label htmlFor="inputEmail" className="sr-only">TOEIC Score</label>
                <input type="text" id="inputEmail" className="form-control" placeholder="TOEIC Score(optional)" autoFocus />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login with Twitter</button>
                <p className="form-text text-center">
                    <small><Link to="/login/admin">Login as administrator</Link></small>
                </p>
            </form>
        </div>
    );
  }
}

export default LoginTester;
