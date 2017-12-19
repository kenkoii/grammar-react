import { firebaseAuth } from '../firebase';

export const authService = {
    login,
    logout
};


function login(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(result => {
                // alert('Result is: ', result)
                // if(result.code !== undefined) {
                //     return Promise.reject(result.message);
                // } else {
                    localStorage.setItem('user', JSON.stringify(result));
                    return result;
                }
            );
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}