<script lang="ts">
  import { faUtensils } from "@fortawesome/free-solid-svg-icons";

  import Icon from "./Icon.svelte";
</script>

<div class="my-2 md:container md:mx-auto">
  <div class="flex p-2">
    <a href="/#/"><Icon icon={faUtensils} iconColor="red" iconSize="lg" /></a>
    <a href="/#/create-recipe" type="button" class="ml-auto font-mono"
      >Create new</a
    >
  </div>
  <hr class="border-1 border-amber-700" />
</div>
