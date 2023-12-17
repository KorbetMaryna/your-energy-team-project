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
    const isPageErrorContainer = document.querySelector('.page-error-container');

    if (!online) {
        if (!isPageErrorContainer) {
            const notFoundContainerPageError = document.createElement('div');
            notFoundContainerPageError.classList.add('page-error-container');

            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Sorry, the page did not load.';
            
            notFoundContainerPageError.appendChild(errorMessage);
            document.body.appendChild(notFoundContainerPageError);

            document.body.classList.toggle('page-error-open');
        }
    } else {
        if (isPageErrorContainer) {
            isPageErrorContainer.remove();
            document.body.classList.remove('page-error-open');
        }
    }
}
