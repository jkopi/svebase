<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./components/Navigation/Routes";
  import Info from "./components/Info.svelte";

  // let currentUser: User | null;

  // probably not the best way but it works for now
  // onMount(() => {
  //   authState(auth).subscribe((u) => (currentUser = u));
  // });
</script>

<main>
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
