<script lang="ts">
  import Container from "./components/Container.svelte";
  export let name: string;
  export let numbar: number;
</script>

<main>
  <h1>Hello {name}!</h1>
  <h4>de numbar is {numbar}</h4>
  <Container />
</main>

<style>
  /** */
</style>
