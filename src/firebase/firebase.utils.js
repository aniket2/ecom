import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVAKZt6H811oMt_gd21kySrTa_rXMQyho",
    authDomain: "ecom-c8e52.firebaseapp.com",
    databaseURL: "https://ecom-c8e52.firebaseio.com",
    projectId: "ecom-c8e52",
    storageBucket: "ecom-c8e52.appspot.com",
    messagingSenderId: "453412944981",
    appId: "1:453412944981:web:2ce54a056f4fdb56c3e8dc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase; 