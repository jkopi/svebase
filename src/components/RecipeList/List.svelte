<script lang="ts">
  import { onMount } from "svelte";
  import { collectionId } from "../../config/firebase";
  import mockrecipes from "../../mockdata/mockrecipes";
  import Container from "../Container.svelte";
  import { recipe } from "../../store/recipe";

  const ran = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  onMount(() => {
    console.log("bli blo");
  });
</script>

<Container>
  <button on:click={() => console.log(collectionId)}>test</button>
  {#each mockrecipes as recipe}
    <div
      class="py-8 px-4 m-1 w-full border border-green-500 shadow-lg rounded-xl"
    >
      <h1>{recipe.name}</h1>
      <p>{recipe.name}</p>
      <a href="/#/recipe/">asd</a>
    </div>
  {/each}
</Container>

<style>
</style>
