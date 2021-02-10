<script lang="ts">
  import Router from "svelte-spa-router";
  import Navigation from "./components/Navigation/Navigation.svelte";
  import routes from "./components/Navigation/Routes";
</script>

<main>
  <Navigation />
  <Router {routes} />
</main>

<style>
  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --tw-bg-opacity: 1;
    background-color: rgba(237, 242, 247, var(--tw-bg-opacity));
  }
</style>
