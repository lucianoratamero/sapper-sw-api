
import { writable, get } from 'svelte/store';

const getCurrentState = () => get(currentPersonStore);

function createCurrentPersonStore(){
  const { subscribe, update, set } = writable();

  const fetchPerson = personId => fetch(`https://jsonplaceholder.typicode.com/posts/${personId}`)
    .then(response => response.json())
    .then(data => ({...data, id: personId}));

  const getPersonFromApi = personId => {
    const state = getCurrentState();

    if (state) {
      state.then(lastPerson => {
        if (lastPerson.id !== personId) set(fetchPerson(personId));
      });
    } else {
      set(fetchPerson(personId));
    }
  }

  return {
    subscribe,
    getPersonFromApi,
    update,
    set,
  }
}

const currentPersonStore = createCurrentPersonStore();

export default currentPersonStore;
