//buttons ================================================================================================================================================================================================================================================================
$(document).ready(function() {
    $(".header__burger").click(function(event) {
        event.preventDefault();
        $(".header__burger").toggleClass("active");
        $(".header__top").toggleClass("active");
        $("body").toggleClass("lock");    
    })
});
//swipper slider ================================================================================================================================================================================================================================================================
new Swiper (".introduction__container", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed:600,
        effect:'fade',
});
//popup ================================================================================================================================================================================================================================================================
$(document).ready(function() {
    $(".player__button").click(function(event) {
        $("body").toggleClass("lock");    
    })
    $(".popup__close, .popup__area").click(function(event) {
        $("body").removeClass("lock");    
    })
});
//swipper slider-2 ================================================================================================================================================================================================================================================================
new Swiper (".clothing__container", {
    spaceBetween:225,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed:700,
    centeredSlides: true,
});
//spoilers ================================================================================================================================================================================================================================================================
$(document).ready(function() {
    $(".standart__block-title").click(function(event) {
        if($(".standart_block").hasClass("one")){
            $('.standart__block-title').not($(this)).removeClass("active");
            $('.standart__spoiler').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300); 
    });
});
//swipper slider-3 ================================================================================================================================================================================================================================================================
new Swiper (".cross__container", {
    speed:500,
    spaceBetween:74,

    slidesPerView: 5,
    slidesPerGroup:1,
    navigation: {
        nextEl: '.cross-button-next',
        prevEl: '.cross-button-prev',
    },
    initialSlide: 2,
    centeredSlides: true,
    keyboard: {
        enable: true,
        pageUpDown: true,
    },
    loop: true,
    breakpoints: {
        300:{
            slidesPerView:3,
            spaceBetween:20,
        },
        560:{
            spaceBetween:46,
            slidesPerView:3,
        },
        860:{
            spaceBetween:46,
        },
        1160:{
        },
        1170:{
            spaceBetween:74,
        }
    }
});