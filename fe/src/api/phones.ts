import axios from 'axios';

axios.defaults.baseURL = 'https://project-nice-gadgets.herokuapp.com/';

const obj = {
  amount: 5,
  page: 2,
  year: 2019,
};

export function getQueryParams(data: any) {
  const queryString = new URLSearchParams(data).toString();
  return queryString;
}

const query = getQueryParams(obj);

export function getPhones() {
  return axios.get(`/products/?${query}`);
}

const products = async() => await getPhones();

console.log(query);
console.log(products());
