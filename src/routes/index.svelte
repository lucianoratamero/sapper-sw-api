<script>
  import SearchInput from './_components/SearchInput.svelte';
  import SearchResults from './_components/SearchResults.svelte';
</script>

<style>
  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

<svelte:head>
  <title>Sapper SW API</title>
</svelte:head>

<main>
  <h1>Star Wars API</h1>
  <SearchInput />
  <SearchResults />
</main>
