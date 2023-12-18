const loaderBackdrop = document.querySelector('.loader-backdrop');

export function toggleLoader(showLoader) {
  if (showLoader && !loaderBackdrop.classList.contains('loader-backdrop-open')) {
    document.body.style.overflow = 'hidden';
    loaderBackdrop.classList.add('loader-backdrop-open');
  } else if (!showLoader) {
    setTimeout(() => {
      document.body.style.overflow = '';
      loaderBackdrop.classList.remove('loader-backdrop-open');
    }, 1000); 
  }
}


