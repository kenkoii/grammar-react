import React from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from './helpers';
import {alertActions} from './actions';
import {PrivateRoute} from './components';
import {HomePage} from './HomePage';
import {LoginPage} from './LoginPage';
import { Sheet } from './Sheet/index';
// import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  componentDidMount() {

  }

  render() {
    const {alert} = this.props;
    return (
      <div className="container-full-bg">
        <div
          className="container"
          style={{
          height: 100 + 'vh',
          paddingTop: 64+'px',
          paddingLeft: 0+'px',
          paddingRight: 0+'px'
        }}>

            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>
}
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/" component={HomePage}/>
                <PrivateRoute exact path="/sheet/:id" component={Sheet}/>
                <Route path="/login" component={LoginPage}/>
              </div>
            </Router>

        </div>
        {
          /**
           <div className="text-center">
             <p>
               <a href="http://frecre.com" target="_top">frecre.com</a>
             </p>
           </div>
           */
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {alert} = state;
  return {alert};
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};