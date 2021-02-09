<script lang="ts">
  import { auth, loggedIn$ } from "../config/firebase";

  export let displayName;
  export let photoURL;
</script>

<main>
  {displayName}
  <img src={photoURL} alt="my face" />
  <button on:click={() => console.log("asd")}>click</button>
</main>

<style>
</style>
