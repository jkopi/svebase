<script lang="ts">
  import { faTrash } from "@fortawesome/free-solid-svg-icons";
  import { inputs } from "../../store/input";
  import Icon from "../Icon.svelte";

  let elements;

  function newInput() {
    let element = document.createElement("input");
    element.type = "text";
    element.name = "ingredient";

    elements.appendChild(element);
  }
</script>

<div class="flex flex-row space-x-2">
  <div bind:this={elements} />
  <input class="w-24" placeholder="0" type="number" name="quantity" />
  <input class="w-64" placeholder="Ingredient" type="text" name="ingredient" />
  <button
    type="button"
    class="flex justify-center py-1 w-10 rounded-lg focus:outline-none focus:border-orange-900"
  >
    <Icon icon={faTrash} iconColor="red" iconSize="md" />
  </button>
</div>
<div>
  <button
    type="button"
    class="flex h-8 px-2 my-2 rounded-lg focus:outline-none focus:border-orange-900"
    on:click={() => console.log("asd")}
    >Add ingredient
  </button>
</div>
