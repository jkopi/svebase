import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { authState } from "rxfire/auth";
import type { Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import type { User } from '../interfaces/User';
import config from "./config";

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

/* maybe redundant, keeping just in case */
export const loggedUser$ = authState(auth)
  .pipe(filter((u: User) => u !== null))
  .subscribe((u: User) => {
    console.log("user yes?", u)
  });

/* observe logged in user */
export const loggedIn$ = authState(auth).pipe(filter((user: User) => !!user));


/* Maybe should move dese, dunno... */
export const signIn = () => {
  auth.signInWithPopup(googleProvider).then(r => {
    console.log("signed in w/ google")
  });
};

export const signOut = () => {
  auth.signOut();
  window.location.reload();
};