window.onscroll = function () { handlerScrollUp() }; 

function handlerScrollUp() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById ("scroll-up").style.display = "block";
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

function isScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




