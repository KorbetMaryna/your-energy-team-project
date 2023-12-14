import iziToast from 'izitoast';
import { fetchApiData } from './api';

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

function checkScreenWidth(filter, width) {
  if (filter !== '') {
    basicUrlParams.limit = width < 768 ? 9 : 12;
  } else {
    basicUrlParams.limit = width < 768 ? 8 : 10;
  }
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
    document.querySelector('.active-button').classList.remove('active-button');
    el.classList.add('active-button');
  });
});

async function fetchData(type, obj) {
  await fetchApiData(type, obj)
    .then(data => {
      if (data.results[0]?.filter) {
        checkScreenWidth(basicUrlParams.filter, window.innerWidth);
        createFilterMarkup('filters', data);
        refs.headlineCategory.innerText = '';
        refs.headlineWrapper.classList.add('visually-hidden');
        refs.searchForm.classList.add('visually-hidden');
      } else {
        checkScreenWidth(basicUrlParams.filter, window.innerWidth);
        createExercisesMarkup('exercises', data);
      }
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong :-( try again later.',
      });
    });
}

function createFilterMarkup(type, data) {
  refs.tilesCategoryList.innerHTML = '';
  refs.tilesCategoryList.classList.add('visually-hidden');
  refs.tilesFilterList.classList.remove('visually-hidden');

  const { page, totalPages, results } = data;

  const markup = results
    .map(
      ({ filter, name, imgURL }) => `      
        <li class="exercises-filter-tile-item" data-name=${name} data-filter=${filter.toLowerCase()}>
              <div class="exercises-filter-tile-gradient"></div>
              <img class="exercises-filter-tile-img" src="${imgURL}" alt="${name}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
              <div class="exercises-filter-tile-text-wrapper">
                  <h3 class="exercises-filter-tile-headline">${capitalizeFirstLetter(
                    name
                  )}</h3>
                  <p class="exercises-filter-tile-text">${filter}</p>
              </div>
        </li>`
    )
    .join('');
  refs.tilesFilterList.innerHTML = markup;
  renderPagination(page, totalPages, type);
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
  refs.headlineWrapper.classList.remove('visually-hidden');
  refs.headlineCategory.innerText = capitalizeFirstLetter(name);
  refs.searchForm.classList.remove('visually-hidden');
}

function createExercisesMarkup(type, { page, totalPages, results }) {
  if (!results.length) {
    return iziToast.warning({
      message: "Unfortunately, we don't have any exercises in this category",
    });
  }
  refs.tilesFilterList.innerHTML = '';
  refs.tilesFilterList.classList.add('visually-hidden');
  refs.tilesCategoryList.classList.remove('visually-hidden');
  const markup = results
    .map(
      ({ rating, name, burnedCalories, bodyPart, target, _id }) => `      
        <li class="exercises-category-tile-item" data-id=${_id}>
            <div class="exercises-category-tile-top">
              <div class="exercises-category-tile-workout-wrapper">
                <span class="exercises-category-tile-badge">WORKOUT</span>
                <div class="exercises-category-tile-rating-wrapper">
                  <span class="exercises-category-tile-rating">${rating.toFixed(
                    1
                  )}</span>
                  <svg
                  class="exercises-category-tile-star-icon"
                  width="18"
                  height="18">
                    <use href="./../img/icons.svg#icon-star"></use>
                  </svg>
                </div>
              </div>
              <button class="exercises-category-tile-button">Start 
                <svg 
                class="exercises-category-tile-arrow-icon"
                width="36" 
                height="36">
                  <use xlink:href="./../img/icons.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercises-category-tile-middle">
              <svg 
              class="exercises-category-tile-man-icon"
              width="24" 
              height="24">
                <use href="./../img/icons.svg#icon-running-man"></use>
              </svg>
              <h3 class="exercises-category-tile-name">${name}</h3>
            </div>
            <ul class="exercises-category-tile-bottom">
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Burned calories:</span>
                ${burnedCalories}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Body part:</span>
                ${capitalizeFirstLetter(bodyPart)}</li>
                <li class="exercises-category-tile-bottom-item">
                <span class="exercises-category-tile-bottom-title">Target:</span>
                ${capitalizeFirstLetter(target)}</li>
            </ul>
        </li>`
    )
    .join('');

  refs.tilesCategoryList.innerHTML = markup;
  renderPagination(page, totalPages, type);
}

function renderPagination(page, totalPages, type) {
  console.log('totalPages:', totalPages);
  refs.paginationList.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageElement = document.createElement('span');
    pageElement.classList.add('exercises-pagination-item');
    pageElement.textContent = i;

    if (i == page) {
      pageElement.classList.add('exercises-pagination-item-active');
    }

    pageElement.addEventListener('click', () => {
      basicUrlParams.page = i;
      fetchData(type, basicUrlParams);
    });

    refs.paginationList.appendChild(pageElement);
  }
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
