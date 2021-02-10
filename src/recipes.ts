import { db } from './config/firebase'
import { collectionData } from 'rxfire/firestore'
import type firebase from 'firebase/app'
import { startWith } from 'rxjs/operators'
import type { Recipe } from './interfaces/Recipe'

const recipeCollection = db.collection("recipe")
const query = db.collection("recipe").orderBy("uid");
export const recipeResult = collectionData(query).pipe(startWith([]));

export async function createRecipe(rec: Recipe) {
  if (!rec) return;
  await recipeCollection.add({
    ...rec
  });
}