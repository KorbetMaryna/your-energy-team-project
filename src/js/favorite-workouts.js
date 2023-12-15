import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  noExMessage: document.querySelector('.js-no-exercises-message'),
  workoutsList: document.querySelector('.js-workouts-list'),
};

createStartMarkup();

function createStartMarkup() {
  let savedExercises = JSON.parse(localStorage.getItem('savedExercises'));

  if (!savedExercises || savedExercises.length === 0) {
    refs.noExMessage.hidden = false;
    refs.workoutsList.classList.remove('fav-workouts-list');
  } else {
    refs.noExMessage.hidden = true;
    refs.workoutsList.classList.add('fav-workouts-list');
    refs.workoutsList.innerHTML = createWorkoutCardsMarkup(savedExercises);
    refs.workoutsList.addEventListener('click', removeWorkoutCard);
  }

  let currentSavedExercises;
  let actualCards;
  setInterval(() => {
    currentSavedExercises = JSON.parse(localStorage.getItem('savedExercises'));
    actualCards = currentSavedExercises.length === savedExercises.length;
    if (actualCards) {
      actualCards = currentSavedExercises.every((card, idx) => {
        return card._id === savedExercises[idx]._id;
      });
    }
    if (!actualCards) {
      savedExercises = [...currentSavedExercises];
      refs.workoutsList.innerHTML = createWorkoutCardsMarkup(savedExercises);
    }
  }, 2000);
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
  console.log(removeElementIndex);
  if (removeElementIndex === -1) {
    showMessage('error', 'Excercise is already removed from favorites.');
  } else {
    savedExercises.splice(removeElementIndex, 1);
    localStorage.setItem('savedExercises', JSON.stringify(savedExercises));
  }
  refs.workoutsList.innerHTML = createWorkoutCardsMarkup(savedExercises);
}

function createWorkoutCardsMarkup(array) {
  return array.map(obj => createWorkoutCardMarkup(obj)).join('');
}

function createWorkoutCardMarkup({
  _id,
  name,
  time,
  burnedCalories,
  bodyPart,
  target,
} = {}) {
  return `<li class="fav-workouts-list-item" data-id="${_id}">
      <div class="fav-workouts-list-item-buttons">
        <div class="fav-workouts-tag-remove-wrapper">
          <span class="fav-workouts-tag">Workout</span>
          <button class="fav-workouts-remove-button" type="button">
            <svg class="fav-workouts-remove-icon" width="16px" height="15px">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>

        <button type="button" class="fav-workouts-start-button">
          <span class="fav-workouts-start-text">Start</span>
          <svg class="fav-workouts-arrow-icon" width="16px" height="16px">
            <use href="./img/icons.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>

      <div class="fav-workouts-excercise-name-wrapper">
        <div class="fav-workouts-running-icon-wrapper">
          <svg class="fav-workouts-running-icon" width="20px" height="20px">
            <use href="./img/icons.svg#icon-running-man"></use>
          </svg>
        </div>
        <h3 class="fav-workouts-excercise-name">${name}</h3>
      </div>

      <ul class="fav-workouts-descr-list">
        <li class="fav-workouts-descr-list-category">
          Burned calories:
          <span class="fav-workouts-descr-list-value">${burnedCalories} / ${time} min</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Body part: <span class="fav-workouts-descr-list-value">${bodyPart}</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Target: <span class="fav-workouts-descr-list-value">${target}</span>
        </li>
      </ul>
    </li>`;
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
