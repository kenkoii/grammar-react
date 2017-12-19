import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { alert } from './alert';
// import user from './user';
import authReducer from '../auth/reducer';

const rootReducer = combineReducers({
  authentication: authentication,
  alert: alert
})

export default rootReducer