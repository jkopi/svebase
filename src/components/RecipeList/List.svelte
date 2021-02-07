<script lang="ts">
  import { onMount } from "svelte";
  import mockrecipes from "../../mockdata/mockrecipes";

  onMount(() => {
    console.log(JSON.stringify(mockrecipes));
  });
</script>

<div class="flex flex-col">
  {#each mockrecipes as recipe}
    <div
      class="py-8 px-4 m-1 w-96 border border-green-500 shadow-lg rounded-xl"
    >
      <p>{recipe.name}</p>
    </div>
  {/each}
</div>

<style>
</style>
