import { db } from './config/firebase'
import { collectionData } from 'rxfire/firestore'
import type firebase from 'firebase/app'
import { startWith } from 'rxjs/operators'

interface ingredient {
  quantity: number;
  volume: string;
  ingredient: string;
}

export interface Recipe {
  name: string;
  ingredients: Array<ingredient>
  description?: string;
  createdAt?: Date;
  uid: string;
}

const recipeCollection = db.collection("recipe")
const query = db.collection("recipe").orderBy("uid");
export const recipeResult = collectionData(query).pipe(startWith([]));

export async function createRecipe(rec: Recipe) {
  if (!rec) return;
  await recipeCollection.add({
    ...rec
  });
}