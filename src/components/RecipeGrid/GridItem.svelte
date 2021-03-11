<script lang="ts">
  import { storageRef } from "../../config/firebase";

  export let data: any;
  let placeholderImage = "images/placeholder.png";
</script>

<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  <article class="overflow-hidden rounded-lg shadow-lg">
    <a href="/#/">
      {#if data.image}
        {#await storageRef.child(data.image).getDownloadURL()}
          <img
            src={placeholderImage}
            alt="placeholder"
            class="block h-auto w-full object-contain"
          />
        {:then url}
          <img src={url} alt="recipe" class="block h-64 w-full object-fill" />
        {/await}
      {/if}
    </a>
    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 class="text-lg">
        <a
          href="/#/recipe/{data.name}"
          class="no-underline font-bold text-gray-700">{data.name}</a
        >
      </h1>
    </header>
  </article>
</div>
