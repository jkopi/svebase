<script lang="ts">
  import GridItem from "./GridItem.svelte";
  import { recipe } from "../../store/recipe";
</script>

<!-- <div class="flex flex-wrap overflow-hidden -mx-1"> -->
<div class="container my-12 mx-auto px-4 md:px-12">
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    {#each $recipe as item (item.id)}
      <GridItem data={item} />
    {/each}
  </div>
</div>
