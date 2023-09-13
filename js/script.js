var swiper = new Swiper('.about__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

});

var swiper = new Swiper('.project-all-slider', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
});

var swiper = new Swiper('.project-image-slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.slider-projects__pagination',
        clickable: true,
        dynamicBullets: true,
    },
    freeMode: true,
    speed: 800,
    effect: 'fade',
    nested: true,
    fadeEffect: {
        crossFade: true
    },
});