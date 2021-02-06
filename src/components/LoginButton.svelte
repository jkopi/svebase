<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button class="login-btn" on:click={() => dispatch("login")}>Login</button>

<style>
  .login-btn {
    background: white;
    border-color: #999999;
    width: 8rem;
    height: 2rem;
  }
</style>
