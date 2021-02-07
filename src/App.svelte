<script lang="ts">
  import Router from "svelte-spa-router";
  import Navigation from "./components/Navigation/Navigation.svelte";
  import { auth, signIn, signOut } from "./config/firebase";
  import { authState } from "rxfire/auth";
  import { filter } from "rxjs/operators";
  import routes from "./components/Navigation/Routes";
  import { onMount } from "svelte";

  const loggedUser = authState(auth)
    .pipe(filter((u) => u !== null))
    .subscribe((u) => console.log("logged in user: ", u));

  onMount(() => {
    console.log(loggedUser);
  });
</script>

<main class="antialiased bg-gray-200">
  {#if loggedUser}
    <Navigation />
    <Router {routes} />
  {:else}
    <p>not authenticated</p>
  {/if}
</main>

<style>
</style>
