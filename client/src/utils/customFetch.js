import axios from 'axios';

const customFetch = axios.create({
  baseURL: import.meta.env.REACT_APP_FETCH,
});

export default customFetch;
