import iziToast from 'izitoast';
import { fetchFilterData, fetchExercisesData } from './api';

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
  tilesList: document.querySelector('.js-tiles-list'),
};

fetchData('Muscles', 1);

refs.filterButtons.forEach(el => {
  el.addEventListener('click', () => {
    fetchData(el.innerText, 1);
    document.querySelector('.active-button')?.classList.remove('active-button');
    el?.classList.add('active-button');
  });
});

async function fetchData(filter, page) {
  await fetchFilterData(filter, page)
    .then(data => {
      console.log(data);
      createFilterMarkup(data);
      refs.headlineWrapper.classList.add('hidden');
      refs.headlineCategory.innerText = '';
      refs.searchForm.classList.add('hidden');
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong :-( try again later.',
      });
    });
}

function createFilterMarkup({ results }) {
  const markup = results
    .map(
      ({ filter, name, imgURL }) => `      
  <li class="exercises-filter-tile-item" data-name=${name} data-filter=${filter.toLowerCase()}>
        <div class="exercises-filter-tile-gradient"></div>
        <img class="exercises-filter-tile-img" src="${imgURL}" alt="${name}" />
        <div class="exercises-filter-tile-text-wrapper">
            <h3 class="exercises-filter-tile-headline">${capitalizeFirstLetter(
              name
            )}</h3>
            <p class="exercises-filter-tile-text">${filter}</p>
        </div>
  </li>`
    )
    .join('');
  refs.tilesList.innerHTML = markup;
}

refs.tilesList.addEventListener('click', onTileClick);

function onTileClick(e) {
  e.preventDefault();

  if (e.currentTarget === e.target) {
    return;
  }
  let { name, filter } = e.target.parentNode.dataset;
  if (filter === 'body') {
    filter = 'bodypart';
  }
  const urlParamsObject = {
    [filter]: name,
  };
  fetchCategoryData(urlParamsObject);
  refs.headlineWrapper.classList.remove('hidden');
  refs.headlineCategory.innerText = capitalizeFirstLetter(name);
  refs.searchForm.classList.remove('hidden');
}

async function fetchCategoryData(urlParamsObject, page) {
  await fetchExercisesData(urlParamsObject, page)
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
}

function createExercisesMarkup({ results }) {
  const markup = results.map(
    ({ rating, name, burnedCalories, bodyPart, target, _id }) => `      
        <li class="exercises-category-tile-item" data-id=${_id}>
            <div>
                <span>WORKOUT</span>
                <span>${rating}</span>
                <button>Start</button>
            </div>
            <div>
                <h3>${name}</h3>
            </div>
            <ul>
                <li><span>Burned calories</span>${burnedCalories}</li>
                <li><span>Body part</span>${bodyPart}</li>
                <li><span>Target</span>${target}</li>
            </ul>
        </li>`
  );

  if (!markup.length) {
    return iziToast.warning({
      message: "Unfortunately, we don't have any exercises in this category",
    });
  }

  refs.tilesList.innerHTML = markup.join('');
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
