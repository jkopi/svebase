<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./views/Home.svelte";
  import Conf from "./config/firebase";

  function clog() {
    console.log(Conf);
  }
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <button on:click={clog} />
  </nav>
  <div>
    <Route path="/" component={Home} />
  </div>
</Router>

<style></style>
