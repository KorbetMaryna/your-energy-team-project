import axios from 'axios';
import { toggleLoader } from './loader';

const BASE_URL = 'https://your-energy.b.goit.study/api/';

toggleLoader(true);

async function fetchApiData(type, params) {

  for (const key of Object.keys(params)) {
    if (params[key] === '') {
      delete params[key];
    }
  }

  const urlParams = new URLSearchParams(params);

  const { data } = await axios(`${BASE_URL}${type}?${urlParams}`);
  toggleLoader(false);
  return data;
}

export { fetchApiData };
