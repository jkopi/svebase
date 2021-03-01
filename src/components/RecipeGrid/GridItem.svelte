<script lang="ts">
  import { storageRef } from "../../config/firebase";

  export let data: any;
  let image = "images/placeholder.png";
</script>

<div class="my-1 mb-4 px-1 w-1/4 h-1/4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
  <figure class="relative max-h-full cursor-pointer">
    {#if data.image}
      {#await storageRef.child(data.image).getDownloadURL()}
        <img
          src={image}
          alt="placeholder"
          class="object-contain h-56 w-full rounded-lg"
        />
      {:then url}
        <img
          src={url}
          alt="recipe"
          class="object-fill h-56 w-full rounded-lg"
        />
      {/await}
    {:else}
      <img
        src={image}
        alt="placeholder"
        class="object-contain h-56 w-full rounded-lg"
      />
    {/if}
    <figcaption>
      <div class="top-0 text-lg -mt-16 text-gray-800">
        <a class="link" href="/#/recipe/{data.id}">{data.name}</a>
      </div>
    </figcaption>
  </figure>
</div>

<style>
  .link {
    color: black;
    text-decoration: none;
  }
</style>
