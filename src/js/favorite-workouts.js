import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createWorkoutCardsMarkup,
  createPaginationMarkup,
} from './favorite-workouts-markup';

const refs = {
  noExMessage: document.querySelector('.js-no-exercises-message'),
  workoutsList: document.querySelector('.js-workouts-list'),
  paginationList: document.querySelector('.js-fav-pagination'),
};

let currentPage = 1;
let totalPages = 1;
let device =
  window.innerWidth < 768
    ? 'phone'
    : window.innerWidth < 1440
    ? 'tablet'
    : 'desktop';

createStartMarkup();

function createStartMarkup() {
  let savedExercises = JSON.parse(localStorage.getItem('savedExercises'));

  renderWorkoutsMarkup(savedExercises);
  refs.workoutsList.addEventListener('click', removeWorkoutCard);
  refs.paginationList.addEventListener('click', navigateToPage);

  let currentSavedExercises;
  let isCardsActual;
  setInterval(() => {
    currentSavedExercises = JSON.parse(localStorage.getItem('savedExercises'));

    if (currentSavedExercises === null) {
      return;
    }

    const newDevice =
      window.innerWidth < 768
        ? 'phone'
        : window.innerWidth < 1440
        ? 'tablet'
        : 'desktop';

    if (newDevice !== device) {
      device = newDevice;
      renderWorkoutsMarkup(currentSavedExercises);
      return;
    }

    isCardsActual = currentSavedExercises.length === savedExercises.length;
    if (isCardsActual) {
      isCardsActual = currentSavedExercises.every((card, idx) => {
        return card._id === savedExercises[idx]._id;
      });
    }
    if (!isCardsActual) {
      savedExercises = [...currentSavedExercises];
      renderWorkoutsMarkup(savedExercises);
    }
  }, 1000);
}

function renderWorkoutsMarkup(savedExercises) {
  if (!savedExercises || savedExercises.length === 0) {
    refs.noExMessage.hidden = false;
    refs.noExMessage.classList.remove('visually-hidden');
    refs.workoutsList.classList.remove('fav-workouts-list');
    refs.workoutsList.innerHTML = '';
    return;
  }

  refs.noExMessage.hidden = true;
  refs.noExMessage.classList.add('visually-hidden');
  refs.workoutsList.classList.add('fav-workouts-list');

  if (window.innerWidth >= 1440) {
    refs.workoutsList.innerHTML = createWorkoutCardsMarkup(savedExercises);
  } else {
    if (window.innerWidth >= 768) {
      totalPages = Math.ceil(savedExercises.length / 10);
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      const excercises = savedExercises.slice(
        (currentPage - 1) * 10,
        currentPage * 10
      );
      if (currentPage !== 1 && savedExercises.length === 0) {
        currentPage -= 1;
        refs.workoutsList.innerHTML = createWorkoutCardsMarkup(
          savedExercises.slice((currentPage - 1) * 10, currentPage * 10)
        );
      } else {
        refs.workoutsList.innerHTML = createWorkoutCardsMarkup(excercises);
      }
    } else {
      totalPages = Math.ceil(savedExercises.length / 8);
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      const excercises = savedExercises.slice(
        (currentPage - 1) * 8,
        currentPage * 8
      );
      if (currentPage !== 1 && savedExercises.length === 0) {
        currentPage -= 1;
        refs.workoutsList.innerHTML = createWorkoutCardsMarkup(
          savedExercises.slice((currentPage - 1) * 8, currentPage * 8)
        );
      } else {
        refs.workoutsList.innerHTML = createWorkoutCardsMarkup(excercises);
      }
    }
    renderPagination(currentPage, totalPages);
  }
}

function removeWorkoutCard(evt) {
  const target = evt.target;
  const closestButton = target.closest('.fav-workouts-remove-button');
  if (!closestButton) {
    return;
  }
  const removeElement = target.closest('.fav-workouts-list-item');
  const removeElementId = removeElement.dataset.id;
  const savedExercises = JSON.parse(localStorage.getItem('savedExercises'));

  const removeElementIndex = savedExercises.findIndex(
    excercise => excercise._id === removeElementId
  );
  if (removeElementIndex === -1) {
    showMessage('error', 'Excercise is already removed from favorites.');
  } else {
    savedExercises.splice(removeElementIndex, 1);
    localStorage.setItem('savedExercises', JSON.stringify(savedExercises));
  }
  renderWorkoutsMarkup(savedExercises);
}

function renderPagination(currentPage, totalPages) {
  if (totalPages <= 1) {
    refs.paginationList.classList.add('visually-hidden');
    return;
  }
  refs.paginationList.classList.remove('visually-hidden');
  refs.paginationList.innerHTML = createPaginationMarkup(
    currentPage,
    totalPages
  );
}

function navigateToPage(evt) {
  const closestButton = evt.target.closest('.js-page');
  if (!closestButton) {
    return;
  }

  const pageNavigate = closestButton.dataset.pageNavigate;

  if (Number(pageNavigate) === currentPage) {
    return;
  }

  switch (pageNavigate) {
    case 'first-page':
      currentPage = 1;
      break;
    case 'previous-page':
      currentPage = currentPage - 1;
      break;
    case 'next-page':
      currentPage = currentPage + 1;
      break;
    case 'last-page':
      currentPage = totalPages;
      break;
    default:
      if (Number.isNaN(Number(pageNavigate))) {
        return;
      }
      currentPage = Number(pageNavigate);
  }
  const savedExercises = localStorage.getItem('savedExercises');
  renderWorkoutsMarkup(JSON.parse(savedExercises));
}

function showMessage(type, message) {
  let color;
  if (type === 'error') {
    color = '#f58e82';
  } else {
    color = '#9dfab5';
  }

  iziToast.show({
    messageColor: '#262121',
    backgroundColor: color,
    messageSize: '18px',
    position: 'bottomRight',
    progressBar: false,
    animateInside: false,
    timeout: 3000,
    targetFirst: false,
    message: message,
  });
}
