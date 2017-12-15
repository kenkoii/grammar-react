
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyBK38TO7uBhHmTeklkNx7gUjPJfiCbRlqw",
    authDomain: "toeic-web-system-79922.firebaseapp.com",
    databaseURL: "https://toeic-web-system-79922.firebaseio.com",
    projectId: "toeic-web-system-79922"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;