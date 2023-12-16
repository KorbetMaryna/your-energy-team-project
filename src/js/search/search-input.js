import { debounce } from '../helpers/debounce';
import { showEl, hideEl } from '../helpers/toggleHidden';
import { refs } from './refs';
import { exercisesMarkup } from '../exercises-markup';
import {
  checkScreenWidth,
  basicUrlParams,
  createExercisesMarkup,
} from '../exercises';
import { fetchExercises } from '../api';
import { renderPagination } from '../exercises';

const processChange = debounce(e => onChange(e), 400);

refs.searchClearBtnEl.addEventListener('click', onClearSearchInput);
refs.searchInputEl.addEventListener('input', processChange);
refs.searchFormEl.addEventListener('submit', onSubmitSearch);

function onChange({ target }) {
  if (target?.value.trim()) {
    showEl(refs.searchClearEl);
    hideEl(refs.searchIconEl);
  } else {
    hideEl(refs.searchClearEl);
    showEl(refs.searchIconEl);
  }
}

export function onClearSearchInput() {
  refs.searchInputEl.value = '';
  hideEl(refs.searchClearEl);
  showEl(refs.searchIconEl);
}

async function onSubmitSearch(e) {
  e.preventDefault();
  const value = e.target.elements.search.value;
  if (value.trim()) {
    const limit = checkScreenWidth();
    const { totalPages, results } = await fetchExercises({
      bodyPart: basicUrlParams.bodypart || '',
      muscle: basicUrlParams.muscles || '',
      equipment: basicUrlParams.equipment || '',
      page: basicUrlParams.page,
      keyword: value,
      limit,
    });

    createExercisesMarkup({ results });
    renderPagination({
      page: basicUrlParams.page,
      totalPages,
      type: 'exercises',
    });
    onClearSearchInput();
  }
}
