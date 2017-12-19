import { userConstants } from '../constants';
import { authService } from '../services';
import { history } from '../helpers';
import { alertActions } from '../actions'

export const userActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        authService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                }
            ).catch(
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    authService.logout();
    return { type: userConstants.LOGOUT };
}