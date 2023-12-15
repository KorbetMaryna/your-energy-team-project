import axios from 'axios';
import iziToast from 'izitoast';

iziToast.settings({
  position: 'topRight',
  transitionIn: 'bounceInDown',
  closeOnEscape: true,
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the closest parent element that exists initially
  const mainModal = document.querySelector('#myModal');

  mainModal.addEventListener('click', function(event) {
    const ratingButton = event.target.closest('.main-modal__rating-btn');
    
    if (ratingButton) {

      const refs = {
        backdrop: document.querySelector('.rating-backdrop'),
        closeButton: document.querySelector('.rating__close-btn'),
        submitButton: document.querySelector('.rating__submit-btn'),
        starsContainer: document.querySelectorAll('.rating__input'),
        emailInput: document.querySelector('.rating__input-email'),
        commentInput: document.querySelector('.rating__input-comment'),
        ratingValue: document.querySelector('.rating__value'),
      };

      let selectedStar = null;
      let currentExercise = JSON.parse(localStorage.getItem('currentExercise')) || {};
      refs.ratingValue.innerHTML = currentExercise.rating.toString().includes('.') ? Math.round(currentExercise.rating * 10) / 10 : currentExercise.rating + '.0';

      const openModal = () => {
        mainModal.style.display = "none"
        refs.backdrop.classList.add('modal-open');
        refs.closeButton.addEventListener('click', closeModal);
      };

      const closeModal = () => {
        refs.backdrop.classList.remove('modal-open');
        refs.closeButton.removeEventListener('click', closeModal);
        mainModal.style.display = "flex"
      };

      const updateStarsColor = () => {
        const starsArray = Array.from(refs.starsContainer);
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

      const isValidEmail = (email) => {
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return emailRegex.test(email);
      };

      const handleSubmit = async (event) => {
        event.preventDefault()
        const starId = selectedStar?.id;
        const starRating = parseInt(starId?.replace('star', ''), 10);
      
        if (!starRating || isNaN(starRating)) {
          iziToast.show({ title: 'Error', message: 'Please add your rating' });
          return;
        }
        if (!isValidEmail(refs.emailInput.value)) {
          iziToast.show({ title: 'Error', message: 'Please enter a valid email address' });
          return;
        }
        if (refs.commentInput.value.length <= 3) {
          iziToast.show({ title: 'Error', message: 'Please leave your comment' });
          return;
        }
        
        const url = `https://your-energy.b.goit.study/api/exercises/${currentExercise._id}/rating`;
      
        try {
          const response = await axios.patch(url, {
            rate: starRating,
            email: refs.emailInput.value,
            review: refs.commentInput.value,
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
      
      refs.starsContainer.forEach(star => {
        star.addEventListener('click', function (event) {
          selectedStar = event.target;
          updateStarsColor();
        });
      });

      refs.backdrop.addEventListener('click', function (event) {
        if (event.target === refs.backdrop && !event.target.closest('.rating__close-btn') && !event.target.closest('.rating__submit-btn')) closeModal();
      });      

      refs.closeButton.addEventListener('click', closeModal);

      refs.submitButton.addEventListener('click', handleSubmit);

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
      });

      openModal()
    }
  });
});
