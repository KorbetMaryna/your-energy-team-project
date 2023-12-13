import axios from 'axios';

// Get the modal element
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("main-modal__close")[0];

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the HTMLCollection of elements with class 'exercises-tiles-list'
const exercisesTilesList = document.getElementsByClassName('exercises-tiles-list');

// Loop through the HTMLCollection (if there are multiple elements with this class)
for (let i = 0; i < exercisesTilesList.length; i++) {
  const currentList = exercisesTilesList[i];
  
  // Add an event listener to each element in the HTMLCollection
  currentList.addEventListener('click', function(event) {
    const clickedListItem = event.target.closest('.exercises-category-tile-item');
    if (clickedListItem) {
      const exerciseId = clickedListItem.dataset.id;
      modal.style.display = "flex"
      
      const apiUrl = `https://your-energy.b.goit.study/api/exercises/${exerciseId}`;
      
      axios.get(apiUrl).then(response => {
        if (response) {
          return response.data;
        }})
        .then(data => {
          displayExerciseDetails(data);  
        })
        .catch(error => {       
          console.error('There was a problem with the Axios request:', error);
        });
      }
    });
  }
  
  function displayExerciseDetails(data) {
    const exerciseDetailsContainer = document.getElementById('exerciseDetails');
    
    let gifImage = null
    
    if(data.gifUrl){
      gifImage = `<div class="main-modal__gif-wrapper">
      <img class="gif" src="${data.gifUrl}" alt="Exercise GIF">
      <div class="gif-overlay"></div>
      </div>`;
    }else{
      gifImage = `<div class="main-modal__gif-wrapper">
      <img class="main-modal__gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
      <div class="main-modal__gif-overlay"></div>
      </div>`;
    }
    
    const title = `<p class='main-modal__card-title'>${data.name}</p>`
    const stars = generateStarRating(Math.round(data.rating));
    
    const rating = `<div class='main-modal__rating-container'>
    <span class="main-modal__rating">${data.rating % 1 >= 0.5 ? Math.ceil(data.rating) +'.0' : Math.floor(data.rating) +'.0'}</span>
    ${stars}
    </div>`
    
    const details = `<div class="main-modal__details-container">
    <div class="main-modal__details-wrapper">
    <p class="main-modal__details-title">Target</p>
    <p class="main-modal__details-info">${data.target}</p>
    </div>
    <div class="main-modal__details-wrapper">
    <p class="main-modal__details-title">Body Part</p>
    <p class="main-modal__details-info">${data.bodyPart}</p>
    </div>
    <div class="main-modal__details-wrapper">
    <p class="main-modal__details-title">Equipment</p>
    <p class="main-modal__details-info">${data.equipment}</p>
    </div>
    <div class="main-modal__details-wrapper">
    <p class="main-modal__details-title">Popular</p>
    <p class="main-modal__details-info">${data.popularity}</p>
    </div>
    </div>
    <div class="main-modal__details-wrapper calories">
    <p class="main-modal__details-title">Burned Calories</p>
    <p class="main-modal__details-info">${data.burnedCalories}</p>
    </div>`
    
    const description = `<div class="main-modal__description">${data.description}</div>`
    
    exerciseDetailsContainer.innerHTML = `${ gifImage +`<div class="main-modal__content-wrapper">${title + rating + details + description}</div>`}`;
  }
  
  // Function to generate star icons based on rating
  function generateStarRating(rating) {
    const starIcon = `<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star" aria-label="logo icon">
    <use href="./img/icons.svg#icon-star"></use>
    </svg></div>`;
    
    const emptyStar = `<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon " aria-label="logo icon">
    <use href="./img/icons.svg#icon-star"></use>
    </svg></div>`;
    let starsHTML = '';
    let integerPart = Math.floor(rating);  
    let decimalPart = rating - integerPart;  
    
    // Fill stars based on the integer part (whole number)
    for (let i = 0; i < 5; i++) {
      if (i < integerPart) {
        starsHTML += starIcon;  
      } else {
        if (i === integerPart && decimalPart >= 0.5) {
          starsHTML += starIcon;  
        } else {
          starsHTML += emptyStar;  
        }
      }
    }
    
    return `${starsHTML}`;
  }
  