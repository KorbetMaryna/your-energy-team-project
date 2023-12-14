import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

async function fetchApiData(type, params) {
  for (const key of Object.keys(params)) {
    if (params[key] === '') {
      delete params[key];
    }
  }

  const urlParams = new URLSearchParams(params);

  const { data } = await axios(`${BASE_URL}/${type}?${urlParams}`);
  return data;
}

export { fetchApiData };

export const fetchMuscles = async ({ page = 1, limit = 100 } = {}) => {
  const { data } = await axios.get(
    `${BASE_URL}/filters?filter=Muscles&page=${page}&limit=${limit}`
  );
  return data;
};

// your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10  (приклад з переліком усіх можливих параметрів, кожен з яких можна прибрати за потреби)

export const fetchBodyParts = async ({ page = 1, limit = 100 } = {}) => {
  const { data } = await axios.get(
    `${BASE_URL}/filters?filter=Body+parts&page=${page}&limit=${limit}`
  );
  return data;
};

export const fetchEquipment = async ({ page = 1, limit = 100 } = {}) => {
  const { data } = await axios.get(
    `${BASE_URL}/filters?filter=Equipment&page=${page}&limit=${limit}`
  );
  return data;
};
