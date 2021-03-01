import { writable } from "svelte/store";
import type { ingredient } from "../interfaces/Recipe";

function ingredientStore() {
  const { subscribe, set, update } = writable([]);

  const addIngredient = (qua, ing) => update(ingredients => {
    const ingredient = {
      quantity: qua,
      ingredient: ing
    } as ingredient;

    return [...ingredients, ingredient]
  });

  const removeIngredient = (id) => {
    // TODO: implement ingredient deletion
    console.log("nothing happens")
  }

  return {
    subscribe,
    addIngredient,
    removeIngredient
  }
}

export const ingredientStorage = ingredientStore();