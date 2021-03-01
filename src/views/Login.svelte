<script lang="ts">
  import { auth } from "../config/firebase";

  // TODO: implement user creation
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
    on:click={() => console.log("nothing happens")}>Submit</button
  >
</div>
