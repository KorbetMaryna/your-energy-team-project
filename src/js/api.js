import axios from 'axios';
import omitBy from 'lodash/omitBy';
import isEmpty from 'lodash/isEmpty';


const BASE_URL = 'https://your-energy.b.goit.study/api/';

async function fetchFilterData(filter, page = 1) {
  const { data } = await axios(
    `${BASE_URL}filters?filter=${filter}&page=${page}&limit=24`
  );
  return data;
}

async function fetchExercisesData(obj, page = 1) {
  const URL_PARAMS = {
    bodypart: '',
    muscles: '',
    equipment: '',
    keyword: '',
  };

  const urlParams = new URLSearchParams(omitBy(Object.assign(URL_PARAMS, obj), isEmpty));

  const { data } = await axios(
    `${BASE_URL}exercises?${urlParams}&page=${page}&limit=24`
  );
  return data;
}

export { fetchFilterData, fetchExercisesData };
