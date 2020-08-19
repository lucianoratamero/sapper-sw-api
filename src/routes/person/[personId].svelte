<script>
  import { entries as _entries, capitalize as _capitalize } from 'lodash';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';

  import currentPerson from '../../store/currentPerson.store';

  const { page } = stores();
  const { personId } = $page.params;

  onMount(() => {
    currentPerson.dispatch(parseInt(personId));
  });
</script>

{#await $currentPerson}
  <p>Loading...</p>
{:then $currentPerson}
  <dl>
    {#each _entries($currentPerson) as [label, value]}
      <dt>{_capitalize(label)}</dt>
      <dd>{JSON.stringify(value)}</dd>
    {/each}
  </dl>
{:catch}
  <h1>Person not found</h1>
{/await}
