import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './components/login/Login';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    )
  }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
          // <Miss component={NotFound} />