import { capitalizeFirstLetter } from './helpers/capitalizeFirstLetter';

function filterMarkup(filter, name, imgURL) {
  return `      
<li class="exercises-filter-tile-item" data-name=${name} data-filter=${filter.toLowerCase()}>
      <div class="exercises-filter-tile-gradient"></div>
      <img class="exercises-filter-tile-img" src="${imgURL}" alt="${name}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
      <div class="exercises-filter-tile-text-wrapper">
          <h3 class="exercises-filter-tile-headline">${capitalizeFirstLetter(
            name
          )}</h3>
          <p class="exercises-filter-tile-text">${filter}</p>
      </div>
</li>`;
}

function exercisesMarkup(rating, name, burnedCalories, bodyPart, target, _id) {
  return `      
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
            <use href="./img/icons.svg#icon-star"></use>
          </svg>
        </div>
      </div>
      <button class="exercises-category-tile-button">Start 
        <svg 
        class="exercises-category-tile-arrow-icon"
        width="36" 
        height="36">
          <use href="./img/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercises-category-tile-middle">
      <svg 
      class="exercises-category-tile-man-icon"
      width="24" 
      height="24">
        <use href="./img/icons.svg#icon-running-man"></use>
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
</li>`;
}

export { filterMarkup, exercisesMarkup };
