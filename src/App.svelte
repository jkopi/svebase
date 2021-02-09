<script lang="ts">
  import Router from "svelte-spa-router";
  import Navigation from "./components/Navigation/Navigation.svelte";
  import routes from "./components/Navigation/Routes";
</script>

<main class="antialiased bg-gray-200">
  <Navigation />
  <Router {routes} />
</main>
