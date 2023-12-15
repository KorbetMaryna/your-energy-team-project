const section = document.querySelector('.quote-and-exercises-desktop-section');
const quoteSection = document.querySelector('.quote-section');
const exercisesSection = document.querySelector('.exercises-section');

window.innerWidth >= 1440
  ? section.classList.remove('visually-hidden')
  : section.classList.add('visually-hidden');
window.innerWidth >= 1440
  ? quoteSection.classList.add('visually-hidden')
  : quoteSection.classList.remove('visually-hidden');
window.innerWidth >= 1440
  ? exercisesSection.classList.add('visually-hidden')
  : exercisesSection.classList.remove('visually-hidden');
