<script lang="ts">
  import Form from "@svelteschool/svelte-forms";
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
  <fieldset>
    <input placeholder="Enter email" type="email" name="email" />
    <input placeholder="Phone Number" type="numeric" name="phone" />
  </fieldset>
  <div class="input">
    <label>What are your favorite movies?</label>
    <ul>
      <li>
        <input id="m1" type="checkbox" name="movies" value="Space Jam" />
        <label for="m1">Space Jam</label>
      </li>
      <li>
        <input id="m2" type="checkbox" name="movies" value="Home Alone" />
        <label for="m2">Home Alone</label>
      </li>
      <li>
        <input id="m3" type="checkbox" name="movies" value="Frozen" />
        <label for="m3">Frozen</label>
      </li>
      <li>
        <input id="m4" type="checkbox" name="movies" value="Star Wars" />
        <label for="m4">Star Wars</label>
      </li>
    </ul>
  </div>

  <label for="topping">Select topping:</label>
  <select id="topping" name="topping">
    <option value="Cream">Cream</option>
    <option value="Chocolate">Chocolate</option>
    <option value="Maple Syrup">Maple Syrup</option>
  </select>
</Form>
<pre>{JSON.stringify(values, undefined, 1)}</pre>
<button
  on:click={() =>
    (values = { ...values, firstName: "WOW! Two-way bound! Amazing!" })}
>
  Check 'dat two-way binding!
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
