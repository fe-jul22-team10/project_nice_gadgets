import axios from 'axios';

axios.defaults.baseURL = 'https://project-nice-gadgets.herokuapp.com/';

export function getPhones() {
  return axios.get('/products');
}
