function mobileMenuOpen() {
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuLinks = document.querySelectorAll('.js-mobile-menu-item');

  const currentPagePath = window.location.pathname;

  mobileMenuLinks.forEach(el => {
    const href = el.getAttribute('href');

    if (!currentPagePath.includes('.html') && href.includes('index.html')) {
      el.classList.add('active-mobile-menu-item');
      return;
    }

    if (currentPagePath.includes(el.getAttribute('href').slice(2))) {
      el.classList.add('active-mobile-menu-item');
    }
  });

  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleMediaChange = e => {
    if (e.matches) {
      mobileMenu.classList.remove('is-open');
    }
  };

  mediaQuery.addEventListener('change', handleMediaChange);
}

mobileMenuOpen();
