import axios from 'axios';
import { toggleLoader } from './loader';

const BASE_URL = 'https://your-energy.b.goit.study/api';

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

export const fetchMuscles = async ({ page = 1, limit = 100 } = {}) => {
  const { data } = await axios.get(
    `${BASE_URL}/filters?filter=Muscles&page=${page}&limit=${limit}`
  );
  return data;
};

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

export const fetchExercises = async ({
  bodyPart,
  muscle,
  equipment,
  page = 1,
  limit = 100,
}) => {
  const urlParams = new URLSearchParams({
    bodypart: bodyPart,
    muscles: muscle,
    equipment,
    page,
    limit,
  });

  const { data } = await axios.get(`${BASE_URL}/exercises?${urlParams}`);
  return data;
};
