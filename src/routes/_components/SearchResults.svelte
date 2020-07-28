<script>
  import people from '../../store/people.store';

  function getPersonId(personUrl){
    const splittedUrl = personUrl.split('/');
    return parseInt(splittedUrl[splittedUrl.length - 2]);
  }
</script>

{#await $people}
  <p>Searching...</p>
{:then $people}
  {#each $people as person}
    <a rel="preload" href="/person/{getPersonId(person.url)}">
      <h1>Name: {person.name}</h1>
    </a>
  {/each}
{/await}
