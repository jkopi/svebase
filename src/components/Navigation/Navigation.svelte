<script>
  import {
    faHamburger,
    faUserAlt,
    faUtensils,
  } from "@fortawesome/free-solid-svg-icons";
  import { link } from "svelte-spa-router";
  import { signIn } from "../../config/firebase";
  import Icon from "../Icon.svelte";
  import LoginButton from "../LoginButton.svelte";

  export let user;
</script>

<!--<a href="/" class="link" use:link>
        <Icon icon={faHome} iconSize="2x" iconColor="orange" />
      </a>
      {#if user}
        <button on:click={() => signOut()}>logout</button>
      {:else}
        <LoginButton on:login={signIn} />
      {/if}-->

<section>
  <header
    class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-6"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="/recipes" class="link" use:link>
        <Icon icon={faUtensils} iconColor="red" iconSize="lg" />
      </a>
    </div>
    <label for="menu-toggle" class="cursor-pointer lg:hidden block">
      <Icon icon={faHamburger} iconSize="lg" iconColor="orange" />
    </label>
    <input type="checkbox" class="hidden" id="menu-toggle" />
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
        >
          <li>
            <a
              href="/"
              class="link lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-amber-800"
              >My recipes</a
            >
          </li>
          <li>
            <a
              href="/"
              class="link lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-amber-800"
              >Create a recipe</a
            >
          </li>
        </ul>
      </nav>
      <a
        href="/"
        class="link lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
      >
        {#if user}
          <Icon icon={faUserAlt} iconSize="lg" />
        {:else}
          <LoginButton on:login={signIn} />
        {/if}
      </a>
    </div>
  </header>
</section>

<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
  .link {
    color: black;
    text-decoration: none;
  }
</style>
