import axios from 'axios';

axios.defaults.baseURL = 'https://fe-jul-catalog-server.herokuapp.com/';

export async function getPhones() {
  try {
    const response = await axios.get('/phones');
    console.log(response);
  } catch (error) {
      console.error(error);
  }
}
