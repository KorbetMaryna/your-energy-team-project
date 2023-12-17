function mobileMenuOpen() {
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('.js-menu-container');

  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleMediaChange = (e) => {
    if (e.matches) {
      mobileMenu.classList.remove('is-open');
    }
  };

  mediaQuery.addEventListener('change', handleMediaChange);
}

mobileMenuOpen();
