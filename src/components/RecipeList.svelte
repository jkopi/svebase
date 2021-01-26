<script lang="ts">
  import { collectionData } from "rxfire/firestore";
  import { getContext, onMount } from "svelte";
  import { authState } from "rxfire/auth";

  //const query = db.collection("recipes").where("uid", "==", user.uid);
  //const recipes = collectionData(query, "id");

  onMount(() => {
    console.log(authState);
  });
</script>

<main>
  <ul />
</main>

<style>
  /* your styles go here */
</style>
