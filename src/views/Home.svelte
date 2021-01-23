<script lang="ts">
  export let photoURL: string;
  export let displayName: string;
</script>

<main>
  <img src={photoURL} alt="avatar" />
  <p>{displayName}</p>
</main>

<style>
</style>
