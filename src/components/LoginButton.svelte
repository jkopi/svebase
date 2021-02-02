<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button class="login-btn" on:click={() => dispatch("login")}>Login</button>

<style>
  .login-btn {
    box-shadow: 1px 1px black;
    width: 5rem;
  }
</style>
