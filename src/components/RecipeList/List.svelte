<script lang="ts">
  import { onMount } from "svelte";
  import mockrecipes from "../../mockdata/mockrecipes";
  import Container from "../Container.svelte";

  onMount(() => {
    console.log(JSON.stringify(mockrecipes));
  });
</script>

<Container>
  {#each mockrecipes as recipe, id}
    <div
      class="py-8 px-4 m-1 w-full border border-green-500 shadow-lg rounded-xl"
    >
      <h1>{recipe.name}</h1>
      <p>{recipe.name}</p>
      <a href="/#/recipe/{id}">{id}</a>
    </div>
  {/each}
</Container>

<style>
</style>
