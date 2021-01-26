import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { authState } from "rxfire/auth";
import { filter } from "rxjs/operators";

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

const app = firebase.initializeApp(config);
const auth = firebase.auth(app);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore(app);
const loggedIn$ = authState(auth).pipe(filter(user => !!user));

export { app, auth, googleProvider, db, loggedIn$ };

export default firebase;