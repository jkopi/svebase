<script lang="ts">
  import { authState } from "rxfire/auth";

  import { onMount } from "svelte";

  import { auth } from "../config/firebase";
  import type { User } from "../interfaces/User";
  export let params = {} as any; // ignore undefined for fun

  let currentUser: User | null;

  onMount(() => {
    authState(auth).subscribe((u) => {
      if (u === null) {
        console.error("NOT AUTHENTICATED");
      }
      currentUser = u;
    });
  });
</script>

{#if currentUser}
  <div class="md:container md:mx-auto">
    <div class="h-10">
      <h1>HELLO {currentUser?.displayName}</h1>
      <p>{params.id}</p>
      {currentUser?.photoURL}
    </div>
  </div>
{:else}
  <p>Not authenticated</p>
{/if}
