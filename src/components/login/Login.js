import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loginAs: 'tester'
    }
  }

  changeLoginAs = () => {
    const { loginAs } = {...this.state}
    this.setState({loginAs: loginAs === 'tester' ? 'admin' : 'tester'});
  }

  render() {
    // if(this.state.loginAs === 'admin'){
      return (
        <div className="container">
        <form className="form-signin">
            <h2 className="form-signin-heading text-center">Grammar Test Checking System</h2>
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
            
        </form>
        </div>
      )
  }
}

export default Login;