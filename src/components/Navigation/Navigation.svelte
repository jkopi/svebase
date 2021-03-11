<script lang="ts">
  import { faHamburger, faUtensils } from "@fortawesome/free-solid-svg-icons";
  import { link } from "svelte-spa-router";
  import Icon from "../Icon.svelte";
  import AuthSelector from "../AuthSelector.svelte";
  import type { User } from "../../interfaces/User";
</script>

<section>
  <header
    class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-6"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="/" class="link" use:link>
        <Icon icon={faUtensils} iconColor="red" iconSize="lg" />
      </a>
    </div>
    <label for="menu-toggle" class="cursor-pointer lg:hidden block">
      <Icon icon={faHamburger} iconSize="lg" iconColor="orange" />
    </label>
    <input type="checkbox" class="hidden" id="menu-toggle" />
    <div class="p-2 hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <!--
        Leave this out for now.. think of use later..
      -->
      <!-- <nav>
        {#if currentUser}
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
          >
            <li>
              <a
                href="/recipes"
                class="link lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-amber-800"
                use:link>My recipes</a
              >
            </li>
            <li>
              <a
                href="/create-recipe"
                class="link lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-amber-800"
                use:link>Create a recipe</a
              >
            </li>
          </ul>
        {:else}
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
          >
            <li
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent cursor-default"
            >
              Not authenticated
            </li>
          </ul>
        {/if}
      </nav> -->
      <AuthSelector />
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
