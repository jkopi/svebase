<script lang="ts">
  export let params = {} as any; // ignore undefined for fun
</script>

<div class="md:container md:mx-auto">
  <div class="h-10">
    <h1>HELLO</h1>
    <p>{params.id}</p>
  </div>
</div>
