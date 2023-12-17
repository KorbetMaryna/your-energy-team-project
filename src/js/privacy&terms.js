const privacyTerms = document.querySelector('.footer-information-list');

const closeBtn = document.querySelector('.info-close-btn-id');
const infoBackdrop = document.querySelector('.info-backdrop-id');
const infoModal = document.querySelector('.info-modal');

const termsCloseBtn = document.querySelector('.terms-close-btn-id');
const termsBackdrop = document.querySelector('.terms-backdrop-id');
const termsModal = document.querySelector('.terms-modal');

privacyTerms.addEventListener('click', privacyTermsHandler);
termsCloseBtn.addEventListener('click', closeTermsModal);

function privacyTermsHandler(event) {
  const pressedBtn = event.target.classList.value;

  switch (pressedBtn) {
    case 'footer-privacy-policy':
      openInfoModal();
      closeBtn.addEventListener('click', closeInfoModal);
      break;
    case 'footer-service-terms':
      openTermsModal();
      termsCloseBtn.addEventListener('click', closeTermsModal);
      break;
  }
}

function openInfoModal() {
  infoBackdrop.style.opacity = '1';
  infoBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
  infoBackdrop.style.opacity = '0';
  infoBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  closeBtn.removeEventListener('click', closeInfoModal);
}

function openTermsModal() {
  termsBackdrop.style.opacity = '1';
  termsBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeTermsModal() {
  termsBackdrop.style.opacity = '0';
  termsBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  termsCloseBtn.removeEventListener('click', closeTermsModal);
}
