<script lang="ts">
  import GridItem from "./GridItem.svelte";
  import mockrecipes from "../../mockdata/mockrecipes";
</script>

<div class="grid grid-cols-4 gap-2 my-2">
  {#each mockrecipes as recipe}
    <GridItem data={recipe.name} />
  {/each}
</div>
