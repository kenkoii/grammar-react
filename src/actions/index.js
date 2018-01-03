import {firebaseAuth} from '../firebase'
import {
    // ConnectedRouter,
    // routerReducer,
    // routerMiddleware,
    push
} from 'react-router-redux'

export * from './authentication';
export * from './alert';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export const login = user => ({type: LOGIN, payload: user});

export const logout = () => ({type: LOGOUT});

export const signInError = (error) => {
    return {type: SIGN_IN_ERROR, payload: error};
}

export const signInSuccess = (result) => {
    return {type: LOGIN, payload: result};
}

export const signInWithEmailAndPassword = (email, password) => {
    console.log('Login Button Pressed')
    return authenticateWithEmailAndPassword(email, password);
}

function authenticateWithEmailAndPassword(email, password) {
    return dispatch => {
        firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then(result => {
                dispatch(signInSuccess(result))
                dispatch(push('/'))
            })
            .catch(error => dispatch(signInError(error)));
    };
}
