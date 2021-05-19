import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAFu1T0MsoaS7G31CdAzsF1Jmj5V7U_xgM",
    authDomain: "workforce-9ea69.firebaseapp.com",
    projectId: "workforce-9ea69",
    storageBucket: "workforce-9ea69.appspot.com",
    messagingSenderId: "720501169270",
    appId: "1:720501169270:web:e153ffb6c5726cfe331357"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
