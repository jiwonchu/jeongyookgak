$(document).ready();

window.onload = function () {

          const modal = $(".modal");
          const modalClose = $(".modal-close");
          const modalWrap = $(".modal-wrap");
          modal.click(function () {
            modal.fadeOut(500);
            $("body").css("overflow", "auto");
          });
          modalClose.click(function () {
            modal.fadeOut(500);
            $("body").css("overflow", "auto");
          });
          modalWrap.click(function (event) {
            event.stopPropagation();
          });

    new Swiper('.sw-cb', {
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

    let bestlistData = [{
            link: "#1",
            pic: 'porkbelly-fresh-list.png',
            title: '초신선 돼지 삼겹살 구이용',
            desc: '기준가 23,400원/600g',
            op: ''
        },
        {
            link: "#2",
            pic: 'chickef-cut-list.png',
            title: '초신선 닭볶음탕',
            desc: '기준가 6,700원/950g',
            op: ''
        },
        {
            link: "#3",
            pic: 'porkcutlet-sirloin-list.png',
            title: '초신선 등심 돈까스',
            desc: '기준가 11,800원/770g',
            op: ''
        },
        {
            link: "#4",
            pic: 'egg-fresh-list.png',
            title: '초신선 동물복지 무항생제 유정란',
            desc: '기준가 6,900원/12구',
            op: '<span class="best-list-tag"></span>'
        },
        {
            link: "#5",
            pic: 'milk-fresh-list.png',
            title: '초신선 무항생제 우유',
            desc: '기준가 23,400원/600g',
            op: '<span class="best-list-tag"></span>'
        },
        {
            link: "#6",
            pic: 'baby-hanuround-bmix-list.png',
            title: '초신선 무항생제 이유식용 한우 우둔 다짐육',
            desc: '기준가 15,300원/180g',
            op: '<span class="best-list-tag"></span>'
        },
    ];
    let bestlistDataDiv = $('.best-list-data');

    function dataIn(data) { 
        $(".best-list-data").append(`
        <li>
            <div>
                <a href="${data.link}" class="product">
                    <img src="images/${data.pic}" alt="">
                </a>
                <i></i>
                ${data.op}
            </div>
                <a href="#">
                <p>${data.title}<br>
                    <span>${data.desc}</span></p>
                </a>
        </li>
        `)
    }

    // bestlistData.forEach(data => dataIn(data));

    // bestlistData.forEach(function(data){
    //     dataIn(data)
    // });
    
    for(let i=0; i < bestlistData.length; i++){
        dataIn(bestlistData[i]);
    }
};