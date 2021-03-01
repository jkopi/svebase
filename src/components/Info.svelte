<script lang="ts">
  import Container from "./Container.svelte";
  export let displayName: any;
</script>

<Container>
  {#if displayName}
    <div class="flex p-4 justify-between">
      <p>Welcome, {displayName}</p>
      <button
        class="flex h-8 px-2 rounded-lg focus:outline-none border-amber-600"
      >
        <a href="/#/create-recipe" class="link">Create recipe</a>
      </button>
    </div>
  {/if}
</Container>

<style>
  .link {
    color: black;
    text-decoration: none;
  }
</style>
