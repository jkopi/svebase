<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Container from "./components/Container.svelte";
  import Navigation from "./components/Navigation.svelte";
  import RecipeList from "./components/RecipeList.svelte";
  import firebase, { auth, loggedIn$, app } from "./config/firebase";
  import Home from "./views/Home.svelte";

  const user = loggedIn$;

  const signIn = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(authProvider);
  };
</script>

<Router>
  <Navigation>
    <Link to="/">Home</Link>
    <Link to="/recipes">Recipes</Link>
    {#if $user}
      <button on:click={() => auth.signOut()}>logout</button>
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
