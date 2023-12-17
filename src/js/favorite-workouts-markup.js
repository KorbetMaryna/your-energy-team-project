//Pagination
export function createPaginationMarkup(currentPage, totalPages) {
  return createBeforePageNumbersMarkup(currentPage === 1).concat(
    createPageNumbersMarkup(currentPage, totalPages),
    createAfterPageNumbersMarkup(currentPage === totalPages)
  );
}

function createPageNumbersMarkup(currentPage, totalPages) {
  let pageNumbers = '';
  for (let i = 1; i <= totalPages; i += 1) {
    if (i < currentPage - 2) {
      pageNumbers = pageNumbers.concat(
        '<li><span class="pagination-number">...</span></li>'
      );
      i = currentPage - 3;
      continue;
    }
    if (i > currentPage + 2) {
      pageNumbers = pageNumbers.concat(
        '<li><span class="pagination-number">...</span></li>'
      );
      break;
    }
    pageNumbers = pageNumbers.concat(`<li>
        <button class="js-page pagination-number${
          i === currentPage ? ' active' : ''
        }" type="button"  data-page-navigate=${i}>${i}</button>
      </li>`);
  }
  return `<ul class="fav-workouts-pagination-numbers">
      ${pageNumbers}
    </ul>`;
}

function createBeforePageNumbersMarkup(isDisabled) {
  return `    <ul class="pagination-btns fav-workouts-pagination-start">
      <li class="">
        <button class="js-page left pagination-btn" type="button"${
          isDisabled ? ' disabled' : ''
        } data-page-navigate="first-page" aria-label="go to first page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
          <svg class="" width="7px" height="14px" aria-label="go to previous page">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
      <li class="">
        <button class="js-page left pagination-btn" type="button"${
          isDisabled ? ' disabled' : ''
        } data-page-navigate="previous-page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
    </ul>`;
}

function createAfterPageNumbersMarkup(isDisabled) {
  return `<ul class="pagination-btns fav-workouts-pagination-end">
      <li class="">
        <button class="js-page pagination-btn" type="button"${
          isDisabled ? ' disabled' : ''
        } data-page-navigate="next-page" aria-label="go to next page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
      <li class="">
        <button class="js-page pagination-btn" type="button"${
          isDisabled ? ' disabled' : ''
        } data-page-navigate="last-page" aria-label="go to last page">
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
          <svg class="" width="7px" height="14px">
            <use href="./img/icons.svg#icon-next"></use>
          </svg>
        </button>
      </li>
    </ul>`;
}

//Workouts cards
export function createWorkoutCardsMarkup(array) {
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
          Body part: <span class="fav-workouts-descr-list-value">${
            bodyPart[0].toUpperCase() + bodyPart.substring(1)
          }</span>
        </li>
        <li class="fav-workouts-descr-list-category">
          Target: <span class="fav-workouts-descr-list-value">${
            target[0].toUpperCase() + target.substring(1)
          }</span>
        </li>
      </ul>
    </li>`;
}
