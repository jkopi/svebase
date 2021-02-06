<script lang="ts">
  import { Router, Link, Route, link } from "svelte-routing";
  import Container from "./components/Container.svelte";
  import Navigation from "./components/Navigation.svelte";
  import { auth, signIn, signOut } from "./config/firebase";
  import { authState } from "rxfire/auth";
  import Home from "./views/Home.svelte";
  import LoginButton from "./components/LoginButton.svelte";
  import NotFound from "./views/NotFound.svelte";
  import Icon from "./components/Icon.svelte";
  import { faHome } from "@fortawesome/free-solid-svg-icons";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));
</script>

<Router>
  <Navigation>
    <a href="/" class="link" use:link>
      <Icon icon={faHome} iconSize="2x" iconColor="orange" />
    </a>
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
    <Route component={NotFound} />
  </Container>
</Router>

<style>
  .link {
    color: black;
    text-decoration: none;
  }
</style>
