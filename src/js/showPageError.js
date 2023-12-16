import { toggleLoader } from "./loader";

document.addEventListener('DOMContentLoaded', function () {
    checkNetworkStatus();

    window.addEventListener('online', function () {
        handleNetworkChange(true);
    });

    window.addEventListener('offline', function () {
        handleNetworkChange(false);
    });
});

function checkNetworkStatus() {
    if (navigator.onLine) {
        handleNetworkChange(true);
    } else {
        handleNetworkChange(false);
    }
}

function handleNetworkChange(online) {
    const isLoaderVisible = toggleLoader(true);
    const isPageError = document.querySelector('.page-error-container');

    if (!online || isLoaderVisible) {
        if (!isPageError) {
            const notFoundContainerPageError = document.createElement('div');
            notFoundContainerPageError.classList.add('page-error-container');

            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Sorry, the page did not load. Please check your internet connection.';
            
            notFoundContainerPageError.appendChild(errorMessage);
            document.body.appendChild(notFoundContainerPageError);
        }
    } else {
        if (isPageError) {
            isPageError.remove();
        }
    }
}
