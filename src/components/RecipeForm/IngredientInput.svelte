<script lang="ts">
  import { faTrash } from "@fortawesome/free-solid-svg-icons";

  import Icon from "../Icon.svelte";
</script>

<div class="flex flex-row space-x-2">
  <input class="w-24" placeholder="0" type="number" name="quantity" />
  <input class="w-64" placeholder="Ingredient" type="text" name="ingredient" />
  <button
    type="button"
    class="flex justify-center py-1 w-10 rounded-lg focus:outline-none focus:border-orange-900"
  >
    <Icon icon={faTrash} iconColor="red" iconSize="md" />
  </button>
</div>
