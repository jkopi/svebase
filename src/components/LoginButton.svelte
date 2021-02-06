<script lang="ts">
  import { faUser } from "@fortawesome/free-solid-svg-icons";

  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";

  const dispatch = createEventDispatcher();
</script>

<button
  class="bg-amber-700 hover:bg-amber-800 text-gray-800 font-bold py-2 px-7 rounded inline-flex items-center"
  on:click={() => dispatch("login")}
>
  <Icon icon={faUser} iconColor="black" />
  <span>Login</span>
</button>
