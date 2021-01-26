<script lang="ts">
  import { collectionData } from "rxfire/firestore";
  import { getContext, onMount } from "svelte";
  import { db, loggedIn$ } from "../config/firebase";

  //const query = db.collection("recipes").where("uid", "==", user.uid);
  //const recipes = collectionData(query, "id");

  onMount(() => {
    //console.log(recipes);
    console.log(loggedIn$.subscribe());
  });
</script>

<main>
  <ul />
</main>

<style>
  /* your styles go here */
</style>
