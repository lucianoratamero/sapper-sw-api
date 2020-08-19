import axios from 'axios';

import { promisable } from './storeTemplates';

const fetchPerson = (personId) => axios
    .get(`//jsonplaceholder.typicode.com/users/${personId}`)
    .then(response => response.data);

export default promisable(
  fetchPerson,
  (personId, currentStateData) => !currentStateData || personId !== currentStateData.id
);
