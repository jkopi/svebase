import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();

export const signIn = () => {
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

//const app = firebase.initializeApp(config);
//const auth = firebase.auth(app);
//const googleProvider = new firebase.auth.GoogleAuthProvider();
//const db = firebase.firestore(app);
//const loggedIn$ = authState(auth).pipe(filter(user => !!user));
//
//export { app, auth, googleProvider, db, loggedIn$ };
//
//export default firebase;