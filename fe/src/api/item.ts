import axios from 'axios';
import { ItemPage } from '../types/ItemPage';

axios.defaults.baseURL = 'https://project-nice-gadgets.onrender.com/';

export const getPhone = async(id: string) => {
  const result = await axios.get(
    `/data/phones/${id}.json`,
  );

  return result.data as ItemPage;
};
