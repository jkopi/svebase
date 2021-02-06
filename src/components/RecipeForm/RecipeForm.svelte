<script lang="ts">
  import Form from "@svelteschool/svelte-forms";
  import IngredientInput from "./IngredientInput.svelte";
  import { auth } from "../../config/firebase";
  let values: any;
</script>

<Form bind:values>
  <fieldset>
    <label>
      <input
        class="name-input"
        placeholder="Recipe name"
        type="text"
        name="recipeName"
      />
    </label>
  </fieldset>
  <div class="input">
    <h3>Ingredients</h3>
    <IngredientInput />
    <button
      type="button"
      on:click={() => {
        console.log("row yes");
      }}>Add row</button
    >
  </div>

  <label for="description">Description</label>
  <fieldset>
    <textarea id="description" name="description"></textarea>
  </fieldset>
</Form>
<pre>{JSON.stringify(values, undefined, 1)}</pre>
<button
  on:click={() => {
    console.log(auth.currentUser);
    values = { ...values, firstName: "hello world" };
  }}
>
  Create
</button>

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
