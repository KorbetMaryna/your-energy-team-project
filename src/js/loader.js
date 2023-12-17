export function toggleLoader(showLoader) {
    const loaderContainer = document.querySelector('.loader-backdrop');
    const loader = document.querySelector('.loader-container');

    if (showLoader) {
        loaderContainer.style.display = "block";
        loader.classList.remove('hidden');
        document.body.style.overflow = "hidden";
    } 
        loader.classList.add('hidden');
        loaderContainer.style.display = "none";
        document.body.style.overflow = ""; 
}



