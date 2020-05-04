import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBMiDe-P7SuuhWQ_qycUPfFs_oUs2ypmh4",
    authDomain: "clooothing-shop515.firebaseapp.com",
    databaseURL: "https://clooothing-shop515.firebaseio.com",
    projectId: "clooothing-shop515",
    storageBucket: "clooothing-shop515.appspot.com",
    messagingSenderId: "334682325519",
    appId: "1:334682325519:web:9ff4eb7c79044e59a4597a",
    measurementId: "G-KR68PTHKKX"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;