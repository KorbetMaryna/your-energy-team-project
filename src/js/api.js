import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api/';


async function fetchApiData(type, params) {

  for (const key of Object.keys(params)) {
    if (params[key] === '') {
      delete params[key];
    }
  }

  const urlParams = new URLSearchParams(params);

  const { data } = await axios(`${BASE_URL}${type}?${urlParams}`);
  return data;
}

export { fetchApiData };
