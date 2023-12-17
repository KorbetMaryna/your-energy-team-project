const loaderBackdrop = document.querySelector('.loader-backdrop');

const loaderElements = {
  filters: document.getElementById('loader-filters'),
  exercises: document.querySelector('.js-button'),
};

const loaderStates = {
  filters: false,
  exercises: false,
};

loaderBackdrop.style.display = "none";

export function toggleLoader(type, show) {
  const loader = loaderElements[type];

  if (show && !loaderStates[type] && loader) {
    loaderStates[type] = true;
    loader.style.display = 'block';
    loaderBackdrop.style.display = "block";
    console.log(`active`);
  } else {
    loaderStates[type] = false;
    if (loader) {
      loader.style.display = 'none';
      loaderBackdrop.style.display = "none";
      console.log(`not active`);
    }
  }
};

