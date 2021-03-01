<script lang="ts">
  import GridItem from "./GridItem.svelte";
  import { recipe } from "../../store/recipe";
</script>

<div class="flex flex-wrap overflow-hidden -mx-1">
  {#each $recipe as item (item.id)}
    <GridItem data={item} />
  {/each}
</div>
