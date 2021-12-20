
import firebase from 'firebase/compat/app' // a partir de V9 se agrega el directorio compat (compatibilidad) sino hacer un downgrade de firebase
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDiKKbweLcKvwyaUgKjzfsLsSOA0puuY5U",
    authDomain: "mi-aerolinea.firebaseapp.com",
    projectId: "mi-aerolinea",
    storageBucket: "mi-aerolinea.appspot.com",
    messagingSenderId: "513170921958",
    appId: "1:513170921958:web:05d16bf40af6bb97715e27"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}