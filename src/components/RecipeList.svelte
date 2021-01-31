<script lang="ts">
  import { onMount } from "svelte";

  import { db } from "../config/firebase";
  import { collectionData } from "rxfire/firestore";

  let recipes: Array<any>;
  const query = db.collection("recipe");
  const getData = collectionData(query, "id").subscribe((reps) =>
    console.log(reps)
  );

  onMount(() => {
    console.log(getData);
  });
</script>

<ul />

<style>
</style>
