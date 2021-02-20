<script lang="ts">
  import Icon from "./Icon.svelte";
  import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import { auth, googleProvider } from "../config/firebase";
  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  import type { User } from "../interfaces/User";

  let isOpen: Boolean = false;

  let currentUser: User | null;

  onMount(() => {
    authState(auth).subscribe((u) => {
      if (u === null) {
        console.error("NOT AUTHENTICATED");
      }
      currentUser = u;
    });
  });

  const signIn = () => {
    auth.signInWithPopup(googleProvider).then((r) => {
      console.log("signed in w/ google");
    });
    isOpen = false;
  };

  const signOut = () => {
    auth.signOut();
    isOpen = false;
  };
</script>

<div class="relative">
  <button
    on:click={() => (isOpen = !isOpen)}
    class="relative z-10 block h-10 px-5 rounded-lg overflow-hidden  focus:outline-none"
  >
    <div class="inline-flex items-center space-x-2">
      <span><Icon icon={faUser} iconSize="md" iconColor="red" /></span>
      {#if currentUser}
        <p>{currentUser?.displayName}</p>
      {:else}
        <p>Sign in</p>
      {/if}
      <span><Icon icon={faCaretDown} iconSize="md" iconColor="grey" /></span>
    </div>
  </button>
  {#if isOpen}
    <button
      on:click={() => (isOpen = false)}
      tabindex="-1"
      class="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-black opacity-50 cursor-default"
    />
  {/if}
  {#if isOpen}
    <div
      class="absolute right-2 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
      transition:fade
    >
      {#if currentUser}
        <span
          on:click={() => signOut()}
          class="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-orange-700 hover:text-white"
          >Logout</span
        >
      {:else}
        <span
          class="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-orange-700 hover:text-white"
          ><a href="/#/login" on:click={() => (isOpen = false)}>Sign up</a
          ></span
        >
        <span
          on:click={() => signIn()}
          class="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-orange-700 hover:text-white"
          >Sign in with google</span
        >
      {/if}
    </div>
  {/if}
</div>
