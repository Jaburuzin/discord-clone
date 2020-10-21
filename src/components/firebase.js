// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQMlWLZxn1SYkc5MVGRpsB95aRfsfcM7g",
    authDomain: "discord-clone-2c52e.firebaseapp.com",
    databaseURL: "https://discord-clone-2c52e.firebaseio.com",
    projectId: "discord-clone-2c52e",
    storageBucket: "discord-clone-2c52e.appspot.com",
    messagingSenderId: "950062627528",
    appId: "1:950062627528:web:177d1f4f63a7f951c903fd",
    measurementId: "G-SSFF45VZM9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;