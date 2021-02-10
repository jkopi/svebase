<script lang="ts">
  import { faUser } from "@fortawesome/free-solid-svg-icons";

  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";

  const dispatch = createEventDispatcher();
</script>

<button
  class="bg-amber-700 hover:bg-amber-800 text-gray-800 font-bold py-2 px-6 rounded-lg inline-flex items-center space-x-2"
  on:click={() => dispatch("auth")}
>
  <Icon icon={faUser} iconColor="black" />
  <span>
    <slot>Login</slot>
  </span>
</button>
