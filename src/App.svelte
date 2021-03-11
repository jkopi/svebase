<script lang="ts">
  import { authState } from "rxfire/auth";
  import { onMount } from "svelte";
  import { auth } from "./config/firebase";
  import type { User } from "./interfaces/User";
  import Router from "svelte-spa-router";
  import Navigation from "./components/Navigation/Navigation.svelte";
  import routes from "./components/Navigation/Routes";
  import Info from "./components/Info.svelte";

  // let currentUser: User | null;

  // probably not the best way but it works for now
  // onMount(() => {
  //   authState(auth).subscribe((u) => (currentUser = u));
  // });
</script>

<main>
  <!-- <Navigation {currentUser} /> -->
  <Info />
  <Router {routes} />
</main>

<style>
  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(237, 242, 247);
  }
</style>
