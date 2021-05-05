import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDbyZw4gVB6XigH2y9i32s40jIgjKlGnao',
  authDomain: 'ecommerce-11ff2.firebaseapp.com',
  projectId: 'ecommerce-11ff2',
  storageBucket: 'ecommerce-11ff2.appspot.com',
  messagingSenderId: '348963113080',
  appId: '1:348963113080:web:46d45b240503f5227e058d',
  measurementId: 'G-KEQJ60TZKD',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
