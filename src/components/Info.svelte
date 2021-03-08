<script lang="ts">
  import Container from "./Container.svelte";
</script>

<div class="flex flow-row my-2 md:container md:mx-auto">
  <h2>All recipes</h2>
  <button class="justify-end">Create new</button>
  <hr class="border-1 border-amber-700" />
</div>

<!-- {#if displayName}
    <div class="flex p-4 justify-between">
      <p>Welcome, {displayName}</p>
      <button
        class="flex h-8 px-2 rounded-lg focus:outline-none border-amber-600"
      >
        <a href="/#/create-recipe" class="link">Create recipe</a>
      </button>
    </div>
  {/if} -->
