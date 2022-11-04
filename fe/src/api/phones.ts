import axios from 'axios';

axios.defaults.baseURL = 'https://project-nice-gadgets.herokuapp.com/';

export const getPhones = async(obj: any) => {
  const queryString = new URLSearchParams(obj).toString();
  const result = await axios.get(`/products/?${queryString}`);

  return result.data;
};
