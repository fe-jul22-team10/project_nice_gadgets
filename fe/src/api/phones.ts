import axios, { AxiosResponse } from 'axios';
import { Card } from '../types/Card';

axios.defaults.baseURL = 'https://project-nice-gadgets.herokuapp.com/';

export const getPhones = async(obj: Record<string, string>) => {
  const queryString = new URLSearchParams(obj).toString();
  const result: AxiosResponse<[number, Card[]]> = await axios.get(
    `/products/?${queryString}`,
  );

  return result.data;
};
