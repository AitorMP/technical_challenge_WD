import axios from 'axios';

const phonesApi = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
  withCredentials: true
});

export default phonesApi;
