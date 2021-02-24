<script lang="ts">
  import { onMount } from "svelte";
  import { auth } from "../config/firebase";

  onMount(() => {
    console.log("LOGIN");
  });

  // todo: https://svelte.dev/tutorial/text-inputs
  // bind values to inputs and so on..
  const signUp = (email, pass) => {
    console.log("me not that kind of orc");
    auth.createUserWithEmailAndPassword(email, pass).catch((err) => {
      if (err.code == "auth/weak-password") {
        console.error("password is too weak BOIII");
      } else {
        console.error(err.message);
      }
      console.error(err);
    });
  };
</script>

<div class="container flex-1 flex-col max-w-sm mx-auto py-4 px-4 shadow-xl">
  <h1 class="text-center py-4 mb-4 text-3xl">Sign up</h1>
  <fieldset>
    <input
      class="block w-full p-1 mb-5 rounded-lg border-amber-400 focus:outline-none focus:border-amber-600"
      placeholder="Email"
      type="email"
      required
    />
    <input
      class="block w-full p-1 mb-5 rounded-lg border-amber-400 focus:outline-none focus:border-amber-600"
      placeholder="Password"
      type="text"
      required
    />
  </fieldset>
  <button
    class="block w-full my-4 p-2 rounded-lg bg-amber-300 focus:outline-none"
    type="button"
    on:click={() => signUp()}>Submit</button
  >
</div>
