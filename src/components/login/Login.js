import React from 'react';
import PropTypes from 'prop-types'
import './Login.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from '../../auth';
import * as Actions from '../../actions';

const LoginPage = ({signInWithEmailAndPassword}) => {
  
  let email, password;

  return (
    <div className="container">
    <form className="form-signin">
        <h2 className="form-signin-heading text-center">Grammar Test Checking System</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" ref={node => {
          email = node
        }} name="email" defaultValue="admin@frecre.com" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" ref={node => {
          password = node
        }}  defaultValue="ilovefrecre" name="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox">
            <label>
            <input type="checkbox" value="remember-me" /> Remember me
            </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" onClick={(e) => {signInWithEmailAndPassword(email.value, password.value); e.preventDefault(); }}>Sign in</button>
    </form>
    </div>
  )

};


LoginPage.propTypes = {
  signInWithEmailAndPassword: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithEmailAndPassword: Actions.signInWithEmailAndPassword,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginPage)
);


// class Login extends Component {
//   constructor(){
//     super();
//     this.state = {
//       loginAs: 'tester'
//     }
//   }

//   changeLoginAs = () => {
//     const { loginAs } = {...this.state}
//     this.setState({loginAs: loginAs === 'tester' ? 'admin' : 'tester'});
//   }
  
//   render() {
//     // if(this.state.loginAs === 'admin'){
//       return (
//         <div className="container">
//         <form className="form-signin">
//             <h2 className="form-signin-heading text-center">Grammar Test Checking System</h2>
//             <label htmlFor="inputEmail" className="sr-only">Email address</label>
//             <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
//             <label htmlFor="inputPassword" className="sr-only">Password</label>
//             <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required />
//             <div className="checkbox">
//                 <label>
//                 <input type="checkbox" value="remember-me" /> Remember me
//                 </label>
//             </div>
//             <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={() => this.login()}>Sign in</button>
            
//         </form>
//         </div>
//       )
//   }
// }

// export default Login;