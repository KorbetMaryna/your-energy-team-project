// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

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

const apiUrl = 'https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2';

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
  displayExerciseDetails(data);
  
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
}) 

function displayExerciseDetails(data) {
  const exerciseDetailsContainer = document.getElementById('exerciseDetails');
  
  let gifImage = null
  
  if(data.gifUrl){
    gifImage = `<div class="gif-wrapper">
    <img class="gif" src="${data.gifUrl}" alt="Exercise GIF">
    <div class="gif-overlay"></div>
    </div>`;
  }else{
    gifImage = `<div class="gif-wrapper">
    <img class="gif" src="https://i.ibb.co/ZfpKSXz/depositphotos-197890504-stock-illustration-vector-man-engaged-gym.webp" alt="depositphotos-197890504-stock-illustration-vector-man-engaged-gym" alt="Exercise IMG">
    <div class="gif-overlay"></div>
    </div>`;
  }
  
  const title = `<p class='card-title'>${data.name}</p>`
  const stars = generateStarRating(Math.round(data.rating));
  
  const rating = `<div class='rating-container'>
  <span class="rating">${data.rating % 1 >= 0.5 ? Math.ceil(data.rating) +'.0' : Math.floor(data.rating) +'.0'}</span>
  ${stars}
  </div>`
  
  const details = `<div class="details-container">
  <div class="details-wrapper">
  <p class="details-title">Target</p>
  <p class="details-info">${data.target}</p>
  </div>
  <div class="details-wrapper">
  <p class="details-title">Body Part</p>
  <p class="details-info">${data.bodyPart}</p>
  </div>
  <div class="details-wrapper">
  <p class="details-title">Equipment</p>
  <p class="details-info">${data.equipment}</p>
  </div>
  <div class="details-wrapper">
  <p class="details-title">Popular</p>
  <p class="details-info">${data.popularity}</p>
  </div>
  </div>
  <div class="details-wrapper calories">
  <p class="details-title">Burned Calories</p>
  <p class="details-info">${data.burnedCalories}</p>
  </div>`
  
  const description = `<div class="description">${data.description}</div>`
  
  exerciseDetailsContainer.innerHTML =  gifImage + title + rating + details + description;
}

// Function to generate star icons based on rating
function generateStarRating(rating) {
  const starIcon = `<div class="star-wrapper"><svg class="star-icon colored-star" aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg></div>`;
  
  const emptyStar = `<svg class="star-icon " aria-label="logo icon">
  <use href="./img/icons.svg#icon-star"></use>
  </svg>`;
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
