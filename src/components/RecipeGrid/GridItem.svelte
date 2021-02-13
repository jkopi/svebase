<script>
  export let data;
</script>

<div class="flex flex-col rounded-lg h-56 border-gray-600">
  <div class="flex-auto">
    <img
      src="https://loremflickr.com/640/360"
      alt="cat"
      class="object-contain w-full h-auto rounded-lg"
    />
    <span>{data}</span>
  </div>
</div>
