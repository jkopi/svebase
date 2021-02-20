<script lang="ts">
  import Form from "@svelteschool/svelte-forms";
  import IngredientInput from "./IngredientInput.svelte";
  import { auth } from "../../config/firebase";
  import Container from "../Container.svelte";
  import type { Recipe } from "../../interfaces/Recipe";
  import { inputs } from "../../store/input";
  import { createRecipe } from "../../recipes";

  let values: Recipe;

  const handleSubmit = () => {
    if (auth === null) {
      return false;
    }
    console.log(auth.currentUser.uid);
    values = { ...values, uid: auth.currentUser.uid };
    console.log(values);
    //createRecipe(values);
  };
</script>

<Container>
  <div class="mt-5 mx-2 md:mt-0 md:col-span-2">
    <Form bind:values>
      <fieldset>
        <label>
          <input
            class="mt-1 block w-64  lg:text-lg rounded-lg focus:ring-indigo-500 focus:border-orange-900 focus:outline-none shadow-sm border-gray-300"
            placeholder="Recipe name"
            type="text"
            name="name"
          />
        </label>
      </fieldset>
      <div class="mt-1 input">
        <label for="ingredient" class="block text-md font-medium text-gray-700">
          Ingredients
        </label>
        <svelte:component this={IngredientInput} />
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
          class="mt-1 block w-full sm:text-sm rounded-lg focus:outline-none focus:border-orange-900 shadow-md border-gray-300"
          placeholder="you@example.com"
        />
      </div>
      <div class="flex px-2 py-3 bg-gray-50">
        <button
          class="h-8 w-20 rounded-lg focus:outline-none focus:border-orange-900"
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
<pre>{JSON.stringify(values, undefined, 1)}</pre>

<style>
  label {
    display: inline;
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }

  li {
    padding: 0 10px;
  }

  fieldset {
    padding: 10px 0;
    border: none;
  }
</style>
