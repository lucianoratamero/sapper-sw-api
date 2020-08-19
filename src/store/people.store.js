import { derived } from 'svelte/store';

import searchTerm from './searchTerm.store';
import { derivedPromisable } from './storeTemplates';
import axios from 'axios';

const fetchPeopleByName = (searchTerm) =>
  axios
    .get(`//jsonplaceholder.typicode.com/users?q=${searchTerm}`)
    .then((response) => response.data);

export default derivedPromisable(
  searchTerm,
  fetchPeopleByName,
  (currentSearchTerm, previousSearchTerm) =>
    currentSearchTerm && currentSearchTerm !== previousSearchTerm
);
