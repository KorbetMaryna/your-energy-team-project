document.addEventListener('DOMContentLoaded', function () {

  const currentPage = window.location.pathname.split('/').pop();

  const navLinks = document.querySelectorAll('.header-nav-list-item a');

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (
      currentPage === linkPage ||
      (currentPage === '' && linkPage === 'index.html')
    ) {
      link.classList.add('header-nav-current');
    } else {
      link.classList.remove('header-nav-current');
    }
  });
});
