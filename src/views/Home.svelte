<script lang="ts">
  import { authState } from "rxfire/auth";
  import { onMount } from "svelte";
  import Info from "../components/Info.svelte";
  import Grid from "../components/RecipeGrid/Grid.svelte";
  import { auth, loggedUser$ } from "../config/firebase";
  import type { User } from "../interfaces/User";

  let data: User | null;

  // probably not the best way but it works for now
  onMount(() => {
    authState(auth).subscribe((u) => (data = u));
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="md:container md:mx-auto">
  <Info {...data} />
  <h2>All recipes</h2>
  <hr class="m-2 border-1 border-amber-700" />
  <Grid />
</div>
