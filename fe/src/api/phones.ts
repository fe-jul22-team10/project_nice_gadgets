import axios from 'axios';

axios.defaults.baseURL = 'https://fast-shelf-97147.herokuapp.com/';

export function getPhones() {
  return axios.get('/phones');
}
