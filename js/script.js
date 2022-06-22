$(document).ready();
window.onload = function () {
    new Swiper('.sw-cb', {
        loop: true,
        speed:500,
        pagination:{
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".sw-cb-next",
            prevEl: ".sw-cb-prev",
            
        },



    })
};