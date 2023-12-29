import axios from 'axios';

axios.defaults.headers.post = {
  'Content-Type': 'application/json',
};
axios.defaults.headers.patch = {
  'Content-Type': 'application/json',
};
axios.defaults.headers.put = {
  'Content-Type': 'application/json',
};

export const homeAxios = axios.create({
  baseURL: 'https://6570104a09586eff6640a519.mockapi.io',
});
