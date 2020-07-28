<script>
  import { entries as _entries, capitalize as _capitalize } from 'lodash';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';

  import currentPerson from '../../store/currentPerson.store';

  const { page } = stores();
  const { personId } = $page.params;

  onMount(() => {
    currentPerson.getPersonFromApi(personId);
  });
</script>

{#await $currentPerson}
  <p>Loading...</p>
{:then $currentPerson}
  <dl>
    {#each _entries($currentPerson) as [label, value]}
      <dt>{_capitalize(label)}</dt>
      <dd>{value}</dd>
    {/each}
  </dl>
{/await}
