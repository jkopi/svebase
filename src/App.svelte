<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Container from "./components/Container.svelte";
  import Navigation from "./components/Navigation.svelte";
  import { auth, googleProvider, signIn, signOut } from "./config/firebase";
  import { authState } from "rxfire/auth";
  import Home from "./views/Home.svelte";
  import LoginButton from "./components/LoginButton.svelte";

  let user;
  let url: string;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));
</script>

<Router {url}>
  <Navigation>
    <Link to="/">Home</Link>
    {#if user}
      <button on:click={() => signOut()}>logout</button>
    {:else}
      <LoginButton on:login={signIn} />
    {/if}
  </Navigation>
  <Container>
    <Route path="/">
      <Home />
    </Route>
  </Container>
</Router>

<style>
</style>
