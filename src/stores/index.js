import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

let middleware = applyMiddleware(thunk);

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers();

const configureStore = preloadedState => createStore(
    rootReducer,
    enhancer,
    middleware
)

export default configureStore