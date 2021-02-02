<script lang="ts">
  import { onMount } from "svelte";

  import { db } from "../config/firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { createRecipe } from "../recipes";
  import type { Recipe } from "../recipes";
  import { recipes } from "../recipes";
  const query = db.collection("recipe").orderBy("uid");
  const getData = collectionData(query, "id").subscribe((reps) =>
    console.log(reps)
  );

  //const recipes = collectionData(query).pipe(startWith([]));
  onMount(() => {
    getData;
  });

  let obj: Recipe = {
    name: "omelette with paprika",
    ingredients: [
      {
        quantity: 4,
        volume: "whole",
        ingredient: "Egg",
      },
      {
        quantity: 1,
        volume: "whole",
        ingredient: "Paprika",
      },
      {
        quantity: 1,
        volume: "whole",
        ingredient: "Onion",
      },
    ],
    description: "easy omelette with paprika and onions",
    createdAt: new Date(),
    uid: "kaytid",
  };
</script>

<ul>
  {#each $recipes as recipe}
    <li>{recipe.name}</li>
  {/each}
</ul>
<button
  on:click={() => {
    createRecipe(obj);
    console.log(obj);
  }}>Add</button
>

<style>
</style>
