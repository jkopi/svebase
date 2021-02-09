<script lang="ts">
  import { collectionData } from "rxfire/firestore";
  import { getContext, onMount } from "svelte";
  import { authState } from "rxfire/auth";
  import GridItem from "./GridItem.svelte";

  onMount(() => {
    console.log(authState);
  });
</script>

<section class="grid">
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
  <GridItem />
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    column-gap: 5px;
    row-gap: 5px;
    margin: 5px;
  }
</style>
