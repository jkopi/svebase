<script lang="ts">
  import Form from "@svelteschool/svelte-forms";
  import IngredientInput from "./IngredientInput.svelte";
  import { auth } from "../../config/firebase";
  import Container from "../Container.svelte";
  import type { Recipe } from "../../interfaces/Recipe";
  let values: Recipe;

  let list: HTMLLIElement;

  let count: number = 0;
  $: inputCount = count;

  const handleCount = () => {
    count += 1;
    console.log(inputCount);
  };
  const addInput = () => {
    // hmmmm
    //let customElement: any = customElements.define(
    //  "input",
    //  IngredientInput as any
    //);
    let asd = document.createElement("li");
    list.appendChild(asd);
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
        <ul>
          <li><IngredientInput /></li>
        </ul>
        <button
          class="block h-8 w-20 my-2 rounded-lg focus:outline-none focus:border-orange-900"
          type="button"
          on:click={() => {
            handleCount();
          }}>Add row</button
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
          class="mt-1 block w-full sm:text-sm rounded-lg focus:outline-none focus:border-orange-900 shadow-md border-gray-300"
          placeholder="you@example.com"
        />
      </div>
      <div class="flex px-2 py-3 bg-gray-50">
        <button
          class="h-8 w-20 rounded-lg focus:outline-none focus:border-orange-900"
          type="button"
          on:click={() => {
            console.log(auth.currentUser);
            values = { ...values, uid: "hello world" };
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

  .name-input {
    color: black;
    font-weight: bolder;
  }
</style>
