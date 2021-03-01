<script lang="ts">
  import Form from "@svelteschool/svelte-forms";
  import Container from "../Container.svelte";
  import randomId from "../../utils/randomId";
  import { ingredientStorage } from "../../store/ingredient";
  import { onMount } from "svelte";
  import { createRecipe } from "../../recipes";
  import { storageRef } from "../../config/firebase";
  import { getNotificationsContext } from "svelte-notifications";

  const { addNotification } = getNotificationsContext();

  let values;
  let image;

  let ingredients = [];
  let ingredientValues = {
    quantity: "",
    ingredient: "",
  };

  onMount(() => {
    ingredientStorage.subscribe((values) => {
      ingredients = values;
    });
    console.log("ingredients in store:", ingredients);
  });

  // image upload
  const upload = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      image = file.name;
      await storageRef.child(image).put(file);

      console.log(file.name);
    }
    console.log("image in input:", image);
  };

  const handleSubmit = () => {
    let id = randomId();
    let createdAt = Date.now();
    values = { createdAt, id, ...values, ingredients, image }; //, uid: auth.currentUser.uid

    console.log(values);
    addNotification({
      text: "Recipe Created",
      position: "bottom-center",
      type: "success",
      removeAfter: 3000,
    });
    createRecipe(values);
    // reset form values
    values = {};
  };
</script>

<svelte:head>
  <title>New recipe</title>
</svelte:head>

<Container>
  <div class="mt-5 mx-2 md:mt-0 md:col-span-2">
    <h1 class="text-4xl">Create recipe</h1>
    <Form bind:values>
      <fieldset>
        <label>
          <input
            class="block p-2 mt-1 w-64 lg:text-lg rounded-lg focus:ring-indigo-500 focus:border-orange-900 focus:outline-none shadow-sm border-gray-600"
            placeholder="Recipe name"
            type="text"
            name="name"
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          <input name="image" type="file" accept="image/*" on:change={upload} />
        </label>
      </fieldset>
      <div class="mt-1 input">
        <label for="ingredient" class="block text-xl font-medium text-gray-700">
          Ingredients
        </label>

        <ul class="list-disc list-inside m-2">
          {#each ingredients as ing}
            <li class="flex-row">
              <span class="space-x-10 text-lg"
                >{ing.quantity} {ing.ingredient}</span
              >
            </li>
          {/each}
        </ul>

        <input
          type="text"
          placeholder="Quantity"
          class="mt-1 p-2 rounded-lg focus:outline-none focus:border-orange-900 shadow-md border-gray-600"
          bind:value={ingredientValues.quantity}
        />
        <input
          type="text"
          placeholder="Ingredient"
          class="mt-1 p-2 rounded-lg focus:outline-none focus:border-orange-900 shadow-md border-gray-600"
          bind:value={ingredientValues.ingredient}
        />
        <button
          type="button"
          class="flex h-8 px-2 my-2 rounded-lg focus:outline-none focus:border-orange-900 border-amber-600"
          on:click={() => {
            ingredientStorage.addIngredient(
              ingredientValues.quantity,
              ingredientValues.ingredient
            );
            console.log(ingredients);
            console.log("------//------");
            console.log(ingredientValues);
          }}>Add ingredient</button
        >
      </div>

      <div class="mt-1">
        <label
          for="description"
          class="block text-md font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="3"
          class="mt-1 p-2 block w-full sm:text-sm rounded-lg focus:outline-none focus:border-orange-900 shadow-md border-gray-600"
          placeholder="desc desc"
        />
      </div>
      <div class="flex px-2 py-3 bg-gray-50">
        <button
          class="h-8 w-20 rounded-lg focus:outline-none focus:border-orange-900 border-amber-600"
          type="button"
          on:click={() => {
            handleSubmit();
          }}
        >
          Create
        </button>
      </div>
    </Form>
  </div>
</Container>

<style>
  label {
    display: inline;
  }
  fieldset {
    padding: 10px 0;
    border: none;
  }
</style>
