import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

export async function fetchSearchData(params) {
  console.log(params);
  for (const key of Object.keys(params)) {
    if (params[key] === '') {
      delete params[key];
    }
  }

  const urlParams = new URLSearchParams(params);

  const { data } = await axios(`${BASE_URL}/exercises?${urlParams}`);
  return data;
}
