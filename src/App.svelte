<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Container from "./components/Container.svelte";
  import Navigation from "./components/Navigation.svelte";
  import RecipeList from "./components/RecipeList.svelte";
  import { auth, googleProvider } from "./config/firebase";
  import { authState } from "rxfire/auth";
  import Home from "./views/Home.svelte";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  const signIn = () => {
    auth.signInWithPopup(googleProvider);
  };

  const signOut = () => {
    auth.signOut();
  };
</script>

<Router>
  <Navigation>
    <Link to="/">Home</Link>
    <Link to="/recipes">Recipes</Link>
    {#if user}
      <button on:click={() => signOut()}>logout</button>
    {:else}
      <button on:click={signIn}>login</button>
    {/if}
  </Navigation>
  <Container>
    <Route path="/">
      <Home />
    </Route>
    <Route>
      <RecipeList />
    </Route>
  </Container>
</Router>

<style>
</style>
