<script lang="ts">
  import { location } from "svelte-spa-router";
  import { recipe } from "../store/recipe";
  import Container from "../components/Container.svelte";
  import { onMount } from "svelte";
  import type { ingredient, Recipe } from "../interfaces/Recipe";
  import { storageRef } from "../config/firebase";
  import Icon from "../components/Icon.svelte";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";
  import { deleteRecipe } from "../recipes";

  export let params = {} as any;

  let placeholder = "images/placeholder.png";

  let currentRecipe: Recipe;

  // ehh.. probably not good, but sticking for this now :s
  let ingredients: ingredient[] = [];

  onMount(() => {
    recipe.subscribe((resp) => {
      resp.find((x) => {
        if (x.id === params.id) {
          currentRecipe = x;
          ingredients = x.ingredients;
        }
      });
    });
  });

  const onDelete = async (recipe) => {
    await deleteRecipe(recipe)
      .then((a) => console.log(a))
      .catch((error) => {
        console.error(error);
      });
  };
</script>

<svelte:head>
  <title>{currentRecipe?.name}</title>
</svelte:head>

<Container>
  <h1 class="p-4 text-4xl">{currentRecipe?.name}</h1>
  <div class="lg:w-1/2 lg:h-1/2 m-auto">
    {#if currentRecipe?.image}
      {#await storageRef.child(currentRecipe.image).getDownloadURL()}
        <img class="m-auto" src={placeholder} alt="recipe" />
      {:then url}
        <img class="m-auto" src={url} alt="recipe" />
      {/await}
    {:else}
      <img class="m-auto" src={placeholder} alt="placeholder" />
    {/if}
  </div>
  <div class="p-4 h-full">
    <h1>Ingredients</h1>
    <hr class="border-1 border-amber-800 opacity-75" />
    <table class="table-auto w-full my-4">
      <tbody>
        {#each ingredients as rc}
          <tr>
            <td class="px-2">
              <span>{rc?.quantity}</span>
            </td>
            <td class="px-2 text-left">
              <span>{rc?.ingredient}</span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
    <h1>Instructions</h1>
    <hr class="border-1 border-amber-800 opacity-75" />
    <div class="my-2">
      {currentRecipe?.description}
    </div>
  </div>
</Container>
