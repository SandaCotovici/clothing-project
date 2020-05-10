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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef

}

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;