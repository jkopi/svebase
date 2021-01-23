<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { auth, googleProvider } from "./config/firebase";
  import { authState } from "rxfire/auth";
  import Home from "./views/Home.svelte";
  import Conf from "./config/firebase";
  import Container from "./components/Container.svelte";

  let user;

  const unsubscribe = authState(auth).subscribe(
    (u: firebase.default.User) => (user = u)
  );

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  function clog() {
    console.log(user);
  }
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <button on:click={clog}>log</button>
    {#if user}
      <button on:click={() => auth.signOut()}>logout</button>
    {:else}
      <button on:click={login}>login</button>
    {/if}
  </nav>
  <div>
    <Route path="/">
      <Home {...user} />
    </Route>
  </div>
</Router>

<style></style>
