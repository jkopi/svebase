import { db } from './config/firebase'
import type { Recipe } from './interfaces/Recipe'

const recipeCollection = db.collection("recipe");

export const createRecipe = async (rec: Recipe) => {
  if (!rec) return;
  await recipeCollection.add({
    ...rec
  });
}

export const deleteRecipe = async (rec: Recipe) => {
  await recipeCollection.doc(rec.id).delete();
}

export const updateRecipe = async (rec: Recipe) => {
  // TODO: implement this
}