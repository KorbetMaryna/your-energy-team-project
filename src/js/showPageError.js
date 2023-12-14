import { toggleLoader } from "./loader";

const notFoundImage = document.querySelector('.page-error-container');


document.addEventListener('DOMContentLoaded', function () {
    checkNetworkStatus();

    window.addEventListener('online', function () {
        handleNetworkChange(true);
    });

    window.addEventListener('offline', function () {
        handleNetworkChange(false);
    });

    window.addEventListener('load', function () {
        handlePageLoad();
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
    if (!showLoader) {
        if (online) {
            notFoundImage.style.display = 'none';
        } else {
            notFoundImage.style.display = 'block';
        }
    }
}

function showLoader() {
    toggleLoader(true);
    notFoundImage.style.display = 'none';
}

function closeLoader() {
    toggleLoader(false);
}


