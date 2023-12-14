
import axios from 'axios';

function initializeExercisePage() {

  // Get the HTMLCollection of elements with class 'exercises-tiles-list'
  const exercisesTilesList = document.getElementsByClassName('exercises-tiles-category-list');
  
  // Get the modal element
  const modal = document.getElementById("myModal");
  
  // Get the <span> element that closes the modal
  const closeBtn = document.getElementsByClassName("main-modal__close")[0];
  
  let savedExercises = localStorage.getItem('savedExercises') ? JSON.parse(localStorage.getItem('savedExercises')) : [];
  
  // When the user clicks on (x), close the modal
  if(closeBtn){
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Loop through the HTML collection (if there are multiple elements with this class)
  for (let i = 0; i < exercisesTilesList.length; i+=1) {
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
            
            const favBtn = document.getElementById("fav-btn");
            if (favBtn) {
              // Check if the exercise is in the savedExercises array
              const isSaved = savedExercises.some(exercise => exercise._id === data._id);

              // Check if the exercise is in the savedExercises array and render necessary icon accordingly
              const heartIcon = favBtn.querySelector('.main-modal__heart-icon use');
              heartIcon.setAttribute('href', isSaved ? './img/icons.svg#icon-trash' : './img/icons.svg#icon-heart');
              
              // Set button text based on whether the exercise is saved or not
              favBtn.querySelector('.main-modal__btn-text').textContent = isSaved ? 'Unfavorite' : 'Add to favorites';
              
              favBtn.addEventListener('click', function() {
                const isSaved = savedExercises.some(exercise => exercise._id === data._id);
                
                if (isSaved) {
                  // Remove the exercise from savedExercises array
                  savedExercises = savedExercises.filter(exercise => exercise._id !== data._id);
                } else {
                  // Add the exercise to savedExercises array
                  savedExercises.push(data);
                }
                
                // Update localStorage with the updated savedExercises array
                localStorage.setItem('savedExercises', JSON.stringify(savedExercises));
                
                // Toggle button text between 'Add to favorites' and 'Remove from favorites'
                favBtn.querySelector('.main-modal__btn-text').textContent = isSaved ? 'Add to favorites' : 'Unfavorite';

              // Change btn's icon when it is being saved/removed to/from favorires
                const heartIcon = favBtn.querySelector('.main-modal__heart-icon use');
                heartIcon.setAttribute('href', isSaved ? './img/icons.svg#icon-heart' : './img/icons.svg#icon-trash');
              });
            }
          })
          .catch(error => {       
            console.error('There was a problem with the Axios request:', error);
          });
        }
      });
    }

    // This function is used to add a page markup
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
      
      const title = `<p class='main-modal__card-title'>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>`
      const stars = generateStarRating(Math.round(data.rating * 10) / 10);
      
      const rating = `<div class='main-modal__rating-container'>
      <span class="main-modal__rating">${data.rating.toString().includes('.') ? Math.round(data.rating * 10) / 10 : data.rating + '.0'}</span>
      ${stars}
      </div>`
      
      const details = `<div class="main-modal__details-container">
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Target</p>
      <p class="main-modal__details-info">${data.target.charAt(0).toUpperCase() + data.target.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title body-part">Body Part</p>
      <p class="main-modal__details-info">${data.bodyPart.charAt(0).toUpperCase() + data.bodyPart.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Equipment</p>
      <p class="main-modal__details-info">${data.equipment.charAt(0).toUpperCase() + data.equipment.slice(1)}</p>
      </div>
      <div class="main-modal__details-wrapper">
      <p class="main-modal__details-title">Popular</p>
      <p class="main-modal__details-info">${data.popularity}</p>
      </div>
      </div>
      <div class="main-modal__details-wrapper main-modal__calories">
      <p class="main-modal__details-title">Burned Calories</p>
      <p class="main-modal__details-info">${data.burnedCalories}</p>
      </div>`
      
      const description = `<div class="main-modal__description">${data.description}</div>`

      const buttons = `<div class="main-modal__btns-wrapper">
      <button class="main-modal__btn main-modal__fav-btn" id="fav-btn">
      <span class="main-modal__btn-text main-modal__fav-btn-text">Add to favorites</span>
      <svg class="main-modal__heart-icon" aria-label="logo icon">
      <use href="./img/icons.svg#icon-heart"></use>
      </svg>
      </button>
      <button class="main-modal__btn main-modal__rating-btn">
      <span class="main-modal__btn-text">Give a rating</span>
      </button>
      </div>`

      exerciseDetailsContainer.innerHTML = `${ gifImage +`<div class="main-modal__content-wrapper">${title + rating + details + description + buttons}</div>`}`;
    }

    function generateStarRating(rating) {
      const starIcon = `<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon main-modal__colored-star">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;
    
      const emptyStar = `<div class="main-modal__star-wrapper"><svg class="main-modal__star-icon">
      <use href="./img/icons.svg#icon-star"></use>
      </svg></div>`;

      let starsHTML = '';
      let integerPart = Math.floor(rating);
      let decimalPart = rating - integerPart;
    
      // Fill stars 
      for (let i = 0; i < 5; i++) {
        if (i < integerPart) {
          starsHTML += starIcon;
        } else if (i === integerPart && decimalPart > 0) {
          const gradientPercentage = Math.round(decimalPart * 100);
          starsHTML += `<div class="main-modal__star-wrapper" style="mask-image: linear-gradient(90deg, #EEA10C ${gradientPercentage}%, rgba(244, 244, 244, 0.2) ${gradientPercentage}%); -webkit-mask-image: linear-gradient(90deg, #EEA10C ${gradientPercentage}%, rgba(244, 244, 244, 0.2) ${gradientPercentage}%);"><svg class="main-modal__star-icon main-modal__colored-star" >
          <use href="./img/icons.svg#icon-star"></use>
          </svg></div>`;
        } else {
          starsHTML += emptyStar;
        }
      }
      return `${starsHTML}`;
    } 
  }
  
  // Trigger the code when the window finishes loading
  window.onload = function() {
    // Check if the current page matches the specific page structure
    const isExercisePage = document.querySelector('.exercises-container');
    
    // If the page structure matches, initialize the exercise page
    if (isExercisePage) {
      initializeExercisePage();
    }
  };