$(document).ready();
window.onload = function () {
    new Swiper('.sw-cb', {
        loop: true,
        speed: 500,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".sw-cb-next",
            prevEl: ".sw-cb-prev",

        },
    });
    let menuBar = $('.menubar');
    let all_Menu = $('.all-menu');
    let Close = $('.menubar-close');
    all_Menu.click(function () {
        menuBar.addClass('open')
    });
    Close.click(function () {
        menuBar.removeClass('open')
    });
    
    let top_Close = $('.top-close');
    let top = $('.top');
    
    top_Close.click(function () {
        top.addClass('top-none')
    });
    
    $(window).scroll(function(){
    let Header = $('.header');
    let temp = $(window).scrollTop();

    if (temp > 0) {
        Header.addClass('header-fix')
    };
    if (temp == 0) {
        Header.removeClass('header-fix')
    };
});

};


