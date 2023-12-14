export function toggleLoader(showLoader) {
    const loader = document.querySelector('.loader-container');
    if (showLoader) {
        loader.classList.remove('hidden');
    }
    loader.classList.add('hidden')
}
