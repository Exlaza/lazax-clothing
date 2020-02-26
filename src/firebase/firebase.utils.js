import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClRs0P1tHxBUAxQdx4aZvZ9MHKTI-z0uI",
    authDomain: "lazax-db.firebaseapp.com",
    databaseURL: "https://lazax-db.firebaseio.com",
    projectId: "lazax-db",
    storageBucket: "lazax-db.appspot.com",
    messagingSenderId: "1011718710431",
    appId: "1:1011718710431:web:e1ac6678253a7eac0baeaa",
    measurementId: "G-9T1TY9EQ2M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;