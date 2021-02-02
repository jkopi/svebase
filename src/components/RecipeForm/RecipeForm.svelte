<script lang="ts">
  import Form from "@svelteschool/svelte-forms";
  import IngredientInput from "./IngredientInput.svelte";
  let values: any;
</script>

<Form bind:values>
  <fieldset>
    <input
      class="name-input"
      placeholder="Recipe name"
      type="text"
      name="recipeName"
    />
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
    <textarea name="description" />
  </fieldset>
</Form>
<pre>{JSON.stringify(values, undefined, 1)}</pre>
<button on:click={() => (values = { ...values, firstName: "hello wörld" })}>
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
