<script>
  import people from '../../store/people.store';
  import searchTerm from '../../store/searchTerm.store';
</script>

{#if $searchTerm}
  {#await $people}
    <p>Searching...</p>
  {:then $people}
    {#each $people as person}
      <a rel="preload" href="/person/{person.id}">
        <h1>Name: {person.name}</h1>
      </a>
    {/each}
  {:catch}
    <h1>ohno</h1>
  {/await}
{/if}
