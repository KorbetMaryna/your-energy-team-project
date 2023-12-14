// TODO:
// 1. integrate into another modal window
// 2. add dynamic exercice id
// 3. implement iziToast notifications

import axios from 'axios';

const backdrop = document.querySelector('.rating-backdrop');
const closeButton = document.querySelector('.rating__close-btn');
const submitButton = document.querySelector('.rating__submit-btn');
const stars = document.querySelectorAll('.rating__input');
const emailInput = document.querySelector('.rating__input-email');
const commentInput = document.querySelector('.rating__input-comment');

let selectedStar = null;

const closeModal = () => {
  backdrop.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeModal);
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmit = async () => {
  const starId = selectedStar?.id;
  const starRating = parseInt(starId?.replace('star', ''), 10);

  if (!starRating || isNaN(starRating)) {
    console.log('Please add a rate')
    // iziToast.show({ title: 'Error', message: 'Please add a rate' });
    return;
  }
  if (isValidEmail(emailInput.value)) {
    console.log('Please enter your email')
    // iziToast.show({ title: 'Error', message: 'Please enter your email' });
    return;
  }
  if (commentInput.value.length <= 3) {
    console.log('Please leave your review')
    // iziToast.show({ title: 'Error', message: 'Please leave your review' });
    return;
  }

  const exerciseID = 'EXERCISE_ID'; // Replace with actual exercise ID
  const url = `https://your-energy.b.goit.study/api/exercises/${exerciseID}/rating`;

  try {
    const response = await axios.patch(url, {
      rate: starRating,
      email: emailInput.value,
      review: commentInput.value,
    });
    if (response.status === 200) {
      iziToast.success({ title: 'Success', message: 'Rating submitted successfully!' });
    } else {
      iziToast.error({ title: 'Error', message: 'Failed to submit rating' });
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to submit rating' });
  }
  closeModal();
};

const updateStarsColor = () => {
  const starsArray = Array.from(stars);
  starsArray.forEach((star, index) => {
    const starIcon = star.nextElementSibling.querySelector('.rating__icon-star');
    if (star === selectedStar || (selectedStar && index < starsArray.indexOf(selectedStar))) {
      starIcon.style.fill = 'var(--stars-color-activ)';
      starIcon.style.opacity = 1;
    } else {
      starIcon.style.fill = 'var(--second-color-light-theme)';
      starIcon.style.opacity = 0.2;
    }
  });
};

stars.forEach(star => {
  star.addEventListener('click', function (event) {
    selectedStar = event.target;
    updateStarsColor();
  });
});

backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop && !event.target.closest('.rating__close-btn') && !event.target.closest('.rating__submit-btn')) closeModal();
});

closeButton.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

submitButton.addEventListener('click', handleSubmit);
