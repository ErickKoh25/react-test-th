
import firebase from 'firebase/compat/app' // a partir de V9 se agrega el directorio compat (compatibilidad) sino hacer un downgrade de firebase
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFhvUYH-fPglHDaiGW9iIDJqy9aK3tn0E",
    authDomain: "react-apps-course-f4ffc.firebaseapp.com",
    projectId: "react-apps-course-f4ffc",
    storageBucket: "react-apps-course-f4ffc.appspot.com",
    messagingSenderId: "718429949062",
    appId: "1:718429949062:web:5145a1002892b100091507",
    measurementId: "G-6Y1YT2YLWJ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}