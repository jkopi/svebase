import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { authState } from "rxfire/auth";
import { filter } from "rxjs/operators";
import config from "./config";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();

let user;
//
//const unsubscribe = authState(auth).subscribe((u) => (user = u));

export const loggedUser = authState(auth)
  .pipe(filter((u) => u !== null))
  .subscribe((u) => console.log("logged in user: ", u));

export const signIn = () => {
  auth.signInWithPopup(googleProvider).then(r => {
    user = r.user;
  });
};

export const signOut = () => {
  auth.signOut()
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