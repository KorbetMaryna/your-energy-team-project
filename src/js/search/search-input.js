import { debounce } from '../helpers/debounce';
import { showEl, hideEl } from '../helpers/toggleHidden';
import { refs } from './refs';

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

function onClearSearchInput() {
  refs.searchInputEl.value = '';
  hideEl(refs.searchClearEl);
  showEl(refs.searchIconEl);
}

function onSubmitSearch(e) {
  e.preventDefault();
}
