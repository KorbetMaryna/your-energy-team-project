import iziToast from 'izitoast';
import { debounce } from '../helpers/debounce';
import { showEl, hideEl } from '../helpers/toggleHidden';
import { refs } from './refs';
import {
  checkScreenWidth,
  basicUrlParams,
  createExercisesMarkup,
} from '../exercises';
import { fetchSearchData } from '../api';
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
    const limit = checkScreenWidth('');
    const { totalPages, results } = await fetchSearchData({
      bodypart: basicUrlParams.bodypart || '',
      muscles: basicUrlParams.muscles || '',
      equipment: basicUrlParams.equipment || '',
      page: 1,
      keyword: value,
      limit,
    });

    createExercisesMarkup({ results });
    renderPagination({
      page: 1,
      totalPages,
      type: 'exercises',
      keyword: value,
    });
  } else {
    iziToast.warning({
      message: 'You should type something before searching!',
    });
  }
  onClearSearchInput();
}
