import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBu8Bz6d_kbEeyyy6qiXCL2ETfCrW1L1AY",
    authDomain: "clone-71944.firebaseapp.com",
    databaseURL: "https://clone-71944.firebaseio.com",
    projectId: "clone-71944",
    storageBucket: "clone-71944.appspot.com",
    messagingSenderId: "306199554710",
    appId: "1:306199554710:web:b78bc3d2f2ac4b514c70b7",
    measurementId: "G-J7MXDRRHFZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };