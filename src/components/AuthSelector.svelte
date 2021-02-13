<script lang="ts">
  import Icon from "./Icon.svelte";
  import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import { signIn } from "../config/firebase";

  let isOpen: Boolean = false;
</script>

<div class="relative">
  <button
    on:click={() => (isOpen = !isOpen)}
    class="relative z-10 block h-10 w-32 rounded-lg overflow-hidden  focus:outline-none"
  >
    <div class="inline-flex items-center space-x-2">
      <span><Icon icon={faUser} iconSize="md" iconColor="red" /></span>
      <p>Sign in</p>
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
      <span
        on:click={() => console.log("TODO: new user creation")}
        class="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-orange-700 hover:text-white"
        >New user</span
      >
      <span
        on:click={() => signIn()}
        class="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-orange-700 hover:text-white"
        >Sign in with google</span
      >
    </div>
  {/if}
</div>
