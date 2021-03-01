import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { filter } from 'rxjs/operators';
import type { Recipe } from '../interfaces/Recipe';
import type { User } from '../interfaces/User';
import { recipe } from '../store/recipe';
import config from './config';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// firebase storage reference
export const storageRef = firebase.storage().ref();

// firestore recipe collection
const recipeCollection = db.collection("recipe");
export const collectionId = recipeCollection.doc().id;

const recipeRef = recipeCollection.orderBy("createdAt");
export const crep = recipeRef.get({ source: "cache" })

export const recipes = collectionData(
  recipeCollection.orderBy("createdAt")
).subscribe(rcps => recipe.setRecipes(rcps as Recipe[]));

/* maybe redundant, keeping just in case */
export const loggedUser$ = authState(auth)
  .pipe(filter((u: User) => u !== null));
// .subscribe((u: User) => {
//   currentUser = u
//   console.log("currentUser in firebase.ts", currentUser);
// });

/* observe logged in user */
export const loggedIn$ = authState(auth).pipe(filter((user: User) => !!user));