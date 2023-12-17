const scrollUpButton = document.getElementById('scroll-up');

scrollUpButton.addEventListener('click', scrollToTop);

scrollUpButton.style.display = "none";

window.onscroll = function () {
    handlerScrollUp();
};

function handlerScrollUp() {
    const scrollThreshold = getScrollThreshold();
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}

function getScrollThreshold() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 375) {
        return 300;
    } else if (screenWidth < 768) {
        return 500;
    } else if (screenWidth < 1440) {
        return 800;
    } else {
        return 1000;
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





