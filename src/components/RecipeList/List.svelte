<script lang="ts">
  import { onMount } from "svelte";

  let dataz = [
    {
      name: "omelette with paprika",
      ingredients: [
        {
          quantity: 4,
          volume: "whole",
          ingredient: "Egg",
        },
        {
          quantity: 1,
          volume: "whole",
          ingredient: "Paprika",
        },
        {
          quantity: 1,
          volume: "whole",
          ingredient: "Onion",
        },
      ],
      description: "easy omelette with paprika and onions",
      createdAt: new Date(),
      uid: "kaytid",
    },
    {
      name: "Meat stew",
      ingredients: [
        {
          quantity: 4,
          volume: "whole",
          ingredient: "Egg",
        },
        {
          quantity: 1,
          volume: "whole",
          ingredient: "Paprika",
        },
        {
          quantity: 1,
          volume: "whole",
          ingredient: "Onion",
        },
      ],
      description: "easy omelette with paprika and onions",
      createdAt: new Date(),
      uid: "kaytid",
    },
  ];

  onMount(() => {
    console.log(JSON.stringify(dataz));
  });
</script>

<div class="flex flex-col">
  {#each dataz as recipe}
    <div
      class="py-8 px-4 m-1 w-96 border border-green-500 shadow-lg rounded-xl"
    >
      <p>{recipe.name}, {recipe.createdAt}</p>
    </div>
  {/each}
</div>

<style>
</style>
