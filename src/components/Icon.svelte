<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

  import Fa from "svelte-fa";
  export let icon: IconDefinition;
  export let iconSize;
  export let iconColor: string;
</script>

<Fa {icon} size={iconSize} color={iconColor} />

<style>
  /**/
</style>
