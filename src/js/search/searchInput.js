import iziToast from 'izitoast';
import { debounce } from '../helpers/debounce';
import { showEl, hideEl } from '../helpers/toggleHidden';
import { fetchSearchData } from './searchApi';
import { createExercisesMarkup } from '../exercises';

const refs = {
  searchClearBtnEl: document.querySelector('.js-search-form--btn__clear'),
  searchInputEl: document.querySelector('.js-search-form--input'),
  searchIconEl: document.querySelector('.js-search-form--btn__search'),
  searchFormEl: document.querySelector('.js-search-form'),
  tilesFilterList: document.querySelector('.js-tiles-filter-list'),
};

const processChange = debounce(e => onChange(e), 400);

refs.searchClearBtnEl.addEventListener('click', onClearSearchInput);
refs.searchInputEl.addEventListener('input', processChange);
refs.searchFormEl.addEventListener('submit', onSubmitSearch);

let basicUrlParams = {
  bodypart: '',
  muscles: '',
  equipment: '',
  keyword: '',
  page: 1,
};

function onChange({ target }) {
  if (target?.value.trim()) {
    showEl(refs.searchClearBtnEl);
    hideEl(refs.searchIconEl);
  } else {
    hideEl(refs.searchClearBtnEl);
    showEl(refs.searchIconEl);
  }
}

function onClearSearchInput() {
  refs.searchInputEl.value = '';
  basicUrlParams.keyword = '';
  hideEl(refs.searchClearBtnEl);
  showEl(refs.searchIconEl);
}

function onSubmitSearch(e) {
  e.preventDefault();
  basicUrlParams.keyword = refs.searchInputEl.value;
  basicUrlParams.limit = window.innerWidth < 768 ? 8 : 10;
  fetchSearchData(basicUrlParams)
    .then(data => {
      console.log(data);
      createExercisesMarkup(data);
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong :-( try again later.',
      });
    });
  onClearSearchInput();
}

refs.tilesFilterList?.addEventListener('click', onTileClick);

function onTileClick(e) {
  e.preventDefault();

  let obj = {
    bodypart: '',
    muscles: '',
    equipment: '',
    keyword: '',
  };

  Object.assign(basicUrlParams, obj);

  if (e.currentTarget === e.target) {
    return;
  }

  let { name, filter } = e.target.parentNode.dataset;

  if (filter === 'body') {
    filter = 'bodypart';
  }

  Object.assign(basicUrlParams, { [filter]: name });

  console.log(basicUrlParams);
}
