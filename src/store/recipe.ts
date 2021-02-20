import { writable } from "svelte/store";
import type { Recipe } from "../interfaces/Recipe";

function recipeStore() {
  const { subscribe, set } = writable<Recipe[]>([]);
  return {
    subscribe,
    setRecipes: (recipes: Recipe[]) => {
      set(recipes)
    }
  }
}

export const recipe = recipeStore();