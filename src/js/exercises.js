import iziToast from 'izitoast';
import { fetchApiData } from './api';
import { filterMarkup, exercisesMarkup } from './exercises-markup';
import { capitalizeFirstLetter } from './helpers/capitalizeFirstLetter';

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

let basicUrlParams = {
  filter: 'Muscles',
  bodypart: '',
  muscles: '',
  equipment: '',
  keyword: '',
  page: 1,
};

export function checkScreenWidth(filter, width) {
  if (filter !== '') {
    basicUrlParams.limit = width < 768 ? 9 : 12;
  } else {
    basicUrlParams.limit = width < 768 ? 8 : 10;
  }

  return basicUrlParams.limit;
}

checkScreenWidth(basicUrlParams.filter, window.innerWidth);

fetchData('filters', basicUrlParams);

refs.filterButtons.forEach(el => {
  el.addEventListener('click', () => {
    let obj = {
      bodypart: '',
      muscles: '',
      equipment: '',
    };

    Object.assign(basicUrlParams, obj);
    basicUrlParams.filter = el.innerText;
    basicUrlParams.page = 1;
    fetchData('filters', basicUrlParams);

    makeFilterButtonActive(el);
  });
});

export function makeFilterButtonActive(el) {
  document.querySelector('.active-button').classList.remove('active-button');
  el.classList.add('active-button');
}

async function fetchData(type, obj) {
  await fetchApiData(type, obj)
    .then(data => {
      const { page, totalPages } = data;

      if (data.results[0]?.filter) {
        checkScreenWidth(basicUrlParams.filter, window.innerWidth);
        const markupType = 'filters';
        createFilterMarkup(data);
        renderPagination({ page, totalPages, markupType });
        refs.headlineCategory.innerText = '';
        refs.headlineWrapper.classList.add('visually-hidden');
        hideSearchInput();
      } else {
        checkScreenWidth(basicUrlParams.filter, window.innerWidth);
        const markupType = 'exercises';
        createExercisesMarkup(data);
        renderPagination({ page, totalPages, markupType });
      }
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong :-( try again later.',
      });
    });
}

function createFilterMarkup({ results }) {
  refs.tilesCategoryList.innerHTML = '';
  refs.tilesCategoryList.classList.add('visually-hidden');
  refs.tilesFilterList.classList.remove('visually-hidden');

  const markup = results
    .map(({ filter, name, imgURL }) => filterMarkup(filter, name, imgURL))
    .join('');
  refs.tilesFilterList.innerHTML = markup;
}

refs.tilesFilterList.addEventListener('click', onTileClick);

function onTileClick(e) {
  e.preventDefault();

  let obj = {
    filter: '',
    bodypart: '',
    muscles: '',
    equipment: '',
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

  fetchData('exercises', basicUrlParams);
  displayHeadline(name);
  refs.searchForm.classList.remove('visually-hidden');
}

export function displayHeadline(name) {
  refs.headlineWrapper.classList.remove('visually-hidden');
  refs.headlineCategory.innerText = capitalizeFirstLetter(name);
}

export function hideSearchInput() {
  refs.searchForm.classList.add('visually-hidden');
}

export function createExercisesMarkup({ results }) {
  if (!results.length) {
    return iziToast.warning({
      message: "Unfortunately, we don't have any exercises in this category",
    });
  }
  refs.tilesFilterList.innerHTML = '';
  refs.tilesFilterList.classList.add('visually-hidden');
  refs.tilesCategoryList.classList.remove('visually-hidden');
  const markup = results
    .map(({ rating, name, burnedCalories, bodyPart, target, _id }) =>
      exercisesMarkup(rating, name, burnedCalories, bodyPart, target, _id)
    )
    .join('');

  refs.tilesCategoryList.innerHTML = markup;
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
