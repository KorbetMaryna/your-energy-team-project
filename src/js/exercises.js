import iziToast from 'izitoast';
import { fetchApiData } from './api';
import { filterMarkup, exercisesMarkup } from './exercises-markup';
import { capitalizeFirstLetter } from './helpers/capitalizeFirstLetter';
import { toggleLoader } from './loader';

iziToast.settings({
  position: 'topRight',
  transitionIn: 'bounceInDown',
  closeOnEscape: true,
});

const refs = {
  headlineWrapper: document.querySelector('.js-headline-category-wrapper'),
  headlineCategory: document.querySelector('.js-headline-category'),
  searchForm: document.querySelector('.js-search-form'),
  filterButtons: document.querySelectorAll('.js-button'),
  tilesFilterList: document.querySelector('.js-tiles-filter-list'),
  tilesCategoryList: document.querySelector('.js-tiles-category-list'),
  paginationList: document.querySelector('.js-pagination'),
};

export let basicUrlParams = {
  filter: 'Muscles',
  bodypart: '',
  muscles: '',
  equipment: '',
  keyword: '',
  page: 1,
};

checkScreenWidth(basicUrlParams.filter);

fetchData('filters', basicUrlParams);

refs.filterButtons.forEach(el => {
  el.addEventListener('click', () => {
    resetExercisesUrlObj(basicUrlParams, el);
    fetchData('filters', basicUrlParams);
    makeFilterButtonActive(el);
  });
});

export async function fetchData(type, obj) {
  toggleLoader(true);
  await fetchApiData(type, obj)
    .then(data => {
      const { page, totalPages } = data;
      if (data.results[0]?.filter) {
        const markupType = 'filters';
        createFilterMarkup(data);
        renderPagination({ page, totalPages, type: markupType });
        hideHeadlineAndSearch();
      } else {
        const markupType = 'exercises';
        createExercisesMarkup(data);
        renderPagination({ page, totalPages, type: markupType });
      }
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong :-( try again later.',
      });
    })
    .finally(toggleLoader(false));
}

function createFilterMarkup({ results }) {
  clearCategoryMarkup();

  const markup = results
    .map(({ filter, name, imgURL }) => filterMarkup(filter, name, imgURL))
    .join('');
  refs.tilesFilterList.innerHTML = markup;
}

refs.tilesFilterList.addEventListener('click', onTileClick);

function onTileClick(e) {
  e.preventDefault();
  if (e.currentTarget === e.target) {
    return;
  }
  let { name, filter } = e.target.parentNode.dataset;
  resetCategoryUrlObj(basicUrlParams, name, filter);
  fetchData('exercises', basicUrlParams);
  createHeadline(name);
}

export function createExercisesMarkup({ results }) {
  if (!results.length) {
    return iziToast.warning({
      message: "Unfortunately, we don't have any exercises in this category",
    });
  }
  displayHeadlineAndSearch();
  clearFilterMarkup();
  const markup = results
    .map(({ rating, name, burnedCalories, bodyPart, target, _id }) =>
      exercisesMarkup(rating, name, burnedCalories, bodyPart, target, _id)
    )
    .join('');

  refs.tilesCategoryList.innerHTML = markup;
}

export function hideHeadlineAndSearch() {
  refs.headlineCategory.innerText = '';
  refs.headlineWrapper.classList.add('visually-hidden');
  refs.searchForm.classList.add('visually-hidden');
}

export function displayHeadlineAndSearch() {
  refs.headlineWrapper.classList.remove('visually-hidden');
  refs.searchForm.classList.remove('visually-hidden');
}

export function createHeadline(name) {
  refs.headlineCategory.innerText = capitalizeFirstLetter(name);
}

export function checkScreenWidth(filter) {
  if (filter !== '') {
    basicUrlParams.limit = window.innerWidth < 768 ? 9 : 12;
  } else {
    basicUrlParams.limit = window.innerWidth < 768 ? 8 : 10;
  }
  return basicUrlParams.limit;
}

export function makeFilterButtonActive(el) {
  document.querySelector('.active-button').classList.remove('active-button');
  el.classList.add('active-button');
}

function resetExercisesUrlObj(basicUrlParams, el) {
  let obj = {
    bodypart: '',
    muscles: '',
    equipment: '',
  };
  checkScreenWidth(basicUrlParams.filter);
  Object.assign(basicUrlParams, obj);
  basicUrlParams.filter = el.innerText;
  basicUrlParams.page = 1;
}

function resetCategoryUrlObj(basicUrlParams, name, filter) {
  basicUrlParams.filter = '';
  if (filter === 'body') {
    filter = 'bodypart';
  }
  Object.assign(basicUrlParams, { [filter]: name });
  checkScreenWidth(basicUrlParams.filter);
}

function clearCategoryMarkup() {
  refs.tilesCategoryList.innerHTML = '';
  refs.tilesCategoryList.classList.add('visually-hidden');
  refs.tilesFilterList.classList.remove('visually-hidden');
}

function clearFilterMarkup() {
  refs.tilesFilterList.innerHTML = '';
  refs.tilesFilterList.classList.add('visually-hidden');
  refs.tilesCategoryList.classList.remove('visually-hidden');
}

export function renderPagination({ page, totalPages, type, customListener }) {
  refs.paginationList.innerHTML = '';

  const maxPagesToShow = 6;

  if (totalPages <= maxPagesToShow) {
    renderPages(1, totalPages, page, type);
  } else {
    if (page < 4) {
      renderPages(1, 4, page, type);
      renderEllipsis();
      renderLastPage(totalPages, page);
    } else if (page > totalPages - 3) {
      renderFirstPage();
      renderEllipsis();
      renderPages(totalPages - 3, totalPages, page, type);
    } else {
      renderFirstPage();
      renderEllipsis();
      renderPages(page - 1, page + 1, page, type);
      renderEllipsis();
      renderLastPage(totalPages, page);
    }
  }

  function renderPages(start, end, currentPage, type) {
    for (let i = start; i <= end; i++) {
      const pageElement = document.createElement('span');
      pageElement.classList.add('exercises-pagination-item');
      pageElement.textContent = i;

      if (i === Number(currentPage)) {
        pageElement.classList.add('exercises-pagination-item-active');
      }

      pageElement.addEventListener('click', () => {
        basicUrlParams.page = i;
        if (customListener) {
          customListener(basicUrlParams.page);
        } else {
          fetchData(type, basicUrlParams);
        }
      });

      refs.paginationList.appendChild(pageElement);
    }
  }

  function renderEllipsis() {
    const ellipsisElement = document.createElement('span');
    ellipsisElement.classList.add('exercises-pagination-item');
    ellipsisElement.textContent = '...';
    refs.paginationList.appendChild(ellipsisElement);
  }

  function renderFirstPage() {
    renderPages(1, 1, page, type);
  }

  function renderLastPage(totalPages, currentPage) {
    renderPages(totalPages, totalPages, currentPage, type);
  }
}
