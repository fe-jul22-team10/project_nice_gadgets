import axios from 'axios';
import { Card } from '../types/Card';

axios.defaults.baseURL = 'https://project-nice-gadgets.onrender.com/';

type PhonesResponse = [number, Card[]];

export const getPhones = async(
  params: Record<string, string>,
): Promise<PhonesResponse> => {
  const queryString = new URLSearchParams(params).toString();
  const result = await axios.get<PhonesResponse>(
    `/products/?${queryString}`,
  );

  return result.data;
};
