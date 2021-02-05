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
        }
    ];

    onMount(() => {
        console.log(JSON.stringify(dataz))
    });
</script>

<ul>
	{#each dataz as recipe}
		<li>{recipe.name}, {recipe.createdAt}</li>
	{/each}
</ul>

<style>
</style>
