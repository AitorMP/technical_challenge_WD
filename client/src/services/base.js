import api from './phonesApi';

export const listPhones = () => {
  return api.get('/phones').then((response) => response.data);
};

export const phoneLoad = (id) =>
  api.get(`/phones/${id}.then(response => response.data)`);
